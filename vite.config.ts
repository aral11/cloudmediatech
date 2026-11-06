import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import path from "path";
import { createServer } from "./server";
import { PRERENDERED_ROUTES, ROUTE_META } from "./client/lib/route-meta";
import { SITE_URL } from "./client/lib/site";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin(), prerenderRouteMetaPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function replaceOrThrow(html: string, pattern: RegExp, replacement: string, label: string) {
  if (!pattern.test(html)) throw new Error(`prerender: missing ${label} in index.html`);
  return html.replace(pattern, replacement);
}

function setMetaContent(html: string, attr: "name" | "property", key: string, content: string) {
  const pattern = new RegExp(`<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*/?>`);
  return replaceOrThrow(html, pattern, `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`, `meta ${key}`);
}

// Emits a static index.html per public route so crawlers and link previews receive route-specific metadata
function prerenderRouteMetaPlugin(): Plugin {
  return {
    name: "prerender-route-meta",
    apply: "build",
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist/spa");
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");

      for (const route of PRERENDERED_ROUTES) {
        const { title, description } = ROUTE_META[route];
        const url = `${SITE_URL}${route}`;

        let html = replaceOrThrow(
          template,
          /<title>[\s\S]*?<\/title>/,
          `<title>${escapeHtml(title)}</title>`,
          "title",
        );
        html = setMetaContent(html, "name", "description", description);
        html = setMetaContent(html, "property", "og:title", title);
        html = setMetaContent(html, "property", "og:description", description);
        html = setMetaContent(html, "property", "og:url", url);
        html = setMetaContent(html, "name", "twitter:title", title);
        html = setMetaContent(html, "name", "twitter:description", description);
        html = replaceOrThrow(
          html,
          /<link rel="canonical"[^>]*>/,
          `<link rel="canonical" href="${url}" />`,
          "canonical link",
        );

        const routeDir = path.join(outDir, route.slice(1));
        fs.mkdirSync(routeDir, { recursive: true });
        fs.writeFileSync(path.join(routeDir, "index.html"), html);
      }
    },
  };
}

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    configureServer(server) {
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}
