import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import styles from "./google-button.css?inline";

//Componente expandible utilizado en la sección de servicios del Home
//Recibe como props el color del componente, el titulo y descripción

interface GoogleButton {
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  classes?: string;
  paddingX?: string;
  fontSize?: string;
  disabled?: boolean;
  isGoogleAppointment?: boolean;
}

export default component$(
  ({
    disabled = false,
    fontSize,
    backgroundColor = "bg-ot-black",
    paddingX = "px-14",
    textColor = "text-ot-white",
    title = "Agenda tu asesoría",
    classes,
  }: GoogleButton) => {
    // useVisibleTask$( () => {
    //   var target = document.getElementById("googleAppointment");

    //   window.addEventListener('load', function () {
    //     calendar.schedulingButton.load({
    //       url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0F8WeRQU7-RZ-5kAfEHw68YfoJKqaVpjxBOi2LUQhhwKdfEolJaOgzf2fsImkLmCKPnO1ODAfd?gv=true',
    //       label: title,
    //       target,
    //     });
    //   })
    // });
    // useStylesScoped$(styles);

    return (
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
        id={"googleAppointment"}
      >
        <p class={fontSize}>{title}</p>
      </button>
    );
  },
);
