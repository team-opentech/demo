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
import { HeaderContext, HeaderState } from "~/context";
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
  const state = useStore({ headerIndex: headerState.headerIndex, isScrolled: headerState.isScrolled });
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

  useTask$(({ track }) => {
    track(() => headerState.isScrolled);
    track(() => headerState.isMenuOpen);

    if (headerState.isMenuOpen) {
      headerState.previousHeaderIndex = headerState.headerIndex;
      headerState.headerIndex = 1;
    } else {
      headerState.headerIndex = headerState.previousHeaderIndex;
    }

    if (headerState.isScrolled) {
      if (headerState.headerIndex === 0) {
        headerState.headerIndex = 2;
      } else if (headerState.headerIndex === 1 && !headerState.isMenuOpen) {
        headerState.headerIndex = 3;
      }
    } else {
      if (headerState.headerIndex === 2) {
        headerState.headerIndex = 0;
      } else if (headerState.headerIndex === 3) {
        headerState.headerIndex = 1;
      }
    }
  });


  const headerDetailsArray = useStore([
    {
      bgheader: "bg-transparent",
      logocolor: "black",
      menuIconColor: "menuIconBlack",
      buttonBgColor: "black",
      buttonTextColor: "white",
    },
    {
      bgheader: "bg-transparent",
      logocolor: "white",
      menuIconColor: "menuIconWhite",
      buttonBgColor: "white",
      buttonTextColor: "black",
    },
    {
      bgheader: "bg-white",
      logocolor: "black",
      menuIconColor: "menuIconBlack",
      buttonBgColor: "black",
      buttonTextColor: "white",
    },
    {
      bgheader: "bg-black",
      logocolor: "white",
      menuIconColor: "menuIconWhite",
      buttonBgColor: "white",
      buttonTextColor: "black",
    },
  ]);

  // useTask$(({ track }) => {
  //   track(() => headerState.headerIndex);

  //   let headerIndex = headerState.headerIndex;

  //   if (headerState.isMenuOpen) {
  //     headerIndex = 1;
  //   } else {
  //     const { bgheader, logocolor, menuIconColor } = headerState;
  //     if (
  //       bgheader === "transparent" &&
  //       logocolor === "black" &&
  //       menuIconColor === "black"
  //     ) {
  //       headerIndex = 0;
  //     } else if (
  //       bgheader === "transparent" &&
  //       logocolor === "white" &&
  //       menuIconColor === "white"
  //     ) {
  //       headerIndex = 1;
  //     } else if (
  //       bgheader === "white" &&
  //       logocolor === "black" &&
  //       menuIconColor === "black"
  //     ) {
  //       headerIndex = 2;
  //     } else if (
  //       bgheader === "black" &&
  //       logocolor === "white" &&
  //       menuIconColor === "white"
  //     ) {
  //       headerIndex = 3;
  //     }
  //   }

  //   headerState.headerIndex = headerIndex;

  //   console.log("headerState headerIndex", headerState.headerIndex);
  // });



  const isSinglePortfolioView =
    /^\/portfolio\/[^/]+\/?$/.test(pathname) || false;
  const headerDetails = headerDetailsArray[state.headerIndex];

  return (
    <main>
      <Header {...headerDetails} />
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
