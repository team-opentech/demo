import { component$, useVisibleTask$ } from "@builder.io/qwik";
import OpentechButton from "../../../components/ot-button/ot-button";
import { useLocation } from "@builder.io/qwik-city";
import { OpentechLogo } from "~/components/icons/ot-logo";
import { inlineTranslate } from "qwik-speak";
import CapHome from "../../../../public/assets/img/screenshot-1-home.webp?jsx";
import CapDetalleEvento from "../../../../public/assets/img/screenshot-2-detalle-evento.webp?jsx";
import CapNosotros from "../../../../public/assets/img/screenshot-3-nosotros.webp?jsx";
import CapContact from "../../../../public/assets/img/screenshot-4-contacto.webp?jsx";
import CapHabitaciones from "../../../../public/assets/img/screenshot-5-habitaciones.webp?jsx";
import CapSingleHab from "../../../../public/assets/img/screenshot-6-single-habitacion.webp?jsx";
import CapServicios from "../../../../public/assets/img/screenshot-7-servicios.webp?jsx";
import ImgComputer from "../../../../public/assets/img/computer.webp?jsx";
import { FiveDots } from "../../../components/icons/five-dots";
import ImgTripAdvisor from "../../../../public/assets/img/Tripadvisor-Logo-1.webp?jsx";
import ImgTravelersChoice from "../../../../public/assets/img/travelers-choice.webp?jsx";
import { RosaBelaIcon } from "../../../components/icons/rosaBelaIcon";
import ImgRosaBelaPhone from "../../../../public/assets/img/rosa-bela-phone.webp?jsx";
import ScrollReveal from "scrollreveal";

