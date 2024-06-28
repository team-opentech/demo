import {
  $,
  component$,
  useStore,
  useStylesScoped$
} from "@builder.io/qwik";
import { DocumentHead, server$, useNavigate } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import TripleMarquee from "~/components/marquee/triple-marquee";
import styles from "./contacto.css?inline";

//Vista de Contacto

export default component$(() => {
  useStylesScoped$(styles);
  const t = inlineTranslate();
  const formData = useStore({
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    service: "",
    budget: "",
    location: "",
    additionalInfo: "",
    message: "",
    isAnEmail: true,
  });
  const formMessages = useStore({
    missingData: false,
    networkError: false,
    success: false,
  });
  const {
    name,
    email,
    phoneNumber,
    company,
    service,
    budget,
    location,
    additionalInfo,
    message,
  } = formData;
  const nav = useNavigate();

  const sendForm = server$(async function ({
    name,
    email,
    phoneNumber,
    company,
    service,
    budget,
    location,
    additionalInfo,
    message,
  }) {
    try {
      const endpoint = `${this.env.get(
        "API_URL"
      )}/wp-json/gf/v2/forms/${this.env.get("API_CONTACT")}/submissions`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.env.get("API_CONTACT_CK")}`,
        },
        body: JSON.stringify({
          input_1: name,
          input_2: email,
          input_3: phoneNumber,
          input_4: company,
          input_5: service,
          input_6: budget,
          input_7: location,
          input_8: additionalInfo,
          input_9: message,
        }),
      };
      const res = await fetch(endpoint, options);
      return res.status;
    } catch (error) {
      return 500;
    }
  });

  const sandleForm = $(async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formData.isAnEmail = false;
      return;
    }
    if (
      name &&
      email &&
      phoneNumber &&
      company &&
      service &&
      budget &&
      location
    ) {
      const res = await sendForm({
        name,
        email,
        phoneNumber,
        company,
        service,
        budget,
        location,
        additionalInfo,
        message,
      });
      if (res === 200) {
        nav("/thank-you");
      } else {
        formMessages.networkError = true;
      }
    } else {
      formMessages.missingData = true;
    }
  });

  return (
    <div class="lg:bg-ot-black lg:pt-8 mt-[-30px] lg:px-16">
      <div class="lg:flex lg:flex-col lg:bg-ot-black max-w-[1150px] mx-auto">
        <div
          id="banner"
          class="bg-ot-black pt-[30px] lg:pt-0 text-ot-white lg:w-3/4"
        >
          <div class="space-y-8 ml-8 lg:ml-0 mr-6">
            <h1
              id="banner-title"
              class="font-bold text-2xl lg:text-4xl lg:mb-8 tracking-tighter lg:mt-8"
            >
              {t(`contact.title1@@Begin Your`)}{" "}
              {t(`contact.title2@@Digital Journey Today`)} <br />{" "}
              {t(`contact.title3@@No Need To Delay`)}
            </h1>
            <p
              id="banner-text"
              class="text-sm md:text-base lg:text-xl lg:mr-10"
            >
              {t(
                `contact.paragraph1@@Connect with us to schedule your latest consultation`
              )}{" "}
              {t(
                `contact.paragraph2@@and always stay informed about Opentech's advancements.`
              )}
            </p>
          </div>
          <div class="pt-12 xl:pt-20 pb-7">
            {/* <p class="font-bold text-md mb-6 lg:text-lg ml-8 mr-6">
              Confian en nosotros
            </p>
            <div class="grid grid-cols-3 space-x-4 lg:space-y-16 space-y-4 mx-4 pb-10 items-center">
              <ImgAmazon alt="" class="h-5 lg:h-8 xl:h-10 mt-4 lg:mt-20 ml-4" />
              <ImgCocaCola alt="" class="h-5 lg:h-8 xl:h-10" />
              <ImgKia alt="" class="h-4 lg:h-7 xl:h-8" />
              <ImgFedex alt="" class="h-6 lg:h-9 xl:h-11" />
              <ImgIbm alt="" class="h-5 lg:h-8 xl:h-10" />
              <ImgDisney alt="" class="h-7 lg:h-10 xl:h-16" />
            </div> */}
          </div>
        </div>
        <div
          id="banner"
          class="mx-6 py-10 text-center lg:pt-8 lg:w-full lg:pb-0 lg:px-10 lg:ml-0 lg:mr-0 max-w-[1100px] lg:bg-ot-white lg:rounded-xl self-center"
        >
          <div id="contact-us-section" class="text-center lg:flex lg:flex-col ">
            <div
              id="banner-title"
              class="self-center text-left lg:w-full lg:hidden"
            >
              <p class="text-ot-black font-extrabold text-center text-xl mb-4">
                {t(`contact.form_content@@Let's initiate your strategy now!`)}
              </p>
            </div>
            <div id="banner-text" class="mt-8 lg:w-full lg:px-4 self-center ">
              <div class="lg:text-left hidden lg:block lg:w-full self-center lg:pt-0">
                <p class="text-ot-black font-extrabold text-2xl text-center xl:text-3xl mb-10 xl:mb-14 tracking-tighter ">
                  {t(`contact.form_content1@@Let's initiate your strategy`)}{" "}
                  <br /> {t(`contact.form_content2@@now!`)}
                </p>
              </div>
              <div class="relative pt-6 lg:mt-0">
                <div class="w-full flex justify-start -top-1 absolute">
                  <span class="text-start text-xs text-ot-orange">
                    {!formData.isAnEmail &&
                      t(`contact.form_emailerror@@Email Error`)}
                  </span>
                </div>
                <div class="grid grid-cols-1 gap-y-3 lg:gap-y-5 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-2">
                  <div class="relative mt-2">
                    <label
                      class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                      for="first-name"
                    >
                      {t(`contact.form_name@@Name`)}
                    </label>
                    <input
                      value={name}
                      onInput$={(ev) =>
                        (formData.name = (ev.target as HTMLInputElement).value)
                      }
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                    />
                  </div>
                  <div class="">
                    <div class="relative mt-2">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="email"
                      >
                        {t(`contact.form_email@@Email`)}
                      </label>
                      <input
                        value={email}
                        onInput$={(ev) =>
                          (formData.email = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        onFocus$={() => (formData.isAnEmail = true)}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        class={` ${
                          !formData.isAnEmail
                            ? "ring-ot-orange"
                            : "ring-gray-400"
                        } block w-full rounded-md text-ot-black border-0 ring-1 ring-inset  py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none`}
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="phone-number"
                      >
                        {t(`contact.form_phone@@Phone`)}
                      </label>
                      <input
                        value={phoneNumber}
                        onInput$={(ev) =>
                          (formData.phoneNumber = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        type="text"
                        name="phone-number"
                        id="phone-number"
                        autoComplete="tel"
                        class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div class="col-span-1">
                    <div class="relative mt-2">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="company"
                      >
                        {t(`contact.form_company@@Company`)}
                      </label>
                      <input
                        value={company}
                        onInput$={(ev) =>
                          (formData.company = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="service"
                      >
                        {t(`contact.form_service@@Service`)}
                      </label>
                      <input
                        value={service}
                        onInput$={(ev) =>
                          (formData.service = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        type="text"
                        name="service"
                        id="service"
                        class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="ammount"
                      >
                        {t(`contact.form_budget@@Budget`)}
                      </label>
                      <input
                        value={budget}
                        onInput$={(ev) =>
                          (formData.budget = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        type="text"
                        name="ammount"
                        id="ammount"
                        class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="location"
                      >
                        {t(`contact.form_location@@Location`)}
                      </label>
                      <input
                        value={location}
                        onInput$={(ev) =>
                          (formData.location = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        type="text"
                        name="location"
                        id="location"
                        class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div class="">
                    <div class="relative mt-2 rounded-md shadow-sm">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="adicional"
                      >
                        {t(`contact.form_additional@@Additional`)}
                      </label>
                      <input
                        value={additionalInfo}
                        onInput$={(ev) =>
                          (formData.additionalInfo = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        type="text"
                        name="adicional"
                        id="adicional"
                        class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                      />
                    </div>
                  </div>
                  <div class="sm:col-span-2 lg:col-span-2">
                    <div class="relative mt-2">
                      <label
                        class="font-beVietnamPro absolute -top-2.5 left-2 inline-block bg-white px-1 text-sm font-medium text-gray-900"
                        for="message"
                      >
                        {t(`contact.form_message@@Message`)}
                      </label>
                      <textarea
                        value={message}
                        onInput$={(ev) =>
                          (formData.message = (
                            ev.target as HTMLInputElement
                          ).value)
                        }
                        id="message"
                        name="message"
                        rows={4}
                        class="block w-full rounded-md text-ot-black border-0 ring-1 ring-inset ring-gray-400 py-3 px-6 shadow-sm focus:border-ot-white focus:ring-2 focus:ring-inset focus:ring-ot-purple focus-visible:outline-none"
                      />
                    </div>
                    <div class="mt-4 flex items-center">
                      <input
                        id="message-box"
                        name="budget"
                        value="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tincindunt ut"
                        type="radio"
                        class="ml-3 h-6 w-6 border-gray-300 text-ot-purple focus:ring-ot-purple lg:h-14 accent-ot-purple"
                      />
                      <label for="message-box" class="ml-3 text-left">
                        <span class="block text-3xs lg:text-sm text-[#4d4d4d]">
                          {t(
                            `contact.promtion_emails@@I agree to receive promotional emails.`
                          )}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="mt-6 lg:mt-0 sm:col-span-2 lg:col-span-1 lg:text-end lg:pb-8">
                  <button
                    disabled={
                      !name ||
                      !email ||
                      !phoneNumber ||
                      !company ||
                      !service ||
                      !budget ||
                      !location
                    }
                    class={`disabled:hover:cursor-default disabled:hover:scale-100 disabled:bg-ot-gray hover:cursor-pointer bg-ot-green rounded-full py-2 px-14 text-ot-white hover:scale-[1.1] transition-all duration-300 `}
                    onClick$={sandleForm}
                  >
                    Enviar
                  </button>
                  {formMessages.networkError && (
                    <div class="flex justify-end">
                      <p class="w-[148px] text-center mt-2 text-red-600">
                        Error sending
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="left-img" class="lg:-mb-14">
        <TripleMarquee />
      </div>
    </div>
  );
});

export const head: DocumentHead = ({resolveValue, params}) => {
  const t = inlineTranslate();
  const title = t("contact.metaTitle@@Contacto Opentech- Comencemos Tu Proyecto");
  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: t("contact.metaDescription@@¿Listo para transformar tu presencia digital? Contacta a Opentech hoy para soluciones de desarrollo web ajustadas a tus necesidades.")
      },
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:image",
        content: `https://${import.meta.env.PUBLIC_DOMAIN}/OT-OG.jpg`
      }
    ],
    links: [
      {
        rel: "canonical",
        href: "https://lccopen.tech",
      },
    ],
  };
};