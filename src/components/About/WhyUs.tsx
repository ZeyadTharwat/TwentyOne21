import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ClientFocus from "../../assets/ClientFocused.svg"
import DataDriven from "../../assets/DataDriven.svg"
import SpecializedTeam from "../../assets/SpecializedTeam.svg"
import WideNetwork from "../../assets/WideNetwork.svg"
import ArrowIcon from '../Icons/ArrowIcon';
const testimonials = [
    {
        image: ClientFocus,
        paragraph: "Locally and internationally recognized by top design publications for our impactful concepts.",
        title: "Award-Winning Designs",
    },
    {
        image: DataDriven,
        paragraph: "At its core, every design project tells a story and heroes the guest experience.",
        title: "Human-centric design with a story",
    },
    {
        image: WideNetwork,
        paragraph: "A hands-on team delivering big-scale projects with flexibility and a personalized attention to detail.",
        title: "Boutique Approach, Large Impact",
    },
    {
        image: ClientFocus,
        paragraph: "If it doesn't work, we don't work on it. We design with efficiency, practicality and durability in mind at all times. ",
        title: "Our fundamentals - Functional and Durable Design",
    },
    {
        image: SpecializedTeam, 
        paragraph: "Comprehensive research guides our designs, addressing both micro and macro trends in any particular industry.",
        title: "Data-driven Insights",
    },
    {
        image: DataDriven,
        paragraph: "Adapting our approach to each client’s unique needs is one of our strong suits. Together, we push the boundaries of design.",
        title: "Personalized to your needs.",
    },

];

const WhyUs = () => {
    return (
        <div className='bg-[#1A1A1A] pt-14 md:pt-40 pb-16 md:pb-36'>
            <div className=' md:mb-14 mb-8 flex items-center justify-between relative px-5 max-w-[1358px] mx-auto'>
                <h1 className='text-center mx-auto lg:text-6xl md:text-5xl sm:text-3xl text-2xl tracking-[0.04em] font-vissa uppercase leading-none'>Why Us</h1>
                <div className="flex md:gap-8 gap-3 absolute right-5">
                <button className="relative left-nav">
                    <ArrowIcon className="md:w-[70px] w-7 md:h-8  h-3 rotate-180" />
                </button>
                <button className="relative right-nav">
                    <ArrowIcon className="md:w-[70px] w-7 md:h-8  h-3 " />
                </button>
            </div>

            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: '.left-nav',
                    nextEl: '.right-nav',
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2.3,
                        spaceBetween: 10,
                      },
                    768: {
                        slidesPerView: 2.1,
                        spaceBetween: 12,
                      },
                    1024: {
                      slidesPerView: 2.7,
                      spaceBetween: 12,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                      },
                    1550: {
                      slidesPerView: 3.8,
                      spaceBetween: 16,
                    },
                    1800: {
                      slidesPerView: 4.2,
                      spaceBetween: 29,
                    },
                  }}          
                loop={true}
                className='max-w-[1920px]'
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide className='!h-auto' key={index}>
                        <div className='border-dash p-3 sm:p-4 xl:p-8 relative h-full mb-5'>
                            <div className="flex justify-between items-center xl:gap-0 gap-5 mb-4">
                                <div>
                                    <h1 className="font-houschka text-primary font-bold uppercase 2xl:text-[34px] md:text-3xl text-xs sm:text-xl tracking-[0.02em]">
                                        {testimonial.title}
                                    </h1>
                                </div>
                                <img className='md:size-auto size-1/5' src={testimonial.image} />
                            </div>
                            <p className='md:text-xl sm:text-lg text-[8px] font-light font-houschka'>
                                {testimonial.paragraph}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    )
}

export default WhyUs