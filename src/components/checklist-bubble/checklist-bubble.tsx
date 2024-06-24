import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./checklist-bubble.css?inline";

//Componente de checklist mostrando necesidades que cumple opentech
//Recibe como props el color de fondo del componente, el titulo y el color de la burbuja

interface props {
  backgroundColor?: string;
  bubbleColor?: string;
  title?: string;
  containerStyles?: string;
  titleStyles?: string;
  bubbleOnRight?: boolean;
}

export default component$(
  ({
    titleStyles,
    containerStyles,
    bubbleOnRight = true,
    backgroundColor = "bg-ot-gray",
    bubbleColor = "bg-ot-yellow",
    title = "No tienes sitio web y quieres empezar a vender por internet",
  }: props) => {
    useStylesScoped$(styles);

    return (
      <div
        id="checklist-bubble"
        class={
          containerStyles + " my-4 items-center flex flex-row flex-none mx-2 "
        }
      >
        {bubbleOnRight ? null : (
          <img
            src={`../../svg/${bubbleColor}-check.svg`}
            width={" "}
            height={" "}
            alt=""
            class="w-8"
          />
        )}
        <div
          class={
            titleStyles +
            " text-center w-full items-center rounded-full py-2 px-4 " +
            backgroundColor
          }
        >
          <p class="text-3xs">{title}</p>
        </div>
        {bubbleOnRight ? (
          <img
            src={`../../svg/${bubbleColor}-check.svg`}
            width={" "}
            height={" "}
            alt=""
            class="w-8"
          />
        ) : null}
      </div>
    );
  },
);
