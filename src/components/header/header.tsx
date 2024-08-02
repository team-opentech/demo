import {
  component$,
  useStylesScoped$,
  useStore,
  useVisibleTask$,
  useContext,
  useTask$,
  useSignal,
  useContextProvider,
} from "@builder.io/qwik";
import styles from "./header.css?inline";
import { useLocation } from "@builder.io/qwik-city";
import OpentechButton from "../ot-button/ot-button";
import { LanguageSelector } from "../language-selector/language-selector";
import OtIcon from "~/assets/svg/ot-icon.svg?jsx";
import OtWhiteIcon from "~/assets/svg/white-ot-icon.svg?jsx";
import { inlineTranslate } from "qwik-speak";
import { HeaderContext } from "~/root";
import Menu from "~/components/menu/menu";

export default component$(({headerIndex}:any) => {
  const headerState = useContext(HeaderContext);
  console.log("headerState value in header: ", headerState.headerIndex)
  const state = useSignal(headerState.headerIndex);
  const t = inlineTranslate();
  useStylesScoped$(styles);
  const headerDetailsArray = [
    {
      bgheader: "bg-transparent",
      logocolor: "black",
      menuIconColor: "menuIconBlack",
      buttonBgColor: "black",
      buttonTextColor: "white",
    },
    {
      bgheader: "bg-transparent",
      logocolor: "white",
      menuIconColor: "menuIconWhite",
      buttonBgColor: "white",
      buttonTextColor: "black",
    },
    {
      bgheader: "bg-white",
      logocolor: "black",
      menuIconColor: "menuIconBlack",
      buttonBgColor: "black",
      buttonTextColor: "white",
    },
    {
      bgheader: "bg-black",
      logocolor: "white",
      menuIconColor: "menuIconWhite",
      buttonBgColor: "white",
      buttonTextColor: "black",
    },
  ];

  const location = useLocation();
  const pathname = location.url.pathname;
  const scheduleAsesory = t("home.scheduleAsesory@@Talk to Us");

  useVisibleTask$(({ track }) => {
    track(() => headerState.headerIndex);
    track(() => headerIndex)
    state.value = headerState.headerIndex;
    console.log("HeaderIndex value changed: ", headerState.headerIndex);
  });
  // const state = useStore({bgheader: headerDetailsArray[headerState.value].bgheader, logocolor: headerDetailsArray[headerState.value].logocolor, menuIconColor: headerDetailsArray[headerState.value].menuIconColor, buttonBgColor: headerDetailsArray[headerState.value].buttonBgColor, buttonTextColor: headerDetailsArray[headerState.value].buttonTextColor})  
  return (
    <section
      class={`fixed w-full top-0 left-0 z-50 ${headerDetailsArray[state.value].bgheader} h-[94px] lg:h-[120px]`}
    >
      <div class="fixed top-0 left-0 right-0 flex flex-row max-w-[1290px] mx-auto px-4 lg:px-12 w-full z-50 py-7 justify-between">
        <div class="flex flex-row items-center cursor-pointer">
          {/* Menu View component */}
          <Menu menuIconColor={headerDetailsArray[state.value].menuIconColor}/>
          <div class="z-50">
            <OpentechButton
              title={scheduleAsesory}
              isGoogleAppointment={true}
              backgroundColor={`bg-${headerDetailsArray[state.value].buttonBgColor}`}
              textColor={`text-${headerDetailsArray[state.value].buttonTextColor}`}
              classes={
                "hidden lg:block py-2 px-4 hover:scale-[1.1] transition-all duration-300 z-50 active:scale-[1.1]"
              }
            />
          </div>

          <div class={`${pathname.includes("/blog/") && "hidden"} ml-[1rem]`}>
            <LanguageSelector />
          </div>
        </div>
        <div class="flex flex-row items-center">
          <a href="https://lccopen.tech/" class="relative z-50">
            <div
              class={`flex h-auto w-auto transition-opacity ease-in-out duration-[3s]`}
            >
              {headerDetailsArray[state.value].logocolor === "white" ? (
                <OtWhiteIcon class="h-6 lg:h-10" />
              ) : (
                <OtIcon class="h-6 lg:h-10" />
              )}
              {/* <div style={{backgroundImage: `${logocolor}`}} class="h-6 lg:h-10"></div> */}

            </div>
          </a>
        </div>
      </div>
    </section>
  );
});
