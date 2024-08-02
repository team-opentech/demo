import { component$, createContextId, Signal, useContextProvider, useSignal, useStore, useTask$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { useQwikSpeak } from "qwik-speak";
import { config } from "./speak-config";
import { translationFn } from "./speak-functions";
import { PaginationProvider } from "~/context";
import "./global.css";

export interface HeaderState {
 headerIndex: number;
}

// export const HeaderContext = createContextId<Signal<number>>('header-context');
export interface HeaderState {
    isMenuOpen: boolean,
    isScrolled: boolean,
    headerIndex: number,
    previousHeaderIndex: number,
}

export const HeaderContext =
  createContextId<HeaderState>("header-context");

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */
  // const headerState = useSignal(0);
  const headerState = useStore({headerIndex: 0, isMenuOpen: false, previousHeaderIndex: 0});
  useQwikSpeak({ config, translationFn });

  useTask$(({ track }) => {
    track(() => headerState.headerIndex);
    
    console.log("HeaderIndex value changed: ", headerState.headerIndex);
  });

  useContextProvider(HeaderContext, headerState);
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <body lang="en">
        <PaginationProvider>
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
        </PaginationProvider>
      </body>
    </QwikCityProvider>
  );
});
