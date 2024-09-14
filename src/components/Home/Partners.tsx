import { Swiper, SwiperSlide } from 'swiper/react';
import Partner1 from "../../assets/Partner (1).png";
import Partner2 from "../../assets/Partner (2).png";
import Partner3 from "../../assets/Partner (3).png";
import Partner4 from "../../assets/Partner (4).png";
import Partner5 from "../../assets/Partner (5).png";
import Partner6 from "../../assets/Partner (6).png";

const partners = [
    { src: Partner1, alt: "Partner 1" },
    { src: Partner2, alt: "Partner 2" },
    { src: Partner3, alt: "Partner 3" },
    { src: Partner4, alt: "Partner 4" },
    { src: Partner5, alt: "Partner 5" },
    { src: Partner6, alt: "Partner 6" },
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
                                <img className="mx-auto" src={partner.src} alt={partner.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Partners;
