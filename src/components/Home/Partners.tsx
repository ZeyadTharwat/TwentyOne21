import { Swiper, SwiperSlide } from 'swiper/react';
import Partner1 from "../../assets/Partners/Partner (1).png";
import Partner2 from "../../assets/Partners/Partner (2).png";
import Partner3 from "../../assets/Partners/Partner (3).png";
import Partner4 from "../../assets/Partners/Partner (4).png";
import Partner5 from "../../assets/Partners/Partner (5).png";
import Partner7 from "../../assets/Partners/Partner (7).png";
import Partner9 from "../../assets/Partners/Partner (9).png";
import Partner10 from "../../assets/Partners/Partner (10).png";
import Partner11 from "../../assets/Partners/Partner (11).png";
import Partner13 from "../../assets/Partners/Partner (13).png";
import Partner15 from "../../assets/Partners/Partner (15).png";
import NewPartner1 from "../../assets/Partners/NEWPARTNERS (1).png";
import NewPartner2 from "../../assets/Partners/NEWPARTNERS (2).png";
import NewPartner3 from "../../assets/Partners/NEWPARTNERS (3).png";
import NewPartner4 from "../../assets/Partners/NEWPARTNERS (4).png";
import NewPartner5 from "../../assets/Partners/NEWPARTNERS (5).png";
import NewPartner6 from "../../assets/Partners/NEWPARTNERS (6).png";
import NewPartner7 from "../../assets/Partners/NEWPARTNERS (7).png";
import NewPartner8 from "../../assets/Partners/NEWPARTNERS (8).png";
import NewPartner9 from "../../assets/Partners/NEWPARTNERS (9).png";
import NewPartner10 from "../../assets/Partners/NEWPARTNERS (10).png";
import NewPartner11 from "../../assets/Partners/NEWPARTNERS (11).png";
import NewPartner12 from "../../assets/Partners/NEWPARTNERS (12).png";
import NewPartner13 from "../../assets/Partners/NEWPARTNERS (13).png";
import NewPartner14 from "../../assets/Partners/NEWPARTNERS (14).png";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay , FreeMode } from "swiper/modules";

const partners = [
  { src: Partner1, alt: "Partner 1" },
  { src: Partner2, alt: "Partner 2" },
  { src: Partner3, alt: "Partner 3" },
  { src: Partner4, alt: "Partner 4" },
  { src: Partner5, alt: "Partner 5" },
  { src: Partner7, alt: "Partner 7" },
  { src: Partner9, alt: "Partner 9" },
  { src: Partner10, alt: "Partner 10" },
  { src: Partner11, alt: "Partner 11" },
  { src: Partner13, alt: "Partner 13" },
  { src: Partner15, alt: "Partner 15" },
  { src: NewPartner1, alt: "New Partners 1" },
  { src: NewPartner2, alt: "New Partners 2" },
  { src: NewPartner3, alt: "New Partners 3" },
  { src: NewPartner4, alt: "New Partners 4" },
  { src: NewPartner5, alt: "New Partners 5" },
  { src: NewPartner6, alt: "New Partners 6" },
  { src: NewPartner7, alt: "New Partners 7" },
  { src: NewPartner8, alt: "New Partners 8" },
  { src: NewPartner9, alt: "New Partners 9" },
  { src: NewPartner10, alt: "New Partners 10" },
  { src: NewPartner11, alt: "New Partners 11" },
  { src: NewPartner12, alt: "New Partners 12" },
  { src: NewPartner13, alt: "New Partners 13" },
  { src: NewPartner14, alt: "New Partners 14" },
];

const Partners = () => {
    return (
        <div className="w-full  h-[200px] bg-[#1A1A1A] relative">
            <div className="w-full h-full gradient-border absolute"></div>
            <div className="absolute inset-0 h-full w-full blur-[52.5px] z-50"></div>
            <div className='gradient-bg h-full w-full absolute inset-0'></div>
            <div className="h-full  flex items-center justify-center relative">
                <div className="relative z-[9999999] max-w-full">
                    <Swiper
                              loop={true}
                              freeMode={true}
                              autoplay={{
                                delay: 100,
                                disableOnInteraction: false,
                              }}
                              modules={[Autoplay, FreeMode]}
                    
                              speed={5000}
                    
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
                            1280: {
                                slidesPerView: 8,
                                spaceBetween: 40,
                            },

                        }}
                        className='!items-center'
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide className='!h-auto !flex !items-center !justify-center' key={index}>
                                <img className="mx-auto md:max-w-[145px] max-w-[100px]" src={partner.src} alt={partner.alt} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Partners;
