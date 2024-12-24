import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from '../assets/slider-1.jpg'
import slider2 from '../assets/slider-2.webp'
import slider3 from '../assets/slider-3.jpg'


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
                    <div className="lg:flex  gap-2">
                        <div className="lg:w-9/12">
                            <img src={slider1} className="lg:h-[450px] rounded-md w-full" alt="" />
                        </div>
                        <div className="w-3/12 flex justify-center items-center">
                            <button className="btn">Explore more</button>
                        </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lg:flex gap-2">
                        <div className="lg:w-9/12">
                            <img src={slider2} className="lg:h-[450px] rounded-md w-full" alt="" />
                        </div>
                        <div className="w-3/12 flex justify-center items-center">
                            <button className="btn">Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="lg:flex gap-2">
                        <div className="lg:w-9/12">
                            <img src={slider3} className="lg:h-[450px] rounded-md w-full" alt="" />
                        </div>
                        <div className="w-3/12 flex justify-center items-center">
                            <button className="btn">Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;