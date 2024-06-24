/** @jsxImportSource react */

import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect } from "react";

export const GoogleButton = qwikify$(
  ({
    disabled = false,
    title = "Agenda tu asesoria",
    fontSize,
    backgroundColor = "bg-ot-black",
    paddingX = "px-14",
    textColor = "text-ot-white",
    classes = "",
  }) => {
    useEffect(() => {
      console.log("Entre aca mrc");
      const script = document.createElement("script");
      script.innerHTML = `
                (function () {
                    var target = document.currentScript;
                    console.log("Joined here");
                    window.addEventListener('load', function () {
                        calendar.schedulingButton.load({
                            url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0F8WeRQU7-RZ-5kAfEHw68YfoJKqaVpjxBOi2LUQhhwKdfEolJaOgzf2fsImkLmCKPnO1ODAfd?gv=true',
                            label: '${title}',
                            target,
                        });
            `;
      const element = document.getElementById("googleAppointment");
      element.appendChild(script);
    });

    return (
      <>
        <button
          className={`rounded-full py-2 ' + ${
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
          <p className={fontSize}>{title}</p>
        </button>
      </>
    );
  },
);
