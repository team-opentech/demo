import {
  component$,
  useStylesScoped$,
  // useVisibleTask$,
} from "@builder.io/qwik";
import OpentechButton from "~/components/ot-button/ot-button";
import styles from "./blogpost-thumbnail.css?inline";
import { useNavigate } from "@builder.io/qwik-city";
// import ScrollReveal from "scrollreveal";
// import ImgNextArrow from "../../assets/svg/next-arrow.svg?jsx";
// import ImgBanner from "../../assets/img/sample-image-2.webp?jsx";

interface BlogProps {
  title: string;
  subtitle?: string;
  description: string;
  tags?: { color: string; tagTitle: string }[];
  bannerImage: string;
  isReversed?: boolean;
  animation: string;
  postSlug: string;
  position: number;
}

export default component$(
  ({
    postSlug,
    title = "Purepower Cycle",
    isReversed = false,
    subtitle = "Website design",
    description = "Pure Power Cycle es un centro de entrenamiento especializado en bicicleta estacionaria, ubicados en Florida, Estados Unidos...",
    tags,
    animation,
    bannerImage = "/src/assets/img/sample-image-2.webp",
    position,
  }: BlogProps) => {
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
    // console.log(postSlug)

    return (
      <div
        class={` ${
          position === 0 ? "" : animation === "right" ? "right" : "left"
        }`}
      >
        {isReversed ? (
          /* IMAGEN IZQUIERDA */
          <div
            // onClick$={() => {
            //   navigate(`/blog/${postSlug}/`);   ****Hook anterior para navegar
            // }}
            onClick$={() => {
              navigate(`${postSlug}`);
            }}
            class={`mb-24 mx-4 bg-ot-light-gray rounded-2xl lg:flex lg:flex-row-reverse cursor-pointer`}
          >
            <div class="p-12 px-8 lg:w-2/4 lg:pl-4 lg:pr-14 h-auto">
              <div class="text-xl mb-3 font-bold lg:text-3xl lg:font-extrabold tracking-tighter">
                {title}
              </div>
              <div
                class="text-xs lg:text-sm lg:mr-28"
                dangerouslySetInnerHTML={description}
              />
              <div class="flex flex-row justify-between pt-8 lg:mr-8">
                <OpentechButton
                  title={"Leer Mas"}
                  paddingX={"px-7 py-2"}
                  // link={`/blog/${postSlug}/`}
                  link={`${postSlug}`}
                  classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
                />

                {/* <div class="flex flex-row space-x-4 lg:space-x-8 items-center">
                  <ImgNextArrow alt="" class="h-6 lg:h-8 rotate-180" />
                  <ImgNextArrow alt="" class="h-6 lg:h-8" />
                </div> */}
              </div>
            </div>
            <div class="flex items-center justify-center lg:w-2/4 pb-4 lg:pb-0 lg:pr-10 xl:py-11">
              <img
                src={bannerImage}
                width={" "}
                height={" "}
                class="mx-6 mb-10 h-[80%] w-[85%] lg:w-[80%] lg:h-auto lg:mb-0 object-contain rounded-lg lg:ml-10"
              />
            </div>
          </div>
        ) : (
          /* IMAGEN DERECHA */
          <div
            onClick$={() => {
              // navigate(`/blog/${postSlug}/`);
              navigate(`${postSlug}`);
            }}
            class={`mb-24 mx-4 bg-ot-light-gray rounded-2xl lg:flex lg:flex-row cursor-pointer`}
          >
            <div class="p-12 px-8 lg:w-2/4 lg:pl-16 lg:pr-10 h-auto">
              <div
                class="text-xl mb-3 font-bold lg:text-3xl lg:font-extrabold tracking-tighter"
                dangerouslySetInnerHTML={title}
              />
              <div
                class="text-xs lg:text-sm lg:mr-28"
                dangerouslySetInnerHTML={description}
              />
              <div class="flex flex-row justify-between pt-8 lg:mr-8">
                <OpentechButton
                  title={"Leer Mas"}
                  paddingX={"px-7 py-2"}
                  // link={`/blog/${postSlug}/`}
                  link={`${postSlug}`}
                  classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300"
                />

                {/*  <div class="flex flex-row space-x-4 lg:space-x-8 items-center">
                  <ImgNextArrow alt="" class="h-6 lg:h-8 rotate-180" />
                  <ImgNextArrow alt="" class="h-6 lg:h-8" />
                </div> */}
              </div>
            </div>
            <div class="flex items-center justify-center lg:w-2/4 pb-4 lg:pb-0 xl:py-11">
              <img
                src={bannerImage}
                width={" "}
                height={" "}
                class="mx-6 lg:mx-0 mb-10 h-[80%] w-[85%] lg:w-[80%] lg:h-auto lg:mb-0 object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);
