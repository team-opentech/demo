import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface TypewriteProps {
  textArray: string[];
  class?: string;
}

export default component$((props: TypewriteProps) => {
  const text = useSignal(props.textArray[0]);
  const index = useSignal(0);
  const animationCount = useSignal(0);
  const referencedElement = useSignal<HTMLElement>();
// eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    () => {
      if (referencedElement.value) {
        referencedElement.value.classList.add("animate-typing");
        referencedElement.value.classList.remove("invisible");
        referencedElement.value.addEventListener(
          "animationiteration",
          (event) => {
            if (event.animationName === "typing") {
              animationCount.value++;
              if (animationCount.value % 2 === 0) {
                index.value = (index.value + 1) % props.textArray.length;
                text.value = props.textArray[index.value];
              }
            }
          },
        );
      }
    },
    { strategy: "document-ready" },
  );

  return (
    <span
      ref={referencedElement}
      class={`invisible overflow-hidden whitespace-nowrap border-r-[1px] border-r-black inline-block text-ot-green ${props.class}`}
    >
      {text.value}
      <span class="invisible">...</span>
    </span>
  );
});
