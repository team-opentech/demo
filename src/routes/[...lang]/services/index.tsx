import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";
import ScrollReveal from "scrollreveal";
import ExpandableService from "~/components/expandable-services/expandable-services";
import OpentechButton from "~/components/ot-button/ot-button";
import ImgServiceMain from "../../../assets/img/service-main.webp?jsx";
import styles from "./servicios.css?inline"; // Archivo .css correspondiente del componente

export default component$(() => {
  useStylesScoped$(styles);
  const t = inlineTranslate();

  const data = [
    {
      serviceNumber: "01",
      title: `${t(`services_services1.title@@Creative & Brand Experience`)}`,
      textColor: "text-ot-green",
      circleColor:
        "border-ot-green border-[16px] bg-white lg:border-0 lg:bg-ot-green",
      strokeColor: "stroke-ot-green",
      borderColor: "border-ot-green",
      gradientColor: "bg-ot-green #00b56f",
      img: "/assets/videos/Diseño.webm",
      parragraph: (
        <div class="font-medium">
          {t(
            `services_services1.paragraph@@Offering expertise in designing brands that not only reflect values but also forge deep connections with audiences.`
          )}
        </div>
      ),
      parragraphText: `${t(
        `services_services1.paragraph@@Offering expertise in designing brands that not only reflect values but also forge deep connections with audiences.`
      )}`,
      services: [
        {
          title: `${t("services_services1.logotype@@Logo Design:")}`,
          description: `${t(
            "services_services1.logotype_description@@Crafting an emblem that embodies your brand’s ethos and aspirations.."
          )}`,
        },
        {
          title: `${t("services_services1.brandbook@@Brandbook")}:`,
          description: `${t(
            "services_services1.brandbook_description@@ A comprehensive guide to your brand’s identity, detailing its elements and application."
          )}`,
        },
        {
          title: `${t("services_services1.verbalIdentity@@Verbal Identity")}:`,
          description: `${t(
            "services_services1.verbalIdentity_description@@Expert advice on shaping your marketing communication and narrative."
          )}`,
        },
      ],
    },
    {
      serviceNumber: "02",
      title: `${t(`services_services2.title@@Technology & Data`)}`,
      textColor: "text-ot-yellow",
      circleColor:
        "border-ot-yellow border-[16px] bg-white lg:border-0 lg:bg-ot-yellow",
      strokeColor: "stroke-ot-yellow",
      borderColor: "border-ot-yellow",
      gradientColor: "bg-ot-yellow #ffb600",
      img: "/assets/videos/Desarrollo.webm",
      parragraph: (
        <div class="font-medium">
          {t(
            `services_services2.paragraph@@Expertly creating and positioning digital solutions like websites, e-commerce platforms, and apps, grounded in insightful data analysis.`
          )}
        </div>
      ),
      parragraphText: `${t(
        `services_services2.paragraph@@Expertly creating and positioning digital solutions like websites, e-commerce platforms, and apps, grounded in insightful data analysis.`
      )}`,
      services: [
        {
          title: `${t(
            "services_services2.ecommerce@@Web & E-Commerce Sites:"
          )}`,
          description: `${t(
            "services_services2.ecommerce_description@@Developing an online hub to elevate your sales."
          )}`,
        },
        {
          title: `${t("services_services2.web@@Web & Mobile Apps")}:`,
          description: `${t(
            "services_services2.web_description@@Tailoring applications to suit both your and your customers’ requirements."
          )}`,
        },
        {
          title: `${t(
            "services_services2.maintenance@@Web Maintenance & Updates"
          )}:`,
          description: `${t(
            "services_services2.maintenance_description@@ Ongoing evaluation and enhancement for your digital platforms."
          )}`,
        },
      ],
    },
    {
      serviceNumber: "03",
      title: `${t(`services_services3.title@@Digital Marketing`)}`,
      textColor: "text-ot-orange",
      circleColor:
        "border-ot-orange border-[16px] bg-white lg:border-0 lg:bg-ot-orange",
      strokeColor: "stroke-ot-orange",
      borderColor: "border-ot-orange",
      gradientColor: "bg-ot-orange #ff4502",
      img: "/assets/videos/Marketing.webm",
      parragraph: (
        <div class="font-medium">
          {t(
            `services_services3.paragraph@@Strategically developing campaigns to connect with the ideal audience, based on data-driven insights.`
          )}
        </div>
      ),
      parragraphText: `${t(
        `services_services3.paragraph@@Strategically developing campaigns to connect with the ideal audience, based on data-driven insights.`
      )}`,
      services: [
        {
          title: `${t("services_services3.consulting@@Consulting:")}`,
          description: `${t(
            "services_services3.consulting_description@@Analyzing your business for online strategy integration in line with your goals."
          )}`,
        },
        {
          title: `${t("services_services3.ads@@Ads")}:`,
          description: `${t(
            "services_services3.ads_description@@Expanding your brand’s reach with targeted digital advertising."
          )}`,
        },
        {
          title: `${t("services_services3.socials@@Social Media")}:`,
          description: `${t(
            "services_services3.socials_description@@ Solidifying your online presence across relevant platforms."
          )}`,
        },
        {
          title: `${t("services_services3.seo@@Web Content & SEO")}:`,
          description: `${t(
            "services_services3.seo_description@@ Employing SEO to elevate your visibility in search engines."
          )}`,
        },
      ],
    },
    {
      serviceNumber: "04",
      title: `${t(`services_services4.title@@Consulting & Sales`)}`,
      textColor: "text-ot-purple",
      circleColor:
        "border-ot-purple border-[16px] bg-white lg:border-0 lg:bg-ot-purple",
      strokeColor: "stroke-ot-purple",
      borderColor: "border-ot-purple",
      gradientColor: "bg-ot-purple #8000ed",
      img: "/assets/videos/Ventas.webm",
      parragraph: (
        <div class="font-medium">
          {t(
            `services_services4.paragraph@@Your go-to source for knowledge and strategy necessary for digital advancement.`
          )}
        </div>
      ),
      parragraphText: `${t(
        "services_services4.paragraph@@Your go-to source for knowledge and strategy necessary for digital advancement."
      )}`,
      services: [
        {
          title: `${t("services_services4.diagnosis@@Diagnosis")}:`,
          description: `${t(
            "services_services4.diagnosis_description@@In-depth analysis to tailor strategies fitting your current situation and objectives."
          )}`,
        },
        {
          title: `${t("services_services4.study@@Study")}:`,
          description: `${t(
            "services_services4.study_description@@Utilizing the most effective channels to bolster your digital presence."
          )}`,
        },
        {
          title: `${t("services_services4.briefing@@Briefing")}:`,
          description: `${t(
            "services_services4.briefing_description@@ Curated paid advertising campaigns designed to maximize your brand’s impact."
          )}`,
        },
      ],
    },
  ];

  useVisibleTask$(() => {
    ScrollReveal().reveal(".left-img", {
      delay: 700,
      origin: "left",
      distance: "150px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal(".right-img", {
      delay: 700,
      origin: "right",
      distance: "150px",
      duration: 1400,
      cleanup: true,
    });
    ScrollReveal().reveal("#fade-card", {
      delay: 200,
      opacity: 0,
      duration: 2000,
      cleanup: true,
    });
    ScrollReveal().reveal("#fade-img", {
      delay: 0,
      opacity: 0,
      duration: 1000,
      cleanup: true,
    });
    ScrollReveal().reveal(".services", {
      delay: 200,
      origin: "bottom",
      distance: "150px",
      duration: 1400,
      cleanup: true,
    });
  });

  return (
    <div class="max-w-[1290px] mx-5 lg:mx-14 xl:mx-auto">
      <div class="bg-ot-black rounded-2xl lg:flex lg:flex-row lg:relative">
        <div class="h-fit p-8 px-10 pt-12 lg:w-6/12 lg:pl-16 lg:pr-0">
          <h1 class="text-ot-white text-xl font-bold tracking-tighter lg:text-3xl xl:text-4xl lg:font-extrabold lg:mr-10">
            {t(`services.title1@@Digital`)}
            <br />
            {t(`services.title2@@Growth`)}
          </h1>
          <p class="text-ot-white text-sm xl:text-xl mt-5 lg:text-md lg:mr-12 xl:mr-28 ">
            {t(
              `services.paragraph@@Harnessing technology in our Growth Marketing methodology, we focus on insightful and impactful outcomes. The sales funnel is our tool for deep understanding and thorough evaluation of each step in the consumer journey.`
            )}
          </p>
          <div class="flex flex-row justify-between mt-10">
            <OpentechButton
              title={t(`services.button1@@Discover How to Grow`)}
              fontSize={"text-ot-white"}
              paddingX={"px-10 py-3"}
              classes={
                "border border-ot-white hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
              }
            />
          </div>
        </div>
        <div class="relative lg:w-6/12 flex justify-center">
          <ImgServiceMain class="grayscale object-cover sm:object-none h-[335px] rounded-b-2xl lg:rounded-xl lg:w-full lg:h-full lg:object-cover" />
        </div>
      </div>
      <div class="my-12 lg:hidden">
        {data.map((item, index) => (
          <ExpandableService
            id="fade-card"
            description={item.parragraphText}
            title={item.title}
            image={item.img}
            fontColor={item.textColor}
            serviceNumber={item.serviceNumber}
            borderColor={item.borderColor}
            backgroundColor={item.circleColor}
            gradientColor={item.gradientColor}
            key={index}
            services={item.services}
          />
        ))}
      </div>
      <div class="lg:flex lg:flex-row hidden mt-28">
        <div class="w-full">
          {data.map((item, k) => (
            <div
              key={k}
              class={` ${
                k > 0 && "services"
              } rounded-2xl mb-28 lg:flex lg:flex-row lg:relative`}
            >
              <div>
                <div class="text-white text-2xs mb-6">{item.serviceNumber}</div>
                <div
                  id="circle-item"
                  class={`flex-col rounded-full w-[53px] h-[53px] items-center justify-center lg:flex ${item.circleColor} z-10`}
                >
                  <div class="bg-ot-white h-5 w-5 rounded-full z-10" />
                </div>
                {k !== 3 ? (
                  <div
                    class={`absolute ease-in transition-opacity delay-100 ${item.circleColor} w-[20px] h-[550px] lg:h-[650px] xl:h-[600px]  ml-[18px] mb-[-5px] mt-[-5px] `}
                  />
                ) : null}
              </div>
              <div class={` ${k > 0 && "left-img"} px-10 lg:w-2/4 lg:pr-0`}>
                <div
                  class={`text-left text-2xs xl:text-lg mb-6 ${item.textColor}`}
                >
                  {item.serviceNumber}
                </div>
                <div class="text-ot-black text-xl font-bold tracking-tighter lg:text-3xl lg:font-extrabold lg:mr-10">
                  {item.title}
                </div>
                <div class="text-ot-black text-md xl:text-lg mt-5 lg:mr-12">
                  {item.parragraph}
                </div>
                <p
                  class={`text-ot-white w-fit text-center rounded-full py-1 ${item.circleColor} text-2xs lg:text-lg mt-5 px-2 mb-5`}
                >
                  {t("services.weOffer@@We offer services in:")}
                </p>
                {item.services.map((service: any, k) => (
                  <div key={k} class="flex flex-row mr-24">
                    <div class="h-4 m-4">
                      <svg
                        class={`h-full fill-transparent ${item.strokeColor} stroke-[6.5px]`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15.98 24.13"
                      >
                        <defs />
                        <g id="Layer_2" data-name="Layer 2">
                          <g id="HOME_DESKTOP" data-name="HOME DESKTOP">
                            <path
                              class="cls-1"
                              d="M16,12.07A12.34,12.34,0,0,0,3.38,24.13"
                            />
                            <path
                              class="cls-1"
                              d="M16,12.06A12.34,12.34,0,0,1,3.36,0"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="xl:text-lg">
                      <div key={k + "-" + JSON.stringify(service)} class="mb-2">
                        <i class="not-italic font-bold">{service.title}</i>{" "}
                        {service.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class={` ${k > 0 && "right-img"} relative lg:w-2/4`}>
                <video
                  key={k}
                  autoplay
                  loop
                  muted
                  playsInline
                  class="object-cover h-full rounded-lg "
                  width={" "}
                  height={" "}
                >
                  <source src={item.img} type="video/webm" />
                </video>
                {/* <img
                  src={item.img}
                  class="object-none h-full rounded-lg "
                  width={" "}
                  height={" "}
                /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({resolveValue, params}) => {
  const t = inlineTranslate();
  const title = t("services.metaTitle@@Opentech - Expertos en Desarrollo Web y Ecommerce");
  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: t("services.metaDescription@@Descubre nuestros servicios: Desarrollo web, e-commerce, y estrategias de marketing digital para tu crecimiento. Inicia tu transformación hoy."),
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