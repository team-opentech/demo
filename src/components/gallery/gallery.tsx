import { component$ } from "@builder.io/qwik";
import { RegisteredComponent } from "@builder.io/sdk-qwik";
import { ColorPalette } from "../ColorPalette/ColorPalette";

interface GalleryProps {
  gallery: Image[];
}
interface Image {
  image: string;
}

export const Gallery = component$(({ gallery }: GalleryProps) => {
  return (
    <section class="mx-auto w-full max-w-[600px] px-[23px] pb-[69px] pt-[47px] lg:max-w-[1920px] lg:px-[18%] lg:pb-[166px] lg:pt-[216px] min-[1920px]:px-[237px]">
      {gallery && (
        <div class="relative w-full">
          <div class="absolute left-0 top-0 z-0 flex h-full w-full items-center lg:hidden">
            <div class="grid w-full grid-cols-2 gap-[34.5%]">
              <div class="flex h-full justify-center">
                {gallery[0] && (
                  <img
                    src={gallery[0].image}
                    alt="Image 1"
                    width={697}
                    height={764}
                    class="aspect-[108 / 118] h-auto w-full object-cover"
                  />
                )}
              </div>
              <div class="flex h-full justify-center">
                {gallery[1] && (
                  <img
                    src={gallery[1].image}
                    alt="Image 1"
                    width={697}
                    height={764}
                    class="aspect-[108/118] h-auto w-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
          <div class="relative z-10 flex aspect-[330/193] h-auto w-full justify-center lg:hidden">
            <img
              src={gallery[2].image}
              alt="Image 1"
              width={697}
              height={764}
              class="aspect-[176 / 193] h-full w-auto object-cover"
            />
          </div>
          <div class="hidden grid-cols-2 grid-rows-2 gap-x-[65px] gap-y-[74px] lg:grid">
            {gallery.map((e, index) => {
              return (
                <img
                  src={e.image}
                  alt="Image 1"
                  width={697}
                  height={764}
                  class="aspect-[697 / 764] h-auto w-full object-cover"
                  key={`Image-${index}`}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
});

export const customComponents: RegisteredComponent[] = [
  {
    component: Gallery,
    name: "Gallery",
    inputs: [
      {
        name: "gallery",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: ["jpeg", "jpg", "png"],
            defaultValue: "",
            required: true,
            helperText: "Select an image",
          },
        ],
        defaultValue: [],
        required: true,
        helperText: "Add images to the gallery",
      },
    ],
  },
  {
    component: ColorPalette,
    name: "ColorPalette",
    inputs: [
      {
        name: "colors",
        type: "list",
        subFields: [
          {
            name: "name",
            type: "string",
            defaultValue: "",
            required: true,
            helperText: "El nombre del color",
          },
          {
            name: "color",
            type: "color",
            defaultValue: "#000000",
            required: true,
            helperText: "El valor hexadecimal del color",
          },
          {
            name: "border",
            type: "boolean",
            defaultValue: false,
            helperText: "Indica si el color tiene borde",
          },
          {
            name: "text",
            type: "boolean",
            defaultValue: false,
            helperText: "Indica si el color es para texto",
          },
        ],
      },
    ],
  },
];
