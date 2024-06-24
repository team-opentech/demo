import {
  component$,
  useStylesScoped$,
  Slot,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import Footer from "~/components/footer/footer";
import Header from "~/components/header/header";
import { RequestHandler } from "@builder.io/qwik-city";
import styles from "./layout.css?inline";
import { inlineTranslate } from "qwik-speak";
import { PaginationProvider } from "~/context";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 30,
  });
};

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({ isToggled: false });
  const { isToggled } = state;
  const t = inlineTranslate();
// eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const navigationEntry =
        navigationEntries[0] as PerformanceNavigationTiming;
      if (navigationEntry.type === "reload") {
        window.scrollTo(0, 0);
      }
    }
    const layout = document.getElementById("layout");
    if (layout) layout.classList.remove("opacity-0");
  });

  return (
    <PaginationProvider>
      <main>
        <Header />
        <div id="layout" class="mt-[124px] lg:mt-[150px] opacity-0">
          <Slot />
        </div>
        <Footer />
      </main>
    </PaginationProvider>
  );
});
