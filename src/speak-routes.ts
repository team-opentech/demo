import type { RewriteRouteOption } from "qwik-speak";

/**
 * Translation paths
 */
export const rewriteRoutes: RewriteRouteOption[] = [
  // {
  //   prefix: 'es-US',
  //   paths: {
  //       'services': 'servicios',
  //       'blog': 'blog',
  //       'contact': 'contacto',
  //       'portfolio': 'portafolio',
  //       'case-studies': 'casos-de-estudio',
  //   }
  // },
  {
    prefix: "en-US",
    paths: {
      services: "services",
      blog: "blog",
      contact: "contact",
      portfolio: "portfolio",
      "case-studies": "case-studies",
    },
  },
];
