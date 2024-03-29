// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopLeft,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";
// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    link: "/services/webdevlopment",
    description:
      "Offering comprehensive web development services, I bring a wealth of experience in creating visually appealing and functional websites.",
  },
  {
    icon: <RxCrop />,
    title: "System Architecture",
    link: "/services/systemArchitecture",
    description:
      "Specializing in System Design, I excel in crafting scalable architectures to establish the foundation for robust and efficient web application",
  },
  {
    icon: <RxPencil2 />,
    title: "Deployment",
    link: "https://sudhanshu--sharma.notion.site/Fundamental-Of-System-Design-Structure-86f0b17c6f174a56be8cbbcbf791848d?pvs=4",
    description:
      "I have a successful track record of deploying projects onto servers, secure web communication experience through SSL integration.",
  },
  {
    icon: <RxReader />,
    title: "Commitment to Quality",
    link: "",
    description:
      "Dedicated to delivering high-quality solutions, integrating industry trends and best practices to exceed client expectations",
  },
  {
    icon: <RxRocket />,
    title: "SEO Optimization",
    link: "",
    description:
      "Pecializing in SEO to enhance digital project visibility and performance through comprehensive on-page and off-page strategies.",
  },
];
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[380px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer 
             hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300
            "
            >
              <Link href={item.link}>
                {/* icons */}
                <div className="text-4xl text-accent mb-4"> {item.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{item.title} </div>
                  <div className="max-w-[390px] leading-normal">
                    {item.description}
                  </div>
                </div>
                {/* arrow */}
                {item.title === "Web Development" ||
                item.title === "System Architecture" ? (
                  <div className="text-3xl">
                    <RxArrowTopRight className="animate-bounce group-hover:text-accent" />
                  </div>
                ) : null}
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
