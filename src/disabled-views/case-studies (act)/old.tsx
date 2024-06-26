// import {
//   component$,
//   useResource$,
//   useContext,
//   useStylesScoped$,
//   useTask$,
//   useVisibleTask$,
// } from "@builder.io/qwik";
// import { Resource } from "@builder.io/qwik";
// import styles from "./case-studies.css?inline"; // Archivo .css correspondiente del componente
// import CaseStudy from "~/components/case-study/case-study";
// import CaseStudyLoadingTemplate from "~/components/case-study-loading-template";
// import axios from "axios";
// import caseStudies from "~/components/case-studies-home/case-studies";
// import Pagination from "~/components/case-studies-pagination/pagination";
// import { CaseStudyInterface } from "~/interfaces";
// import { CaseStudiesContext } from "~/context";
// import ScrollReveal from "scrollreveal";

// //Sección de Casos de Estudio
// export default component$(() => {
//   useStylesScoped$(styles);

//   const caseStudiesResource = useResource$<CaseStudyInterface[]>(async () => {
//     const { data } = await axios(
//       "https://webapi.lccopen.tech/wp-json/wp/v2/case-studies?acf_format=standard"
//     );
//     const tagsPromises: {}[] = [];

//     const mappedCaseData = data.map((item: any) => {
//       tagsPromises.push(
//         axios.get(
//           `https://webapi.lccopen.tech/wp-json/wp/v2/tags?include=${item.tags}`
//         )
//       );
//       return {
//         caseId: item.id,
//         title: item.title.rendered,
//         subtitle: item.acf.subtitle,
//         description: item.acf.excerpt,
//         tags: item.tags,
//         bannerImage: item.acf.bannerImage,
//         contentImage: item.acf.contentImage,
//         carousel: item.acf.carousel,
//       };
//     });

//     const caseStudyPosts = await Promise.all(tagsPromises).then((res) =>
//       res.map((promise: any, k) => {
//         return {
//           ...mappedCaseData[k],
//           tags: promise.data.map((item: any) => {
//             return { color: "border-ot-green", tagTitle: item.name };
//           }),
//         };
//       })
//     );
//     return caseStudyPosts;
//   });

//   /* PAGINATION */
//   const pagination = useContext(CaseStudiesContext);

//   useTask$(async () => {
//     pagination.allPost = await caseStudiesResource.value;
//     pagination.totalPost = pagination.allPost.length;
//   });

//   useTask$(async ({ track }) => {
//     track(() => pagination.currentPage);
//     const indexOfLastPost = pagination.currentPage * pagination.postPerPage;
//     const indexOfFirstPost = indexOfLastPost - pagination.postPerPage;
//     pagination.currentPost = pagination.allPost.slice(
//       indexOfFirstPost,
//       indexOfLastPost
//     );
//   });

//   useVisibleTask$(() => {
//     ScrollReveal().reveal("#posts", {
//       delay: 500,
//       origin: "bottom",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//   });

//   return (
//     <div class="mb-12 lg:max-w-[1520px] mx-auto">
//       <div class="text-center text-lg lg:text-4xl font-bold mb-5 lg:mb-10">
//         Algunos de nuestros trabajos realizados
//       </div>
//       <div id="posts" style={"visibility: hidden"}>
//         <Resource
//           value={caseStudiesResource}
//           onPending={() => (
//             <div>
//               {[0, 1, 2, 3].map((item, index) => (
//                 <CaseStudyLoadingTemplate
//                   key={index}
//                   isReversed={item % 2 === 0}
//                 />
//               ))}
//             </div>
//           )}
//           onRejected={() => <div>Error loading resources...</div>}
//           onResolved={(caseStudies) => (
//             <div>
//               {pagination.currentPost.map((item, k) => (
//                 <CaseStudy
//                   key={item.caseId}
//                   caseId={parseInt(item.caseId)}
//                   title={item.title}
//                   subtitle={item.subtitle}
//                   description={item.description}
//                   tags={item.tags}
//                   bannerImage={item.bannerImage}
//                   isReversed={k % 2 === 0}
//                 />
//               ))}
//             </div>
//           )}
//         />
//       </div>
//       <Pagination
//         currentPage={pagination.currentPage}
//         postsPerPage={pagination.postPerPage}
//         totalPosts={pagination.totalPost}
//       />
//     </div>
//   );
// });
