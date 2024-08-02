import {
  component$,
  useContext,
  useContextProvider,
  useSignal,
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
import { HeaderContext } from "~/root";

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

function selectHeaderIndex(props: string): number {
  switch (props) {
    case 'transparent_black_black':
      return 0;
    case 'transparent_white_white':
      return 1;
    case 'white_black_black':
      return 2;
    case 'black_white_white':
      return 3;
    default:
      return 0; // Valor por defecto
  }
}

export default component$(() => {
  const content = useBuilderContent();
  const headerContext = useContext(HeaderContext);

  useTask$(({ track }) => {
    track(() => content.value);
    const bgheader = content.value?.data?.bgheader?.toLowerCase();
    const logocolor = content.value?.data?.logocolor?.toLowerCase();
    const menuIconColor = content.value?.data?.menuIconColor?.toLowerCase();

    if (bgheader !== undefined && logocolor !== undefined && menuIconColor !== undefined) {
      headerContext.headerIndex = selectHeaderIndex(`${bgheader}_${logocolor}_${menuIconColor}`);
    }
    console.log("Signal new value in portfolio: ", headerContext.headerIndex)
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
