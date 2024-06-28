// src/routes/[...index]/index.tsx

import { component$, useStore, useVisibleTask$, useContext, useTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import {
  Content,
  fetchOneEntry,
  getBuilderSearchParams,
} from "@builder.io/sdk-qwik";
import OpentechButton from "~/components/ot-button/ot-button";
import Newsletter from "~/components/newsletter/newsletter";
import { BlogContext } from "~/context";

// export const BUILDER_PUBLIC_API_KEY = "7b1221f52afb4451b0f7b41c9b94d1a8";
export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY
export const BUILDER_MODEL = "blog-page";

// Define a route loader function that loads
// content from Builder based on the URL.
export const useBuilderContent = routeLoader$(async ({ url }) => {
  // Fetch content for the specified model using the API key.
  const builderContent = await fetchOneEntry({
    model: BUILDER_MODEL,
    apiKey: BUILDER_PUBLIC_API_KEY,
    limit: 0,
    options: getBuilderSearchParams(url.searchParams),
    userAttributes: {
      urlPath: url.pathname,
    },
  });

  // Return the fetched content.
  return builderContent;
});

export const PrevNextBlog = async (currentBlog: string) => {
  const fetchUrl = `https://cdn.builder.io/api/v3/content/${BUILDER_MODEL}?apiKey=${BUILDER_PUBLIC_API_KEY}&limit=0`;
  const response = await fetch(fetchUrl);
  const content = await response.json();
  const results = content.results;
  const currentIndex = results.findIndex((element: any) =>
    currentBlog.includes(element.data.url)
  );
  const prevIndex = currentIndex === 0 ? results.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === results.length - 1 ? 0 : currentIndex + 1;

  return {
    allPosts: results,
    prev: results[prevIndex].data.url,
    next: results[nextIndex].data.url,
  };
};

// Define a component that renders Builder content
// using Qwik's Content component.
export default component$(() => {
  // Call the useBuilderContent function to get the content.
  const content = useBuilderContent();
  const store = useStore({ prevBlog: "", nextBlog: "" });
  const currentBlog = useLocation().url.pathname;
  
  const pagination = useContext(BlogContext);

  useVisibleTask$(async () => {
    const result = await PrevNextBlog(currentBlog);
    pagination.allPost = result.allPosts;
    store.prevBlog = result.prev;
    store.nextBlog = result.next;
  });
  
  // Specify the content model, pass the fetched content,
  // and provide the Public API Key
  return (
    <div class="max-w-[1300px] mx-auto">
      <Content
        model={BUILDER_MODEL}
        content={content.value}
        apiKey={BUILDER_PUBLIC_API_KEY}
      />
      <div>
        <div class="max-w-[1024px] mx-auto my-6 lg:mt-20">
          <div class="text-center my-14 flex items-center justify-center flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:w-full">
            <OpentechButton
              title="Anterior Post"
              link={store.prevBlog}
              textColor="text-ot-black"
              backgroundColor="bg-ot-white"
              classes={`${
                store.prevBlog === "" ? "hidden" : "border-ot-black border"
              } hover:text-white hover:bg-ot-black hover:scale-[1.1] active:scale-[1.1] transition-all duration-300`}
            />
            <OpentechButton
              title="Siguiente Post"
              link={store.nextBlog}
              textColor="text-ot-black"
              backgroundColor="bg-ot-white"
              classes={`${
                store.nextBlog === "" ? "hidden" : "border-ot-black border"
              } hover:text-white hover:bg-ot-black hover:scale-[1.1] active:scale-[1.1] transition-all duration-300`}
            />
          </div>
        </div>
        <hr class="border-t-2 border-t-ot-light-gray" />
        {/* email section */}
        <Newsletter />
      </div>
    </div>
  );
});

// import {
//   component$,
//   useStylesScoped$,
//   useVisibleTask$,
// } from "@builder.io/qwik";
// import styles from "./single-post.css?inline"; // Archivo .css correspondiente del componente
// import OpentechButton from "~/components/ot-button/ot-button";
// // import axios from "axios";
// import ImgRightArrow from "../../../assets/svg/rightarrow.svg?jsx";
// import ImgSendButton from "../../../assets/svg/send-button.svg?jsx";
// import { routeLoader$, useLocation } from "@builder.io/qwik-city";
// import { inlineTranslate } from "qwik-speak";
// import ScrollReveal from "scrollreveal";
// import moment from "moment";
// // import { ApolloClient, InMemoryCache } from "@apollo/client";
// // import { baseUrl } from "~/api/constants";
// // import { gql } from "@apollo/client";
// import Newsletter from "~/components/newsletter/newsletter";

// // export const client = new ApolloClient({
// //   uri: `https://webapi.lccopen.tech/graphql`,
// //   cache: new InMemoryCache(),
// // });

// //Plantilla de post individual
// interface BlogPost {
//   title: string;
//   postId: string;
//   tags: { tagTitle: string; color: string }[];
//   featuredImage: string;
//   date: string;
//   content: string;
// }
// // interface Tag {
// //   name: string;
// // }

// // export const useQuery = routeLoader$(async () => {
// //   const { data } = await client.query({
// //     query: gql`
// //       query BlogPosts {
// //         posts {
// //           nodes {
// //             featuredImage {
// //               node {
// //                 guid
// //               }
// //             }
// //             content(format: RENDERED)
// //             slug
// //             title(format: RENDERED)
// //             date
// //             tags {
// //               nodes {
// //                 name
// //               }
// //             }
// //           }
// //         }
// //       }
// //     `,
// //   });
// //   const blogPosts = data.posts.nodes.map((elem: any) => ({
// //     title: elem.title,
// //     content: elem.content,
// //     featuredImage: elem.featuredImage.node.guid,
// //     postSlug: elem.slug,
// //     date: elem.date,
// //     tags: elem.tags.nodes.map((tag: any) => {
// //       return {
// //         tagTitle: tag.name,
// //         color: "border-ot-green",
// //       };
// //     }),
// //   }));

// //   // console.log(data);
// //   // console.log(blogPosts);

// //   return blogPosts;
// // });
// export const useQuery = routeLoader$(async () => {
//   const response = await fetch(`https://webapi.lccopen.tech/graphql`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': 'Bearer tu-token-de-autenticacion', // Si es necesario
//     },
//     body: JSON.stringify({
//       query: `
//         query BlogPosts {
//           posts {
//             nodes {
//               featuredImage {
//                 node {
//                   guid
//                 }
//               }
//               content(format: RENDERED)
//               slug
//               title(format: RENDERED)
//               date
//               tags {
//                 nodes {
//                   name
//                 }
//               }
//             }
//           }
//         }
//       `,
//     }),
//   });

//   const { data } = await response.json();
//   const blogPosts = data.posts.nodes.map((elem: any) => ({
//     title: elem.title,
//     content: elem.content,
//     featuredImage: elem.featuredImage.node.guid,
//     postSlug: elem.slug,
//     date: elem.date,
//     tags: elem.tags.nodes.map((tag: any) => ({
//       tagTitle: tag.name,
//       color: "border-ot-green",
//     })),
//   }));

//   return blogPosts;
// });

// // export const useBlogPost = routeLoader$<BlogPost>(async ({ params }) => {
// //   const { data } = await axios(
// //     `https://webapi.lccopen.tech/wp-json/wp/v2/posts/${params.blogid}`
// //   );
// //   const { data: featuredImage } = await axios(
// //     `https://webapi.lccopen.tech/wp-json/wp/v2/media/${data._links[
// //       "wp:featuredmedia"
// //     ][0].href
// //       .split("/")
// //       .pop()}`
// //   );
// //   /* const tags = await axios
// //     .get<Tag[]>(
// //       `https://webapi.lccopen.tech/wp-json/wp/v2/tags?include=${data.tags}`
// //     )
// //     .then((response) => {
// //       return response.data.map((tag) => {
// //         return {
// //           tagTitle: tag.name,
// //           color: "border-ot-green",
// //         };
// //       });
// //     }); */

// //   const text = data.content.rendered
// //     .replace(/\n\n\n/g, "<br />")
// //     .replaceAll(/<p>/g, '<p class="text-md lg:text-lg xl:text-xl">')
// //     .replaceAll(
// //       /h2 class="wp-block-heading"/g,
// //       'h2 class="text-xl lg:text-3xl xl:text-4xl font-bold"'
// //     )
// //     .replaceAll(
// //       /h3 class="wp-block-heading"/g,
// //       'h3 class="text-lg lg:text-2xl xl:text-3xl font-bold"'
// //     )
// //     .replaceAll(
// //       /h4 class="wp-block-heading"/g,
// //       'h4 class="text-md lg:text-xl xl:text-2xl font-bold"'
// //     )
// //     .replaceAll(/<strong>/g, "")
// //     .replaceAll(/<\/strong>/g, "")
// //     .replaceAll(/<b>/g, "")
// //     .replaceAll(/<\/b>/g, "")
// //     .replaceAll(/wp-block-image/g, "flex flex-col justify-center items-center");

// //   return {
// //     title: data.title.rendered,
// //     description: data.excerpt.rendered,
// //     featuredImage: featuredImage.source_url,
// //     contentImage: data.acf.contentImage,
// //     title1: data.acf.title1,
// //     title2: data.acf.title2,
// //     parragraph1: data.acf.parragraph1,
// //     parragraph2: data.acf.parragraph2,
// //     content: text,
// //     postId: data.id,
// //     tags:
// //       data.tags /* : [
// //       {
// //         tagTitle: "Creative Brand & Experience",
// //         color: "border-ot-green",
// //       },
// //     ], */,
// //     date: data.date.split("T")[0].replaceAll("-", "."),
// //   };
// // });
// export default component$(() => {
//   const t = inlineTranslate();
//   const location = useLocation();
//   const blogSlug = location.url.pathname.split("/")[2];
//   const blogPost = useQuery().value;
//   const currentBlogIndex = blogPost.findIndex(
//     (item: any) => item.postSlug === blogSlug
//   );
//   const currentBlog = blogPost[currentBlogIndex];
//   const prevBlog =
//     currentBlogIndex === 0
//       ? blogPost[blogPost.length - 1]
//       : blogPost[currentBlogIndex - 1];
//   const nextBlog =
//     currentBlogIndex === blogPost.length - 1
//       ? blogPost[0]
//       : blogPost[currentBlogIndex + 1];
//   const scheduleAsesory = t("home.scheduleAsesory@@Talk to Us");
//   useStylesScoped$(styles);
//   // const blogPostData = useBlogPost();
// /* 
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
// */
//   return (
//     <div class=" lg:mt-12 max-w-[1024px] mx-auto">
//       <div class="lg:max-w-[1290px] lg:mx-auto mx-8 2xl:px-0">
//         {/* post header section */}
//         <div class="lg:flex lg:flex-row lg:justify-end">
//           <div class="lg:w-1/2 flex lg:mb-10">
//             <div class="flex flex-col justify-center items-center lg:items-start">
//               <h1
//                 class="text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] 2xl:text-[44px] font-bold text-center lg:text-left"
//                 dangerouslySetInnerHTML={(currentBlog as BlogPost).title}
//               />
//             </div>
//           </div>
//           <div class="lg:w-1/2 lg:flex lg:flex-row lg:justify-evenly lg:mb-10 h-fit">
//             <div class="flex lg:justify-center items-center mt-5 lg:self-start lg:pl-5">
//               <ImgRightArrow class="h-3 self-center mr-5 lg:mr-2" />
//               <p class="text-ot-dark-gray">
//                 {moment((currentBlog as BlogPost).date).format("DD.MM.YYYY")}
//               </p>
//             </div>
//             <div class="flex flex-row pt-0 pb-0 flex-wrap mt-5">
//               {(currentBlog as BlogPost).tags.map((tag: any, k: number) => (
//                 <p
//                   key={k}
//                   class={`text-2xs text-center font-medium border-2 ${tag.color} text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}
//                   dangerouslySetInnerHTML={tag.tagTitle}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         <div
//           class="mt-10 mb-14 lg:text-lg text-left justify-center tracking-wide leading-normal items-center content-center"
//           dangerouslySetInnerHTML={(currentBlog as BlogPost).content}
//         />

//         <div class="flex justify-center items-center">
//           <OpentechButton
//             title={scheduleAsesory}
//             isGoogleAppointment={true}
//             fontSize={"text-[18px] lg:text-[22px]"}
//             classes={
//               "block py-2 px-10 lg:border lg:border-ot-white hover:scale-[1.1] active:scale-[1.1] transition-all duration-300 hover:bg-ot-green active:bg-ot-green hover:text-white active:text-white"
//             }
//           />
//         </div>

//         {/* Next/Prev buttons */}
//         <div class="my-6 lg:mt-20">
//           <div class="text-center my-14 flex items-center justify-center flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-between sm:w-full">
//             <OpentechButton
//               title="Anterior Post"
//               link={"/blog/" + prevBlog.postSlug}
//               textColor="text-ot-black"
//               backgroundColor="bg-ot-white"
//               classes={`${
//                 prevBlog === "" ? "hidden" : "border-ot-black border"
//               } hover:text-white hover:bg-ot-black hover:scale-[1.1] active:scale-[1.1] transition-all duration-300`}
//             />
//             <OpentechButton
//               title="Siguiente Post"
//               link={"/blog/" + nextBlog.postSlug}
//               textColor="text-ot-black"
//               backgroundColor="bg-ot-white"
//               classes={`${
//                 nextBlog === "" ? "hidden" : "border-ot-black border"
//               } hover:text-white hover:bg-ot-black hover:scale-[1.1] active:scale-[1.1] transition-all duration-300`}
//             />
//           </div>
//         </div>
//         <hr class="border-t-2 border-t-ot-light-gray" />
//         {/* email section */}
//         <Newsletter />
//       </div>
//     </div>
//   );
// });
