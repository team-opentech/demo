// import {
//   component$,
//   Resource,
//   useStylesScoped$,
//   useVisibleTask$,
// } from "@builder.io/qwik";
// import styles from "./single-post.css?inline"; // Archivo .css correspondiente del componente
// import OpentechButton from "~/components/ot-button/ot-button";
// import axios from "axios";
// import ImgRightArrow from "../../../assets/svg/rightarrow.svg?jsx";
// import ImgSendButton from "../../../assets/svg/send-button.svg?jsx";
// import { routeLoader$ } from "@builder.io/qwik-city";
// import ScrollReveal from "scrollreveal";

// //Plantilla de post individual
// interface BlogPost {
//   title: string;
//   description: string;
//   postId: string;
//   tags: { tagTitle: string; color: string }[];
//   featuredImage: string;
//   contentImage: string;
//   title1: string;
//   title2: string;
//   parragraph1: string;
//   parragraph2: string;
//   date: string;
//   content: string;
// }
// interface Tag {
//   name: string;
// }

// export const useBlogPost = routeLoader$<BlogPost>(async ({ params }) => {
//   const { data } = await axios(
//     `https://webapi.lccopen.tech/wp-json/wp/v2/posts/${params.blogid}`
//   );
//   const { data: featuredImage } = await axios(
//     `https://webapi.lccopen.tech/wp-json/wp/v2/media/${data._links[
//       "wp:featuredmedia"
//     ][0].href
//       .split("/")
//       .pop()}`
//   );
//   /* const tags = await axios
//     .get<Tag[]>(
//       `https://webapi.lccopen.tech/wp-json/wp/v2/tags?include=${data.tags}`
//     )
//     .then((response) => {
//       return response.data.map((tag) => {
//         return {
//           tagTitle: tag.name,
//           color: "border-ot-green",
//         };
//       });
//     }); */

//   const text = data.content.rendered
//     .replace(/\n\n\n/g, "<br />")
//     .replaceAll(/<p>/g, '<p class="text-md lg:text-lg xl:text-xl">')
//     .replaceAll(
//       /h2 class="wp-block-heading"/g,
//       'h2 class="text-xl lg:text-3xl xl:text-4xl font-bold"'
//     )
//     .replaceAll(
//       /h3 class="wp-block-heading"/g,
//       'h3 class="text-lg lg:text-2xl xl:text-3xl font-bold"'
//     )
//     .replaceAll(
//       /h4 class="wp-block-heading"/g,
//       'h4 class="text-md lg:text-xl xl:text-2xl font-bold"'
//     )
//     .replaceAll(/<strong>/g, "")
//     .replaceAll(/<\/strong>/g, "")
//     .replaceAll(/<b>/g, "")
//     .replaceAll(/<\/b>/g, "")
//     .replaceAll(/wp-block-image/g, "flex flex-col justify-center items-center");

//   return {
//     title: data.title.rendered,
//     description: data.excerpt.rendered,
//     featuredImage: featuredImage.source_url,
//     contentImage: data.acf.contentImage,
//     title1: data.acf.title1,
//     title2: data.acf.title2,
//     parragraph1: data.acf.parragraph1,
//     parragraph2: data.acf.parragraph2,
//     content: text,
//     postId: data.id,
//     tags: data.tags /* : [
//       {
//         tagTitle: "Creative Brand & Experience",
//         color: "border-ot-green",
//       },
//     ], */,
//     date: data.date.split("T")[0].replaceAll("-", "."),
//   };
// });
// export default component$(() => {
//   useStylesScoped$(styles);
//   const blogPostData = useBlogPost();

//   useVisibleTask$(() => {
//     ScrollReveal().reveal("#titulo", {
//       delay: 500,
//       origin: "left",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#descripcion", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#date-tags", {
//       delay: 500,
//       origin: "right",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//     ScrollReveal().reveal("#banner-img", {
//       delay: 500,
//       origin: "bottom",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//   });

