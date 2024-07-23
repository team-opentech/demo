import { component$, useVisibleTask$ } from "@builder.io/qwik";

export default component$((îsMenuOpen) => {
useVisibleTask$(() => {
    const menuIconContainer = document.getElementById("menuIconContainer");
    const menuIconContainer2 = document.getElementById("menuIconContainer2");
    const menuIconAnimation = lottie.loadAnimation({
      container: menuIconContainer as Element,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: menuIcon,
    });
    const menuIconAnimation2 = lottie.loadAnimation({
      container: menuIconContainer2 as Element,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: menuIcon2,
    });
  });
  return (
    <div
    class="relative flex flex-col items-center lg:mr-8 "
    onClick$={() => {
      state.isToggled = !state.isToggled;
    }}
  >
    <div class="relative h-6 lg:h-10 w-6 lg:w-10 z-50">
      <div
        id="menuIconContainer"
        class={`absolute top-0 left-0 ${
          state.isToggled
            ? "opacity-0"
            : "opacity-100 transition-all duration-300 delay-[0.8s]"
        }`}
      />
      <div
        id="menuIconContainer2"
        class={`absolute top-0 left-0 ${
          state.isToggled
            ? "opacity-100"
            : "opacity-0 transition-all duration-300 delay-[0.9s]"
        }`}
      />
    </div>
    <p
      class={`text-xs lg:text-base font-medium z-50 transition-all ease-in select-none ${
        state.isToggled
          ? "text-white duration-300 delay-[1s]"
          : "text-black duration-[0.05s]"
      }`}
    >
      {t("header.menu@@Menu")}
    </p>
    <div
      class={`menu-animation ${
        state.isToggled ? "menu-animation-active" : ""
      }`}
    />
  </div>
  )
});