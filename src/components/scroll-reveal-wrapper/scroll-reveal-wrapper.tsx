import { component$, useVisibleTask$, Slot, useSignal } from "@builder.io/qwik";
import ScrollReveal from "scrollreveal";

interface Props {
  options: scrollReveal.ScrollRevealObjectOptions;
}

export default component$((props: Props) => {
  const reference = useSignal<HTMLElement>();

  // useVisibleTask$(
  //   () => {
  //     if (reference.value) {
  //       ScrollReveal().reveal(reference.value, props.options);
  //     }
  //   },
  //   { strategy: "document-ready" }
  // );
  return (
    <div ref={reference}>
      <Slot />
    </div>
  );
});
