import { component$ } from "@builder.io/qwik";
import { RegisteredComponent } from "@builder.io/sdk-qwik";

interface GalleryProps {
  gallery: Image[];
}
interface Image {
  image: string;
}

export const Gallery = component$(({ gallery }: GalleryProps) => {
  return (
    <section class="pt-[47px] pb-[69px] px-[23px] max-w-[600px] w-full mx-auto lg:pt-[216px] lg:pb-[166px] lg:max-w-[1920px] lg:px-[18%] min-[1920px]:px-[237px]">
      {gallery && (
        <div class="relative w-full">
          <div class="w-full h-full absolute z-0 flex items-center top-0 left-0 lg:hidden">
            <div class="grid grid-cols-2 w-full gap-[34.5%]">
              <div class="h-full flex justify-center">
                {gallery[0] && (
                  <img
                    src={gallery[0].image}
                    alt="Image 1"
                    width={697}
                    height={764}
                    class="w-full h-auto aspect-[108 / 118] object-cover"
                  />
                )}
              </div>
              <div class="h-full flex justify-center">
                {gallery[1] && (
                  <img
                    src={gallery[1].image}
                    alt="Image 1"
                    width={697}
                    height={764}
                    class="w-full h-auto aspect-[108/118] object-cover"
                  />
                )}
              </div>
            </div>
          </div>
          <div class="w-full aspect-[330/193] h-auto flex justify-center relative z-10 lg:hidden">
            <img
              src={gallery[2].image}
              alt="Image 1"
              width={697}
              height={764}
              class="w-auto h-full aspect-[176 / 193] object-cover"
            />
          </div>
          <div class="hidden lg:grid grid-cols-2 grid-rows-2 gap-x-[65px] gap-y-[74px]">
            {gallery.map((e, index) => {
              return (
                <img
                  src={e.image}
                  alt="Image 1"
                  width={697}
                  height={764}
                  class="w-full h-auto aspect-[697 / 764] object-cover"
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
];
