// Esta es la vista Home
import {
  component$,
  useStylesScoped$,
  // useTask$,
  useVisibleTask$
} from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
// import { isServer, isBrowser } from "@builder.io/qwik/build";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
// import AnimatedQuote from "~/components/animated-quote/animated-quote";
import DesktopServices from "~/components/desktop-services/desktop-services";
// import ExpandableServices from "~/components/expandable-services/expandable-services";
import OpentechButton from "~/components/ot-button/ot-button";
import {
  TestimonialSwiper,
  Testimonio,
} from "~/integrations/react/testimonials";
// import CaseStudies from "~/components/case-studies-home/case-studies";
import Marquee from "~/components/marquee/marquee-home";
import { PortfolioSwiper } from "~/integrations/react/portafolio-swiper";
import ImgBannerPrincipal from "../../assets/img/banner-principal.webp?jsx";
import ImgMobileHomeBanner from "../../assets/img/mobile-home-banner.webp?jsx";
import ImgOtArrow from "../../assets/svg/ot-arrow.svg?jsx";
import styles from "./index.css?inline";
// import * as libreria from "@builder.io/qwik-city";
import ScrollReveal from "scrollreveal";
import LottieLoader from "~/components/lottie-loader/lottie-loader";
import TripleMarquee from "~/components/marquee/triple-marquee";
import Typewrite from "~/components/typewrite/typewrite";
import bannerMobileLottie from "../../assets/animations/banner-movil.json";
import bannerLottie from "../../assets/animations/banner.json";
import embudoDesktop from "../../assets/animations/embudo-desktop-english.json";
import embudoMobile from "../../assets/animations/embudo-mobile-english.json";
// import ImgPill from "../assets/img/pill-img.webp?jsx";
import ImgIgGreen from "../../assets/svg/ig-green.svg?jsx";
// import { data } from "~/data/services";
import ExpandableSection from "~/components/expandable-section/expandable-section";
// import ImgIgWhite from "../assets/svg/ig-white.svg?jsx";

// import ImgChatAnimation from '../assets/animations/chat-animation.gif?jsx';


export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
export const BUILDER_MODEL = "portfolio";

export const useQuery = routeLoader$(async () => {
  const { results } = await fetch(
    `https://cdn.builder.io/api/v3/content/${BUILDER_MODEL}?apiKey=${BUILDER_PUBLIC_API_KEY}&limit=0`
  ).then((res) => res.json());
  const data = results;
  const portfolios = data.map((elem: any) => ({
    title: elem.data.title['Default'],
    description: elem.data.description,
    featuredImage: elem.data.featuredImage,
    link: elem.data.url,
    tags: elem.data?.tags,
  }));

  return portfolios;
});

