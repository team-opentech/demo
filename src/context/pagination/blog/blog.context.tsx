import { createContextId } from "@builder.io/qwik";
import { BlogInterface } from "~/interfaces";

export interface BlogState {
  currentPage: number;
  postPerPage: number;
  currentPost: BlogInterface[];
  totalPost: number;
  allPost: BlogInterface[];
}

export const BlogContext = createContextId<BlogState>("blog-context");
