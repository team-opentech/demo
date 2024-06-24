import {
  component$,
  useStylesScoped$,
  useStore,
  useVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import styles from "./expandable-section.css?inline";
import OpentechButton from "../ot-button/ot-button";

//Componente expandible utilizado en la sección de servicios del Home
//Recibe como props el color del componente, el titulo y descripción

interface ExpandableSection {
  backgroundColor?: string;
  borderColor?: string;
  title?: string;
  description?: string;
  textColor?: string;
  color?: string;
}

export default component$(
  ({
    backgroundColor,
    borderColor,
    textColor,
    title = "Creative Brand & Experience",
    description = `Diseñamos marcas que conecten y generen confianza con su público. Nos encargamos de darle personalidad a tu negocio a través de una identidad gráfica que muestre los valores, fortalezas y características esenciales de tu compañía, a fin de que pueda diferenciarse del resto y ser reconocida.`,
    color,
  }: ExpandableSection) => {
    useStylesScoped$(styles);

    const state = useStore({ isCollapsed: true });
    const reference = useSignal<HTMLElement>();
// eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
      const boxElement = reference.value;
      if (!boxElement) {
        return;
      }
    });

    return (
      <>
        <div id={title} class="flex justify-center relative z-40">
          <div
            onClick$={() => {
              state.isCollapsed = !state.isCollapsed;
            }}
            id="circle-item"
            class={`absolute left-1/2 -translate-x-1/2 flex flex-col rounded-full w-[53px] h-[53px] items-center justify-center border-[16.5px] bg-white cursor-pointer ${borderColor}`}
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
          id={title}
          ref={reference}
          class={`${borderColor} mb-7 py-2 relative items-center flex flex-row justify-between border-[3px] rounded-[14px]`}
          onClick$={() => {
            state.isCollapsed = !state.isCollapsed;
          }}
        >
          {/* <div
            onClick$={() => {
              state.isCollapsed = !state.isCollapsed;
            }}
            class="absolute w-5 h-5 left-1/2 -translate-x-1/2 bg-white -top-2.5 rounded-[100%]"
          /> */}
          <div
            onClick$={() => {
              state.isCollapsed = !state.isCollapsed;
            }}
            class={`w-full`}
          >
            <p
              class={`${
                state.isCollapsed
                  ? "transition-colors duration-300 ease-out"
                  : "transition-colors duration-300 ease-out " + textColor
              } text-sm md:text-sm font-bold pr-7 pl-6 pt-4 pb-3 w-full rounded-t-[5px]`}
            >
              {title}
            </p>
            <p
              class={`mr-10 content text-xs overflow-hidden pl-8 pr-6 ${
                state.isCollapsed ? "" : "show pt-4 pb-12"
              } `}
            >
              {description}
            </p>
          </div>
          <div
            onClick$={() => {
              state.isCollapsed = !state.isCollapsed;
            }}
            class={`${
              state.isCollapsed
                ? "opacity-0 transition-opacity duration-300 ease-linear"
                : "opacity-1 transition-opacity duration-1000 ease-linear cursor-pointer"
            } absolute left-1/2 -translate-x-1/2 bottom-[-22px]`}
          >
            {!state.isCollapsed && (
              <OpentechButton
                isGoogleAppointment={true}
                paddingX={"px-5 whitespace-nowrap"}
                classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
              />
            )}
          </div>
        </div>
      </>
    );
  }
);
