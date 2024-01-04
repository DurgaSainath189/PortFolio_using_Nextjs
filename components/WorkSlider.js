//swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Pagination } from "swiper";

//swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

// data
export const workSLider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
        },
        {
          title: "title",
          path: "/thumb2.png",
        },
        {
          title: "title",
          path: "/thumb3.png",
        },
        {
          title: "title",
          path: "/thumb4.png",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb5.png",
        },
        {
          title: "title",
          path: "/thumb6.png",
        },
        {
          title: "title",
          path: "/thumb7.png",
        },
        {
          title: "title",
          path: "/thumb3.png",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSLider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center realtive overflow-hidden group">
                      {/* images */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#c2d121] to-[#707169] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">Live</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Demo
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
