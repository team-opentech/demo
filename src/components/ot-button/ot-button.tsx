import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
  useSignal,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import styles from "./ot-button.css?inline";

//Componente expandible utilizado en la sección de servicios del Home
//Recibe como props el color del componente, el titulo y descripción

interface OpentechButton {
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  classes?: string;
  paddingX?: string;
  fontSize?: string;
  disabled?: boolean;
  isGoogleAppointment?: boolean;
  link?: string;
}

export default component$(
  ({
    isGoogleAppointment = false,
    disabled = false,
    fontSize,
    link,
    backgroundColor = "bg-ot-black",
    paddingX = "px-14",
    textColor = "text-ot-white",
    title = "Agenda tu asesoría",
    classes,
  }: OpentechButton) => {
    return (
      <a
        href={
          isGoogleAppointment
            ? "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0F8WeRQU7-RZ-5kAfEHw68YfoJKqaVpjxBOi2LUQhhwKdfEolJaOgzf2fsImkLmCKPnO1ODAfd?gv=true"
            : `${link}`
        }
        target={isGoogleAppointment ? "_blank" : ""}
      >
        <button
          class={`rounded-full py-2 ' + ${
            fontSize +
            " " +
            paddingX +
            " " +
            backgroundColor +
            " " +
            textColor +
            " " +
            classes +
            " "
          } ${disabled ? "bg-ot-gray" : ""} `}
        >
          <p class={fontSize}>{title}</p>
        </button>
      </a>
    );
  },
);
