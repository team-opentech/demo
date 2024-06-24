import { component$, useStore, $ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import OpentechButton from "~/components/ot-button/ot-button";
// import ImgSendButton from "/assets/svg/send-button.svg?jsx";
import { server$ } from "@builder.io/qwik-city";

// Contact form ubicada en el footer de todos los componentes

export default component$(() => {
  const states = useStore({
    email: "",
    isAnEmail: true,
    networkError: false,
    isSended: false,
  });

  const t = inlineTranslate();

  const sendForm = server$(async function ({ email }) {
    try {
      const endpoint = `${this.env.get("API_SENDPULSE")}/`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookId: 600080,
          emails: [
            {
              email: email,
            },
          ],
        }),
      };
      const res = await fetch(endpoint, options);
      return res.status;
    } catch (error) {
      return 500;
    }
  });

  const handleForm = $(async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(states.email)) {
      states.isAnEmail = false;
      return;
    }
    if (states.email) {
      const email = states.email;
      const res = await sendForm({
        email,
      });
      if (res === 200) {
        console.log("Email sent");
        states.isSended = true;
      } else {
        console.log("Error sending email");
      }
    }
  });

  return (
    <>
      <div class="mt-8 text-center space-y-5 mb-12 lg:mx-auto">
        <div class="max-w-[400px] w-full mx-auto">
          <p class="text-2xl font-bold tracking-tighter leading-8">
            ¡No te pierdas <br class="lg:hidden" /> las últimas novedades!
          </p>
          <p>
            Suscríbete a nuestro newsletter mensual y no te pierdas de las
            mejores noticias en tu e-mail
          </p>
        </div>
        <div class="relative pt-5 max-w-sm lg:max-w-xl mx-auto">
          <div class="w-full flex justify-start -top-1 absolute">
            <span class="text-start text-xs text-ot-orange">
              {!states.isAnEmail && t(`contact.form_emailerror@@Email Error`)}
            </span>
          </div>
          <div class="space-y-2 flex flex-col items-center justify-between lg:flex-row lg:space-y-2.5 lg:space-x-5">
            <div class="relative mt-2 w-full">
              <label
                class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                for="email"
              >
                {t(`contact.form_email@@Email`)}
              </label>
              <input
                onInput$={(e: any) => (states.email = e.target.value)}
                onFocus$={() => (states.isAnEmail = true)}
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                class={` ${
                  !states.isAnEmail ? "ring-ot-orange" : "ring-gray-400"
                } block w-full rounded-md text-ot-black border-0 ring-1 ring-inset  py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none`}
              />
            </div>
            <button
              onClick$={handleForm}
              class={`rounded-full py-2 text-ot-white px-14 bg-ot-black hover:scale-[1.1] active:scale-[1.1] transition-all duration-300`}
            >
              {states.isSended ? "Suscrito" : "Suscribirse"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
