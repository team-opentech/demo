import {
  Slot,
  component$,
  useContextProvider,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import header from "~/components/header/header";
import { CaseStudiesContext, CaseStudiesState } from "~/context";
import { BlogContext, BlogState } from "~/context";
import { PortafolioContext, PortafolioState } from "~/context";
import { HeaderContext, HeaderState } from "~/context";

export const PaginationProvider = component$(() => {
  const caseStudiesPagination = useStore<CaseStudiesState>({
    currentPage: 1,
    postPerPage: 2,
    currentPost: [],
    totalPost: 0,
    allPost: [],
  });

  const blogPagination = useStore<BlogState>({
    currentPage: 1,
    postPerPage: 8,
    currentPost: [],
    totalPost: 0,
    allPost: [],
  });

  const portafolioPagination = useStore<PortafolioState>({
    currentPage: 1,
    postPerPage: 8,
    currentPost: [],
    totalPost: 0,
    allPost: [],
  });

  const headerState = useStore<HeaderState>({
    bgheader: "transparent",
    menuIconColor: "black",
    logocolor: "black",
    isMenuOpen: false,
    isScrolled: false,
    headerIndex: 0,
    previousHeaderIndex: 0,
  });


  useContextProvider(CaseStudiesContext, caseStudiesPagination);
  useContextProvider(BlogContext, blogPagination);
  useContextProvider(PortafolioContext, portafolioPagination);
  useContextProvider(HeaderContext, headerState);

  return <Slot />;
});
