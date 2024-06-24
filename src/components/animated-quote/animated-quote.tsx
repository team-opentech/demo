import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./animated-quote.css?inline";

//Componente que se movera horizontalmente en Home, mostrando frases representativas
//Recibe como props el color del componente, el titulo, descripción y color de circulo

interface props {
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  circleColor?: string;
}

export default component$(
  ({
    backgroundColor = "bg-ot-black",
    title = "Si no existe, lo creamos.",
    circleColor = "bg-ot-green",
    textColor = "text-ot-white",
  }: props) => {
    useStylesScoped$(styles);

    return (
      <div
        id="quote-item"
        class={
          "w-60 items-center flex flex-row flex-none rounded-full mx-4 " +
          backgroundColor +
          " " +
          textColor
        }
      >
        <div
          id="circle-item"
          class={
            "flex flex-col rounded-full w-12 h-10 items-center justify-center " +
            circleColor
          }
        >
          <div class="bg-ot-black h-5 w-5 rounded-full" />
        </div>
        <div class="text-center w-full items-center">
          <p class="text-xs font-medium">{title}</p>
        </div>
      </div>
    );
  },
);
