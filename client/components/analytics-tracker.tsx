import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { loadAnalytics, trackPageView } from "@/lib/analytics";

export function AnalyticsTracker() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    loadAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname + search);
  }, [pathname, search]);

  return null;
}
