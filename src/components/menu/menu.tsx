import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import styles from "./menu.css?inline"; // Archivo .css correspondiente del componente
import OpentechButton from "~/components/ot-button/ot-button";
import ImgBlackMenuDots from "../../assets/svg/black-menu-dots.svg?jsx";
import ImgOtIcon from "../../assets/svg/ot-icon.svg?jsx";
import { inlineTranslate } from "qwik-speak";

export default component$(() => {
  useStylesScoped$(styles);
  const t = inlineTranslate();
  const scheduleAsesory = t("home.scheduleAsesory@@Talk to Us");

  const state = useStore({ isToggled: true });

  return (
    <div class="flex flex-row justify-between mx-6 lg:mx-14 mt-6 mb-16 items-center">
      <div class="flex flex-row items-center">
        <div
          onClick$={() => {
            state.isToggled = !state.isToggled;
          }}
        >
          <ImgBlackMenuDots class="h-6" />
        </div>

        <OpentechButton
          classes={
            "ml-8 hidden lg:block py-2 px-7 hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
          }
          isGoogleAppointment={true}
          title={scheduleAsesory}
        />
      </div>
      <div>
        <a href="https://lccopen.tech/">
          <ImgOtIcon class="h-6" />
        </a>
      </div>
    </div>
  );
});
