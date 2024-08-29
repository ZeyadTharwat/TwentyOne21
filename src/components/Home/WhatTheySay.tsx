import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import QuoteIcon from "../Icons/QuoteIcon";
import ChevronIcon from "../Icons/ChevronIcon";
import ButtonVector from "../../assets/ButtonVector.svg";
import ManagerImg from "../../assets/ManagerImg.png";

const testimonials = [
    {
        image: ManagerImg,
        quote: "It was a true pleasure working with TwentyOne06. Govind and his team have successfully combined our vision with their expertise and experience to come up not only with an innovative design but most importantly a functional space whilst maximizing our resources. Throughout the entire design process, TwentyOne06's attention to detail was second to none. They were professional, flexible and understood every facet of what we wanted to capture in great detail.",
        name: "Kishore Sathar",
        location: "From UAE",
        title: "General Manager",
        company: "Dusit Thani Hotel",
    },
    {
        image: ManagerImg, // Use the same image for dummy data
        quote: "Working with the team was an outstanding experience. Their attention to detail and dedication to delivering a high-quality product was remarkable. I highly recommend them for any project that requires creativity and professionalism.",
        name: "John Doe",
        location: "From USA",
        title: "Project Manager",
        company: "Global Corp",
    },
    {
        image: ManagerImg,
        quote: "The team exceeded our expectations with their exceptional design and development skills. They truly understood our vision and brought it to life. We couldn't be happier with the final product.",
        name: "Jane Smith",
        location: "From UK",
        title: "CEO",
        company: "Innovate Ltd",
    },
];

const WhatTheySay = () => {
    return (
        <div className="bg-whatTheySay bg-no-repeat bg-cover py-16 md:py-28">
            <div className="container">
                <div className="flex justify-between gap-28">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.left-nav',
                            nextEl: '.right-nav',
                        }}
                        spaceBetween={24}
                        slidesPerView={1}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-between xl:gap-28 gap-12">
                                    <div className="relative">
                                        <img src={testimonial.image} className="min-w-[425px] h-full w-full max-w-[425px] lg:block hidden object-cover" />
                                        <div className="w-full h-full absolute bg-black/20 inset-0"></div>
                                    </div>
                                    <div>
                                        <h1 className="font-vissa lg:text-6xl md:text-start text-center md:text-5xl sm:text-4xl text-2xl tracking-[0.02em] mb-9">
                                            WHAT THEY’RE SAYING
                                        </h1>
                                        <div className="flex mb-8 items-center justify-between">
                                            <QuoteIcon className='sm:size-auto w-[63px] h-[55px]' />
                                            <div className="flex gap-2 sm:gap-5">
                                                <button className="relative left-nav">
                                                    <img className="md:size-[100px] sm:size-20 size-10 rotate-[50deg]" src={ButtonVector} />
                                                    <ChevronIcon className="absolute w-[15px] h-[9px] -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 sm:w-9 sm:h-6" />
                                                </button>
                                                <button className="relative right-nav">
                                                    <img className="md:size-[100px] sm:size-20 size-10 -rotate-[50deg] scale-x-[-1]" src={ButtonVector} />
                                                    <ChevronIcon className="absolute w-[15px] h-[9px] -translate-y-1/2 -translate-x-1/2 left-1/2 top-1/2 sm:w-9 sm:h-6 rotate-180" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="font-houschka font-light text-[#D0D0D0] text-sm sm:text-lg uppercase">
                                            {testimonial.quote}
                                        </p>
                                        <div className="bg-primary h-0.5 w-10 mt-5"></div>
                                        <div className="sm:mt-7 mt-5">
                                            <div className="flex sm:gap-3 gap-2 items-center mb-1 sm:mb-1.5">
                                                <h1 className="font-light sm:text-[22px] leading-none">{testimonial.name}</h1>
                                                <div className="w-[3px] h-6 bg-primary rounded-[11px]"></div>
                                                <p className="text-[#D0D0D0] font-light sm:text-base text-xs font-houschka">{testimonial.location}</p>
                                            </div>
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">{testimonial.title}</h1>
                                                <div className="bg-white/80 size-1.5 rounded-full"></div>
                                                <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">{testimonial.company}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default WhatTheySay;
