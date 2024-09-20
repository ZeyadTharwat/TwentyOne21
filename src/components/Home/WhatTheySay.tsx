import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import QuoteIcon from "../Icons/QuoteIcon";
import ChevronIcon from "../Icons/ChevronIcon";
import ButtonVector from "../../assets/ButtonVector.svg";
import ManagerImg from "../../assets/ManagerImg.png";
import Review1 from "../../assets/Reviews/Review (1).png"
import Review2 from "../../assets/Reviews/Review (9).png"
import Review3 from "../../assets/Reviews/Review (3).jpg"
import Review4 from "../../assets/Reviews/Review (4).jpg"
import Review5 from "../../assets/Reviews/Review (5).png"
import Review6 from "../../assets/Reviews/Review (6).jpg"
import Review7 from "../../assets/Reviews/Review (7).png"
import Review8 from "../../assets/Reviews/Review (8).png"
import Review9 from "../../assets/Reviews/Review (10).png"
import Review10 from "../../assets/Reviews/Review (2).png"
import Review11 from "../../assets/Reviews/Review (3).png"

const testimonials = [
    {
        image: Review6,
        quote: "The process of collaborating with TwentyOne06 began with them getting to know me personally and understanding where I'm coming from. They adapted to my expectations while adding their own unique design input. It was a challenge for TwentyOne06 because many restaurant designers tend to replicate designs, but they didn’t. Instead, they transformed the design into what it is today, which is commendable.",
        name: "Reif Othman",
        location: "From UAE",
        title: "Owner",
        company: "Hotaru Holdings",
    },
    {
        image: Review3,
        quote: "I recently had the pleasure of working with TwentyOne06, and I can confidently say they are a fantastic design company. Their commitment to authenticity and quality is evident in every aspect of their work. The team is not only highly professional but also incredibly responsive, making the entire process seamless and enjoyable. From the initial consultation to the final delivery, TwentyOne06 exceeded my expectations. Their innovative designs reflect a deep understanding of client needs and current trends, resulting in truly unique and impactful solutions. If you’re looking for a design partner who values excellence and creativity, I wholeheartedly recommend TwentyOne06. They are a cut above the rest!",
        name: "James Knight Paccheco",
        location: "From USA",
        title: "Co-Founder / Chef / Host ",
        company: "the Chef JKP Podcast /  Culinary Consultant",
    },
    {
        image: Review11,
        quote: "We recently had the privilege of working with TwentyOne06, and we must say, it was an exceptional experience from start to finish. They brought a level of professionalism and creativity that exceeded our expectations. Working with TwentyOne06 was an absolute pleasure! Their professionalism, creativity, and attention to detail made our collaboration seamless and enjoyable. I highly recommend them for any design project.",
        name: "Lylux Lighting Group ",
    },
    {
        image: Review9,
        quote: "We had the pleasure of working with TwentyOne06 on an office project in Al Barsha. They are a fantastic team of professionals with amazing creativity. The project looks spectacular, we would highly recommend it if you're looking for a unique and stand-out interior design team.",
        name: "Havelock One Interiors",
    },
    {
        image: Review1,
        quote: "From start to finish, the whole TwenyOne06 team remained committed and dedicated to achieving the outcome despite the numerous changes along the way. Govind especially was a pleasure to deal with. His creativity and ability to deliver is simply remarkable - a true professional.",
        name: "David Cook",
        location: "From USA",
        title: "CEO",
        company: "Contractors Direct",
    },
    {
        image: Review7,
        quote: "As a seasoned F&B operator I’ve had the pleasure to have worked with the best in class pertaining to design specialists. 2106 in my opinion would be considered as best in class…. Govind and his team have demonstrated the ability to understand our vision and interpreted this in to reality. Its also worth mentioning that their ability to adapt to change is commendable andtheir ability to manage the appointed contractor is substantiated with depth of knowledge in materials and market trends as well as keeping our “the Client” interest at the forefront of the projects 2106 have managed for Sarood Hospitality. On behalf of Sarood I would like to thank Govind and the 2106 team for their services conduced to help drive Flow and The Noodle House Brands",
        name: "Steven Holloway",
        location: "From UAE",
        title: "Operations Manager",
        company: "Sarood hospitality (Jumeirah)",
    },
    {
        image: Review2,
        quote: "Working with Govind and Studio TwentyOne06 has eased the processes between the client, contractor and design team alike. The clear and detailed design has aided us to execute the design intent and deliver to the agreed timetable. It’s a credit to their design teams’ understanding of the client’s business requirements, knowledge of the F&B industry and more importantly in sourcing local finishes to stay in line with Capex budget is certainly music to our ears! We’re always glad to work alongside Studio TwentyOne06 projects.",
        name: "Esam Baccush",
        location: "From UAE",
        title: "Associate Director",
        company: "Dif Interiors",
    },
    {
        image: Review4,
        quote: "I had the pleasure of working with Govind Shepley, Mike, Hannah, Sabiha and Satinder on Voco Monaco Lobby renovation and ELIX Spa. Twentyone06’s creativity, hard work, passion and patience is truly inspiring on all project portfolios we collaborate on. Well done to you all!  ",
        name: "Jane Smith",
        location: "From UAE",
        title: "Senior Design Manager ",
        company: "Kleindienst Group (Voco Monaco, Elix Spa)",
    },
    {
        image: Review5,
        quote: "What an amazing concept this is! It is such a pleasure collaborating with such a talented team like TwentyOne06 on this project. Massive congrats on taking home the Highly Commended award.",
        name: "Pierre Engelbrecht",
        location: "From UK",
        title: "Associate",
        company: "Compass Project Consulting",
    },
    {
        image: Review10,
        quote: "TwentyOne06 was the visionary force behind Reif & Tero, meticulously designing an extraordinary culinary haven that offers diners an unparalleled gastronomic experience. Light Link worked tirelessly with the team at TwentyOne06, to create 2 very different styles of dining experience for Reif Othman in the new Dubai Hills location, and WE LOVE IT! From taking initial sketches and samples of tea brushes through to truly bespoke light fittings, custom neon pendants, and wall sconces all dreamt up in the mind of Govind Shepley and the team, were brought to life by our designers and custom partners.",
        name: "Light Link",
    },
    {
        image: Review8,
        quote: "The team exceeded our expectations with their exceptional design and development skills. They truly understood our vision and brought it to life. We couldn't be happier with the final product.",
        name: "Steven Batchelor FRICS",
        location: "From UK",
        title: "Managing Director",
        company: "UN!Que Project Solutions",
    },
    {
        image: ManagerImg,
        quote: "It was a true pleasure working with TwentyOne06. Govind and his team have successfully combined our vision with their expertise and experienceto come up not only with an innovative design but most importantly a functional space whilst maximizing our resources. Throughout the entire design process, TwentyOne06’s attention to detail was second to none. They were professional, flexible and understood every facet of what we wanted to capture in great detail",
        name: "Kishore Sathar",
        location: "From UK",
        title: "General Manager",
        company: "Dusit Thani Hotel",
    },

];

