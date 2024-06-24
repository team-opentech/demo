import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { useQwikSpeak } from "qwik-speak";
import { config } from "./speak-config";
import { translationFn } from "./speak-functions";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  
  useQwikSpeak({ config, translationFn });
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
        <noscript>
          <img
            height="1"
            width="1"
            style="display:none"
            src={`https://www.facebook.com/tr?id=${
              import.meta.env.PUBLIC_FACEBOOK_PIXEL
            }&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </QwikCityProvider>
  );
});
