import {
  type Signal,
  component$,
  useSignal,
  $,
  useContext,
} from "@builder.io/qwik";
import ImgPaginationArrow from "../../assets/svg/pagination-arrow.svg?jsx";
import { CaseStudiesContext } from "~/context";

interface PaginationProps {
  currentPage: number;
  postsPerPage: number;
  totalPosts: number;
  // onPageChange: (pageNumber: number) => void;
}

export const Pagination = component$(
  ({ currentPage, postsPerPage, totalPosts }: PaginationProps) => {
    const pagination = useContext(CaseStudiesContext);
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    // const handlePageChang = $(function handlePageChange(pageNumber: number) {
    //   currentPage = pageNumber;
    //   // onPageChange(pageNumber);
    // });

    const handlePageChange = $((pageNumber: number) => {
      pagination.currentPage = pageNumber;
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    const handlePageChangeArrow = $(() => {
      if (pagination.currentPage < pageNumbers.length) pagination.currentPage++;
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    const handlePageChangeArrowBack = $(() => {
      if (pagination.currentPage != 1) pagination.currentPage--;
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return (
      <nav class="max-w-[1290px] mx-auto flex justify-center my-8">
        <ul class="flex justify-center md:justify-between space-x-3 items-center w-auto h-12">
          <li>
            <button
              onClick$={() => handlePageChangeArrowBack()}
              class="flex items-center justify-center w-10 h-10 text-ot-black transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-ot-gray"
            >
              <ImgPaginationArrow class="w-5 h-5" />
            </button>
          </li>
          {pageNumbers.map((number, index) => {
            if (
              pageNumbers.length > 4 &&
              index > 2 &&
              index < pageNumbers.length - 1
            ) {
              console.log(index, pageNumbers.length);
              return null;
            }
            if (index === 2 && pageNumbers.length > 5) {
              return (
                <li key={number}>
                  <div class="bg-ot-black w-10 h-[1.33px] rounded-full" />
                </li>
              );
            }
            return (
              <li key={number}>
                <button
                  class={`w-10 h-10 text-sm py-2 px-3 font-medium text-ot-black bg-ot-white border rounded-full ${
                    number === pagination.currentPage
                      ? "border-ot-purple"
                      : "border-ot-black"
                  } ${number === 1 ? "px-3.5" : ""}`}
                  onClick$={() => handlePageChange(number)}
                >
                  {number}
                </button>
              </li>
            );
          })}

          <li>
            <button
              onClick$={() => handlePageChangeArrow()}
              class="flex items-center justify-center w-10 h-10 text-ot-black transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-ot-gray"
            >
              <ImgPaginationArrow class="w-5 h-5 rotate-180" />
            </button>
          </li>
        </ul>
      </nav>
    );
  },
);

export default Pagination;
