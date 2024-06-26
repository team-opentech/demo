import { component$ } from "@builder.io/qwik";
import OpentechButton from "../../components/ot-button/ot-button";
import { inlineTranslate } from "qwik-speak";
import { DocumentHead, useNavigate } from "@builder.io/qwik-city";

export default component$(() => {
  const navigate = useNavigate();
  const t = inlineTranslate();
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
      link: "/case-studies/hotel-rosa-bela/",
    },
  ];

  return (
    <section class="flex flex-col justify-center lg:max-w-[80%] xl:max-w-[1300px] mx-auto">
      <h1 class="flex text-[29px] font-bold mb-8 mx-auto lg:mx-0 text-center lg:text-left">
        Nuestros casos de exito
      </h1>
      <div class="lg:bg-ot-light-gray lg:rounded-2xl">
        {data.map((item, index) => (
          <div
            key={index}
            class="bg-ot-light-gray px-8 pt-2 md:rounded-xl lg:mx-8 md:mx-20 lg:flex lg:flex-row lg:py-5 lg:px-16 xl:px-0"
          >
            <div class="px-2 lg:w-2/4 xl:self-center">
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
              <a href={item.link}>
                <img
                  src={item.imageUrl}
                  width={" "}
                  height={" "}
                  class="w-[85%] -ml-6 rounded-b-xl lg:rounded-xl lg:ml-0 lg:mt-8 cursor-pointer"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export const head: DocumentHead = ({resolveValue, params}) => {
  const t = inlineTranslate();
  const title = t("case_studies.metaTitle@@Opentech Transforma Negocios - Descubre Cómo");
  return {
    title: title,
    meta: [
      {
        name: 'description',
        content: t("case_studies.metaDescription@@Descubre cómo Opentech ha impulsado el éxito de clientes mediante soluciones de desarrollo web. Sumérgete en estos proyectos notorios."),
      },
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:image",
        content: `https://${import.meta.env.PUBLIC_DOMAIN}/OT-OG.jpg`
      }
    ],
    links: [
      {
        rel: "canonical",
        href: "https://lccopen.tech",
      },
    ],
  };
};