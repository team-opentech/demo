import { component$ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import OpentechButton from "~/components/ot-button/ot-button";

// Contact form ubicada en el footer de todos los componentes

export default component$(() => {
  const t = inlineTranslate();
  const scheduleAsesory = t("home.scheduleAsesory@@Talk to Us");
  return (
    <div class="bg-ot-black py-10">
      <div
        id="contact-us-section"
        class="max-w-[530px] px-[15px] mx-auto lg:max-w-[1290px]"
      >
        <h2 class="text-ot-white font-bold text-xl mb-6 text-center">
          {t("home.advisory-title@@Custom Strategy for Your Tech Needs?")}
        </h2>
        {/* <p class="text-ot-white text-xl mb-6">
          {t(
            `home.advisory-paragraph@@We offer solutions that directly address your business needs, ensuring your digital growth is seamless and effective.`
          )}
        </p> */}
        <div class="w-fit mx-auto">
          <OpentechButton
            isGoogleAppointment={true}
            backgroundColor={"bg-ot-green"}
            textColor="text-ot-white"
            title={scheduleAsesory}
            classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
});
