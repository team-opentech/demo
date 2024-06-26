/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

export const PortfolioSwiper = qwikify$(({ portfolios }: any) => {
  return (
    <section className="relative overflow-hidden overscroll-x-none">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".portafolio-container .control-pagination",
        }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="h-fit lg:bg-ot-light-gray lg:mx-32 xl:mx-42 lg:rounded-2xl"
      >
        {portfolios &&
          portfolios.map((item: any, index: number) => {
            return (
              <SwiperSlide
                key={`portafolio-${index}`}
                className="h-fit bottom-0"
              >
                <div
                  key={index}
                  className="bg-ot-light-gray pt-2 min-[618px]:rounded-xl lg:mx-8 max-w-[618px] lg:max-w-none mx-auto lg:flex lg:flex-row lg:py-5 lg:px-16 xl:px-0"
                >
                  <div className="px-2 lg:pl-[5%] lg:w-1/2 xl:self-center w-[85%] mx-auto">
                    <section className="pt-4">
                      <a
                        href={item.link}
                        className="block text-xl lg:text-3xl font-bold tracking-tighter cursor-pointer"
                      >
                        {item.title}
                      </a>
                      <p className="lg:text-2xl">{item.subtitle}</p>
                    </section>
                    <section className="flex flex-row py-0 flex-wrap">
                      {item.tags.map((tag: string, index: number) => (
                        <p
                          key={index}
                          className={`text-center text-2xs lg:text-xs border-2 rounded-full px-1 mr-2 mb-2`}
                        >
                          {tag}
                        </p>
                      ))}
                    </section>
                    <section className="py-0">
                      <p className="txt-3xs tracking-tighter font-normal my-4">
                        {item.description}
                      </p>
                    </section>
                    <div className="hidden lg:flex mb-8 w-full justify-center lg:justify-start">
                      <OpentechButton
                        title={"Ver proyecto"}
                        paddingX={"px-8"}
                        link={item.link}
                        classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col space-y-8 lg:space-y-0 justify-center items-center pb-8">
                    <div className="flex justify-center">
                      <a href={item.link} className="w-[85%] lg:mx-auto block">
                        <img
                          src={item.featuredImage}
                          width={" "}
                          height={" "}
                          className="w-full rounded-b-xl lg:rounded-xl lg:ml-0 lg:mt-8 cursor-pointer"
                        />
                      </a>
                    </div>
                    <div className="flex lg:hidden mb-8 w-full justify-center lg:justify-start">
                      <OpentechButton
                        title={"Ver proyecto"}
                        paddingX={"px-8"}
                        link={item.link}
                        classes="hover:scale-[1.1] active:scale-[1.1] transition-all duration-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>

      <button className="button-prev hidden lg:flex lg:absolute bottom-1/2 left-8 z-10">
        {leftArrow()}
      </button>
      <button className="button-next hidden lg:flex lg:absolute bottom-1/2 right-8 z-10">
        {righArrow()}
      </button>

      <div className="control-pagination lg:hidden" />
    </section>
  );
});

//Resources
const leftArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
    </svg>
  );
};

const righArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill-rule="evenodd"
      clip-rule="evenodd"
    >
      <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
    </svg>
  );
};

const OpentechButton = ({
  fontSize,
  link,
  classes,
  backgroundColor = "bg-ot-black",
  paddingX = "px-14",
  textColor = "text-ot-white",
  title = "Ver proyecto",
}: any) => {
  return (
    <a href={link} target="">
      <button
        className={`rounded-full py-2 ' + ${
          fontSize +
          " " +
          paddingX +
          " " +
          backgroundColor +
          " " +
          textColor +
          " " +
          classes +
          " "
        } `}
      >
        <p className={fontSize}>{title}</p>
      </button>
    </a>
  );
};
