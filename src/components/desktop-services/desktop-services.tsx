import {
  component$,
  useStylesScoped$,
  useStore,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./desktop-services.css?inline";
import OpentechButton from "../ot-button/ot-button";
import Arrow from "../../assets/svg/black-down-arrow.svg";
import { inlineTranslate } from "qwik-speak";
import ScrollReveal from "scrollreveal";
//import { useRef } from '@builder.io/qwik';

//Sección de servicios versión desktop

export default component$(() => {
  useStylesScoped$(styles);
  const t = inlineTranslate();

  const state = useStore({
    prevFocusedColor: "bg-ot-green",
    focusedColor: "bg-ot-green",
    borderColor: "border-ot-green",
    prevBorderColor: "border-ot-green",
    i: 0,
    isAnimating: false,
    animationTimer: 800,
    timeoutTimer: 6000,
  });
  const data = [
    {
      serviceNumber: "01",
      circleTitle: (
        <>
          <p
            class={`${
              state.focusedColor === "bg-ot-green"
                ? "text-lg opacity-1"
                : "text-md opacity-80"
            } ease-in transition-all font-bold`}
            dangerouslySetInnerHTML={t("desktop_services.service1-circle")}
          />
        </>
      ),
      mainTitle: (
        <>
          <p
            class={"text-ot-green"}
            dangerouslySetInnerHTML={t("desktop_services.service1-title")}
          />
        </>
      ),
      textColor: "text-ot-green",
      circleColor: "bg-ot-green",
      borderColor: "border-ot-green",
      parragraph: (
        <>
          <p class="mt-6 text-md">
            {t(
              `desktop_services.service1-paragraph@@Our approach is goal-oriented, ensuring your brand is both visually compelling and strategically aligned with market demands.`,
            )}
          </p>
        </>
      ),
    },
    {
      serviceNumber: "02",
      circleTitle: (
        <>
          <p
            class={`${
              state.focusedColor === "bg-ot-yellow"
                ? "text-lg opacity-1"
                : "text-md opacity-80"
            } ease-in transition-all font-bold`}
            dangerouslySetInnerHTML={t(`desktop_services.service2-circle`)}
          />
        </>
      ),
      mainTitle: (
        <>
          <p
            class="text-ot-yellow"
            dangerouslySetInnerHTML={t(`desktop_services.service2-title`)}
          />
        </>
      ),
      textColor: "text-ot-yellow",
      circleColor: "bg-ot-yellow",
      borderColor: "border-ot-yellow",
      parragraph: (
        <>
          <p class="mt-6 text-md">
            {t(
              `desktop_services.service2-paragraph@@Beyond merely creating digital platforms, we position them intelligently and analyze performance metrics to improve your business operations.`,
            )}
          </p>
        </>
      ),
    },
    {
      serviceNumber: "03",
      circleTitle: (
        <>
          <p
            class={`${
              state.focusedColor === "bg-ot-orange"
                ? "text-lg opacity-1"
                : "text-md opacity-80"
            } ease-in transition-all font-bold`}
            dangerouslySetInnerHTML={t(`desktop_services.service3-circle`)}
          />
        </>
      ),
      mainTitle: (
        <>
          <p
            class="text-ot-orange"
            dangerouslySetInnerHTML={t(`desktop_services.service3-title`)}
          />
        </>
      ),
      textColor: "text-ot-orange",
      circleColor: "bg-ot-orange",
      borderColor: "border-ot-orange",
      parragraph: (
        <>
          <p class="mt-6 text-md">
            {t(
              `desktop_services.service3-paragraph@@Focused on smart strategy, we design campaigns that connect with the right audience and foster authentic relationships.`,
            )}
          </p>
        </>
      ),
    },
    {
      serviceNumber: "04",
      circleTitle: (
        <>
          <p
            class={`${
              state.focusedColor === "bg-ot-purple"
                ? "text-lg opacity-1"
                : "text-md opacity-80"
            } ease-in transition-all font-bold`}
            dangerouslySetInnerHTML={t(`desktop_services.service4-circle`)}
          />
        </>
      ),
      mainTitle: (
        <>
          <p
            class="text-ot-purple"
            dangerouslySetInnerHTML={t(`desktop_services.service4-title`)}
          />
        </>
      ),
      textColor: "text-ot-purple",
      circleColor: "bg-ot-purple",
      borderColor: "border-ot-purple",
      parragraph: (
        <>
          <p class="mt-6 text-md">
            {t(
              `desktop_services.service4-paragraph@@We leverage our expertise to offer actionable insights for improving both your digital reach and revenue outcomes.`,
            )}
          </p>
        </>
      ),
    },
  ];
  // const { focusedColor, borderColor } = state;
  const colors = [
    "bg-ot-green",
    "bg-ot-yellow",
    "bg-ot-orange",
    "bg-ot-purple",
  ];
  const bColors = [
    "border-ot-green",
    "border-ot-yellow",
    "border-ot-orange",
    "border-ot-purple",
  ];
// eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => state.i);
    const intervalId = setInterval(() => {
      // eslint-disable-next-line qwik/valid-lexical-scope
      state.i = (state.i + 1) % data.length;
      state.focusedColor = colors[state.i];
      state.borderColor = bColors[state.i];
      state.prevFocusedColor = state.focusedColor;
      state.prevBorderColor = state.borderColor;
      state.isAnimating = true;

      setTimeout(() => {
        state.isAnimating = false;
      }, state.animationTimer);
    }, state.timeoutTimer);

    return () => clearInterval(intervalId);
    // state.focusedColor = colors[state.i];
    // state.borderColor = bColors[state.i];
    // state.prevFocusedColor = state.focusedColor;
    // state.prevBorderColor = state.borderColor;
    // setTimeout(() => {
    //   state.i = (state.i + 1) % data.length;
    // }, 6000);
  });
// eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    ScrollReveal().reveal("#services-menu", {
      delay: 500,
      origin: "left",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#services-description", {
      delay: 500,
      origin: "right",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
  });

  {
    /* Nota: Esta seccion no es mapeada por un error de qwik reproducible (pendiente de crear issue) : https://github.com/BuilderIO/qwik/issues/617*/
  }
  return (
    <div
      id="desktop-services"
      class="max-w-[1290px] w-full flex flex-row justify-between px-10"
    >
      <div id="services-menu" class="space-y-0 w-5/12 xl:w-3/12 self-center">
        <div>
          <div class="flex flex-row items-center">
            <div
              class={`${
                state.focusedColor === "bg-ot-green"
                  ? "opacity-1"
                  : "opacity-70"
              } mr-10 ease-in transition-opacity delay-100 z-40 right-[-23px] flex flex-col rounded-full w-20 h-20 items-center justify-center bg-ot-green`}
              onClick$={() => {
                // state.focusedColor = "bg-ot-green";
                // state.borderColor = "border-ot-green";
                state.i = 0;
                state.focusedColor = colors[state.i];
                state.borderColor = bColors[state.i];
                state.prevFocusedColor = state.focusedColor;
                state.prevBorderColor = state.borderColor;
                state.isAnimating = true;
                setTimeout(() => {
                  state.isAnimating = false;
                }, state.animationTimer);
              }}
              id="circle-item"
            >
              <div class="bg-ot-white h-9 w-9 rounded-full" />
            </div>
            <div
              onClick$={() => {
                // state.focusedColor = "bg-ot-green";
                // state.borderColor = "border-ot-green";
                state.i = 0;
                state.focusedColor = colors[state.i];
                state.borderColor = bColors[state.i];
                state.prevFocusedColor = state.focusedColor;
                state.prevBorderColor = state.borderColor;
                state.isAnimating = true;
                setTimeout(() => {
                  state.isAnimating = false;
                }, state.animationTimer);
              }}
            >
              {data[0].circleTitle}
            </div>
          </div>
          <div
            class={`h-[100px] ml-[30px] mb-[-4px] mt-[-1px] w-[20px] bg-ot-gray `}
          >
            <div
              class={`${
                state.focusedColor === "bg-ot-green"
                  ? "opacity-1 has-animation"
                  : "opacity-70"
              } h-[100px] w-[20px] bg-ot-green`}
            />
          </div>
        </div>
        <div>
          <div class="flex flex-row items-center">
            <div
              class={`${
                state.focusedColor === "bg-ot-yellow"
                  ? "opacity-1"
                  : "opacity-70"
              } mr-10 ease-in transition-opacity delay-100 z-40 right-[-23px] flex flex-col rounded-full w-[80px] h-[80px] mt-[3px] items-center justify-center bg-ot-yellow `}
              onClick$={() => {
                // state.focusedColor = "bg-ot-yellow";
                // state.borderColor = "border-ot-yellow";
                state.i = 1;
                state.focusedColor = colors[state.i];
                state.borderColor = bColors[state.i];
                state.prevFocusedColor = state.focusedColor;
                state.prevBorderColor = state.borderColor;
                state.isAnimating = true;
                setTimeout(() => {
                  state.isAnimating = false;
                }, state.animationTimer);
              }}
              id="circle-item"
            >
              <div class="bg-ot-white h-9 w-9 rounded-full" />
            </div>
            <div
              onClick$={() => {
                // state.focusedColor = "bg-ot-yellow";
                // state.borderColor = "border-ot-yellow";
                state.i = 1;
                state.focusedColor = colors[state.i];
                state.borderColor = bColors[state.i];
                state.prevFocusedColor = state.focusedColor;
                state.prevBorderColor = state.borderColor;
                state.isAnimating = true;
                setTimeout(() => {
                  state.isAnimating = false;
                }, state.animationTimer);
              }}
            >
              {data[1].circleTitle}
            </div>
          </div>
          <div
            class={`h-[100px] ml-[30px] mb-[-4px] mt-[-1px] w-[20px] bg-ot-gray `}
          >
            <div
              class={`${
                state.focusedColor === "bg-ot-yellow"
                  ? "opacity-1 has-animation"
                  : "opacity-70"
              } h-[100px] w-[20px] bg-ot-yellow`}
            />
          </div>
        </div>
        <div>
          <div class="flex flex-row items-center">
            <div
              class={`${
                state.focusedColor === "bg-ot-orange"
                  ? "opacity-1"
                  : "opacity-70"
              } mr-10 ease-in transition-opacity delay-100 z-40 right-[-23px] flex flex-col rounded-full w-[80px] h-[80px] mt-[3px] items-center justify-center bg-ot-orange `}
              onClick$={() => {
                // state.focusedColor = "bg-ot-orange";
                // state.borderColor = "border-ot-orange";
                state.i = 2;
                state.focusedColor = colors[state.i];
                state.borderColor = bColors[state.i];
                state.prevFocusedColor = state.focusedColor;
                state.prevBorderColor = state.borderColor;
                state.isAnimating = true;
                setTimeout(() => {
                  state.isAnimating = false;
                }, state.animationTimer);
              }}
              id="circle-item"
            >
              <div class="bg-ot-white h-9 w-9 rounded-full" />
            </div>
            <div
              onClick$={() => {
                // state.focusedColor = "bg-ot-orange";
                // state.borderColor = "border-ot-orange";
                state.i = 2;
                state.focusedColor = colors[state.i];
                state.borderColor = bColors[state.i];
                state.prevFocusedColor = state.focusedColor;
                state.prevBorderColor = state.borderColor;
                state.isAnimating = true;
                setTimeout(() => {
                  state.isAnimating = false;
                }, state.animationTimer);
              }}
            >
              {data[2].circleTitle}
            </div>
          </div>
          <div
            class={`h-[100px] ml-[30px] mb-[-4px] mt-[-1px] w-[20px] bg-ot-gray `}
          >
            <div
              class={`${
                state.focusedColor === "bg-ot-orange"
                  ? "opacity-1 has-animation"
                  : "opacity-70"
              } h-[100px] w-[20px] bg-ot-orange`}
            />
          </div>
        </div>
        <div class="flex flex-row items-center">
          <div
            class={`${
              state.focusedColor === "bg-ot-purple" ? "opacity-1" : "opacity-70"
            } mr-10 ease-in transition-opacity delay-100  z-40 right-[-23px] flex flex-col rounded-full h-[80px] w-[80px] mt-[3px] items-center justify-center bg-ot-purple`}
            onClick$={() => {
              // state.focusedColor = "bg-ot-purple";
              // state.borderColor = "border-ot-purple";
              state.i = 3;
              state.focusedColor = colors[state.i];
              state.borderColor = bColors[state.i];
              state.prevFocusedColor = state.focusedColor;
              state.prevBorderColor = state.borderColor;
              state.isAnimating = true;
              setTimeout(() => {
                state.isAnimating = false;
              }, state.animationTimer);
            }}
            id="circle-item"
          >
            <div class="bg-ot-white h-9 w-9 rounded-full" />
          </div>
          <div
            onClick$={() => {
              // state.focusedColor = "bg-ot-purple";
              // state.borderColor = "border-ot-purple";
              state.i = 3;
              state.focusedColor = colors[state.i];
              state.borderColor = bColors[state.i];
              state.prevFocusedColor = state.focusedColor;
              state.prevBorderColor = state.borderColor;
              state.isAnimating = true;
              setTimeout(() => {
                state.isAnimating = false;
              }, state.animationTimer);
            }}
          >
            {data[3].circleTitle}
          </div>
        </div>
      </div>
      <div class="justify-center w-7/12">
        <div
          class={`relative m-auto border-4 ${state.borderColor} ${
            state.isAnimating ? "animate-change" : ""
          } rounded-xl px-24 pr-16 py-16 xl:w-[680px] xl:h-[537px]`}
          id="services-description"
        >
          <div
            id="circle-item"
            class={`${state.focusedColor} absolute left-[-38px] top-[228px] flex flex-col rounded-full w-20 h-20 items-center justify-center`}
          >
            <div class="bg-ot-white h-9 w-9 rounded-full" />
          </div>
          <div class="flex flex-row justify-between">
            <div class="text-4xl font-bold">
              {state.focusedColor === "bg-ot-green" ? data[0].mainTitle : null}
              {state.focusedColor === "bg-ot-yellow" ? data[1].mainTitle : null}
              {state.focusedColor === "bg-ot-orange" ? data[2].mainTitle : null}
              {state.focusedColor === "bg-ot-purple" ? data[3].mainTitle : null}
            </div>
            <p class="text-xs tracking-tighter mt-2">
              {state.focusedColor === "bg-ot-green"
                ? data[0].serviceNumber
                : null}
              {state.focusedColor === "bg-ot-yellow"
                ? data[1].serviceNumber
                : null}
              {state.focusedColor === "bg-ot-orange"
                ? data[2].serviceNumber
                : null}
              {state.focusedColor === "bg-ot-purple"
                ? data[3].serviceNumber
                : null}
            </p>
          </div>
          {state.focusedColor === "bg-ot-green" ? data[0].parragraph : null}
          {state.focusedColor === "bg-ot-yellow" ? data[1].parragraph : null}
          {state.focusedColor === "bg-ot-orange" ? data[2].parragraph : null}
          {state.focusedColor === "bg-ot-purple" ? data[3].parragraph : null}
          <div class="calendarClick">
            <OpentechButton
              title={t(`desktop_services.button@@Talk To Us`)}
              classes={
                "mt-14 pr-8 pl-8 hover:scale-[1.1] transition-all duration-300 active:scale-[1.1]"
              }
              link="/services"
            />
          </div>
          <div
            onClick$={() => {
              // eslint-disable-next-line qwik/valid-lexical-scope
              state.i = (state.i + 1) % data.length;
              state.focusedColor = colors[state.i];
              state.borderColor = bColors[state.i];
              state.prevFocusedColor = state.focusedColor;
              state.prevBorderColor = state.borderColor;
              state.isAnimating = true;
              setTimeout(() => {
                state.isAnimating = false;
              }, state.animationTimer);
            }}
            class="absolute bottom-[10%] right-[10%] h-auto w-auto z-50 animate-bounce cursor-pointer"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2V17"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M5 10L12 17L19 10"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});
