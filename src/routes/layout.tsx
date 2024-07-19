import {
  Slot,
  component$,
  // useContext,
  useStore,
  useStylesScoped$,
  // useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { RequestHandler, useLocation } from "@builder.io/qwik-city";
import { inlineTranslate, localizePath } from "qwik-speak";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import HeaderPortfolio from "~/components/header/header-portfolio-index";
import { PaginationProvider } from "~/context";
import styles from "./layout.css?inline";
// import { PortafolioContext } from "~/context";

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
  const pathname = useLocation().url.pathname;
  useStylesScoped$(styles);
  const state = useStore({ isToggled: false });
  const { isToggled } = state;
  const t = inlineTranslate();
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
  });
  // const portafolioState = useContext(PortafolioContext);
  //   const colorheader = portafolioState.colorheader;

  //   useTask$(({ track }) => {
  //     track(() => portafolioState.colorheader);
  //     console.log("Portafolio context updated:", portafolioState.colorheader);
  //   });
  const isSinglePortfolioView = /^\/portfolio\/[^/]+\/?$/.test(pathname);

  return (
    <PaginationProvider>
      <main>
        {isSinglePortfolioView ? <HeaderPortfolio /> : <Header />}
        {/* <Header /> */}
        <div id="layout" class={isSinglePortfolioView?"opacity-100":"mt-[124px] opacity-0 lg:mt-[150px]"}>
          <Slot />
        </div>
        <Footer />
      </main>
    </PaginationProvider>
  );
});
