import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { inlineTranslate } from "qwik-speak";
import styles from "./navigation-menu.css?inline"; // Archivo .css correspondiente del componente
import { useLocation } from "@builder.io/qwik-city";
import ImgOtArrowPurple from "../../assets/svg/ot-arrow-purple.svg?jsx";
// import { ChangeLocale } from "../change-locale/change-locale";
//Sección correspondiente al menu de navegación alternable

export default component$(() => {
  const t = inlineTranslate();
  useStylesScoped$(styles);
  const location = useLocation();
  const pathname = location.url.pathname;

  const menu = {
    text: "Menu",
    items: [
      {
        text: `${t("header.HomeText@@Home")}`,
        items: [{ text: `${t("header.Home@@Home")}`, href: "/" }],
      },
      {
        text: `${t("header.servicesText@@Services")}`,
        items: [
          { text: `${t("header.services@@Services")}`, href: "/services/" },
        ],
      },
      // {
      //   text: "Casos de estudio",
      //   items: [{ text: "Casos de estudio", href: "/case-studies/" }],
      // },
      {
        text: "Portfolio",
        items: [{ text: "Portfolio", href: "/portfolio/" }],
      },
      // {
      //   text: "Blog",
      //   items: [{ text: "Blog", href: "/blog/" }],
      // },
      {
        text: `${t("header.contactText@@Contact")}`,
        items: [{ text: `${t("header.contact@@Contact")}`, href: "/contact/" }],
      },
    ],
  };

  return (
    <>
      <div class="text-left mt-5">
        <div class="text-ot-white text-3xl space-y-3 font-bold m-auto leading-10 lg:items-end lg:text-5xl lg:space-y-10">
          {menu.items.map((menuItem, item) => {
            const href = menuItem?.items?.[0].href;
            return (
              <div
                key={item}
                class="flex flex-row items-center space-x-4 lg:space-x-6"
              >
                {pathname === href ? (
                  <ImgOtArrowPurple class="h-6" />
                ) : (
                  <div class="w-6 -ml-1.5" />
                )}

                <a
                  class={`${
                    (pathname !== "/" &&
                      href !== "/" &&
                      pathname.includes(href)) ||
                    (pathname === "/" && pathname.includes(href))
                      ? "text-ot-purple visited:text-ot-purple"
                      : "text-ot-white visited:text-ot-white"
                  } `}
                  href={href}
                >
                  {menuItem.text}
                </a>
              </div>
            );
          })}
          {/* <ChangeLocale /> */}
        </div>
      </div>
    </>
  );
});
