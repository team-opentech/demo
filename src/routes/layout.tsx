import {
  Slot,
  component$,
  useContext,
  useContextProvider,
  // useContext,
  useStore,
  useStylesScoped$,
  useTask$,
  // useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { RequestHandler, useLocation } from "@builder.io/qwik-city";
import { inlineTranslate, localizePath } from "qwik-speak";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import styles from "./layout.css?inline";
import { HeaderContext } from "~/root";
import header from "~/components/header/header";

export const onGet: RequestHandler = async ({
  locale,
  cacheControl,
  redirect,
}) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 30,
  });

  if (!locale()) {
    const getPath = localizePath();
    throw redirect(302, getPath("/", "es-US")); // Let the server know the language to use
  }
};

export default component$(() => {
  const headerState = useContext(HeaderContext);
  // console.log("Header state en layout: ", headerState);
  // const state = useStore({ headerIndex: headerState.headerIndex, isScrolled: headerState.isScrolled });
  const pathname = useLocation().url.pathname;
  useStylesScoped$(styles);
  // const { isToggled } = state;
  // const t = inlineTranslate();
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const navigationEntry = navigationEntries[0] as PerformanceNavigationTiming;
      if (navigationEntry.type === "reload") {
        window.scrollTo(0, 0);
      }
    }
    const layout = document.getElementById("layout");
    if (layout) layout.classList.remove("opacity-0");

    function handleScroll () {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== headerState.isScrolled) {
        headerState.isScrolled = isScrolled;
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  // useVisibleTask$(({ track }) => {
  //   track(() => headerState.isScrolled);
  //   track(() => headerState.isMenuOpen);

  //   if (headerState.isMenuOpen) {
  //     headerState.previousHeaderIndex = headerState.headerIndex;
  //     headerState.headerIndex = 1;
  //   } else {
  //     headerState.headerIndex = headerState.previousHeaderIndex;
  //   }

  //   if (headerState.isScrolled) {
  //     if (headerState.headerIndex === 0) {
  //       headerState.headerIndex = 2;
  //     } else if (headerState.headerIndex === 1 && !headerState.isMenuOpen) {
  //       headerState.headerIndex = 3;
  //     }
  //   } else {
  //     if (headerState.headerIndex === 2) {
  //       headerState.headerIndex = 0;
  //     } else if (headerState.headerIndex === 3) {
  //       headerState.headerIndex = 1;
  //     }
  //   }
  // });


  const isSinglePortfolioView =
    /^\/portfolio\/[^/]+\/?$/.test(pathname) || false;
  // const headerDetails = useStore({headerDetail:headerDetailsArray[headerState.value]});


  return (
    <main>
      <Header headerIndex={headerState.headerIndex}/>
      {/* <Header /> */}
      <div
        id="layout"
        class={
          isSinglePortfolioView
            ? "opacity-100"
            : "mt-[124px] opacity-0 lg:mt-[150px]"
        }
      >
        <Slot />
      </div>
      <Footer />
    </main>
  );
});