//   return (
//     <Resource
//       value={blogPostData}
//       onPending={() => <div>Loading resources...</div>}
//       onRejected={() => <div>Error while loading resources...</div>}
//       onResolved={(blogPost) => {
//         return (
//           <div class=" lg:mt-12">
//             <div class=" lg:max-w-[1290px] lg:mx-auto mx-8 2xl:px-0">
//               {/* post header section */}
//               <div id="date-tags" class="lg:flex lg:flex-row lg:justify-end">
//                 <div class="lg:w-1/2 lg:flex lg:flex-row lg:justify-between lg:mb-10">
//                   <div class="flex lg:justify-center items-center mt-5 lg:self-start lg:pl-5">
//                     <ImgRightArrow class="h-3 self-center mr-5 lg:mr-2" />
//                     <p class="text-ot-dark-gray">
//                       {(blogPost as BlogPost).date}
//                     </p>
//                   </div>
//                   <div class="flex flex-row pt-0 pb-0 flex-wrap mt-5 justify-end">
//                     {(blogPost as BlogPost).tags.map((tag: any, k: number) => (
//                       <p
//                         key={k}
//                         class={`text-2xs text-center font-medium border-2 ${tag.color} text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}
//                         dangerouslySetInnerHTML={tag.tagTitle}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div class="my-8 flex flex-col lg:flex-row justify-between items-center lg:space-x-7">
//                 <div class="lg:w-1/2">
//                   <p
//                     id="titulo"
//                     class="text-3xl font-extrabold tracking-tighter leading-10 mb-8"
//                     style={"visibility: hidden"}
//                   >
//                     {(blogPost as BlogPost).title}
//                   </p>
//                 </div>
//                 <div
//                   id="descripcion"
//                   class="lg:w-1/2"
//                   style={"visibility: hidden"}
//                 >
//                   <p
//                     class="text-sm"
//                     dangerouslySetInnerHTML={(blogPost as BlogPost).description}
//                   />
//                 </div>
//               </div>
//               {/* content section */}
//               <div class="my-6 lg:mt-20">
//                 <img
//                   id="banner-img"
//                   src={(blogPost as BlogPost).featuredImage}
//                   class="h-72 w-full object-cover rounded-xl lg:rounded-xl"
//                   width={" "}
//                   height={" "}
//                   style={"visibility: hidden"}
//                 />
//                 <div>
//                   <div class="lg:max-w-[1290px] lg:mx-auto lg:flex lg:flex-col lg:justify-center text-left">
//                     {/*  <p class="mt-14 lg:mt-18 font-extrabold text-lg">
//                       {(blogPost as BlogPost).title1}
//                     </p> */}
//                     <p
//                       class="mt-10 mb-14 lg:text-lg"
//                       dangerouslySetInnerHTML={(blogPost as BlogPost).content}
//                     />
//                     {/* <div class="lg:max-w-[1290px] lg:mx-auto lg:flex lg:flex-col lg:justify-center lg:items-center">
//                       <img
//                         src={(blogPost as BlogPost).contentImage}
//                         width={" "}
//                         height={" "}
//                         class="w-[845px] h-[600x]"
//                       />
//                     </div>
//                     <p class="mt-14 lg:mt-18 font-extrabold text-lg">
//                       {(blogPost as BlogPost).title2}
//                     </p>
//                     <p
//                       class="mt-10 mb-14"
//                       dangerouslySetInnerHTML={(
//                         blogPost as BlogPost
//                       ).parragraph2.replace(/\n/g, "<br />")}
//                     /> */}
//                   </div>
//                 </div>
//                 <div class="text-center my-14 flex items-center justify-center flex-col space-y-4">
//                   <OpentechButton title="Siguiente Post" fontSize={"text-sm"} />
//                   <OpentechButton
//                     title="Anterior Post"
//                     fontSize={"text-sm"}
//                     textColor="text-ot-black"
//                     backgroundColor="bg-ot-white"
//                     classes="border-ot-black border"
//                   />
//                 </div>
//               </div>
//               <hr class="border-t-2 border-t-ot-light-gray"></hr>
//               {/* email section */}
//               <div class="mt-8 text-center space-y-5 mb-12 lg:w-[400px] lg:mx-auto">
//                 <p class="text-2xl font-bold tracking-tighter leading-8">
//                   ¡No te pierdas <br class="lg:hidden" /> las últimas novedades!
//                 </p>
//                 <p>
//                   Suscríbete a nuestro newsletter mensual y no te pierdas de las
//                   mejores noticias en tu e-mail
//                 </p>
//                 <div class="flex flex-row justify-between lg:space-x-5">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     class="block w-3/4 rounded-md placeholder-ot-darker-gray text-ot-dark-gray text-2xs placeholder-sm border-ot-dark-gray border bg-ot-white py-3 px-4 shadow-sm focus:border-ot-black"
//                     placeholder="Email"
//                   />
//                   <OpentechButton
//                     title="Suscribirse"
//                     classes={"hidden lg:block"}
//                   />
//                   <ImgSendButton class="h-10 lg:hidden" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       }}
//     />
//   );
// });
