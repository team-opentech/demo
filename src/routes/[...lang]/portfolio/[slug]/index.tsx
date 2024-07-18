import { component$, useContext, useStore, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { BuilderContent, Content, fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-qwik";
import { customComponents } from "~/components/gallery/gallery";
import { PortafolioContext } from "~/context";

export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
export const BUILDER_MODEL = "portfolio";

export const useBuilderContent = routeLoader$(async ({ url, error }) => {
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
  const portafolioState = useContext(PortafolioContext);

  const colorheader = content.value?.data?.colorheader;

  useTask$(({ track }) => {
    track(() => content.value);
    const colorheader = content.value?.data?.colorheader;
    if (colorheader !== undefined) {
      console.log("Setting colorheader to", colorheader); // Log para verificar el valor
      portafolioState.colorheader = colorheader;
    } else {
      console.log("colorheader not defined in content", content.value);
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
