import { createContextId } from "@builder.io/qwik";
import { PortafolioInterface } from "~/interfaces";

export interface PortafolioState {
  currentPage: number;
  postPerPage: number;
  currentPost: PortafolioInterface[];
  totalPost: number;
  allPost: PortafolioInterface[];
  colorheader: boolean;
}

export const PortafolioContext =
  createContextId<PortafolioState>("portafolio-context");
