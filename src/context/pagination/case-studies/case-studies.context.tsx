import { createContextId } from "@builder.io/qwik";
import { CaseStudyInterface } from "~/interfaces";

export interface CaseStudiesState {
  currentPage: number;
  postPerPage: number;
  currentPost: CaseStudyInterface[];
  totalPost: number;
  allPost: CaseStudyInterface[];
}

export const CaseStudiesContext = createContextId<CaseStudiesState>(
  "caseStudies-context",
);
