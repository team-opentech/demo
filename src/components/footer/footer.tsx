import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { inlineTranslate, translatePath } from "qwik-speak";
import ImgWhatsApp from "../../../public/assets/whatsapp.svg?jsx";
import ImgBlackCircleIg from "../../assets/svg/black-circle-ig.svg?jsx";
import ImgBlackCircleLinkedin from "../../assets/svg/black-circle-linkedin.svg?jsx";
import OtIcon from "../../assets/svg/ot-icon.svg?jsx";
import ContactForm from "../contact-form/contact-form";
import styles from "./footer.css?inline";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const t = inlineTranslate();
  useStylesScoped$(styles);
  const location = useLocation();
  const pathname = location.url.pathname;

  const getPath = translatePath();
  const [
    homePath,
    servicesPath,
    blogPath,
    caseStudiesPath,
    contactPath,
  ] = getPath(["/", "/services/", "/blog/", "/portfolio/", "/contact/"]);

  const menu = [
    {
      text: `${t("header.HomeText@@Home")}`,
      href: homePath,
    },
    {
      text: `${t("header.servicesText@@Sevicios")}`,
      href: servicesPath,
    },
    {
      text: `${t("header.blogText@@Blog")}`,
      href: blogPath,
    },
    {
      text: `${t("header.portfolioText@@Portfolio")}`,
      href: caseStudiesPath,
    },
    {
      text: `${t("header.contactText@@Contacto")}`,
      href: contactPath,
    },
  ];

  return (
    <section id="footer" class="bg-[#F2F2F0] mt-14">
      <ContactForm />
      <div class="font-beVietnamPro w-full max-w-[618px] px-[15px] mx-auto lg:px-[12%] lg:max-w-none">
        <div class="py-12 max-w-[1290px] mx-auto">
          <div id="footer-contact" class="lg:flex lg:flex-row justify-evenly">
            <div class="">
              <OtIcon class="w-3/5 xs:w-[40%] ss:w-[30%] sm:w-[25%] md:w-[20%] lg:w-[60%] lg:mt-2 lg:self-start" />
              <button
                class="sm:w-[80%] sm:max-w-[246px] bg-[#40C351] px-[14px] py-[10px] mt-8 rounded-[10px]
              max-sm:w-[246px] max-sm:px-5 cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300 group"
              >
                <a
                  href="https://wa.me/+584121121893"
                  class="flex justify-start items-start"
                >
                  <ImgWhatsApp class="w-[32px] my-auto lg:self-start mr-2" />
                  <div class="flex flex-col">
                    <p class="text-white font-beVietnamPro font-bold text-[16px] group-hover:underline">
                      +58 (412) 112-1893
                    </p>
                    <p class="text-white font-beVietnamPro font-medium text-[13px] group-hover:underline">
                      {t("footer.WhatsAppBtn@@Escribenos por Whatsapp")}
                    </p>
                  </div>
                </a>
              </button>
            </div>
            <div class="hidden lg:flex lg:flex-col space-y-2">
              {menu.map((menuItem, item) => {
                return (
                  <a
                    key={item}
                    href={`${menuItem.href}`}
                    class={`flex flex-row items-center group `}
                  >
                    <span
                      class={`font-semibold text-black active:scale-90 transition-transform duration-200 ease-in-out ${
                        pathname === menuItem.href
                          ? "text-ot-purple"
                          : "text-ot-black"
                      }`}
                    >
                      {menuItem.text}
                    </span>
                  </a>
                );
              })}
              {/* <a
                class="font-semibold text-black active:scale-90 transition-transform duration-200 ease-in-out"
                href="/"
              >
                {t("footer.homeText@@Home")}
              </a>
              <a
                class="font-semibold text-black active:scale-90 transition-transform duration-200 ease-in-out"
                href="/services"
              >
                {t("footer.servicesText@@Servicios")}
              </a>
              <a
                class="font-semibold text-black active:scale-90 transition-transform duration-200 ease-in-out"
                href="/contact"
              >
                {t("footer.contactText@@Contacto")}
              </a>
              <a
                class="font-semibold text-black active:scale-90 transition-transform duration-200 ease-in-out"
                href="/portfolio"
              >
                {t("footer.portfolioText@@Caso de estudios")}
              </a>
              <a
                class="font-semibold text-black active:scale-90 transition-transform duration-200 ease-in-out"
                href="/blog"
              >
                {t("footer.blogText@@Blog")}
              </a> */}
            </div>
            <div class="flex flex-col lg:flex-row justify-evenly mt-10 lg:mt-0 lg:w-1/2">
              <div class="lg:w-48">
                <p class="text-lg font-bold">Venezuela</p>
                <p class="text-[14px] font-light pt-2 max-sm:max-w-[218px]">
                  Puerto Ordaz - <br />
                  Estado Bolívar
                </p>
              </div>
              <div class="mt-6 lg:mt-0 lg:w-48">
                <p class="text-lg font-bold">Estados Unidos</p>
                <p class="text-[14px] font-light pt-2 max-w-[218px]">
                  Miami - Florida
                </p>
              </div>
            </div>
          </div>
          <div id="footer-info" class="flex flex-col">
            <div class="flex flex-row space-x-5 items-end w-2/5 mt-8 lg:mt-0 lg:w-auto lg:justify-end">
              <a
                href="https://www.instagram.com/somosopentech/"
                target="_blank"
                class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
              >
                <ImgBlackCircleIg class="max-sm:h-10 h-7 md:h-8 xl:h-10 active:scale-90 transition-transform duration-200 ease-in-out" />
              </a>
              <a
                href="https://www.linkedin.com/company/lcc-opentech/"
                target="_blank"
                class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
              >
                <ImgBlackCircleLinkedin class="max-sm:h-10 h-7 md:h-8 xl:h-10 active:scale-90 transition-transform duration-200 ease-in-out" />
              </a>
            </div>
            {/* Movil */}
            <div class="text-xs text-ot-dark-gray mt-6 justify-between text-start font-light w-full lg:hidden">
              <p>
                © 2023 TechLab Solutions LLC — All rights reserved. | Todos los
                derechos reservados.
              </p>
            </div>
            {/* Desktiop */}
            <div class="text-sm text-[#939393] mt-6 justify-end space-x-5 text-end w-full hidden lg:flex flex-row">
              <p>
                © 2023 TechLab Solutions LLC — All rights reserved. | Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
