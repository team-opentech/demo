// import {
//     component$,
//     useContext,
//     useTask$,
//   } from "@builder.io/qwik";
//   import { PortafolioContext } from "~/context";
//   import HeaderPortfolioWhite from "~/components/header/header-portfolio-white";
//   import HeaderPortfolioBlack from "~/components/header/header-portfolio-black";
  
//   export default component$(() => {
//     const portafolioState = useContext(PortafolioContext);
//     // const colorheader = portafolioState.colorheader;
  
//     // useTask$(({ track }) => {
//     //   track(() => portafolioState.colorheader);
//     //   console.log("Portafolio context updated:", portafolioState.colorheader);
//     // });
  
//     return (
//       <>
//         {colorheader ? <HeaderPortfolioBlack /> : <HeaderPortfolioWhite />}
//       </>
//     );
//   });
  