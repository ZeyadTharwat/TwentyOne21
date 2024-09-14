import { Swiper, SwiperSlide } from 'swiper/react';
import Partner1 from "../../assets/Partners/Partner (1).png";
import Partner2 from "../../assets/Partners/Partner (2).png";
import Partner3 from "../../assets/Partners/Partner (3).png";
import Partner4 from "../../assets/Partners/Partner (4).png";
import Partner5 from "../../assets/Partners/Partner (5).png";
import Partner6 from "../../assets/Partners/Partner (6).png";
import Partner7 from "../../assets/Partners/Partner (7).png";
import Partner8 from "../../assets/Partners/Partner (8).png";
import Partner9 from "../../assets/Partners/Partner (9).png";
import Partner10 from "../../assets/Partners/Partner (10).png";
import Partner11 from "../../assets/Partners/Partner (11).png";
import Partner12 from "../../assets/Partners/Partner (12).png";
import Partner13 from "../../assets/Partners/Partner (13).png";
import Partner14 from "../../assets/Partners/Partner (14).png";
import Partner15 from "../../assets/Partners/Partner (15).png";

const partners = [
    { src: Partner1, alt: "Partner 1" },
    { src: Partner2, alt: "Partner 2" },
    { src: Partner3, alt: "Partner 3" },
    { src: Partner4, alt: "Partner 4" },
    { src: Partner5, alt: "Partner 5" },
    { src: Partner6, alt: "Partner 6" },
    { src: Partner7, alt: "Partner 7" },
    { src: Partner8, alt: "Partner 8" },
    { src: Partner9, alt: "Partner 9" },
    { src: Partner10, alt: "Partner 10" },
    { src: Partner11, alt: "Partner 11" },
    { src: Partner12, alt: "Partner 12" },
    { src: Partner13, alt: "Partner 13" },
    { src: Partner14, alt: "Partner 14" },
    { src: Partner15, alt: "Partner 15" },
];

const Partners = () => {
    return (
        <div className="w-full  h-[200px] bg-[#1A1A1A] relative">
            <div className="w-full h-full gradient-border absolute"></div>
            <div className="absolute inset-0 h-full w-full blur-[52.5px] z-50"></div>
            <div className='gradient-bg h-full w-full absolute inset-0'></div>
            <div className="h-full  flex items-center justify-center relative">
                <div className="relative z-[9999999] container mx-1 ">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={10}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        className='!items-center'
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide className='!h-auto !flex !items-center !justify-center' key={index}>
                                <img className="mx-auto md:max-w-[125px] max-w-[90px]" src={partner.src} alt={partner.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Partners;
