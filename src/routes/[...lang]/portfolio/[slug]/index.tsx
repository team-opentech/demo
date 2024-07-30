import {
  component$,
  useContext,
  useStore,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import {
  BuilderContent,
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";
import { customComponents } from "~/components/builder-registry";
import { HeaderContext } from "~/context";

export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
export const BUILDER_MODEL = "portfolio";

export const useBuilderContent = routeLoader$(async ({ url }) => {
  const builderContent = await fetchOneEntry({
    model: BUILDER_MODEL,
    apiKey: BUILDER_PUBLIC_API_KEY,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname,
    },
  });

  return builderContent;
});

export default component$(() => {
  const content = useBuilderContent();
  const headerState = useContext(HeaderContext);

  useTask$(({ track }) => {
    track(() => content.value);

    const bgheader = content.value?.data?.bgheader?.toLowerCase();
    const logocolor = content.value?.data?.logocolor?.toLowerCase();
    const menuIconColor = content.value?.data?.menuIconColor?.toLowerCase();

    if (
      bgheader !== undefined &&
      logocolor !== undefined &&
      menuIconColor !== undefined
    ) {
      headerState.bgheader = bgheader;
      headerState.logocolor = logocolor;
      headerState.menuIconColor = menuIconColor;

      // Determine headerIndex based on bgheader, logocolor, and menuIconColor
      if (
        bgheader === "transparent" &&
        logocolor === "black" &&
        menuIconColor === "black"
      ) {
        headerState.headerIndex = 0;
      } else if (
        bgheader === "transparent" &&
        logocolor === "white" &&
        menuIconColor === "white"
      ) {
        headerState.headerIndex = 1;
      } else if (
        bgheader === "white" &&
        logocolor === "black" &&
        menuIconColor === "black"
      ) {
        headerState.headerIndex = 2;
      } else if (
        bgheader === "black" &&
        logocolor === "white" &&
        menuIconColor === "white"
      ) {
        headerState.headerIndex = 3;
      }
      console.log(
        "Valores actuales en header context: ",
        headerState.bgheader,
        headerState.logocolor,
        headerState.menuIconColor,
        headerState.headerIndex
      );
    } else {
      console.log(
        "Colores en el header definidos en el contenido",
        content.value
      );
    }
  });

  return (
    <Content
      model={BUILDER_MODEL}
      content={content.value}
      apiKey={BUILDER_PUBLIC_API_KEY}
      customComponents={customComponents}
    />
  );
});

// import { component$, useContext, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";
// import { routeLoader$ } from "@builder.io/qwik-city";
// import { BuilderContent, Content, fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-qwik";
// import { customComponents } from "~/components/gallery/gallery";
// import { HeaderContext } from "~/context";

// export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
// export const BUILDER_MODEL = "portfolio";

// export const useBuilderContent = routeLoader$(async ({ url, error }) => {
//   const builderContent = await fetchOneEntry({
//     model: BUILDER_MODEL,
//     apiKey: BUILDER_PUBLIC_API_KEY,
//     options: getBuilderSearchParams(url.searchParams),
//     userAttributes: {
//       urlPath: url.pathname,
//     },
//   });

//   return builderContent;
// });

// export default component$(() => {
//   const content = useBuilderContent();
//   const headerState = useContext(HeaderContext);

//   useTask$(({ track }) => {
//     // eslint-disable-next-line qwik/valid-lexical-scope
//     track(() => content.value);
//     // const colorheader = content.value?.data?.colorheader;
//     const bgheader = content.value?.data?.bgheader.toLowerCase();
//     const logocolor = content.value?.data?.logocolor.toLowerCase();
//     const menuIconColor = content.value?.data?.menuIconColor.toLowerCase();

//     if (bgheader !== undefined || logocolor !== undefined || menuIconColor !== undefined) {
//       // console.log("Colores in header defined in content", content.value?.data?.bgheader, content.value?.data?.logocolor, content.value?.data?.menuIconColor);
//       // HeaderState.colorheader = colorheader;
//       headerState.bgheader = bgheader;
//       headerState.logocolor = logocolor;
//       headerState.menuIconColor = menuIconColor;
//       headerState.loadedContent = true;
//     } else {
//       console.log("Colores in header defined in content", content.value);
//     }
//   });

//   return (
//     <Content
//       model={BUILDER_MODEL}
//       content={content.value}
//       apiKey={BUILDER_PUBLIC_API_KEY}
//       customComponents={customComponents}
//     />
//   );
// });
