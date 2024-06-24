import type { SpeakConfig } from "qwik-speak";
import { rewriteRoutes } from "./speak-routes";

export const config: SpeakConfig = {
  rewriteRoutes,
  defaultLocale: {
    lang: "es-US",
    currency: "USD",
    timeZone: "America/New_York",
  },
  supportedLocales: [
    { lang: "es-US", currency: "USD", timeZone: "America/New_York" },
    { lang: "en-US", currency: "USD", timeZone: "America/New_York" },
  ],
  assets: [
    "app", // Translations shared by the pages
    "home",
    "contact",
    "desktop_services",
    "services_services1",
    "services_services2",
    "services_services3",
    "services_services4",
    "services",
  ],
  // Translations with dynamic keys available in the whole app
  runtimeAssets: ["runtime"],
};
