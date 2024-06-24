// import { component$, Resource, useVisibleTask$ } from "@builder.io/qwik";
// import OpentechButton from "~/components/ot-button/ot-button";
// import axios from "axios";
// import ImgRightArrow from "../../../assets/svg/rightarrow.svg?jsx";
// import ImgOtArrow from "../../../assets/svg/ot-arrow.svg?jsx";
// import { routeLoader$ } from "@builder.io/qwik-city";
// import ScrollReveal from "scrollreveal";

// // Seccion de pagina individual de caso de estudio

// interface CaseStudy {
//   title: string;
//   subtitle: string;
//   bannerImage: string;
//   contentImage: string;
//   introduction: string;
//   asignation: string;
//   comoLoHicimos: string;
//   solution: string;
//   results: string;
//   carousel: string[];
// }

// export const useCaseStudy = routeLoader$<CaseStudy>(async ({ params }) => {
//   const { data } = await axios(
//     `https://webapi.lccopen.tech/wp-json/wp/v2/case-studies/${params.caseid}?acf_format=standard`
//   );
//   return {
//     title: data.title.rendered,
//     bannerImage: data.acf.bannerImage,
//     contentImage: data.acf.contentImage,
//     subtitle: data.acf.subtitle,
//     introduction: data.acf.introduccion,
//     asignation: data.acf.asignacion,
//     comoLoHicimos: data.acf.comoLoHicimos,
//     solution: data.acf.solucion,
//     results: data.acf.results,
//     carousel: data.acf.carousel,
//   };
// });

// export default component$(() => {
//   const caseStudyData = useCaseStudy();
//   const bannerColors = [
//     "bg-ot-green",
//     "bg-ot-purple",
//     "bg-ot-orange",
//     "bg-ot-yellow",
//   ];

//   useVisibleTask$(() => {
//     ScrollReveal().reveal("#title", {
//       delay: 500,
//       origin: "bottom",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#subtitle", {
//       delay: 600,
//       origin: "bottom",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#el-problema-movil", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#el-problema-desc-movil", {
//       delay: 700,
//       origin: "right",
//       distance: "100px",
//       duration: 1400,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#objetivos-movil", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#objetivos-desc-movil", {
//       delay: 700,
//       origin: "right",
//       distance: "100px",
//       duration: 1400,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#objetivos-gen-movil", {
//       delay: 800,
//       origin: "right",
//       distance: "100px",
//       duration: 1500,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#objetivos-esp-movil", {
//       delay: 900,
//       origin: "right",
//       distance: "100px",
//       duration: 1500,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#procedimiento-movil", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#procedimiento-desc-movil", {
//       delay: 700,
//       origin: "right",
//       distance: "100px",
//       duration: 1400,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#resultado-movil", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#resultado-desc-movil", {
//       delay: 700,
//       origin: "right",
//       distance: "100px",
//       duration: 1400,
//       cleanup: true,
//     });

//     /* ANIMACIONES DESKTOP */
//     ScrollReveal().reveal("#el-problema-desktop", {
//       delay: 500,
//       origin: "left",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.5,
//     });
//     ScrollReveal().reveal("#el-problema-img-desktop", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#objetivos-desktop", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#objetivos-img-desktop", {
//       delay: 500,
//       origin: "left",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#objetivos-gen-desktop", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#objetivos-esp-desktop", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#procedimiento-desktop", {
//       delay: 500,
//       origin: "left",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#procedimiento-img-desktop", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#resultados-desktop", {
//       delay: 500,
//       origin: "bottom",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//     ScrollReveal().reveal("#resultados-img", {
//       delay: 700,
//       origin: "bottom",
//       distance: "100px",
//       duration: 1600,
//       cleanup: true,
//       viewFactor: 0.3,
//     });
//   });

