import { component$, useVisibleTask$ } from "@builder.io/qwik";
import lottie from "lottie-web";

interface LottieProps {
  id: string;
  animationData: any;
}

export default component$((props: LottieProps) => {
  // Animation data must be imported by parent and passed as prop
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    async ({ cleanup }) => {
      let lottieAnimation: any = null;
      // This is the container where the animation will be rendered
      const container = document.getElementById(props.id);
      // If we have a container and the animation data, we can render the animation
      if (container && props.animationData) {
        lottieAnimation = lottie.loadAnimation({
          container,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: props.animationData,
        });
      }
      // This is the cleanup function that will be called when the component is unmounted
      return cleanup(() => {
        if (lottieAnimation) {
          lottieAnimation.destroy();
        }
      });
    },
    { strategy: "document-ready" },
  );
  return <div id={props.id} />;
});
