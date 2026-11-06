import { Briefcase, CheckCircle2, Cpu, LineChart, Mail, ShieldCheck, Target, TrendingUp, Users } from "lucide-react";

const services = [
  { icon: Briefcase, title: "Business Strategy", text: "Clear plans that connect goals, budgets and measurable results." },
  { icon: Cpu, title: "Digital Transformation", text: "Modern systems that make teams faster and operations simpler." },
  { icon: TrendingUp, title: "Growth Marketing", text: "Campaigns and analytics focused on qualified enquiries." },
];

const achievements = [
  { value: "150+", label: "Projects delivered" },
  { value: "12", label: "Years of experience" },
  { value: "40+", label: "Enterprise clients" },
  { value: "24/7", label: "Dedicated support" },
];

const points = ["Clear strategy before execution", "Transparent progress reporting", "A dedicated account team"];

export function CorporateSite() {
  return (
    <div className="w-[1200px] bg-white text-slate-800">
      <header className="flex h-20 items-center justify-between bg-[#0b1f3a] px-16 text-white">
        <span className="text-xl font-bold tracking-wide">NORTHSTAR CONSULTING</span>
        <nav className="flex gap-9 text-sm text-white/80">
          <span>Services</span>
          <span>About</span>
          <span>Insights</span>
          <span>Careers</span>
          <span>Contact</span>
        </nav>
        <span className="rounded-md bg-[#38bdf8] px-5 py-2.5 text-sm font-semibold text-[#0b1f3a]">Book a Consultation</span>
      </header>

      <section className="grid grid-cols-[1.2fr_1fr] gap-16 bg-gradient-to-br from-[#0b1f3a] to-[#14365f] px-16 pb-24 pt-24 text-white">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#38bdf8]">Strategy &amp; technology</p>
          <h1 className="mt-6 text-6xl font-bold leading-tight">Strategy and technology for businesses ready to grow.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            We help organisations plan with clarity, execute with discipline and measure what matters.
          </p>
          <div className="mt-10 flex gap-4">
            <span className="rounded-md bg-[#38bdf8] px-8 py-4 font-semibold text-[#0b1f3a]">Book a Consultation</span>
            <span className="rounded-md border border-white/40 px-8 py-4 font-semibold">Explore Services</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 self-center">
          {achievements.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/15 bg-white/5 p-7">
              <p className="text-4xl font-bold text-[#38bdf8]">{item.value}</p>
              <p className="mt-2 text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-2 items-center gap-16 px-16 py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-[#0b5cad]">About the business</p>
          <h2 className="mt-4 text-4xl font-bold text-[#0b1f3a]">A partner that delivers lasting results.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Our team combines industry experience with practical tools, so every decision is backed by evidence.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-[#0b5cad]" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[Target, Users, LineChart, ShieldCheck].map((Icon, index) => (
            <div key={index} className="flex h-48 items-center justify-center rounded-2xl bg-[#eef4fb]">
              <Icon className="h-16 w-16 text-[#0b5cad]" aria-hidden="true" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-16 py-20">
        <h2 className="text-center text-4xl font-bold text-[#0b1f3a]">Our Services</h2>
        <div className="mt-12 grid grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0b1f3a]">
                <Icon className="h-7 w-7 text-[#38bdf8]" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-[#0b1f3a]">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-16 py-16">
        <div className="flex items-center justify-between rounded-3xl bg-[#0b1f3a] px-14 py-12 text-white">
          <div>
            <h2 className="text-4xl font-bold">Let&apos;s discuss your next milestone.</h2>
            <p className="mt-3 text-white/75">Schedule a consultation with our team.</p>
          </div>
          <span className="flex items-center gap-2 rounded-md bg-[#38bdf8] px-8 py-4 font-semibold text-[#0b1f3a]">
            <Mail className="h-5 w-5" aria-hidden="true" />
            Contact Our Team
          </span>
        </div>
      </section>
    </div>
  );
}