//   return (
//     <Resource
//       value={caseStudyData}
//       onResolved={(caseStudy) => (
//         <div>
//           <div
//             style={{ backgroundImage: `url(${caseStudy.bannerImage})` }}
//             class="h-48 md:h-64 lg:h-80 bg-cover bg-center rounded-b-2xl pb-8 mb-10"
//           >
//             <div
//               class={`h-48 md:h-64 lg:h-80 ${
//                 bannerColors[Math.floor(Math.random() * bannerColors.length)]
//               } bg-opacity-75 flex flex-col justify-center items-center text-center text-ot-white tracking-tighter`}
//             >
//               <p
//                 id="title"
//                 style={"visibility: hidden"}
//                 class="font-bold text-2xl mb-2 mt-12 lg:text-3xl"
//               >
//                 {(caseStudy as CaseStudy).title}
//               </p>
//               <p
//                 id="subtitle"
//                 style={"visibility: hidden"}
//                 class="font-medium mb-6 lg:text-xl"
//               >
//                 {(caseStudy as CaseStudy).subtitle}
//               </p>
//             </div>
//           </div>

//           {/* MOVIL */}
//           <div class="bg-ot-white space-y-14 tracking-tighter ml-6 mr-6 lg:hidden">
//             {/* EL PROBLEMA */}
//             <div>
//               <div class="w-full flex items-center">
//                 <div
//                   id="circle-item"
//                   class=" mr-4 bg-ot-green flex flex-col rounded-full w-12 h-12 items-center justify-center"
//                 >
//                   <div class="bg-ot-white h-5 w-5 rounded-full"/>
//                 </div>
//                 <p
//                   id="el-problema-movil"
//                   style={"visibility: hidden"}
//                   class="text-2xl font-bold"
//                 >
//                   El problema
//                 </p>
//               </div>
//               <p
//                 id="el-problema-desc-movil"
//                 style={"visibility: hidden"}
//                 class="mt-6 text-lg"
//               >
//                 {(caseStudy as CaseStudy).introduction}
//               </p>
//               <img
//                 src={(caseStudy as CaseStudy).bannerImage}
//                 class="h-52 w-[90%] rounded-xl m-auto mt-10 object-cover md:h-3/4"
//                 width={" "}
//                 height={" "}
//               />
//             </div>
//             {/* OBJETIVOS */}
//             <div>
//               <div class="w-full flex items-center">
//                 <div
//                   id="circle-item"
//                   class=" mr-4 bg-ot-orange flex flex-col rounded-full w-12 h-12 items-center justify-center"
//                 >
//                   <div class="bg-ot-white h-5 w-5 rounded-full"/>
//                 </div>
//                 <p id="objetivos-movil" class="text-2xl font-bold">
//                   Objetivos
//                 </p>
//               </div>
//               <p id="objetivos-desc-movil" class="mt-6 text-lg">
//                 {(caseStudy as CaseStudy).asignation}
//               </p>
//               <div class="mt-8">
//                 <div>
//                   <div class="flex w-full justify-center mb-3">
//                     <p class="font-semibold text-xl text-ot-white bg-ot-orange rounded-3xl px-3 py-1">
//                       General
//                     </p>
//                   </div>
//                   <div class="flex space-x-3">
//                     <ImgOtArrow class="h-8 w-8" />
//                     <p id="objetivos-gen-movil" class="text-lg">
//                       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                       Quibusdam sint illo rem error minima laudantium.
//                     </p>
//                   </div>
//                 </div>
//                 <div class="mt-8">
//                   <div class="flex w-full justify-center mb-3">
//                     <p class="font-semibold text-xl text-ot-white bg-ot-orange rounded-3xl px-3 py-1">
//                       Específicos
//                     </p>
//                   </div>
//                   <div class="flex space-x-3">
//                     <ImgOtArrow class="h-8 w-8" />
//                     <p id="objetivos-esp-movil" class="text-lg">
//                       Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//                       Quibusdam sint illo rem error minima laudantium.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* PROCEDIMIENTO */}
//             <div>
//               <div class="w-full flex items-center">
//                 <div
//                   id="circle-item"
//                   class=" mr-4 bg-ot-yellow flex flex-col rounded-full w-12 h-12 items-center justify-center"
//                 >
//                   <div class="bg-ot-white h-5 w-5 rounded-full"/>
//                 </div>
//                 <p id="procedimiento-movil" class="text-2xl font-bold">
//                   Procedimiento
//                 </p>
//               </div>
//               <p id="procedimiento-desc-movil" class="mt-6 text-lg">
//                 {(caseStudy as CaseStudy).comoLoHicimos}
//               </p>
//               <img
//                 src={(caseStudy as CaseStudy).bannerImage}
//                 class="h-52 w-[90%] rounded-xl m-auto mt-10 object-cover md:h-3/4"
//                 width={" "}
//                 height={" "}
//               />
//             </div>
//             {/* RESULTADO */}
//             <div>
//               <div class="w-full flex items-center">
//                 <div
//                   id="circle-item"
//                   class=" mr-4 bg-ot-purple flex flex-col rounded-full w-12 h-12 items-center justify-center"
//                 >
//                   <div class="bg-ot-white h-5 w-5 rounded-full"/>
//                 </div>
//                 <p id="resultado-movil" class="text-2xl font-bold">
//                   Resultado
//                 </p>
//               </div>
//               <p id="resultado-desc-movil" class="mt-6 text-lg">
//                 {(caseStudy as CaseStudy).solution}
//               </p>
//             </div>
//           </div>

