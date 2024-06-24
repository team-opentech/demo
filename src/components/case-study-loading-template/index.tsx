import { component$ } from "@builder.io/qwik";

interface Template {
  isReversed: boolean;
}

export default component$(({ isReversed }: Template) => {
  return isReversed ? (
    <div class="mb-24 mx-4 bg-zinc-200 rounded-2xl lg:flex lg:flex-row-reverse lg:relative lg:mx-32 ">
      <div
        id="circle-item"
        class={
          "animate-pulse absolute hidden lg:top-16 right-[-26.5px] lg:flex flex-col rounded-full w-[53px] h-[53px] items-center justify-center bg-zinc-400"
        }
      >
        <div class="bg-ot-white h-5 w-5 rounded-full" />
      </div>
      <div class="p-12 px-8 lg:w-2/4 lg:pl-24 lg:pr-10 h-[250px] lg:h-auto">
        <div class="animate-pulse w-2/4 py-2 rounded-full bg-zinc-300 mb-2" />
        <div class="animate-pulse w-1/4 py-1 rounded-full bg-zinc-300 mb-6" />
        <div class="hidden lg:flex lg:flex-row lg:flex-wrap mb-6">
          {
            //tags.map((tag, k: number) =>
            //<p class={`text-2xs text-center font-medium border-2 ${tag.color} text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}>{tag.tagTitle}</p>
            //)
          }
        </div>
        <div class="animate-pulse">
          <div class="w-2/3 py-1 rounded-full bg-zinc-300 mb-2" />
          <div class="w-1/4 py-1 rounded-full bg-zinc-300 mb-2" />
          <div class="w-3/4 py-1 rounded-full bg-zinc-300 mb-2" />
        </div>
        <div class="flex flex-row justify-between mt-5">
          <div class="mt-8">
            <div class="rounded-full w-2/4 py-3 bg-zinc-300 " />
          </div>
        </div>
      </div>
      <div class="relative lg:w-2/4">
        <div class="animate-pulse bg-zinc-300 rounded-b-2xl lg:rounded-l-2xl lg:rounded-r-none lg:w-full lg:h-full h-[300px]" />
        <div
          id="circle-item"
          class={
            "animate-pulse absolute left-[calc(50%-24px)] bottom-[-26.5px] flex lg:hidden flex-col rounded-full w-[53px] h-[53px] items-center justify-center bg-zinc-400"
          }
        >
          <div class="bg-ot-white h-5 w-5 rounded-full" />
        </div>
      </div>
    </div>
  ) : (
    <div class="mb-24 mx-4 bg-zinc-200 rounded-2xl lg:flex lg:flex-row lg:relative lg:mx-32 ">
      <div
        id="circle-item"
        class={
          "animate-pulse lg:top-16 absolute hidden left-[-26.5px] right-[-23px] lg:flex flex-col rounded-full w-[53px] h-[53px] items-center justify-center bg-zinc-400"
        }
      >
        <div class="bg-ot-white h-5 w-5 rounded-full" />
      </div>
      <div class="p-12 px-8 lg:w-2/4 lg:pl-24 lg:pr-10 h-[250px] lg:h-auto">
        <div class="animate-pulse w-2/4 py-2 rounded-full bg-zinc-300 mb-2" />
        <div class="animate-pulse w-1/4 py-1 rounded-full bg-zinc-300 mb-6" />
        <div class="hidden lg:flex lg:flex-row lg:flex-wrap mb-6">
          {
            //tags.map((tag, k: number) =>
            //<p class={`text-2xs text-center font-medium border-2 ${tag.color} text-ot-dark-gray rounded-full px-3 lg:px-2 py-1 mr-2 mb-2`}>{tag.tagTitle}</p>
            //)
          }
        </div>
        <div class="animate-pulse">
          <div class="w-2/3 py-1 rounded-full bg-zinc-300 mb-2" />
          <div class="w-1/4 py-1 rounded-full bg-zinc-300 mb-2" />
          <div class="w-3/4 py-1 rounded-full bg-zinc-300 mb-2" />
        </div>
        <div class="flex flex-row justify-between mt-5">
          <div class="mt-8">
            <div class="rounded-full w-2/4 py-3 bg-zinc-300 " />
          </div>
        </div>
      </div>
      <div class="relative lg:w-2/4">
        <div class="animate-pulse bg-zinc-300 rounded-b-2xl lg:rounded-l-none lg:rounded-r-2xl lg:w-full lg:h-full h-[350px]" />
        <div
          id="circle-item"
          class={
            "animate-pulse absolute left-[calc(50%-24px)] bottom-[-26.5px] flex lg:hidden flex-col rounded-full w-[53px] h-[53px] items-center justify-center bg-zinc-400"
          }
        >
          <div class="bg-ot-white h-5 w-5 rounded-full" />
        </div>
      </div>
    </div>
  );
});
