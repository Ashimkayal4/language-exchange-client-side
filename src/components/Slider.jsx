import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                  <h1>1</h1>
                </SwiperSlide>
                <SwiperSlide>
                  <h1>2</h1>
                </SwiperSlide>
                <SwiperSlide>
                 <h1>3</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;