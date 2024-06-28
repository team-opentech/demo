import {
  component$,
  useContext,
  useStore,
  // Resource,
  // useResource$,
  useStylesScoped$,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import BlogpostThumbnail from "~/components/blogpost-thumbnail/blogpost-thumbnail";
import styles from "./blog.css?inline"; // Archivo .css correspondiente del componente
// import BlogLoadingTemplate from "~/components/blog-loading-template";
// import axios from "axios";
// import ImgDropdownIcon from "../../assets/svg/dropdown-icon.svg?jsx";
import Pagination from "~/components/blog-pagination/pagination";
import { BlogContext } from "~/context";
import { BlogInterface } from "~/interfaces";
import ImgSearchIcon from "../../../assets/svg/search-icon.svg?jsx";
// import ScrollReveal from "scrollreveal";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { baseUrl } from "~/api/constants";
// import { gql } from "@apollo/client";
import { DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { inlineTranslate } from "qwik-speak";

export const BUILDER_PUBLIC_API_KEY = import.meta.env.PUBLIC_BUILDER_API_KEY;
export const BUILDER_MODEL = "blog-page";

// export const client = new ApolloClient({
//   uri: `https://webapi.lccopen.tech/graphql`,
//   cache: new InMemoryCache(),
// });

export const useQuery = routeLoader$(async () => {
  // const { data } = await client.query({
  //   query: gql`
  //     query BlogPosts {
  //       posts {
  //         nodes {
  //           id
  //           featuredImage {
  //             node {
  //               guid
  //             }
  //           }
  //           content(format: RENDERED)
  //           slug
  //           title(format: RENDERED)
  //           date
  //           tags {
  //             nodes {
  //               name
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `,
  // });
  const { results } = await fetch(
    `https://cdn.builder.io/api/v3/content/${BUILDER_MODEL}?apiKey=${BUILDER_PUBLIC_API_KEY}&limit=0`
  ).then((res) => res.json());
  const data = results;
  // console.log("Builder Content: ", data[1].data.tags['Default']);
  // const blogPosts: BlogInterface[] = data.posts.nodes.map((elem: any) => ({
  //   title: elem.title,
  //   description: elem.content,
  //   featuredImage: elem.featuredImage.node.guid,
  //   postSlug: elem.slug,
  //   tags: elem.tags.nodes.map((tag: any) => tag.name),
  // }));
  const blogPosts: BlogInterface[] = data.map((elem: any) => ({
    title: elem.data.title['Default'],
    description: elem.data.blurb['Default'],
    featuredImage: elem.data.featuredImage,
    postSlug: elem.data.url,
    tags: elem.data?.tags['Default'],
  }));

  //   console.log(blogPosts);

  return blogPosts;
});
//Sección de Blog

export default component$(() => {
  const blogPosts = useQuery().value;

  useStylesScoped$(styles);

  /* PAGINATION */
  const currentPage = 1;
  const postsPerPage = 8;

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
  //           postSlug: item.slug,
  //         };
  //       })
  //     );

  //     return blogPosts;
  //   });

  /* PAGINATION */
  const pagination = useContext(BlogContext);

  useTask$(async () => {
    // pagination.allPost = await blogResources.value;
    pagination.allPost = blogPosts;
    pagination.totalPost = pagination.allPost.length;
  });

  useTask$(async ({ track }) => {
    track(() => pagination.currentPage);
    const indexOfLastPost = pagination.currentPage * pagination.postPerPage;
    const indexOfFirstPost = indexOfLastPost - pagination.postPerPage;
    pagination.currentPost = pagination.allPost.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
  });

  // useVisibleTask$(() => {
  //   ScrollReveal().reveal("#post", {
  //     delay: 500,
  //     origin: "bottom",
  //     distance: "100px",
  //     duration: 1200,
  //     cleanup: true,
  //   });
  // });

  const searchStore = useStore({
    query: "",
    selectedTag: "",
  });

  useVisibleTask$(({ track }) => {
    track(() => searchStore.query);
    track(() => searchStore.selectedTag);

    let filteredPosts = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchStore.query.toLowerCase())
    );
    if (searchStore.selectedTag) {
      filteredPosts = filteredPosts.filter((post) =>
        post.tags.includes(searchStore.selectedTag)
      );
    }
    pagination.allPost = filteredPosts;
    pagination.totalPost = filteredPosts.length;

    const indexOfLastPost = pagination.currentPage * pagination.postPerPage;
    const indexOfFirstPost = indexOfLastPost - pagination.postPerPage;
    pagination.currentPost = filteredPosts.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
  });

  return (
    <div class="">
      <div class="lg:mx-10">
        <div class="max-w-[1290px] flex justify-between items-center mx-6 lg:mx-auto lg:px-14 xl:px-0">
          <h1 class="text-xl mb-20 font-bold tracking-tighter lg:text-3xl 2xl:text-4xl">
            Blog
          </h1>
          <div id="" class="md:flex md:flex-row mt-10">
            <div class="relative flex ml-10 md:mr-5">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Buscar proyecto"
                value={searchStore.query}
                onInput$={(e) =>
                  (searchStore.query = (e.target as HTMLInputElement).value)
                }
                class="block rounded-md bg-ot-light-gray sm:pr-0 lg:pr-40 pl-2 py-1.5 text-sm sm:text-sm  placeholder:text-sm placeholder:text-ot-black"
              />
              <div class="absolute inset-y-0 right-0 flex py-3 lg:py-2 pr-1.5">
                <ImgSearchIcon class="h-3" />
              </div>
            </div>
            <div class="relative flex justify-end mt-4 md:mt-0 md:block">
              <select
                name="search-tags"
                id="search-tags"
                class="block w-52 lg:w-full rounded-md bg-ot-light-gray pr-14 pl-2 py-1.5 text-sm sm:text-sm placeholder:text-sm placeholder:text-ot-black"
                onInput$={(e) =>
                  (searchStore.selectedTag = (e.target as HTMLSelectElement).value)
                }
              >
                <option value="">Todas las categorías</option>
                {blogPosts
                  .flatMap((post) => post.tags)
                  .filter((value, index, self) => self.indexOf(value) === index)
                  .map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        {/* Blog posts */}
        <div class="max-w-[1290px] mx-auto md:mx-6 lg:mx-auto lg:px-14 xl:px-0 pt-8">
          {/* <Resource
            value={blogResources}
            onPending={() => (
              <div>
                {[0, 1, 2, 3].map((item) => (
                  <BlogLoadingTemplate key={item} isLeft={item % 4 === 0} />
                ))}
              </div>
            )}
            onRejected={() => <div>Error while loading resources...</div>}
            onResolved={(blogPost) => ( */}
          <div>
            {pagination.currentPost.map((post, index: number) => (
              <BlogpostThumbnail
                key={post.postSlug}
                position={index}
                isReversed={index % 2 === 0}
                animation={index % 2 === 0 ? "left" : "right"}
                title={post.title}
                description={post.description.slice(0, 300) + "..."}
                bannerImage={post.featuredImage}
                postSlug={post.postSlug}
              />
            ))}
          </div>
          {/* //     )}
        //   /> */}
        </div>
      </div>
      <Pagination
        currentPage={pagination.currentPage}
        postsPerPage={pagination.postPerPage}
        totalPosts={pagination.totalPost}
      />
    </div>
  );
});

export const head: DocumentHead = ({resolveValue, params}) => {
  const t = inlineTranslate();
  const title = t("blog.metaTitle@@Blog Opentech - Consejos en Desarrollo Web y Marketing Digital");
  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: t("blog.metaDescription@@Explora nuestro blog para obtener las últimas tendencias y consejos en desarrollo web y marketing digital diseñados para impulsar tu empresa."),
      },
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:image",
        content: `https://${import.meta.env.PUBLIC_DOMAIN}/OT-OG.jpg`
      }
    ],
    links: [
      {
        rel: "canonical",
        href: "https://lccopen.tech",
      },
    ],
  };
};