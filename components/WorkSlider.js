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
import Link from "next/link";

// data
export const workSLider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb22.png",
          link: "https://github.com/DurgaSainath189/Brain_Space",
        },
        {
          title: "title",
          path: "/thumb23.png",
          link: "https://github.com/DurgaSainath189/Filewave",
        },
        {
          title: "title",
          path: "/thumb24.png",
          link: "https://github.com/DurgaSainath189/AI_Notes",
        },
        {
          title: "title",
          path: "/thumb25.png",
          link: "https://github.com/DurgaSainath189/Instant_Wave",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb9.png",
          link: "https://github.com/DurgaSainath189/OIBSIP_Level1_Task1",
        },
        {
          title: "title",
          path: "/thumb10.png",
          link: "https://github.com/DurgaSainath189/OIBSIP_Level1_Task3",
        },
        {
          title: "title",
          path: "/thumb6.png",
          link: "https://github.com/DurgaSainath189/World-Time",
        },
        {
          title: "title",
          path: "/thumb7.png",
          link: "https://github.com/DurgaSainath189/Expenses_Tracker",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb18.png",
          link: "https://github.com/DurgaSainath189/Responsive_Login_Form",
        },
        {
          title: "title",
          path: "/thumb19.png",
          link: "https://github.com/DurgaSainath189/Text-Wizard",
        },
        {
          title: "title",
          path: "/thumb20.png",
          link: "https://github.com/DurgaSainath189/LGMVIP-Web-Task-1",
        },
        {
          title: "title",
          path: "/thumb21.png",
          link: "https://github.com/DurgaSainath189/Weather-Teller",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const handleArrowClick = (link) => {
    window.location.href = link;
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[350px] sm:h-[480px]"
    >
      {workSLider.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
              >
                <Link href={image.link} target="blank">
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    <Image src={image.path} width={500} height={300} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[black] to-[#0f0d0d] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[16px] tracking-[0.2em]">
                        <div className="delay-100">View</div>
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          Code
                        </div>
                        <div
                          className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200"
                          onClick={() => handleArrowClick(image.link)}
                        >
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
