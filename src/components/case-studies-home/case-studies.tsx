import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./case-studies.css?inline";
import OpentechButton from "../ot-button/ot-button";
import { useNavigate } from "@builder.io/qwik-city";
//Sección de casos de estudio utilizada en el home

export default component$(() => {
  const navigate = useNavigate();
  useStylesScoped$(styles);
  const data = [
    {
      title: "La travesia Digital del Hotel Rosa Bela",
      subtitle: "Website",
      tags: [
        { tagTitle: "Technology & Data", color: "border-ot-green" },
        { tagTitle: "Creative & Brand Experience", color: "border-ot-yellow" },
      ],
      parragraph:
        "El Hotel Rosa Bela, situado en el corazón de Puerto Ordaz, Venezuela, es una joya arquitectónica, un símbolo de diseño y prestigio. A pesar de su reconocimiento, enfrentaba un gran desafío: la falta de un sitio web que reflejara su excelencia y permitiera a los clientes interactuar y reservar servicios. Esta brecha digital marcó el punto de partida hacia una transformación digital indispensable.",
      imageUrl: "/assets/img/case-study-rosa-bela.webp",
      link: "/case-studies/hotel-rosa-bela",
    },
  ];

  return (
    <div>
      <div class="lg:bg-ot-light-gray lg:mx-32 xl:mx-42 lg:rounded-2xl">
        {data.map((item, index) => (
          <div
            key={index}
            class="bg-ot-light-gray pt-2 min-[618px]:rounded-xl lg:mx-8 max-w-[618px] lg:max-w-none mx-auto lg:flex lg:flex-row lg:py-5 lg:px-16 xl:px-0"
          >
            <div class="px-2 lg:w-2/4 xl:self-center w-[85%] mx-auto">
              <section class="pt-4">
                <a
                  href={item.link}
                  class="block text-xl lg:text-3xl font-bold tracking-tighter cursor-pointer"
                >
                  {item.title}
                </a>
                <p class="lg:text-2xl">{item.subtitle}</p>
              </section>
              <section class="flex flex-row py-0 flex-wrap">
                {item.tags.map((tag, index) => (
                  <p
                    key={index}
                    class={`text-center text-2xs lg:text-xs border-2 ${tag.color} rounded-full px-1 mr-2 mb-2`}
                  >
                    {tag.tagTitle}
                  </p>
                ))}
              </section>
              <section class="py-0">
                <p class="txt-3xs tracking-tighter font-normal my-4">
                  {item.parragraph}
                </p>
              </section>
              <div class="mb-8 w-full flex justify-center lg:justify-start">
                <OpentechButton
                  title={"Ver proyecto"}
                  paddingX={"px-8"}
                  link={item.link}
                  classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300 cursor-pointer"
                />
              </div>
            </div>
            <div class="lg:w-3/4 flex justify-center items-center pb-8">
              <div class="flex justify-center">
                <a href={item.link} class="w-[85%] lg:mx-auto block">
                  <img
                    src={item.imageUrl}
                    width={" "}
                    height={" "}
                    class="w-full rounded-b-xl lg:rounded-xl lg:ml-0 lg:mt-8 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
