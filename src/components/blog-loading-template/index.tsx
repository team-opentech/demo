import { component$ } from "@builder.io/qwik";

interface Template {
  isLeft: boolean;
}

export default component$(({ isLeft }: Template) => {
  return isLeft ? (
    <div class="lg:w-full lg:relative">
      <div class="bg-zinc-200 mb-32 h-auto rounded-xl mr-10 lg:w-[65%] lg:flex lg:flex-row lg:relative lg:mb-40 ">
        <div class="px-7 py-8 lg:py-4 md:px-10 lg:ml-8 lg:pr-0 lg:mt-2">
          <div class="lg:hidden flex justify-end">
            <p class="animate-pulse flex-end text-xs text-end bg-zinc-300 rounded-full w-5 text-zinc-300">
              0
            </p>
          </div>
          <div class="animate-pulse lg:w-48 lg:pt-12 lg:mb-10 lg:space-y-4">
            <div class="w-2/4 py-2 rounded-full bg-zinc-300 mb-4" />
            <div class="w-2/3 py-1 rounded-full bg-zinc-300" />
            <div class="w-1/4 py-1 rounded-full bg-zinc-300" />
            <div class="w-3/4 py-1 rounded-full bg-zinc-300" />
          </div>
          <div class="mt-8">
            <div class="animate-pulse rounded-full w-1/4 py-3 bg-zinc-300 " />
          </div>
        </div>
        <div class="h-64 w-full lg:w-[50%] relative">
          <div class="hidden lg:block mr-10 mt-8"></div>
          <div class="animate-pulse bg-zinc-300 lg:hidden absolute left-6 mr-10 top-5 h-72 w-full object-none rounded-xl lg:left-16 lg:top-20"></div>
        </div>
      </div>
      <div class="animate-pulse bg-zinc-300 absolute hidden h-[90%] rounded-xl lg:block lg:w-[50%] lg:bottom-[-45px] lg:left-[50%] " />
    </div>
  ) : (
    <div class="lg:w-full">
      <div
        class="hidden lg:block lg:relative"
        style={"text-align: -webkit-right;"}
      >
        <div class="bg-zinc-200 mb-32 h-auto rounded-xl ml-10 lg:w-[65%] lg:flex lg:flex-row lg:relative lg:mb-32">
          <div class="h-64 w-full"></div>
          <div class="animation-pulse px-7 py-8 lg:w-96 lg:py-4 md:px-10 lg:mr-8 lg:pl-0 lg:mt-2">
            <div class="lg:pt-12 lg:mb-10 lg:space-y-4 text-left">
              <div class="w-2/4 py-2 rounded-full bg-zinc-300 mb-4" />
              <div class="w-2/3 py-1 rounded-full bg-zinc-300" />
              <div class="w-1/4 py-1 rounded-full bg-zinc-300" />
              <div class="w-3/4 py-1 rounded-full bg-zinc-300" />
            </div>
            <div class="mt-8 text-right">
              <div class="animate-pulse rounded-full w-1/4 py-3 bg-zinc-300 " />
            </div>
          </div>
        </div>
        <div class="animate-pulse bg-zinc-300 absolute hidden h-[90%] rounded-xl lg:block lg:w-[50%] lg:bottom-[-45px] lg:right-[50%] " />
      </div>
      <div class="bg-zinc-200 h-auto rounded-xl mr-10 lg:ml-4 lg:w-[65%] lg:flex-row lg:relative mb-32 lg:hidden">
        <div class="px-7 py-8 md:px-10 lg:ml-8 lg:pr-0 lg:mt-2">
          <div class="lg:hidden flex justify-end">
            <p class="animate-pulse flex-end text-xs text-end bg-zinc-300 rounded-full w-5 text-zinc-300">
              0
            </p>
          </div>
          <div class="animate-pulse lg:pt-12 lg:mb-10 lg:space-y-4 lg:ml-5">
            <div class="w-2/4 py-2 rounded-full bg-zinc-300 mb-4" />
            <div class="w-2/3 py-1 rounded-full bg-zinc-300 mb-2" />
            <div class="w-1/4 py-1 rounded-full bg-zinc-300 mb-2" />
            <div class="w-3/4 py-1 rounded-full bg-zinc-300 mb-2" />
          </div>
          <div class="mt-8 animate-pulse">
            <div class="rounded-full w-2/4 py-3 bg-zinc-300 " />
          </div>
        </div>
        <div class="h-64 w-full lg:w-[50%] relative">
          <div class="hidden lg:block ml-10 mt-8">
            <p class="text-xs text-end mb-4" />
          </div>
          <div class="lg:hidden animate-pulse bg-zinc-300 absolute left-6 top-5 h-72 w-full object-none rounded-xl" />
        </div>
      </div>
    </div>
  );
});
