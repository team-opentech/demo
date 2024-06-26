import {
  component$,
  useStylesScoped$,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./header.css?inline";
import { useLocation } from "@builder.io/qwik-city";
import OpentechButton from "../ot-button/ot-button";
import { LanguageSelector } from "../language-selector/language-selector";
import OtIcon from "~/assets/svg/ot-icon.svg?jsx";
import OtWhiteIcon from "~/assets/svg/white-ot-icon.svg?jsx";
import { inlineTranslate, translatePath } from "qwik-speak";
import lottie from "lottie-web";
import menuIcon from "~/assets/animations/menu.json";
import menuIcon2 from "~/assets/animations/menu2.json";
// import ImgOtArrowPurple from "../../assets/svg/ot-arrow-purple.svg?jsx";
import { OtPurpleArrow } from "../icons/ot-purple-arrow";
import IGIcon from "../../assets/svg/white-circle-ig.svg?jsx";
import LinkedinIcon from "../../assets/svg/white-circle-linkedin.svg?jsx";

export default component$(() => {
  const t = inlineTranslate();
  useStylesScoped$(styles);
  const state = useStore({ isToggled: false });
  const location = useLocation();
  const pathname = location.url.pathname;
  const scheduleAsesory = t("home.scheduleAsesory@@Talk to Us");

  const getPath = translatePath();

  const [homePath, servicesPath, blogPath, portfolioPath, contactPath] =
    getPath(["/", "/services/", "/blog/", "/portfolio/", "/contact/"]);

  const menu = [
    {
      text: `${t("header.HomeText@@Home")}`,
      href: homePath,
    },
    {
      text: `${t("header.servicesText@@Services")}`,
      href: servicesPath,
    },
    {
      text: `${t("header.blogText@@Blog")}`,
      href: blogPath,
    },
    {
      text: `${t("header.portfolioText@@Portfolio")}`,
      href: portfolioPath,
    },
    {
      text: `${t("header.contactText@@Contact")}`,
      href: contactPath,
    },
  ];
// eslint-disable-next-line qwik/no-use-visible-task
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
    <section
      class={`fixed w-full top-0 left-0 z-50 bg-white h-[94px] lg:h-[120px]`}
    >
      <div class="fixed top-0 left-0 right-0 flex flex-row max-w-[1290px] mx-auto px-4 lg:px-12 w-full z-50 py-7 justify-between">
        <div class="flex flex-row items-center cursor-pointer">
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
          <div class="z-50">
            <OpentechButton
              title={scheduleAsesory}
              isGoogleAppointment={true}
              classes={
                "hidden lg:block py-2 px-4 hover:scale-[1.1] transition-all duration-300 z-50 active:scale-[1.1]"
              }
            />
          </div>

          <div class={`${pathname.includes("/blog/") && "hidden"} ml-[1rem]`}>
            <LanguageSelector openedMenu={state.isToggled} />
          </div>
        </div>
        <div class="flex flex-row items-center">
          <a href="https://lccopen.tech/" class="relative">
            <div
              class={`flex h-auto w-auto transition-opacity ease-in-out duration-[3s]`}
            >
              <OtIcon class="h-6 lg:h-10" />
            </div>
            <div
              class={`absolute top-0 left-0 right-0 flex h-auto w-auto transition-opacity ease-in-out duration-[3s] ${
                state.isToggled ? "visible opacity-1" : "opacity-0"
              }`}
            >
              <OtWhiteIcon class="h-6 lg:h-10" />
            </div>
          </a>
        </div>
      </div>
      {/* <div
        class={`fixed flex flex-row z-40 bg-black rounded-[50%] transition-all ease-in-out duration-[2.5s] ${
          state.isToggled
            ? "-left-[200vh] -top-[200vh] h-[500vh] w-[500vh]"
            : "-left-[100vh] -top-[100vh] h-0 w-0"
        }`}
      /> */}
      {/* <div
        class={`menu-animation ${
          state.isToggled ? "menu-animation-active" : ""
        }`}
      /> */}

      <div
        class={`fixed top-1/3 left-0 right-0 flex-row max-w-[1290px] mx-auto px-12 z-50 transition-all ease-in ${
          state.isToggled
            ? " opacity-1 visible duration-300 delay-[0.6s]"
            : " opacity-0 invisible duration-[0.6s]"
        }`}
      >
        <div class="lg:grid lg:grid-cols-2 lg:justify-between">
          <nav class="flex flex-col space-y-5 lg:space-y-10 ">
            {menu.map((menuItem, item) => {
              return (
                <a
                  key={item}
                  href={`${menuItem.href}`}
                  class={`flex flex-row items-center group `}
                >
                  {pathname === menuItem.href ? (
                    // <ImgOtArrowPurple class="h-6" />
                    <OtPurpleArrow />
                  ) : (
                    // <div class="w-6 -ml-1.5"/>
                    <div class="w-6 -ml-1.5" />
                  )}

                  <span
                    class={`text-3xl font-bold lg:text-5xl leading-10 ml-5 ${
                      pathname === menuItem.href
                        ? "text-ot-purple"
                        : "text-ot-white"
                    }`}
                  >
                    {menuItem.text}
                  </span>
                </a>
              );
            })}
          </nav>
          <div class="flex flex-row space-x-8 mt-[10%] lg:justify-end lg:items-end lg:mt-0">
            <a
              href="https://www.instagram.com/somosopentech/"
              target="_blank"
              class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
            >
              <IGIcon class="h-[32px]"></IGIcon>
            </a>
            <a
              href="https://www.linkedin.com/company/lcc-opentech/"
              target="_blank"
              class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
            >
              <LinkedinIcon class="h-[32px]"></LinkedinIcon>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
