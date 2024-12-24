import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from '../assets/slider-1.jpg';
import slider2 from '../assets/slider-2.webp';
import slider3 from '../assets/slider-3.jpg';

const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="rounded-md overflow-hidden shadow-lg"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="lg:flex gap-6 items-center">
                        <div className="lg:w-8/12">
                            <img
                                src={slider1}
                                className="lg:h-[450px] w-full object-cover rounded-md"
                                alt="Slider Image 1"
                            />
                        </div>
                        <div className="lg:w-4/12 p-8">
                            <h1 className="text-4xl font-bold mb-4">Find Your Perfect Tutor</h1>
                            <p className="text-lg mb-6">
                                Choose from over 3200 tutors across various languages. Find the perfect match for your learning journey.
                            </p>
                            <button className="btn bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 px-6 py-3 rounded-lg">
                                Start Learning Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="lg:flex gap-6 items-center">
                        <div className="lg:w-8/12">
                            <img
                                src={slider2}
                                className="lg:h-[450px] w-full object-cover rounded-md"
                                alt="Slider Image 2"
                            />
                        </div>
                        <div className="lg:w-4/12 p-8">
                            <h1 className="text-4xl font-bold mb-4">Unlock Your Potential</h1>
                            <p className="text-lg mb-6">
                                Master new skills and advance your career with expert tutors. Explore a wide range of topics.
                            </p>
                            <button className="btn bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 px-6 py-3 rounded-lg">
                                Join Us Today
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="lg:flex gap-6 items-center">
                        <div className="lg:w-8/12">
                            <img
                                src={slider3}
                                className="lg:h-[450px] w-full object-cover rounded-md"
                                alt="Slider Image 3"
                            />
                        </div>
                        <div className="lg:w-4/12 p-8">
                            <h1 className="text-4xl font-bold mb-4">Learn Anytime, Anywhere</h1>
                            <p className="text-lg mb-6">
                                Our online platform allows you to access lessons whenever and wherever you are. Start learning now!
                            </p>
                            <button className="btn bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 px-6 py-3 rounded-lg">
                                Find Your Tutor
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