export default component$(() => {
  const t = inlineTranslate();
  const location = useLocation();
  const caseSlug = location.url.pathname.split("/")[2];
  const data = [
    {
      title: "La Travesía Digital del Hotel Rosa Bela",
      subtitle: "Website",
      tags: [
        { tagTitle: "Technology & Data", color: "border-ot-green" },
        { tagTitle: "Creative & Brand Experience", color: "border-ot-yellow" },
      ],
      parragraph:
        "El Hotel Rosa Bela, situado en el corazón de Puerto Ordaz, Venezuela, es una joya arquitectónica, un símbolo de diseño y prestigio. A pesar de su reconocimiento, enfrentaba un gran desafío: la falta de un sitio web que reflejara su excelencia y permitiera a los clientes interactuar y reservar servicios. Esta brecha digital marcó el punto de partida hacia una transformación digital indispensable.",
      imageUrl: "/assets/img/case-study-rosa-bela.webp",
      feature_image: "/assets/img/banner-rosa-bela.webp",
      link: "/case-studies/hotel-rosa-bela",
    },
  ];
  useVisibleTask$(() => {
    ScrollReveal().reveal("#title", {
      delay: 300,
      origin: "top",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#sub-title", {
      delay: 300,
      origin: "top",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#banner", {
      delay: 300,
      origin: "top",
      distance: "100px",
      duration: 2000,
      cleanup: true,
    });
    ScrollReveal().reveal("#banner-title", {
      delay: 300,
      origin: "left",
      distance: "100px",
      duration: 1600,
      cleanup: true,
    });
    ScrollReveal().reveal("#banner-text", {
      delay: 300,
      origin: "left",
      distance: "100px",
      duration: 1600,
      cleanup: true,
    });
    ScrollReveal().reveal("#left-img", {
      delay: 300,
      origin: "left",
      distance: "150px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal("#right-img", {
      delay: 200,
      origin: "right",
      distance: "150px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal("#center-text", {
      delay: 200,
      origin: "top",
      distance: "150px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal("#long-img1", {
      delay: 200,
      origin: "top",
      distance: "200px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal("#long-img2", {
      delay: 300,
      origin: "bottom",
      distance: "200px",
      duration: 1400,
      cleanup: true,
    });
  });

  return (
    <section class="flex flex-col justify-center mx-auto -mb-14">
      <h1 class="flex text-[29px] font-bold mb-4 mx-auto justify-center max-w-[320px] lg:max-w-[400px] xl:max-w-[450px] text-center lg:text-[34px] xl:text-[39px] 2xl:text-[44px] leading-normal">
        {data[0].title}
      </h1>
      <p class="flex text-[24px] mb-8 mx-auto justify-center text-center lg:text-[27px] xl:text-[30px] 2xl:text-[33px] leading-normal">
        Elegancia y Conexión
      </p>
      {/* Banner section */}
      <div class="w-full justify-center max-w-[1920px] mx-auto">
        <div class="flex flex-col lg:flex-row bg-[#E85082] h-auto w-full items-center justify-center">
          <div class="h-full w-full p-[4%] lg:p-0 lg:w-[50%] lg:pl-[4%] xl:pl-[9%] 2xl:pl-[18%]">
            <h2 class="text-white font-bold leading-normal text-[28px] xl:text-[32px] 2xl:text-[36px] max-w-[374px] mb-8">
              Un Tesoro Oculto en la Era Digital
            </h2>
            <p class="text-white max-w-[540px] text-[18px] leading-normal">
              {data[0].parragraph}
            </p>
          </div>
          <div
            class="relative h-[540px] lg:h-[790px] w-full lg:w-[50%] bg-cover bg-center bg-no-repeat items-end"
            style={{
              backgroundImage: `url(${data[0].feature_image})`,
            }}
          >
            <div class="absolute h-[540px] lg:h-[790px] w-full bg-gradient-to-b from-[#E85082] to-transparent z-10 lg:bg-gradient-to-r" />
          </div>
        </div>
      </div>
      {/* Extra description section */}
      <div class="flex flex-col lg:flex-row h-auto w-full justify-center lg:justify-evenly py-[10%] lg:py-0">
        <div
          id="left-img"
          class="hidden lg:flex h-[540px] xl:h-[934px] w-[320px] xl:w-[494px] bg-contain bg-center bg-no-repeat mx-auto"
          style={{
            backgroundImage: `url(/assets/img/rb1-1.webp)`,
          }}
        />
        <div
          id="center-text"
          class="flex flex-col justify-center items-center px-[4%] lg:px-0"
        >
          <h2 class="leading-normal font-bold text-center mx-auto text-[28px] xl:text-[32px] 2xl:text-[36px] max-w-[324px] lg:max-w-[437px] mb-8">
            Elevando el Prestigio al Mundo Digital
          </h2>
          <p class="max-w-[540px] text-[18px] lg:text-[22px] leading-normal text-center">
            Conocido por su lujo y diseño, el Hotel Rosa Bela enfrentaba la
            falta de una plataforma online que mostrara su esencia y
            simplificara las reservas. Esta laguna digital representaba una
            oportunidad de expansión y mejora. La colaboración con Opentech
            buscaba crear una presencia online digna de su renombre.
          </p>
        </div>
        <div
          id="right-img"
          class="h-[540px] xl:h-[934px] w-[320px] xl:w-[494px] bg-contain bg-center bg-no-repeat mx-auto mt-10 lg:mt-0"
          style={{
            backgroundImage: `url(/assets/img/rb2-1.webp)`,
          }}
        />
      </div>
      <div class="flex flex-col lg:flex-row h-auto w-full justify-evenly py-[10%] lg:py-[4%]">
        {/* Text with images */}
        <div
          id="left-img"
          class="flex flex-col h-auto w-full lg:w-fit space-y-8 justify-center"
        >
          <div class="flex flex-col w-full justify-start lg:justify-center items-start lg:items-center px-[4%] lg:px-0">
            <div class="flex flex-col">
              <h2 class="flex leading-normal font-bold text-left text-[28px] xl:text-[32px] 2xl:text-[36px] max-w-[324px] lg:max-w-[437px] mb-6">
                Una Asociación Estratégica
              </h2>
              <p class="max-w-[400px] xl:max-w-[540px] text-[18px] leading-normal text-left">
                La colaboración entre Opentech y el Hotel Rosa Bela fue un
                ejercicio de comprensión y adaptación. Las reuniones
                estratégicas con la gerencia y los equipos del hotel definieron
                claramente los requisitos y el camino a seguir, estableciendo
                las bases para un proyecto que reflejara fielmente la identidad
                del hotel.
              </p>
            </div>
          </div>
          <div class="flex flex-row items-center justify-center lg:justify-start mx-auto lg:mx-0 space-x-6 lg:space-x-8">
            <div class="flex h-auto w-auto mx-auto lg:mx-0">
              <OpentechLogo />
            </div>
            <div
              class="flex h-[194px] w-[194px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(/assets/img/logo-rosa-bela.webp)`,
              }}
            />
          </div>
        </div>
        {/* Project Life control loop */}
        <div id="right-img" class="flex justify-center mt-10 lg:mt-0">
          <div class="relative border-[3px] border-solid border-[#959595] h-[461px] w-[220px] xl:w-[421px] items-start rounded-[70px]">
            <div class="absolute top-[15%] -right-[42%] xl:-right-[22%] z-10">
              <div class="flex flex-col space-y-6">
                <span class="flex w-[180px] h-[50px] rounded-[11px] text-white bg-[#E0628C] text-center items-center justify-center">
                  <p class="m-auto">Descubrimiento</p>
                </span>
                <span class="flex w-[180px] h-[50px] rounded-[11px] text-white bg-[#F284A8] text-center items-center justify-center">
                  <p class="m-auto">Diseño</p>
                </span>
                <span class="flex w-[180px] h-[50px] rounded-[11px] text-white bg-[#BC8BC2] text-center items-center justify-center">
                  <p class="m-auto">Desarrollo</p>
                </span>
                <span class="flex w-[180px] h-[50px] rounded-[11px] text-white bg-[#9F75B6] text-center items-center justify-center">
                  <p class="m-auto">Pruebas</p>
                </span>
                <span class="flex w-[180px] h-[50px] rounded-[11px] text-white bg-[#CB53A1] text-center items-center justify-center">
                  <p class="m-auto">Despliegue</p>
                </span>
              </div>
            </div>
            <h2 class="absolute -left-[50%] xl:-left-[50%] top-[45%] xl:top-[40%] bg-white leading-normal font-bold text-center text-[24px] w-[200px] xl:w-[280px] xl:text-[32px] 2xl:text-[36px]">
              Ciclo de Vida del proyecto
            </h2>
          </div>
        </div>
      </div>
      {/* Purple background section */}
      <div
        id="banner"
        class="flex h-auto lg:h-[441px] w-full bg-cover bg-center bg-no-repeat py-[15%] lg:py-[8%]"
        style={{
          backgroundImage: `url(/assets/img/fondo-morado-rosa-bela.webp)`,
        }}
      >
        <div class="flex flex-col w-full lg:justify-center items-center">
          <h2
            id="banner-title"
            class="leading-normal text-white font-bold text-center text-[28px] xl:text-[32px] 2xl:text-[36px] max-w-[324px] lg:max-w-[437px] mb-6"
          >
            Tejiendo la Red
          </h2>
          <p
            id="banner-text"
            class="text-white w-[90%] xl:w-full xl:max-w-[1300px] text-[18px] lg:text-[22px] leading-normal text-center mx-auto"
          >
            El proceso de desarrollo del sitio web fue meticuloso y detallado.
            Seleccionamos cuidadosamente un servidor de hosting robusto y
            configuramos el dominio. La integración con el API del Banco de
            Venezuela permitió pagos directos en bolívares, facilitando las
            transacciones. Prestamos especial atención a cada sección del sitio,
            desde la página de inicio hasta la galería de imágenes, para
            capturar la esencia del hotel, proporcionando una navegación fluida
            y una interfaz que reflejara el lujo y la calidad del Hotel Rosa
            Bela.
          </p>
        </div>
      </div>
      {/* Screenshots preview section */}
      <div class="grid grid-cols-2 lg:grid-cols-4 mx-auto pt-[8%] justify-between lg:justify-evenly xl:px-[2%] 2xl:px-[8%] h-[1223px] lg:h-[1080px] w-full bg-[#D9D9D9] flex-nowrap overflow-hidden">
        {/* Screenshots for mobile */}
        <div id="long-img1" class="space-y-6 lg:hidden">
          <CapHome class="w-[95%]" alt="capture home" />
          <CapDetalleEvento class="w-[95%]" alt="capture detalle evento" />
        </div>
        <div id="long-img2" class="flex flex-col items-end space-y-6 lg:hidden">
          <CapNosotros class="w-[95%]" alt="capture nosotros" />
          <CapContact class="w-[95%]" alt="capture contact" />
          <CapHabitaciones class="w-[95%]" alt="capture habitaciones" />
          <CapSingleHab class="w-[95%]" alt="capture single habitacion" />
        </div>
        {/* Screenshots for desktop */}
        <CapHome
          id="long-img1"
          class="lg:w-[240px] xl:w-[320px] 2xl:w-[354px] mx-auto"
          alt="capture home"
        />
        <div id="long-img1" class="flex flex-col space-y-8 mx-auto">
          <CapNosotros
            class="lg:w-[240px] xl:w-[320px] 2xl:w-[354px]"
            alt="capture nosotros"
          />
          <CapSingleHab
            class="lg:w-[240px] xl:w-[320px] 2xl:w-[354px]"
            alt="capture single habitacion"
          />
        </div>
        <div id="long-img2" class="flex flex-col space-y-8 mx-auto">
          <CapServicios
            class="lg:w-[240px] xl:w-[320px] 2xl:w-[354px]"
            alt="capture servicios"
          />
          <CapDetalleEvento
            class="lg:w-[240px] xl:w-[320px] 2xl:w-[354px]"
            alt="capture detalle evento"
          />
        </div>
        <div id="long-img2" class="flex flex-col space-y-8 mx-auto">
          <CapContact
            class="lg:w-[240px] xl:w-[320px] 2xl:w-[354px]"
            alt="capture contact"
          />
          <CapHabitaciones
            class="lg:w-[240px] xl:w-[320px] 2xl:w-[354px]"
            alt="capture habitaciones"
          />
        </div>
      </div>
      {/* Section Impact */}
      <div class="flex flex-col lg:flex-row lg:pl-[5%] xl:pl-[19%] py-[8%] lg:py-[4%] xl:mt-10">
        <div
          id="banner"
          class="flex flex-col w-full justify-center lg:w-1/2 lg:mr-[4%] xl:mr-[8%]"
        >
          <h2
            id="banner-title"
            class="w-[90%] xl:w-full leading-normal font-bold text-left text-[28px] xl:text-[32px] 2xl:text-[36px] lg:max-w-[437px] mb-6 mx-auto lg:mx-0"
          >
            El Impacto
          </h2>
          <p
            id="banner-text"
            class="w-[90%] xl:w-full text-[18px] lg:text-[22px] leading-normal text-left mx-auto lg:mx-0"
          >
            El sitio web revitalizado marcó un cambio radical para el Hotel Rosa
            Bela. Se observó un aumento notable en el tráfico en línea,
            superando las 7,000 visitas mensuales inicialmente. Estos resultados
            no solo hablaron de la funcionalidad del sitio, sino también del
            poder de una estrategia digital bien ejecutada. La presencia online
            mejorada y los incrementos tangibles en las reservas y el engagement
            de los clientes fueron testimonios claros del éxito del proyecto.
          </p>
          <span
            id="center-text"
            class="flex flex-col text-[#868686] text-center lg:text-left lg:mt-12"
          >
            <p class="text-[65px] font-bold leading-normal lg:text-[77px] xl:text-[89px] 2xl:text-[100px]">
              + 7.000
            </p>
            <p class="text-[25px] font-normal leading-normal lg:text-[27px] xl:text-[30px] lg:pl-[15%]">
              visitas mensuales <br /> &nbsp;&nbsp; en el primer mes
            </p>
          </span>
        </div>
        <div
          id="right-img"
          style={{
            backgroundImage: `url(/assets/img/fondo-morado-rosa-bela-2.webp)`,
          }}
          class="hidden lg:flex flex-col h-[998px] justify-center w-full bg-cover bg-no-repeat flex-nowrap overflow-hidden"
        >
          <ImgComputer
            class="flex ml-[18%] mt-[12%] max-w-[900px] max-h-[910px]"
            alt="computer image"
          />
        </div>
      </div>
      {/* Section Travelers Choice Tripadvisor */}
      <div class="relative flex flex-col py-[8%] lg:py-[4%] mt-[100px] space-y-20 lg:space-y-0 flex-nowrap">
        {/* Mobile */}
        <div
          id="left-img"
          class="relative flex flex-col w-[80%] h-[190px] lg:w-[664px] lg:h-[260px] rounded-[27px] p-[5%] lg:p-[40px] shadow-[10px_10px_30px_0_rgba(0,0,0,0.25)] mx-auto lg:-ml-[5%] 2xl:-mb-[100px]"
        >
          <ImgTravelersChoice
            class="absolute -top-[50%] right-0 w-[143px] h-[147px] lg:hidden"
            alt="travelers choice"
          />
          <ImgTripAdvisor
            class="hidden lg:flex lg:absolute top-[5%] right-[5%] w-[103px] h-[58px] lg:w-[153px] lg:h-[88px] 2xl:w-[202px] 2xl:h-[114px]"
            alt="trip advisor"
          />
          <div class="flex flex-col space-y-2">
            <div class="lg:hidden">
              <FiveDots height={"12"} width={"73"} />
            </div>
            <div class="hidden lg:flex">
              <FiveDots class="hidden lg:flex" />
            </div>
            <h3 class="text-[18px] lg:text-[25px] font-[500] leading-normal tracking-wide">
              Excelente Atención
            </h3>
          </div>
          <p class="text-[12px] lg:text-[18px] font-normal leading-normal tracking-wide mt-2">
            Excelentes instalaciones, buen servicio, muy limpio, habitaciones
            cómodas y de calidad, 100% recomendado, muy buen sitio para pasar el
            día, escuchando buena música y disfrutando con amigos y familiares
          </p>
        </div>

        <div class="flex flex-col w-full justify-center 2xl:-mt-[100px]">
          <h2 class="w-[90%] xl:w-full leading-normal font-bold text-[36px] lg:max-w-[437px] mb-6 mx-auto text-center">
            El Eco del Éxito
          </h2>
          <p class="w-[90%] lg:w-[60%] xl:max-w-[632px] text-[18px] lg:text-[22px] leading-normal mx-auto text-center">
            Los testimonios positivos en TripAdvisor y las historias compartidas
            por los visitantes se convirtieron en validaciones del éxito de la
            transformación digital. Cada comentario reafirmaba el impacto
            positivo de la solución implementada, mostrando la sinergia entre la
            tecnología de Opentech y la excelencia del Hotel Rosa Bela.
          </p>
        </div>

        <div class="flex flex-row items-center">
          <div class="lg:ml-[10%] xl:ml-[15%] 2xl:ml-[20%]">
            <ImgTravelersChoice
              class="hidden lg:flex lg:w-[193px] lg:h-[197px] 2xl:w-[243px] 2xl:h-[247px]"
              alt="travelers choice"
            />
          </div>
          <div
            id="right-img"
            class="relative flex flex-col w-[80%] h-[190px] lg:w-[664px] lg:h-[260px] rounded-[27px] p-[5%] lg:p-[40px] shadow-[10px_10px_30px_0_rgba(0,0,0,0.25)] mx-auto lg:-mr-[5%]"
          >
            <ImgTripAdvisor
              class="absolute top-[5%] left-[5%] lg:right-[5%] lg:left-auto w-[103px] h-[58px] lg:w-[153px] lg:h-[88px] 2xl:w-[202px] 2xl:h-[114px]"
              alt="trip advisor"
            />
            <div class="flex flex-col space-y-2 items-end lg:items-start">
              <div class="lg:hidden">
                <FiveDots height={"12"} width={"73"} />
              </div>
              <div class="hidden lg:flex">
                <FiveDots class="hidden lg:flex" />
              </div>
              <h3 class="text-[18px] lg:text-[25px] font-[500] leading-normal tracking-wide">
                Viaje productivo
              </h3>
            </div>
            <p class="text-[12px] lg:text-[18px] font-normal leading-normal tracking-wide mt-2 text-right lg:text-left">
              Muy buena experiencia, lo recomiendo de verdad. Muy excelente el
              servicio, el personal muy amable y atentos. En mi próxima estadía
              regreso. La comida me pareció agradable y me recomendaron el vino
              de la casa que me pareció bueno.
            </p>
          </div>
        </div>
      </div>
      {/* Section Nuevo horizonte */}
      <div
        id="banner"
        class="flex flex-col lg:flex-row justify-center bg-[#E85082] w-full h-auto 2xl:h-[1002px] pt-[8%] lg:pt-[4%] flex-nowrap overflow-hidden"
      >
        <div
          id="left-img"
          class="flex flex-col w-full justify-start items-start md:items-center lg:justify-center px-[4%] md:px-0"
        >
          <div class="flex flex-col">
            <h2
              id="banner-title"
              class="flex text-white leading-normal font-bold text-left text-[28px] xl:text-[32px] 2xl:text-[36px] max-w-[324px] lg:max-w-[616px] mb-6"
            >
              Un Nuevo <br class="lg:hidden" /> Horizonte Digital
            </h2>
            <p
              id="banner-text"
              class="text-white max-w-[400px] xl:max-w-[540px] text-[18px] lg:text-[22px] leading-normal text-left"
            >
              El proyecto del Hotel Rosa Bela representó el inicio de una nueva
              era digital. El sitio web se erigió como un portal que capturaba
              la calidad y el espíritu del hotel, y como una prueba de la
              habilidad de Opentech para crear soluciones digitales que realzan
              la experiencia del cliente.
            </p>
          </div>
        </div>
        <div
          id="right-img"
          class="relative flex h-[511px] 2xl:h-full mt-10 justify-center lg:pr-[10%]"
        >
          <div class="flex justify-end w-full md:hidden">
            <RosaBelaIcon width={"259"} height={"259"} />
          </div>
          <div class="hidden justify-end w-full md:flex 2xl:hidden">
            <RosaBelaIcon width={"359"} height={"359"} />
          </div>
          <div class="hidden justify-end w-full md:flex xl:hidden">
            <RosaBelaIcon width={"459"} height={"459"} />
          </div>
          <div class="hidden justify-end w-full 2xl:flex">
            <RosaBelaIcon />
          </div>
          <ImgRosaBelaPhone
            class="absolute -bottom-[30%] -right-[30%] md:-bottom-[20%] md:right-0 lg:-bottom-[30%] lg:scale-[0.9] lg:-right-[20%] xl:scale-100 xl:right-0 2xl:-bottom-[20%] 2xl:right-0 2xl:scale-[1.1] max-w-[597px] max-h-[611px] 2xl:max-w-[1114px] 2xl:max-h-[1138px]"
            alt="rosa bela phone"
          />
        </div>
      </div>
    </section>
  );
});