//           {/* DESKTOP */}
//           <div class="hidden lg:flex flex-row pt-10 h-auto max-w-[1290px] m-auto">
//             <div class="flex flex-col h-full">
//               {/* Verde - El problema */}
//               <div class="flex flex-row justify-center">
//                 <div class="flex flex-col w-[45%] text-right pr-8">
//                   <div
//                     id="el-problema-desktop"
//                     style={"visibility: hidden"}
//                     class="pb-12"
//                   >
//                     <p class="text-4xl font-bold">El problema</p>
//                     <p class="mt-6 text-xl">
//                       {(caseStudy as CaseStudy).introduction}
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <div
//                     id="circle-item"
//                     class="flex-col rounded-full w-[53px] h-[53px] items-center justify-center lg:flex bg-ot-green z-10"
//                   >
//                     <div class="bg-ot-white h-5 w-5 rounded-full z-10"/>
//                   </div>
//                   <div class="flex ease-in transition-opacity delay-100 bg-ot-green w-[20px] h-full ml-[18px] mb-[-5px] mt-[-5px]"/>
//                 </div>
//                 <div
//                   id="el-problema-img-desktop"
//                   style={"visibility: hidden"}
//                   class="flex flex-col w-[45%] pb-48 items-center"
//                 >
//                   <img
//                     src={(caseStudy as CaseStudy).bannerImage}
//                     class="h-[400px] w-[90%] rounded-xl object-cover"
//                     width={" "}
//                     height={" "}
//                   />
//                 </div>
//               </div>
//               {/* Naranja - Objetivos */}
//               <div class="flex flex-row h-auto justify-center">
//                 <div
//                   id="objetivos-img-desktop"
//                   class="flex flex-col w-[45%] items-center pb-48"
//                 >
//                   <img
//                     src={(caseStudy as CaseStudy).bannerImage}
//                     class="h-[400px] w-[90%] rounded-xl object-cover"
//                     width={" "}
//                     height={" "}
//                   />
//                 </div>
//                 <div>
//                   <div
//                     id="circle-item"
//                     class="flex-col rounded-full w-[53px] h-[53px] items-center justify-center lg:flex bg-ot-orange z-10"
//                   >
//                     <div class="bg-ot-white h-5 w-5 rounded-full z-10"/>
//                   </div>
//                   <div class="flex ease-in transition-opacity delay-100 bg-ot-orange w-[20px] h-full ml-[18px] mb-[-5px] mt-[-5px]"/>
//                 </div>
//                 <div
//                   id="objetivos-desktop"
//                   class="flex flex-col w-[45%] text-left pl-8"
//                 >
//                   <div class="pb-12">
//                     <p class="text-4xl font-bold">Objetivos</p>
//                     <p class="mt-6 text-xl">
//                       {(caseStudy as CaseStudy).asignation}
//                     </p>
//                     <div class="mt-8">
//                       <div class="flex w-full mb-6">
//                         <p class="font-semibold text-xl text-ot-white bg-ot-orange rounded-3xl px-3 py-1">
//                           General
//                         </p>
//                       </div>
//                       <div class="flex space-x-3">
//                         <ImgOtArrow class="h-8 w-8" />
//                         <p class="text-xl">
//                           Lorem ipsum dolor sit amet consectetur, adipisicing
//                           elit. Quibusdam sint illo rem error minima laudantium.
//                         </p>
//                       </div>
//                     </div>
//                     <div class="mt-8 mb-24">
//                       <div class="flex w-full mb-6">
//                         <p class="font-semibold text-xl text-ot-white bg-ot-orange rounded-3xl px-3 py-1">
//                           Específicos
//                         </p>
//                       </div>
//                       <div class="flex space-x-3">
//                         <ImgOtArrow class="h-8 w-8" />
//                         <p class="text-xl">
//                           Lorem ipsum dolor sit amet consectetur, adipisicing
//                           elit. Quibusdam sint illo rem error minima laudantium.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* Amarillo - Procedimiento */}
//               <div class="flex flex-row justify-center">
//                 <div class="flex flex-col w-[45%] text-right pr-8">
//                   <div id="procedimiento-desktop" class="pb-12">
//                     <p class="text-4xl font-bold">Procedimiento</p>
//                     <p class="mt-6 text-xl">
//                       {(caseStudy as CaseStudy).comoLoHicimos}
//                     </p>
//                   </div>
//                 </div>
//                 <div>
//                   <div
//                     id="circle-item"
//                     class="flex-col rounded-full w-[53px] h-[53px] items-center justify-center lg:flex bg-ot-yellow z-10"
//                   >
//                     <div class="bg-ot-white h-5 w-5 rounded-full z-10"/>
//                   </div>
//                   <div class="flex ease-in transition-opacity delay-100 bg-ot-yellow w-[20px] h-full ml-[18px] mb-[-5px] mt-[-5px]"/>
//                 </div>
//                 <div
//                   id="procedimiento-img-desktop"
//                   class="flex flex-col w-[45%] items-center pb-48"
//                 >
//                   <img
//                     src={(caseStudy as CaseStudy).bannerImage}
//                     class="h-[400px] w-[90%] rounded-xl object-cover"
//                     width={" "}
//                     height={" "}
//                   />
//                 </div>
//               </div>
//               {/* Morado - Resultado */}
//               <div class="flex flex-col justify-center">
//                 <div
//                   id="circle-item"
//                   class="flex-col m-auto rounded-full w-[53px] h-[53px] items-center justify-center lg:flex bg-ot-purple z-10"
//                 >
//                   <div class="bg-ot-white h-5 w-5 rounded-full z-10"/>
//                 </div>
//                 <div id="resultados-desktop" class="text-center mt-10">
//                   <p class="text-4xl font-bold">Resultados</p>
//                   <p class="mt-6 text-xl">
//                     {(caseStudy as CaseStudy).solution}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <img
//             id="resultados-img"
//             class="m-auto mt-12 w-full md:h-[380px] lg:h-[520px] object-cover"
//             src={(caseStudy as CaseStudy).carousel[0]}
//             width={" "}
//             height={" "}
//           />
//           <div class="justify-center text-center my-12 flex flex-row lg:justify-center">
//             <OpentechButton
//               textColor="text-ot-white"
//               title="Ver Proyecto"
//               backgroundColor="bg-ot-black"
//             />
//           </div>
//         </div>
//       )}
//       onPending={() => <div> Loading Resources...</div>}
//       onRejected={() => <div> Failed showing resources...</div>}
//     />
//   );
// });
