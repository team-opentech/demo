import {
  component$,
  useStylesScoped$,
  useStore,
  CSSProperties,
  useVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import styles from "./expandable-services.css?inline";
import OpentechButton from "../ot-button/ot-button";
//import ImgOtArrow from "../../assets/svg/ot-arrow.svg?jsx";

//Componente expandible utilizado en la sección de servicios del Home
//Recibe como props el color del componente, el titulo y descripción

interface Service {
  title: string;
  description: string;
}
interface ExpandableSection {
  id?: string;
  backgroundColor?: string;
  borderColor?: string;
  title?: string;
  description?: string;
  serviceNumber?: string;
  fontColor?: string;
  image?: string;
  strokeColor?: string;
  gradientColor?: string;
  services?: Service[];
}

export default component$(
  ({
    id,
    serviceNumber,
    image = "/img/sample-image-2.webp",
    backgroundColor,
    fontColor,
    borderColor,
    strokeColor,
    title = "Creative Brand & Experience",
    description = `Diseñamos marcas que conecten y generen confianza con su público. Nos encargamos de darle personalidad a tu negocio a través de una identidad gráfica que muestre los valores, fortalezas y características esenciales de tu compañía, a fin de que pueda diferenciarse del resto y ser reconocida.`,
    gradientColor = "#000000",
    services,
  }: ExpandableSection) => {
    useStylesScoped$(styles);

    const state = useStore({ isCollapsed: true });
    const reference = useSignal<HTMLElement>();

    useVisibleTask$(() => {
      const boxElement = reference.value;
      if (!boxElement) {
        return;
      }

      // const updateAnimation = () => {
      //   const angle =
      //     (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.5) %
      //     360;
      //   boxElement.style.setProperty("--angle", `${angle}deg`);
      //   requestAnimationFrame(updateAnimation);
      // };

      // requestAnimationFrame(updateAnimation);
    });

    return (
      <>
        <div id={id} class="flex justify-center relative">
          <div
            onClick$={() => {
              state.isCollapsed = !state.isCollapsed;
            }}
            id="circle-item"
            class={
              "absolute mt-[0.3px]  flex flex-col rounded-full w-[52px] h-[52px] items-center justify-center mb-[-2rem] left-1/2 -translate-x-1/2 z-40 cursor-pointer " +
              backgroundColor
            }
          />
          <div
            class={`animate-scale text-center flex flex-col font-bold justify-end ml-[9rem] cursor-pointer ${
              state.isCollapsed ? "" : "invisible"
            }`}
          >
            click me!
          </div>
        </div>
        <div
          id={id}
          ref={reference}
          class={`${borderColor} mb-7 relative items-center flex flex-row justify-between border-[3px] rounded-[14px]`}
          onClick$={() => {
            state.isCollapsed = !state.isCollapsed;
          }}
        >
          <div
            onClick$={() => {
              state.isCollapsed = !state.isCollapsed;
            }}
            class="absolute w-5 h-5 left-1/2 -translate-x-1/2 bg-white -top-2.5 rounded-[100%]"
          />
          <div class={`w-full pt-[1rem]`}>
            <p
              class={`${
                state.isCollapsed
                  ? "transition-colors duration-300 ease-out"
                  : "transition-colors duration-300 ease-out " + fontColor
              } text-[18px] font-bold pt-4 pb-3 w-full rounded-t-[13px] text-center select-none`}
            >
              {title}
            </p>
            <p
              class={`tracking-tighter content text-md font-bold overflow-hidden pl-8 pr-6 ${
                state.isCollapsed ? "" : "show pt-2 pb-8"
              } `}
            >
              {description}
            </p>
            <p
              class={`content text-sm font-bold text-ot-white overflow-hidden transition duration-400 slide-in ${
                state.isCollapsed
                  ? "transition duration-100 slide-out scale-0"
                  : "show py-2 px-1 mx-2 text-center rounded-full mb-3 scale-100"
              } ${gradientColor} `}
            >
              Te brindamos servicios en:
            </p>
            <div
              class={`flex flex-row items-start transition duration-400 slide-in ${
                state.isCollapsed
                  ? "transition duration-100 slide-out scale-0"
                  : "scale-100"
              }`}
            >
              <svg
                class={`h-full fill-transparent stroke-[6.5px] content w-10 ml-4 mt-1  ${
                  state.isCollapsed ? "" : "pt-2"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15.98 24.13"
              >
                <defs></defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="HOME_DESKTOP" data-name="HOME DESKTOP">
                    <path
                      class="cls-1"
                      d="M16,12.07A12.34,12.34,0,0,0,3.38,24.13"
                    />
                    <path
                      class="cls-1"
                      d="M16,12.06A12.34,12.34,0,0,1,3.36,0"
                    />
                  </g>
                </g>
              </svg>
              <div
                class={`tracking-tighter content text-sm overflow-hidden pr-4 ${
                  state.isCollapsed ? "" : "show pt-2 pb-8"
                } `}
              >
                {services &&
                  services.map((service, index) => {
                    return (
                      <>
                        <div key={`service-${index}`} class="mb-2">
                          <p class="text-ot-black font-bold">{service.title}</p>
                          <p class="text-ot-black">{service.description}</p>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>

            <div class={`${state.isCollapsed ? "h-0" : "h-100"}`}>
              <video
                autoplay
                loop
                muted
                playsInline
                class={`rounded-b-[12px] transition duration-400 slide-in ${
                  state.isCollapsed
                    ? "transition duration-100 slide-out scale-0"
                    : "scale-100"
                }`}
                width={" "}
                height={" "}
              >
                <source src={image} type="video/webm" />
              </video>
            </div>
          </div>
        </div>
      </>
    );
  },
);
