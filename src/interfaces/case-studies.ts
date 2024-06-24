export interface CaseStudyInterface {
  caseId: string;
  title: string;
  subtitle: string;
  description: string;
  tags: { color: string; tagTitle: string }[];
  images: string;
  bannerImage: string;
  contentImage: string;
  carousel: string[];
}