const WhatTheySay = () => {
    return (
        <div className="bg-whatTheySay bg-no-repeat bg-cover pt-16 md:py-28">
            <div className="container">
                <div className="flex justify-between gap-28">
                    <Swiper
                    loop={true}
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
                                <div className="flex justify-between xl:gap-28 lg:gap-12">
                                    <div className="relative md:h-[536px]">
                                        <img src={testimonial.image} className="min-w-[425px] h-full  w-full max-w-[425px] lg:block hidden object-cover" />
                                        <div className="w-full h-full absolute bg-black/20 inset-0"></div>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="flex sm:gap-3 gap-2 items-center mb-1 sm:mb-1.5">
                                                <h1 className="font-light sm:text-[22px] leading-none">{testimonial.name}</h1>
                                                {/* {testimonial.location && <>
                                                    <div className="w-[3px] h-6 bg-primary rounded-[11px]"></div>
                                                    <p className="text-[#D0D0D0] font-light sm:text-base text-xs font-houschka">{testimonial.location}</p>
                                                </>} */}
                                            </div>
                                            {testimonial.title && testimonial.company &&
                                                <div className="flex items-center gap-1.5 sm:gap-2">
                                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">{testimonial.title}</h1>
                                                    <div className="bg-white/80 size-1.5 rounded-full"></div>
                                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">{testimonial.company}</h1>
                                                </div>
                                            }
                                        </div>
                                        <div className="bg-primary h-0.5 w-10 sm:mb-16 mb-12 mt-5"></div>

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
                                        <p className="font-houschka font-light text-[#D0D0D0] text-sm sm:text-lg ">
                                            {testimonial.quote}
                                        </p>
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
