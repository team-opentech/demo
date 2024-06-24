import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import Ot404Green from "~/assets/svg/ot-404-green.svg?jsx";
import Ot404GreenMobile from "~/assets/svg/ot-404-green-mobile.svg?jsx";
import Ot404Red from "~/assets/svg/ot-404-red.svg?jsx";
import Ot404RedMobile from "~/assets/svg/ot-404-red-mobile.svg?jsx";
import Ot404Purple from "~/assets/svg/ot-404-purple.svg?jsx";
import Ot404PurpleMobile from "~/assets/svg/ot-404-purple-mobile.svg?jsx";
import Ot404Yellow from "~/assets/svg/ot-404-yellow.svg?jsx";
import Ot404YellowMobile from "~/assets/svg/ot-404-yellow-mobile.svg?jsx";

export default component$(() => {
  const nav = useNavigate();

  return (
    <section class="flex flex-col mx-auto items-center bg-black w-full h-full p-10 pt-[70px] -mt-[30px] -mb-14">
      <div class="flex flex-col items-center justify-center">
        <span class="font-beVietnamPro text-[120px] lg:text-[300px] font-bold text-white leading-none">
          404
        </span>
        <span class="font-beVietnamPro text-center lg:text-start text-2xl font-normal text-white">
          La ruta que buscas <br class="lg:hidden" />
          no puede ser <br class="lg:hidden" />
          encontrada.
        </span>
      </div>

      <div class="hidden lg:flex items-center justify-center mt-[60px]">
        <button
          class="bg-white text-black font-beVietnamPro font-normal text-2xl py-2 px-12 rounded-full"
          onClick$={async () => {
            await nav("/");
          }}
        >
          Volver al Home
        </button>
      </div>

      <div class="hidden lg:flex flex-col lg:flex-row items-start mt-[90px]">
        <Ot404Green class="lg:w-[306px] lg:h-[62px]" />
        <Ot404Red class="lg:w-[257px] lg:h-[62px]" />
        <Ot404Yellow class=" lg:w-[241px] lg:h-[62px]" />
        <Ot404Purple class="lg:w-[230px] lg:h-[62px]" />
      </div>

      <div class="flex flex-col lg:hidden items-start space-y-5 justify-center mt-[60px]">
        <Ot404GreenMobile class="w-[260px] h-[59px]" />
        <Ot404RedMobile class="w-[210px] h-[59px]" />
        <Ot404YellowMobile class="w-[195px] h-[59px]" />
        <Ot404PurpleMobile class="w-[184px] h-[59px]" />
      </div>
    </section>
  );
});
