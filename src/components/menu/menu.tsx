import {
  component$,
  useContext,
  useStore,
  useStylesScoped$,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";

import { OtPurpleArrow } from "../icons/ot-purple-arrow";
import IGIcon from "~/assets/svg/white-circle-ig.svg?jsx";
import LinkedinIcon from "~/assets/svg/white-circle-linkedin.svg?jsx";
import styles from "./menu.css?inline";
import { useLocation } from "@builder.io/qwik-city";
import { inlineTranslate, translatePath } from "qwik-speak";
import { HeaderContext } from "~/context";
import lottie from "lottie-web";
import menuIcon from "~/assets/animations/menu.json";
import menuIcon2 from "~/assets/animations/menu2.json";

export default component$(() => {
  const headerState = useContext(HeaderContext);
  const state = useStore({ headerIndex: headerState.headerIndex });
  const t = inlineTranslate();
  const location = useLocation();
  const pathname = location.url?.pathname;
  // console.log("menu pathname variable", pathname);
  const getPath = translatePath();
  const [
    homePath,
    servicesPath,
    blogPath,
    portfolioPath,
    contactPath,
  ] = getPath(["/", "/services/", "/blog/", "/portfolio/", "/contact/"]);

  const menu = [
    {
      text: `${t("header.HomeText@@Home")}`,
      href: homePath,
    },
    {
      text: `${t("header.servicesText@@Services")}`,
      href: servicesPath,
    },
    {
      text: `${t("header.blogText@@Blog")}`,
      href: blogPath,
    },
    {
      text: `${t("header.portfolioText@@Portfolio")}`,
      href: portfolioPath,
    },
    {
      text: `${t("header.contactText@@Contact")}`,
      href: contactPath,
    },
  ];
  useStylesScoped$(styles);

  useVisibleTask$(({ track, cleanup }) => {
    track(() => headerState.isMenuOpen);

    const menuIconBlack = document.getElementById("menuIconBlack");
    const menuIconWhite = document.getElementById("menuIconWhite");

    let menuIconAnimation: any, menuIconAnimation2: any;

    if (menuIconBlack && menuIconWhite) {
      menuIconAnimation = lottie.loadAnimation({
        container: menuIconBlack as Element,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: menuIcon,
      });

      menuIconAnimation2 = lottie.loadAnimation({
        container: menuIconWhite as Element,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: menuIcon2,
      });
    }

    cleanup(() => {
      if (menuIconAnimation) {
        menuIconAnimation.destroy();
      }
      if (menuIconAnimation2) {
        menuIconAnimation2.destroy();
      }
    });
  });

  return (
    <>
      <div
        class="relative flex flex-col items-center lg:mr-8 "
        onClick$={() => {
          headerState.isMenuOpen = !headerState.isMenuOpen;
          headerState.headerIndex = 1;
        }}
      >
        <div class="relative h-6 lg:h-10 w-6 lg:w-10 z-50">
          <div
            id="menuIconBlack"
            class={`absolute top-0 left-0 ${
              headerState.isMenuOpen
                ? "opacity-0"
                : "opacity-100 transition-all duration-300 delay-[0.8s]"
            }`}
          />
          <div
            id="menuIconWhite"
            class={`absolute top-0 left-0 ${
              headerState.isMenuOpen
                ? "opacity-100"
                : "opacity-0 transition-all duration-300 delay-[0.9s]"
            }`}
          />
        </div>
        <p
          class={`text-xs lg:text-base font-medium z-50 transition-all ease-in select-none ${
            headerState.isMenuOpen
              ? "text-white duration-300 delay-[1s]"
              : "text-black duration-[0.05s]"
          }`}
        >
          {t("header.menu@@Menu")}
        </p>
        <div
          class={`menu-animation ${
            headerState.isMenuOpen ? "menu-animation-active" : ""
          }`}
        />
      </div>
      <div
        class={`fixed top-1/3 left-0 right-0 flex-row max-w-[1290px] mx-auto px-12 z-50 transition-all ease-in ${
          headerState.isMenuOpen
            ? " opacity-1 visible duration-300 delay-[0.6s]"
            : " opacity-0 invisible duration-[0.6s]"
        }`}
      >
        <div class="lg:grid lg:grid-cols-2 lg:justify-between">
          <nav class="flex flex-col space-y-5 lg:space-y-10 ">
            {menu.map((menuItem, item) => {
              return (
                <a
                  key={item}
                  href={`${menuItem.href}`}
                  class={`flex flex-row items-center group `}
                >
                  {pathname === menuItem.href ? (
                    <OtPurpleArrow />
                  ) : (
                    <div class="w-6 -ml-1.5" />
                  )}

                  <span
                    class={`text-3xl font-bold lg:text-5xl leading-10 ml-5 ${
                      pathname === menuItem.href
                        ? "text-ot-purple"
                        : "text-ot-white"
                    }`}
                  >
                    {menuItem.text}
                  </span>
                </a>
              );
            })}
          </nav>
          <div class="flex flex-row space-x-8 mt-[10%] lg:justify-end lg:items-end lg:mt-0">
            <a
              href="https://www.instagram.com/somosopentech/"
              target="_blank"
              class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
            >
              <IGIcon class="h-[32px]"></IGIcon>
            </a>
            <a
              href="https://www.linkedin.com/company/lcc-opentech/"
              target="_blank"
              class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
            >
              <LinkedinIcon class="h-[32px]"></LinkedinIcon>
            </a>
          </div>
        </div>
      </div>
    </>
  );
});

// import {
//   component$,
//   useContext,
//   useStylesScoped$,
//   useVisibleTask$,
// } from "@builder.io/qwik";

// import { OtPurpleArrow } from "../icons/ot-purple-arrow";
// import IGIcon from "~/assets/svg/white-circle-ig.svg?jsx";
// import LinkedinIcon from "~/assets/svg/white-circle-linkedin.svg?jsx";
// import styles from "./menu.css?inline";
// import { useLocation } from "@builder.io/qwik-city";
// import { inlineTranslate, translatePath } from "qwik-speak";
// import { HeaderContext } from "~/context";
// import lottie from "lottie-web";
// import menuIcon from "~/assets/animations/menu.json";
// import menuIcon2 from "~/assets/animations/menu2.json";

// export default component$(() => {
//   const headerState = useContext(HeaderContext);
//   const t = inlineTranslate();
//   const location = useLocation();
//   const pathname = location.url.pathname;
//   const getPath = translatePath();
//   const [
//     homePath,
//     servicesPath,
//     blogPath,
//     portfolioPath,
//     contactPath,
//   ] = getPath(["/", "/services/", "/blog/", "/portfolio/", "/contact/"]);

//   const menu = [
//     {
//       text: `${t("header.HomeText@@Home")}`,
//       href: homePath,
//     },
//     {
//       text: `${t("header.servicesText@@Services")}`,
//       href: servicesPath,
//     },
//     {
//       text: `${t("header.blogText@@Blog")}`,
//       href: blogPath,
//     },
//     {
//       text: `${t("header.portfolioText@@Portfolio")}`,
//       href: portfolioPath,
//     },
//     {
//       text: `${t("header.contactText@@Contact")}`,
//       href: contactPath,
//     },
//   ];
//   useStylesScoped$(styles);

//   // eslint-disable-next-line qwik/no-use-visible-task
//   useVisibleTask$(({ track }) => {
//     track(() => headerState.isMenuOpen);
//     const menuIconBlack = document.getElementById("menuIconBlack");
//     const menuIconWhite = document.getElementById("menuIconWhite");
//     const menuIconAnimation = lottie.loadAnimation({
//       container: menuIconBlack as Element,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: menuIcon,
//     });
//     const menuIconAnimation2 = lottie.loadAnimation({
//       container: menuIconWhite as Element,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: menuIcon2,
//     });
//   });

//   return (
//     <>
//       <div
//         class="relative flex flex-col items-center lg:mr-8 "
//         onClick$={() => {
//           headerState.isMenuOpen = !headerState.isMenuOpen;
//         }}
//       >
//         <div class="relative h-6 lg:h-10 w-6 lg:w-10 z-50">
//           <div
//             id="menuIconBlack"
//             class={`absolute top-0 left-0 ${
//               headerState.isMenuOpen
//                 ? "opacity-0"
//                 : "opacity-100 transition-all duration-300 delay-[0.8s]"
//             }`}
//           />
//           <div
//             id="menuIconWhite"
//             class={`absolute top-0 left-0 ${
//               headerState.isMenuOpen
//                 ? "opacity-100"
//                 : "opacity-0 transition-all duration-300 delay-[0.9s]"
//             }`}
//           />
//         </div>
//         <p
//           class={`text-xs lg:text-base font-medium z-50 transition-all ease-in select-none ${
//             headerState.isMenuOpen
//               ? "text-white duration-300 delay-[1s]"
//               : "text-black duration-[0.05s]"
//           }`}
//         >
//           {t("header.menu@@Menu")}
//         </p>
//         <div
//           class={`menu-animation ${
//             headerState.isMenuOpen ? "menu-animation-active" : ""
//           }`}
//         />
//       </div>
//       <div
//         class={`fixed top-1/3 left-0 right-0 flex-row max-w-[1290px] mx-auto px-12 z-50 transition-all ease-in ${
//           headerState.isMenuOpen
//             ? " opacity-1 visible duration-300 delay-[0.6s]"
//             : " opacity-0 invisible duration-[0.6s]"
//         }`}
//       >
//         <div class="lg:grid lg:grid-cols-2 lg:justify-between">
//           <nav class="flex flex-col space-y-5 lg:space-y-10 ">
//             {menu.map((menuItem, item) => {
//               return (
//                 <a
//                   key={item}
//                   href={`${menuItem.href}`}
//                   class={`flex flex-row items-center group `}
//                 >
//                   {pathname === menuItem.href ? (
//                     // <ImgOtArrowPurple class="h-6" />
//                     <OtPurpleArrow />
//                   ) : (
//                     <div class="w-6 -ml-1.5" />
//                   )}

//                   <span
//                     class={`text-3xl font-bold lg:text-5xl leading-10 ml-5 ${
//                       pathname === menuItem.href
//                         ? "text-ot-purple"
//                         : "text-ot-white"
//                     }`}
//                   >
//                     {menuItem.text}
//                   </span>
//                 </a>
//               );
//             })}
//           </nav>
//           <div class="flex flex-row space-x-8 mt-[10%] lg:justify-end lg:items-end lg:mt-0">
//             <a
//               href="https://www.instagram.com/somosopentech/"
//               target="_blank"
//               class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
//             >
//               <IGIcon class="h-[32px]"></IGIcon>
//             </a>
//             <a
//               href="https://www.linkedin.com/company/lcc-opentech/"
//               target="_blank"
//               class="cursor-pointer active:scale-90 ease-in-out hover:scale-[1.1] transition-all duration-300"
//             >
//               <LinkedinIcon class="h-[32px]"></LinkedinIcon>
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// });
