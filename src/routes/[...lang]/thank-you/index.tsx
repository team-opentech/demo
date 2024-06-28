/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import check from "../../../assets/svg/check-th.svg";
import circle from "../../../assets/svg/circle.svg";
import { thankYou } from "../../../data/constants";

export default component$(() => {
  return (
    <>
      <section id="thank-you" class="w-full h-auto">
        <div class="w-full h-auto relative overflow-hidden">
          <img
            src={circle}
            alt=""
            class={`
                    max-ss:absolute max-ss:w-[58%] max-ss:top-0 max-ss:-translate-y-[45%] max-ss:-translate-x-[35%] max-ss:rotate-180
                    absolute w-[33%] top-0 -translate-y-[60%] -translate-x-[10%] rotate-180 -z-10
                `}
          />

          <img
            src={circle}
            alt=""
            class={`
                max-ss:absolute max-ss:w-[58%] max-ss:bottom-0 max-ss:right-0 max-ss:translate-x-[6%] max-ss:translate-y-[45%] -z-10
                absolute w-[33%] bottom-0 right-0 -translate-x-[3%] translate-y-[60%]`}
          />

          <div
            class={`
                    max-ss:mt-[20%] max-ss:px-5 max-ss:pb-[41%]
                    flex flex-col items-center justify-center w-full pb-[8%]
                `}
          >
            <img
              src={check}
              alt=""
              class={`
                    max-ss:w-[21%] max-ss:mb-[8%]
                    ss:w-[12%] ss:mb-[5%]
                    sm:w-[10%] sm:mb-[2%]
                    xl:w-[9%]
                `}
            />

            <h1
              class={`
                    ss:max-w-xl ss:text-[30px] ss:mb-8
                    sm:mb-[3%] text-center  text-[#1E1E1E] sm:text-4xl sm:max-w-3xl font-bold
                    xl:text-5xl xl:max-w-[1000px]
                `}
            >
              ¡Gracias por confiar en nuestro equipo para tu éxito en línea!
            </h1>

            <h2
              class={`
                    max-ss:text-base max-ss:mb-14 max-ss:max-w-sm
                    ss:text-lg ss:max-w-md ss:mb-16
                    sm:mb-[7%] text-center  font-normal sm:text-xl sm:max-w-3xl
                    xl:text-3xl xl:max-w-[1080px]
                `}
            >
              {thankYou.text1}
              <br />
              <span
                class={`
                    max-ss:px-4
                    font-semibold `}
              >
                {thankYou.text2}
              </span>
            </h2>

            <p
              class={`
                    max-ss:px-8 max-ss:font-normal max-ss:mb-[8%] max-ss:max-w-md
                    ss:mb-10
                    sm:mb-[4.1%] max-w-lg text-center text-[#000] font-medium text-base 
                    xl:text-3xl xl:max-w-[900px]
                `}
            >
              {thankYou.message}
            </p>

            <button
              class={`
                    max-ss:w-[77%] max-ss:text-2xl max-ss:py-[1.5%] max-ss:mb-4
                    ss:w-[30%] ss:mb-3
                    sm:w-[18%] p-[0.65%] bg-black rounded-full text-white font-normal  leading-normal text-xl mb-[1%]
                    xl:w-[25%] xl:text-2xl xl:mb-[1.5%]
                `}
            >
              {thankYou.cta1}
            </button>

            <button
              class={`
                    max-ss:w-[77%] max-ss:text-2xl max-ss:py-[1.5%]
                    ss:w-[30%]
                    sm:w-[18%] p-[0.65%] bg-white rounded-full text-black border-black border-[1px] font-medium  leading-normal text-xl
                    xl:w-[25%] xl:text-2xl
                `}
            >
              {thankYou.cta2}
            </button>
          </div>
        </div>
      </section>
    </>
  );
});
