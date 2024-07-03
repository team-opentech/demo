import { component$ } from "@builder.io/qwik";

interface Color {
  name: string;
  color: string;
  border?: boolean;
  text?: boolean;
}

interface ColorPaletteProps {
  colors: Color[];
}

export const ColorPalette = component$(({ colors }: ColorPaletteProps) => {
  function removeHashFromHex(hex: string) {
    if (hex.charAt(0) === "#") {
      return hex.slice(1);
    }
    return hex;
  }

  return (
    <div
      class="mx-auto flex w-fit max-w-full gap-[27px] overflow-x-scroll px-[21px] lg:gap-[72px] lg:px-[66px]"
      style={{ msOverflowStyle: "none", scrollbarWidth: "none" }}
    >
      {colors.map((e) => {
        return (
          <article
            key={`palette-${e.name}`}
            class={`aspect-[266/426] h-auto w-[266px] rounded-[23px] px-[32px] py-[47px] ${
              e.border ? "border border-solid border-[#000]" : ""
            } lg:aspect-[393/618] lg:w-[393px] lg:rounded-[46px] lg:px-[40px] lg:py-[57px]`}
            style={{ backgroundColor: `${e.color}` }}
          >
            <p
              class="text-[22px] font-normal leading-[30px]"
              style={e.text ? { color: "#fff" } : { color: "#000" }}
            >
              {removeHashFromHex(e.color)}
            </p>
            <p
              class="mt-[16px] text-[30px] font-normal leading-[30px] lg:text-[44px]"
              style={e.text ? { color: "#fff" } : { color: "#000" }}
            >
              {e.name}
            </p>
          </article>
        );
      })}
    </div>
  );
});
