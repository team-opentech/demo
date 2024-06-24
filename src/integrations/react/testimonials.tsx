/* eslint-disable qwik/jsx-img */
/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

interface props {
  testimonials?: Testimonio[];
}

export interface Testimonio {
  name: string;
  cargo: string;
  testimonialText: string;
  imageUrl: string;
  rating: number;
}

const swiperBreakpoints = {
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
};

export const TestimonialSwiper = qwikify$(({ testimonials }: props) => {
  const stars = (num: number, altura: string) => {
    const stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(
        <img
          src="/assets/svg/star-icon.svg"
          alt="Star"
          className={`rounded-full ${altura}`}
        />
      );
    }
    return stars;
  };
  return (
    <section className="testimonials-container">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".testimonials-container .control-pagination",
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 10000,
        }}
        {...swiperBreakpoints}
        className="testimonials-swiper h-fit"
      >
        {testimonials &&
          testimonials.map((testimonial, index) => {
            const { name, cargo, testimonialText, imageUrl, rating } =
              testimonial;
            return (
              <SwiperSlide
                key={`testimonial-${index}`}
                className="h-fit bottom-0"
              >
                <div className="bg-ot-light-gray mt-12 w-full rounded-md px-4 xl:px-10 xl:py-8 py-8 lg:py-0 lg:min-h-[334px]">
                  <div className="h-4/5 lg:h-auto flex justify-between">
                    <div className="flex space-x-5">
                      <div className="max-w-[81px] aspect-square lg:max-w-none lg:w-2/6">
                        <img
                          src={imageUrl}
                          alt=""
                          width={" "}
                          height={" "}
                          className="rounded-full lg:h-16 lg:w-16"
                        />
                      </div>
                      <div className=" w-4/6 text-left">
                        <div className="flex flex-row justify-between">
                          <h3 className="font-medium text-2xs lg:text-xs xl:text-[16px] mb-0">
                            {name}
                          </h3>
                        </div>
                        <h4 className="text-4xs text-ot-dark-gray font-bold mb-0">
                          {cargo}
                        </h4>
                        <div className="flex flex-row xl:mb-5">
                          {stars(rating, "h-4").map((star, index) => {
                            return <div key={`star-${index}`}>{star}</div>;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="h-auto flex flex-row justify-end pr-5">
                      <img src="/assets/svg/quotes-2.svg" className="h-4" />
                    </div>
                  </div>
                  <p className="text-[12px] block overflow-auto mt-4">
                    {testimonialText}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className="control-pagination" />
    </section>
  );
});