export default component$(() => {

  useStylesScoped$(styles);
  const t = inlineTranslate();
  const portfolios = useQuery().value;
  // const fd = useFormatDate();
  // const fn = useFormatNumber();
  const testimonialGabriela = t(
    "home.testimonialGabriela@@La colaboración con Opentech ha sido clave para lograr productos digitales altamente funcionales y visualmente atractivos. Su experiencia en diseño y desarrollo ha permitido cumplir con todas las expectativas de nuestros clientes. Estos siempre quedan completamente satisfechoscon el resultado final."
  );
  const testimonialRoger = t(
    "home.testimonialRoger@@Contratamos a Opentech para mejorar nuestra exposición en el mercado local mediante la publicidad digital. El equipo fue muy profesional y eficiente, logramos un aumento significativo en la visualización de nuestras redes sociales y en las ventas. Altamente recomendados."
  );
  const testimonialEmilen = t(
    "home.testimonialEmilen@@Estamos muy satisfechos con el aporte y la colaboración del equipo de Opentech en el desarrollo de Optimum Oil & Gas, su experiencia y conocimientos en el desarrollo de software especificamente en el ambito del frontend han sido fundamentales en la creación de un sistema intuitivo y fácil de usar. Sin duda, los recomendamos para cualquier proyecto relacionado con el diseño y desarrollo de software."
  );

  const scheduleAsesory = t("home.scheduleAsesory@@Talk to Us");
  const mock: Testimonio[] = [
    {
      name: "Gabriela Martínez",
      cargo: "ARQUETIPO",
      imageUrl: "/img/gabriela-martinez.jpg",
      testimonialText: testimonialGabriela,
      rating: 5,
    },
    {
      name: "Roger Zambrano",
      imageUrl: "/img/roger-zambrano.jpg",
      cargo: "LA CROCANTE",
      testimonialText: testimonialRoger,
      rating: 5,
    },
    {
      name: "Emilen Jimenez",
      imageUrl: "/img/emilen-jimenez.jpg",
      cargo: "BLC VENEZUELA",
      testimonialText: testimonialEmilen,
      rating: 5,
    },
  ];

  const textForTyping = [
    `${t("home.ecommerce@@Ecommerce")}`,
    `${t("home.websites@@Sitios web")}`,
    `${t("home.applications@@Aplicaciones")}`,
  ];
// eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    ScrollReveal().reveal("#title", {
      delay: 500,
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#typewrite", {
      delay: 600,
      origin: "bottom",
      distance: "100px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal("#sub-title", {
      delay: 700,
      origin: "left",
      distance: "100px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal("#call-to-action", {
      delay: 800,
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#testimonials", {
      delay: 1000,
      origin: "left",
      distance: "100px",
      duration: 2000,
      cleanup: true,
    });
    ScrollReveal().reveal("#somos-opentech-img", {
      delay: 300,
      origin: "bottom",
      distance: "100px",
      duration: 1500,
      cleanup: true,
    });
    ScrollReveal().reveal("#somos-opentech-carousel", {
      delay: 500,
      origin: "right",
      distance: "100px",
      duration: 1500,
      cleanup: true,
    });
    ScrollReveal().reveal("#somos-opentech-text", {
      delay: 700,
      origin: "left",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#services-section-mobile", {
      delay: 500,
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#roadmap-section", {
      delay: 500,
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#embudoDesktopContainer", {
      delay: 700,
      origin: "right",
      distance: "100px",
      duration: 1800,
      cleanup: true,
    });
    ScrollReveal().reveal("#embudoMobileContainer", {
      delay: 500,
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#horizontal-animation", {
      delay: 500,
      origin: "left",
      distance: "100px",
      duration: 1500,
      cleanup: true,
    });
    ScrollReveal().reveal("#case-studies", {
      delay: 500,
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#checklist-section", {
      delay: 700,
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      cleanup: true,
    });
    ScrollReveal().reveal("#fade-card", {
      delay: 200,
      opacity: 0,
      duration: 2000,
      cleanup: true,
    });
    ScrollReveal().reveal(".services", {
      delay: 500,
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      cleanup: true,
    });
  });

  return (
    <div class="w-full">
      {/* Call to action */}
      <div class="max-w-[618px] lg:max-w-[1290px] mx-auto px-12 min-[618px]:px-0 lg:px-12 mb-16">
        <h1 class="text-xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
          {t("home.title@@Elevate Your Business Intelligently")}
        </h1>

        <div class="flex flex-col lg:flex-row">
          <div class="flex-none mb-[0.25rem]">
            <span class="text-xl lg:text-5xl xl:text-6xl mr-[1rem] font-bold w-auto tracking-tighter">
              {t("home.preTypewritePhrase@@Creamos y posicionamos ")}
            </span>
          </div>
          <div class="flex-none w-2/5 lg:w-max">
            <Typewrite
              textArray={textForTyping}
              class="w-max text-xl lg:text-5xl xl:text-6xl font-bold"
            />
            {/* <div class="flex-1 w-1 invisible">.</div> */}
          </div>
          <div class="flex-1 w-1 hidden lg:invisible">.</div>
        </div>

        {/* Shown on mobile */}
        <div class="lg:hidden">
          <div class="flex flex-row">
            <ImgOtArrow
              // alt="flecha decorativa señalando texto"
              class="w-3 lg:-mt-4 mr-2"
            />
            <p
              class="text-sm mt-6"
              dangerouslySetInnerHTML={t("home.subtitleMobile")}
            />
          </div>
          <OpentechButton
            isGoogleAppointment={true}
            classes={
              "mt-8 hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
            }
            backgroundColor={"bg-ot-black"}
            textColor="text-ot-white"
            fontSize="whitespace-nowrap"
          />
        </div>

        {/* Shown on desktop resolutions */}
        <div class="hidden lg:flex lg:flex-row justify-between items-end mt-8 xl:mb-12">
          <div class="flex flex-row text-sm mt-4 items-center xl:text-xl xl:font-bold">
            <ImgOtArrow
              // alt="flecha decorativa señalando texto"
              class="h-4 mr-4 xl:-mt-3"
            />
            <p
              class="text-left text-lg mt-6 xl:text-2xl font-medium"
              dangerouslySetInnerHTML={t("home.subtitleDesktop")}
            />
          </div>
        </div>

        {/* Testimonials desktop*/}
        <div class="w-full mx-auto max-w-[618px] lg:max-w-[1600px]">
          <TestimonialSwiper testimonials={mock} client:load />
        </div>
      </div>

      {/* Animación de Logo */}
      <div
        id="logo-animation-section"
        class="mx-auto h-full w-full lg:mb-[0px]"
      >
        <div class="hidden md:block">
          <LottieLoader id="bannerAnimation" animationData={bannerLottie} />
        </div>
        <div class="md:hidden">
          <LottieLoader
            id="bannerAnimationMobile"
            animationData={bannerMobileLottie}
          />
        </div>
      </div>

      {/* Somos OpenTech */}
      <div class="bg-ot-black p-10 lg:px-28 lg:pt-20">
        <ImgBannerPrincipal
          id="somos-opentech-img"
          alt="Equipo de Opentech"
          class="hidden max-w-[1290px] w-full lg:block m-auto rounded-md h-90 crop"
        />
        <ImgMobileHomeBanner
          id="somos-opentech-img"
          alt="Equipo de Opentech"
          class="lg:hidden m-auto w-full max-w-[618px] rounded-md h-90 crop"
        />
        {/* Marquesina */}
        <Marquee id="somos-opentech-carousel" />

        {/* Mobile version */}
        <div
          id="somos-opentech-text"
          class="pt-12 md:pt-16 lg:hidden max-w-[618px] mx-auto"
        >
          <p class="text-ot-white text-xs">
            {t(
              "home.about-us-text@@We're a team focused on actionable solutions that drive measurable outcomes. Our aim is to be a reliable digital resource, providing insights and strategies that propel your business forward."
            )}
          </p>
          <div class="flex flex-col mt-12 justify-between text-ot-white ">
            <a
              href="https://www.instagram.com/somosopentech/"
              target="_blank"
              class="flex flex-row text-3xs items-center cursor-pointer"
            >
              <ImgIgGreen 
              // alt="Logo de Instagram" 
              class="w-4" />
              <p class="pl-2 text-base">@somosopentech</p>
            </a>
            <p class="text-2xl font-bold">
              {t("home.about-us@@#WEAREOPENTECH")}
            </p>
          </div>
        </div>

        {/* Desktop version */}
        <div
          id="somos-opentech-text"
          class="pt-20 hidden max-w-[1290px] mx-auto lg:flex flex-row lg:pb-[68px]"
        >
          <div class="text-ot-white w-4/6">
            <div class="flex flex-row text-xs items-center">
              <ImgIgGreen 
              // alt="Logo de Instagram" 
              class="w-4" />
              <p class="pl-2 text-lg">@somosopentech</p>
            </div>
            <p class="text-4xl font-bold mt-2">
              {t("home.about-us@@#WEAREOPENTECH")}
            </p>
          </div>
          <div class="w-3/6">
            <p class="text-ot-white text-md xl:text-lg">
              {t(
                "home.about-us-text@@We're a team focused on actionable solutions that drive measurable outcomes. Our aim is to be a reliable digital resource, providing insights and strategies that propel your business forward."
              )}
            </p>
          </div>
        </div>
      </div>
      <div class="max-w-[618px] lg:max-w-none mx-auto lg:mx-14 xl:mx-auto">
        <div id="fade-card" class="my-12 lg:hidden">
          <ExpandableSection
            title={`${t("home.services1@@Creative & Brand Experience")}`}
            borderColor={"border-ot-green"}
            backgroundColor={"bg-ot-green"}
            color="ot-green"
          />
          <ExpandableSection
            title={`${t("home.services2@@Technology & Data")}`}
            borderColor={"border-ot-yellow"}
            backgroundColor={"bg-ot-yellow"}
            color="ot-yellow"
          />
          <ExpandableSection
            title={`${t("home.services3@@Digital Marketing")}`}
            borderColor={"border-ot-orange"}
            backgroundColor={"bg-ot-orange"}
            color="ot-orange"
          />
          <ExpandableSection
            title={`${t("home.services4@@Consulting & Sales")}`}
            borderColor={"border-ot-purple"}
            backgroundColor={"bg-ot-purple"}
            color="ot-purple"
          />
        </div>
        <div
          id="services-section"
          class="max-w-[1290px] hidden lg:block xl:pl-20 2xl:pl-0 m-auto my-12 "
        >
          <DesktopServices />
        </div>
      </div>

      {/* Crecimiento */}
      <div id="roadmap-section" class=" bg-ot-black pb-16 lg:px-20">
        <div class="max-w-[300px] lg:max-w-[1290px] lg:flex flex-row mx-auto">
          <div class="text-center py-10 lg:pl-16 lg:self-center lg:text-left lg:w-2/6">
            <h2 class="text-xl leading-tight lg:text-3xl xl:text-5xl text-ot-white mb-4 font-bold tracking-tighter">
              {t(`home.roadmap@@Guiding Your Growth`)}
            </h2>
            <p class="text-xs lg:text-sm font-regular text-ot-white">
              {t(`home.roadmap_subtitle@@Focused on Results`)}
            </p>
          </div>
          <div class="lg:w-4/6">
            <div class="hidden lg:block">
              <div id="embudoDesktopContainer" />
            </div>
            <div class="lg:w-4/6">
              <div class="hidden lg:block">
                {/* <div id="embudoDesktopContainer" /> */}
                <LottieLoader
                  id="embudoDesktopContainer"
                  animationData={embudoDesktop}
                />
              </div>
              <div class="lg:hidden">
                {/* <div id="embudoMobileContainer" /> */}
                <LottieLoader
                  id="embudoMobileContainer"
                  animationData={embudoMobile}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animación horizontal infinita */}
      <TripleMarquee id="horizontal-animation" />

      {/* Sección de Casos de Estudio */}
      <div id="case-studies" class="max-w-[1290px] mx-auto">
        <p class="mb-10 mt-16 lg:ml-32 text-center lg:text-left font-bold text-lg lg:text-4xl">
          {t("home.studyCaseTitle@@Algunos de nuestros proyectos realizados")}
        </p>
        {/* <CaseStudies /> */}
        <PortfolioSwiper portfolios={portfolios}/>
      </div>
    </div>
  );
});

// export const head: DocumentHead = {
//   title: "LCC OpenTech - Creación de Ecommerce y Sitios Web",
//   meta: [],
//   links: [
//     {
//       rel: "canonical",
//       href: "https://lccopen.tech",
//     },
//   ],
// };

export const head: DocumentHead = ({resolveValue, params}) => {
  const t = inlineTranslate();
  const title = t("home.metaTitle@@OpenTech - Creación de Ecommerce y Sitios Web");
  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: t("home.metaDescription@@Transforma tu presencia digital con Opentech. Soluciones de desarrollo web a la medida para impulsar tu negocio. Haz clic y empieza ahora."),
      },
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:image",
        content: `https://${import.meta.env.PUBLIC_DOMAIN}/OT-OG.jpg`
      }
    ],
    links: [
      {
        rel: "canonical",
        href: "https://lccopen.tech",
      },
    ],
  };
};