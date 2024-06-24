// import {
//   component$,
//   Resource,
//   useResource$,
//   useStylesScoped$,
//   useContext,
//   useTask$,
//   useVisibleTask$,
// } from "@builder.io/qwik";
// import styles from "./blog.css?inline"; // Archivo .css correspondiente del componente
// import BlogpostThumbnail from "~/components/blogpost-thumbnail/blogpost-thumbnail";
// import BlogLoadingTemplate from "~/components/blog-loading-template";
// import axios from "axios";
// import ImgDropdownIcon from "../../assets/svg/dropdown-icon.svg?jsx";
// import ImgSearchIcon from "../../assets/svg/search-icon.svg?jsx";
// import Pagination from "~/components/blog-pagination/pagination";
// import { BlogInterface } from "~/interfaces";
// import { BlogContext } from "~/context";
// import ScrollReveal from "scrollreveal";

// //Sección de Blog

// export default component$(() => {
//   useStylesScoped$(styles);

//   /* PAGINATION */
//   const currentPage = 1;
//   const postsPerPage = 8;

//   const blogResources = useResource$<BlogInterface[]>(async () => {
//     const { data } = await axios(
//       "https://webapi.lccopen.tech/wp-json/wp/v2/posts?acf_format=standard"
//     );

//     const blogPosts = await Promise.all(
//       data.map(async (item: any) => {
//         const { data: featuredImage } = await axios(
//           `https://webapi.lccopen.tech/wp-json/wp/v2/media/${item._links[
//             "wp:featuredmedia"
//           ][0].href
//             .split("/")
//             .pop()}`
//         );

//         return {
//           title: item.title.rendered,
//           description: item.excerpt.rendered,
//           featuredImage: featuredImage.source_url,
//           postId: item.id,
//         };
//       })
//     );

//     return blogPosts;
//   });

//   /* PAGINATION */
//   const pagination = useContext(BlogContext);

//   useTask$(async () => {
//     pagination.allPost = await blogResources.value;
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
//     ScrollReveal().reveal("#post", {
//       delay: 500,
//       origin: "bottom",
//       distance: "100px",
//       duration: 1200,
//       cleanup: true,
//     });
//   });

//   return (
//     <div class="">
//       <div class="lg:mx-10">
//         <div class="max-w-[1290px] flex justify-between items-center mx-6 lg:mx-auto lg:px-14 xl:px-0">
//           <p class="text-xl mb-20 font-bold tracking-tighter lg:text-3xl 2xl:text-4xl">
//             Blog
//           </p>
//           <div id="" class="md:flex md:flex-row mt-10">
//             <div class="relative flex ml-10 md:mr-5">
//               <input
//                 type="text"
//                 name="search"
//                 id="search"
//                 placeholder="Buscar proyecto"
//                 class="block rounded-md bg-ot-light-gray sm:pr-0 lg:pr-40 pl-2 py-1.5 text-sm sm:text-sm  placeholder:text-sm placeholder:text-ot-black"
//               />
//               <div class="absolute inset-y-0 right-0 flex py-3 lg:py-2 pr-1.5">
//                 <ImgSearchIcon alt="" class="h-3" />
//               </div>
//             </div>
//             <div class="relative md:block hidden">
//               <input
//                 type="text"
//                 name="search"
//                 id="search"
//                 placeholder="Todas las categorías"
//                 class="block lg:w-full rounded-md bg-ot-light-gray pr-14 pl-2 py-1.5 text-sm sm:text-sm placeholder:text-sm placeholder:text-ot-black"
//               />
//               <div class="absolute inset-y-0 right-0 flex py-4 lg:py-3 pr-2">
//                 <ImgDropdownIcon alt="" class="h-1.5" />
//               </div>
//             </div>
//             <div class="relative flex justify-end mt-4 md:hidden ">
//               <input
//                 type="text"
//                 name="filter"
//                 id="filter"
//                 placeholder="Filtrar"
//                 class="block rounded-md w-28 bg-ot-light-gray py-1.5 text-sm sm:text-sm  placeholder:text-end placeholder:mr-14 placeholder:text-sm placeholder:text-ot-black"
//               />
//               <div class="absolute  flex py-4 pr-2">
//                 <ImgDropdownIcon alt="" class="h-1.5" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Blog posts */}
//         <div class="max-w-[1290px] mx-auto md:mx-6 lg:mx-auto lg:px-14 xl:px-0 pt-8">
//           <Resource
//             value={blogResources}
//             onPending={() => (
//               <div>
//                 {[0, 1, 2, 3].map((item) => (
//                   <BlogLoadingTemplate key={item} isLeft={item % 4 === 0} />
//                 ))}
//               </div>
//             )}
//             onRejected={() => <div>Error while loading resources...</div>}
//             onResolved={(blogPost) => (
//               <div id="post" style={"visibility: hidden"}>
//                 {pagination.currentPost.map((post) => (
//                   <BlogpostThumbnail
//                     key={post.postId}
//                     isReversed={parseInt(post.postId) % 2 === 0}
//                     title={post.title}
//                     description={post.description}
//                     bannerImage={post.featuredImage}
//                     postId={parseInt(post.postId)}
//                   />
//                 ))}
//               </div>
//             )}
//           />
//         </div>
//       </div>
//       <Pagination
//         currentPage={pagination.currentPage}
//         postsPerPage={pagination.postPerPage}
//         totalPosts={pagination.totalPost}
//       />
//     </div>
//   );
// });
