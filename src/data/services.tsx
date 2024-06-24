import { inlineTranslate } from "qwik-speak";

const t = inlineTranslate();

export const data = [
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
      <p class="font-medium">
        {t(
          `services_services1.paragraph@@Offering expertise in designing brands that not only reflect values but also forge deep connections with audiences.`,
        )}
      </p>
    ),
    parragraphText: `${t(
      `services_services1.paragraph@@Offering expertise in designing brands that not only reflect values but also forge deep connections with audiences.`,
    )}`,
    services: [
      {
        title: `${t("services_services1.logotype@@Logo Design:")}`,
        description: `${t(
          "services_services1.logotype_description@@Crafting an emblem that embodies your brand’s ethos and aspirations..",
        )}`,
      },
      {
        title: `${t("services_services1.brandbook@@Brandbook")}:`,
        description: `${t(
          "services_services1.brandbook_description@@ A comprehensive guide to your brand’s identity, detailing its elements and application.",
        )}`,
      },
      {
        title: `${t("services_services1.verbalIdentity@@Verbal Identity")}:`,
        description: `${t(
          "services_services1.verbalIdentity_description@@Expert advice on shaping your marketing communication and narrative.",
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
      <p class="font-medium">
        {t(
          `services_services2.paragraph@@Expertly creating and positioning digital solutions like websites, e-commerce platforms, and apps, grounded in insightful data analysis.`,
        )}
      </p>
    ),
    parragraphText: `${t(
      `services_services2.paragraph@@Expertly creating and positioning digital solutions like websites, e-commerce platforms, and apps, grounded in insightful data analysis.`,
    )}`,
    services: [
      {
        title: `${t("services_services2.ecommerce@@Web & E-Commerce Sites:")}`,
        description: `${t(
          "services_services2.ecommerce_description@@Developing an online hub to elevate your sales.",
        )}`,
      },
      {
        title: `${t("services_services2.web@@Web & Mobile Apps")}:`,
        description: `${t(
          "services_services2.web_description@@Tailoring applications to suit both your and your customers’ requirements.",
        )}`,
      },
      {
        title: `${t(
          "services_services2.maintenance@@Web Maintenance & Updates",
        )}:`,
        description: `${t(
          "services_services2.maintenance_description@@ Ongoing evaluation and enhancement for your digital platforms.",
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
      <p class="font-medium">
        {t(
          `services_services3.paragraph@@Strategically developing campaigns to connect with the ideal audience, based on data-driven insights.`,
        )}
      </p>
    ),
    parragraphText: `${t(
      `services_services3.paragraph@@Strategically developing campaigns to connect with the ideal audience, based on data-driven insights.`,
    )}`,
    services: [
      {
        title: `${t("services_services3.consulting@@Consulting:")}`,
        description: `${t(
          "services_services3.consulting_description@@Analyzing your business for online strategy integration in line with your goals.",
        )}`,
      },
      {
        title: `${t("services_services3.ads@@Ads")}:`,
        description: `${t(
          "services_services3.ads_description@@Expanding your brand’s reach with targeted digital advertising.",
        )}`,
      },
      {
        title: `${t("services_services3.socials@@Social Media")}:`,
        description: `${t(
          "services_services3.socials_description@@ Solidifying your online presence across relevant platforms.",
        )}`,
      },
      {
        title: `${t("services_services3.seo@@Web Content & SEO")}:`,
        description: `${t(
          "services_services3.seo_description@@ Employing SEO to elevate your visibility in search engines.",
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
      <p class="font-medium">
        {t(
          `services_services4.paragraph@@Your go-to source for knowledge and strategy necessary for digital advancement.`,
        )}
      </p>
    ),
    parragraphText: `${t(
      "services_services4.paragraph@@Your go-to source for knowledge and strategy necessary for digital advancement.",
    )}`,
    services: [
      {
        title: `${t("services_services4.diagnosis@@Diagnosis")}:`,
        description: `${t(
          "services_services4.diagnosis_description@@In-depth analysis to tailor strategies fitting your current situation and objectives.",
        )}`,
      },
      {
        title: `${t("services_services4.study@@Study")}:`,
        description: `${t(
          "services_services4.study_description@@Utilizing the most effective channels to bolster your digital presence.",
        )}`,
      },
      {
        title: `${t("services_services4.briefing@@Briefing")}:`,
        description: `${t(
          "services_services4.briefing_description@@ Curated paid advertising campaigns designed to maximize your brand’s impact.",
        )}`,
      },
    ],
  },
];
