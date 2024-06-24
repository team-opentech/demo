import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./navigator-footer.css?inline"; // Archivo .css correspondiente del componente
import ImgWhiteCircleIg from "../../assets/svg/white-circle-ig.svg?jsx";
import ImgWhiteCircleLinkedin from "../../assets/svg/white-circle-linkedin.svg?jsx";
//Footer dedicado al menu de navegación

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div class="text-ot-white ml-8 lg:mr-48">
      <div class="flex flex-row space-x-5 items-end justify-start mt-8">
        <ImgWhiteCircleIg class="h-7" />
        <ImgWhiteCircleLinkedin class="h-7" />
      </div>
    </div>
  );
});
