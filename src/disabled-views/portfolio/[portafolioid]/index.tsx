// import {
//   component$,
//   Resource,
//   useStylesScoped$,
//   useVisibleTask$,
// } from "@builder.io/qwik";
// import { useLocation, routeLoader$ } from "@builder.io/qwik-city";
// import axios from "axios";
// import styles from "./portafolio.css?inline"; // Archivo .css correspondiente del componente
// import ImgTest from "../../../assets/img/purepower.webp?jsx";
// import ImgBannerTest from "../../../assets/img/sample-image-2.webp?jsx";
// import ScrollReveal from "scrollreveal";

// interface Portafolio {
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

// /* export const usePortafolio = routeLoader$<Portafolio>(async ({ params }) => {
//   const { data } = await axios(
//     `https://webapi.lccopen.tech/wp-json/wp/v2/case-studies/${params.caseId}?acf_format=standard`
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
// }); */

// export default component$(() => {
//   //const PortafolioData = usePortafolio();
//   useStylesScoped$(styles);

//   useVisibleTask$(() => {
//     ScrollReveal().reveal("#about", {
//       delay: 500,
//       origin: "left",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#about-img", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//   });
//   return (
//     <>
//       <div class="bg-ot-purple">
//         <div class="flex flex-col lg:flex-row w-full max-w-[1290px] mx-auto">
//           <div
//             id="about"
//             class="pt-16 px-8 text-ot-white"
//             style={"visibility: hidden"}
//           >
//             <h2 class="pb-4">Konie</h2>
//             <p class="pb-6">
//               is simply dummy text of the printing and typesetting industry.
//               Lorem Ipsum has been the industry's standard dummy text ever since
//               the 1500s, when an unknown printer took a galley of type and
//               scrambled it to make a type specimen book.
//             </p>
//             <h3 class="">Año</h3>
//             <p class="font-light pb-4">2023</p>
//             <h3 class="">Alncance del trabajo</h3>
//             <p class="font-light pb-4">
//               Interfaz de usuario Diseño de icono de sitio web de experiencia de
//               usuario
//             </p>
//             <h3 class="">Duración</h3>
//             <p class="font-light pb-12">3 meses</p>
//           </div>
//           <ImgBannerTest
//             id="about-img"
//             style={"visibility: hidden"}
//             class="h-[400px] lg:h-auto lg:w-1/3 w-full object-cover"
//           />
//         </div>
//       </div>
//       <div class="h-full w-full max-w-[1290px] mx-auto bg-ot-white">
//         <div class="mt-8 px-8">
//           <div class="lg:flex lg:mt-24">
//             <div class="my-14 lg:my-0 lg:w-1/2 lg:pr-8">
//               <h2>Problema</h2>
//               <div class="my-8 text-sm">
//                 <p>No contaban con un sitio web estéticamente definido.</p>
//                 <div class="divider"/>
//                 <p>
//                   A primera vista era difícil entender lo que hace la empresa.
//                 </p>
//                 <div class="divider"/>
//                 <p>
//                   No había información sobre precios ni siquiera sobre cómo
//                   funciona el producto.
//                 </p>
//                 <div class="divider"/>
//                 <p>La iconografía no existía para identificar los productos.</p>
//                 <div class="divider"/>
//                 <p>No poseían envío de catálogos vía email.</p>
//               </div>
//             </div>
//             <div class="my-14 lg:my-0 lg:w-1/2 lg:pl-8">
//               <h2>Solución</h2>
//               <div class="my-8 text-sm">
//                 <p>
//                   Se agregó una paleta de colores mejorada y una variedad de
//                   componentes nuevos para darle una sensación corporativa a la
//                   web.
//                 </p>
//                 <div class="divider"/>
//                 <p>
//                   Toda la comunicación se modificó para que fuera lo
//                   suficientemente simple como para comprender lo que hace la
//                   empresa.
//                 </p>
//                 <div class="divider"/>
//                 <p>
//                   Se agregó una página de vista general de los productos con con
//                   sus características claras para que el usuario pueda
//                   visualizar con detalle.
//                 </p>
//                 <div class="divider"/>
//                 <p>Los nuevos íconos fueron hechos a la medida.</p>
//                 <div class="divider"/>
//                 <p>
//                   Junto con un diseño se incorporó una seccion de visualización
//                   para recibir los catalogos vía email.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div class="my-14">
//             <h2>Estructuramos una clara arquitectura de las pagina</h2>
//             <p class="mt-4 mb-8 lg:mb-14">
//               Queriamos dejar claro el mensaje dentro de la web
//             </p>
//             <div class="bg-ot-light-gray h-[420px] w-full"/>
//           </div>

//           <div class="my-10 flex flex-col justify-center">
//             <h2>Un diseño nuevo y adaptado a sus clientes</h2>
//             <p class="mt-4 mb-8">
//               Uno de los objetivos del nuevo sitio web era ser vivo, colorido y
//               facil de navegar
//             </p>
//             <ImgTest class="lg:hidden w-[311px] lg:w-[85%] lg:h-[600px] h-[295px] object-fill self-center" />
//           </div>
//         </div>
//       </div>
//       <div class="hidden lg:block bg-ot-light-gray">
//         <div class="flex flex-row justify-center space-x-4 w-full max-w-[1290px] mx-auto">
//           <ImgTest class="w-[600px] h-[450px] object-cover self-center" />
//           <ImgTest class="w-[600px] h-[450px] object-cover self-center" />
//         </div>
//       </div>

//       <div class="h-full w-full max-w-[1290px] mx-auto bg-ot-white">
//         <div class="mt-8 px-8">
//           <div class="my-14 flex flex-col justify-center">
//             <h2 class="lg:mb-14">
//               Vista perfecta en web y dispositivos móviles
//             </h2>
//             <p class="mt-4 mb-8 lg:hidden">
//               La usabilidad y experiencia del usuario puede ser a través de la
//               web de manera fácil y rápida desde el celular.
//             </p>
//             <ImgTest class="w-[311px] lg:w-[85%] lg:h-[600px] h-[295px] object-fill self-center" />
//           </div>
//         </div>
//       </div>

//       <ImgBannerTest class="w-full h-[220px] object-cover" />
//     </>
//   );
// });
