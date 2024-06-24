import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./testimonial.css?inline";
import ImgQuotes2 from "../../assets/svg/quotes-2.svg?jsx";
import ImgStartIcon from "../../assets/svg/star-icon.svg?jsx";
//Componente de testimonials que pertenece a la primera sección del home
//Recibe de props url de imagen, nombre de cliente y testimonio

interface props {
  imageUrl?: string;
  name?: string;
  cargo?: string;
  testimonialText?: string;
}

export default component$(
  ({
    imageUrl = "/src/assets/img/review-pfp.webp",
    name = "Nombre persona",
    cargo = "CARGO",
    testimonialText = "Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonum nibh euismod tincidunt ...",
  }: props) => {
    useStylesScoped$(styles);

    return (
      <div class="bg-ot-light-gray mt-12 w-full rounded-md py-4 px-4 xl:px-10 xl:py-8">
        <div class="h-1/5 lg:h-auto lg:hidden flex flex-row justify-end">
          <ImgQuotes2 class="h-3" />
        </div>
        <div class="h-4/5 lg:h-auto flex flex-row space-x-1 justify-start">
          <div class="w-2/6 lg:w-2/6">
            <img
              src={imageUrl}
              width={" "}
              height={" "}
              class="rounded-full lg:h-16 lg:w-16"
            />
          </div>
          <div class=" w-4/6 text-left">
            <div class="lg:flex flex-row justify-between">
              <h1 class="font-medium text-2xs lg:text-xs xl:text-[16px] mb-0">
                {name}
              </h1>
              <div class="hidden h-1/5 lg:h-auto lg:flex flex-row justify-end">
                <ImgQuotes2 class="h-4" />
              </div>
            </div>
            <h1 class="text-4xs text-ot-dark-gray font-bold mb-0">{cargo}</h1>
            <div class="hidden lg:flex flex-row xl:mb-5">
              <ImgStartIcon class="rounded-full h-4" />
              <ImgStartIcon class="rounded-full h-4" />
              <ImgStartIcon class="rounded-full h-4" />
              <ImgStartIcon class="rounded-full h-4" />
              <ImgStartIcon class="rounded-full h-4" />
            </div>
            <div class="lg:hidden flex flex-row">
              <ImgStartIcon class="rounded-full h-3" />
              <ImgStartIcon class="rounded-full h-3" />
              <ImgStartIcon class="rounded-full h-3" />
              <ImgStartIcon class="rounded-full h-3" />
              <ImgStartIcon class="rounded-full h-3" />
            </div>
            <p class="text-4xs lg:hidden">{testimonialText}</p>
          </div>
        </div>
        <p class="text-xs hidden lg:block overflow-auto mt-4">
          {testimonialText}
        </p>
      </div>
    );
  }
);
