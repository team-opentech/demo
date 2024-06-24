import {
  Slot,
  component$,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { CaseStudiesContext, CaseStudiesState } from "~/context";
import { BlogContext, BlogState } from "~/context";
import { PortafolioContext, PortafolioState } from "~/context";

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

  useContextProvider(CaseStudiesContext, caseStudiesPagination);
  useContextProvider(BlogContext, blogPagination);
  useContextProvider(PortafolioContext, portafolioPagination);

  return <Slot />;
});
