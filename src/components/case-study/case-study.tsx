import { component$, useStylesScoped$ } from "@builder.io/qwik";
import OpentechButton from "~/components/ot-button/ot-button";
import styles from "./case-study.css?inline";
import { useNavigate } from "@builder.io/qwik-city";
import ImgNextArrow from "../../assets/svg/next-arrow.svg?jsx";
import ImgBanner from "../../assets/img/sample-image-2.webp?jsx";

interface CaseStudyProps {
  title: string;
  subtitle: string;
  description: string;
  tags: { color: string; tagTitle: string }[];
  bannerImage: string;
  isReversed?: boolean;
  caseId: number;
}

export default component$(
  ({
    caseId,
    title = "Purepower Cycle",
    isReversed = false,
    subtitle = "Website design",
    description = "Pure Power Cycle es un centro de entrenamiento especializado en bicicleta estacionaria, ubicados en Florida, Estados Unidos...",
    tags,
    bannerImage = "/src/assets/img/sample-image-2.webp",
  }: CaseStudyProps) => {
    useStylesScoped$(styles);
    const navigate = useNavigate();
    const colors = [
      "bg-ot-green",
      "bg-ot-purple",
      "bg-ot-yellow",
      "bg-ot-orange",
    ];
    const borderColors = [
      "border-ot-green",
      "border-ot-purple",
      "border-ot-yellow",
      "border-ot-orange",
    ];

    return isReversed ? (
      <div class="mb-24 mx-4 bg-ot-light-gray rounded-2xl lg:flex lg:flex-row-reverse lg:relative lg:mx-32 ">
        <div
          id="circle-item"
          class={
            "absolute hidden lg:top-16 right-[-26.5px] lg:flex flex-col rounded-full w-[53px] h-[53px] items-center justify-center " +
            colors[Math.floor(Math.random() * colors.length)]
          }
        >
          <div class="bg-ot-white h-5 w-5 rounded-full" />
        </div>
        <div class="p-12 px-8 lg:w-2/4 lg:pl-24 lg:pr-10 h-[350px] lg:h-auto">
          <div class="text-xl font-bold lg:text-3xl lg:font-extrabold tracking-tighter">
            {title}
          </div>
          <div class="text-md mb-2.5 lg:text-2xl">{subtitle}</div>
          {/* TAGS */}
          <div class="flex flex-row flex-wrap mb-3 lg:hidden md:hidden">
            {tags.slice(0, 2).map((tag, item) => (
              <p
                key={item}
                class={`text-2xs text-center font-medium border-2 ${
                  borderColors[Math.floor(Math.random() * colors.length)]
                } text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}
              >
                {tag.tagTitle}
              </p>
            ))}
          </div>
          <div class="lg:flex lg:flex-row lg:flex-wrap md:flex md:flex-row md:flex-wrap mb-3 pt-2 hidden">
            {tags.map((tag, item) => (
              <p
                key={item}
                class={`text-2xs text-center font-medium border-2 ${
                  borderColors[Math.floor(Math.random() * colors.length)]
                } text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}
              >
                {tag.tagTitle}
              </p>
            ))}
          </div>
          <div class="text-xs lg:text-sm lg:mr-28">{description}</div>
          <div class="flex flex-row justify-between py-8 lg:mr-8">
            <div
              onClick$={() => {
                navigate(`/case-studies/${caseId}`);
              }}
            >
              <OpentechButton
                title={"Ver Proyecto"}
                paddingX={"px-7 py-2"}
                classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
              />
            </div>
            <div class="flex flex-row space-x-4 lg:space-x-8 items-center">
              <ImgNextArrow class="h-6 lg:h-8 rotate-180" />
              <ImgNextArrow class="h-6 lg:h-8" />
            </div>
          </div>
        </div>
        <div class="relative w-full lg:w-2/4 sm:pb-4">
          <img
            src={bannerImage}
            width={" "}
            height={" "}
            class="px-6 py-10 object-contain rounded-b-2xl lg:rounded-l-2xl lg:rounded-r-none lg:w-full lg:h-full lg:ml-10 h-auto"
          />
          <div
            id="circle-item"
            class={
              "absolute left-[calc(50%-24px)] bottom-[-26.5px] flex lg:hidden flex-col rounded-full w-[53px] h-[53px] items-center justify-center " +
              colors[Math.floor(Math.random() * colors.length)]
            }
          >
            <div class="bg-ot-white h-5 w-5 rounded-full" />
          </div>
        </div>
      </div>
    ) : (
      <div class="mb-24 mx-4 bg-ot-light-gray rounded-2xl lg:flex lg:flex-row lg:relative lg:mx-32 ">
        <div
          id="circle-item"
          class={
            " lg:top-16 absolute hidden left-[-26.5px] right-[-23px] lg:flex flex-col rounded-full w-[53px] h-[53px] items-center justify-center " +
            colors[Math.floor(Math.random() * colors.length)]
          }
        >
          <div class="bg-ot-white h-5 w-5 rounded-full" />
        </div>
        <div class="p-12 px-8 lg:w-2/4 lg:pl-24 lg:pr-10 h-[420px] lg:h-auto">
          <div class="text-xl font-bold lg:text-3xl lg:font-extrabold tracking-tighter">
            {title}
          </div>
          <div class="text-md mb-2.5 lg:text-2xl">{subtitle}</div>
          {/* TAGS */}
          <div class="flex flex-row flex-wrap mb-3 lg:hidden md:hidden">
            {tags.slice(0, 2).map((tag, item) => (
              <p
                key={item}
                class={`text-2xs text-center font-medium border-2 ${
                  borderColors[Math.floor(Math.random() * colors.length)]
                } text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}
              >
                {tag.tagTitle}
              </p>
            ))}
          </div>
          <div class="lg:flex lg:flex-row lg:flex-wrap md:flex md:flex-row md:flex-wrap mb-3 hidden">
            {tags.map((tag, item) => (
              <p
                key={item}
                class={`text-2xs text-center font-medium border-2 ${
                  borderColors[Math.floor(Math.random() * colors.length)]
                } text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}
              >
                {tag.tagTitle}
              </p>
            ))}
          </div>
          <div class="text-xs lg:text-sm lg:mr-28">{description}</div>
          <div class="flex flex-row justify-between py-8 lg:mr-8">
            <div
              onClick$={() => {
                navigate(`/case-studies/${caseId}`);
              }}
            >
              <OpentechButton
                title={"Ver proyecto"}
                paddingX={"px-7 py-2"}
                classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
              />
            </div>
            <div class="flex flex-row space-x-4 lg:space-x-8 items-center">
              <ImgNextArrow class="h-6 lg:h-8 rotate-180" />
              <ImgNextArrow class="h-6 lg:h-8" />
            </div>
          </div>
        </div>
        <div class="relative w-full lg:w-2/4 sm:pb-4">
          <img
            src={bannerImage}
            width={" "}
            height={" "}
            class="px-6 py-10 object-contain rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl lg:w-full lg:h-full lg:mr-10 h-auto"
          />
          <div
            id="circle-item"
            class={
              "absolute left-[calc(50%-24px)] bottom-[-26.5px] flex lg:hidden flex-col rounded-full w-[53px] h-[53px] items-center justify-center " +
              colors[Math.floor(Math.random() * colors.length)]
            }
          >
            <div class="bg-ot-white h-5 w-5 rounded-full" />
          </div>
        </div>
      </div>
    );
  },
);
