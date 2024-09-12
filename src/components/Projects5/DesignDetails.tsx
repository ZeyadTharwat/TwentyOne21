import DesignDetailsPlaceholder from "../../assets/Elix/image-missing.jpg"
import DesignDetailsPlaceholder2 from "../../assets/Elix/image-missing.jpg"
import DesignDetailsPlaceholder3 from "../../assets/Voco/c04 (1).jpg"
import DesignDetailsPlaceholder4 from "../../assets/Voco/C02 (2).jpg"
import DesignDetailsPlaceholder5 from "../../assets/Voco/c05.jpg"
import DesignDetailsPlaceholder6 from "../../assets/Voco/10.png"
import DesignDetailsPlaceholder7 from "../../assets/Voco/5.png"
import DesignDetailsPlaceholder8 from "../../assets/Voco/image-missing.jpg"
import DesignDetailsPlaceholder9 from "../../assets/Voco/6.png"
import DesignDetailsPlaceholder10 from "../../assets/Elix/image-missing.jpg"
import DesignDetailsPlaceholder11 from "../../assets/Elix/image-missing.jpg"
import DesignDetailsPlaceholder12 from "../../assets/Voco/7.png"
import DesignDetailsPlaceholder13 from "../../assets/Voco/8.png"
import DesignDetailsPlaceholder14 from "../../assets/Voco/9.png"
import DesignDetailsPlaceholder15 from "../../assets/Creation3.jpg"
import DesignDetailsPlaceholder16 from "../../assets/Creation2.jpg"
import DesignDetailsPlaceholder17 from "../../assets/Contact2.png"
import DesignDetailsPlaceholder19 from "../../assets/Voco/C01 (1).jpg"
import DesignDetailsPlaceholder20 from "../../assets/Voco/1.png"
import DesignDetailsPlaceholder21 from "../../assets/Voco/2.png"

import ClientReview from "../../assets/ClientReview.png"
import CreationPlaceholder from "../../assets/CreationPlaceholder.png"
import QuoteIcon from "../Icons/QuoteIcon"
import { Link } from "react-router-dom"
import DesignPattern from "../../assets/DesignDetailsPattern.png"
import PressBg2 from "../../assets/PressBg2.svg"
import CreationBg from "../../assets/CreationsBg.png"
import { Swiper, SwiperSlide } from 'swiper/react';

const projects = [
    {
        id: 1,
        title: "INTERIOR DESIGN, BRANDING",
        image: CreationPlaceholder,
        link: "/"
    },
    {
        id: 2,
        title: "INTERIOR DESIGN, BRANDING",
        image: DesignDetailsPlaceholder15,
        link: "/"
    },
    {
        id: 3,
        title: "INTERIOR DESIGN, BRANDING",
        image: DesignDetailsPlaceholder16,
        link: "/"
    },
    {
        id: 4,
        title: "INTERIOR DESIGN, BRANDING",
        image: DesignDetailsPlaceholder17,
        link: "/"
    },
    {
        id: 5,
        title: "INTERIOR DESIGN, BRANDING",
        image: DesignDetailsPlaceholder10,
        link: "/"
    },
    {
        id: 6,
        title: "INTERIOR DESIGN, BRANDING",
        image: DesignDetailsPlaceholder12,
        link: "/"
    }

];


const DesignDetails = () => {
    return (
        <>
            <div className="max-w-[1832px] mx-auto px-4">
                <div className="md:pt-28 py-16 sm:pt-20 md:pb-40 sm:pb-32  relative">
                    <img src={DesignPattern} className="absolute top-0 opacity-15 -right-20 lg:w-[1000px]" alt="" />
                    <div className="flex 2xl:gap-8 xl:flex-row flex-col-reverse lg:gap-4 gap-8 items-center relative">
                        <div className="flex 2xl:gap-8 md:gap-4 gap-2">
                            <div>
                                <img className="lg:h-[634px] md:h-[500px] sm:h-[300px] min-h-[200px] w-[475px] object-cover" src={DesignDetailsPlaceholder} alt="" />
                            </div>
                            <div>
                                <img className="lg:h-[634px] md:h-[500px] sm:h-[300px] min-h-[200px] w-[326px] object-cover" src={DesignDetailsPlaceholder2} alt="" />
                            </div>
                            <div>
                                <img className="lg:h-[634px] md:h-[500px] sm:h-[300px] min-h-[200px] w-[475px] object-cover" src={DesignDetailsPlaceholder10} alt="" />
                            </div>

                        </div>
                        <div className="2xl:max-w-[422px] xl:max-w-[380px]">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">The Design concept</h1>
                            <div className="md:text-xl sm:text-lg text-sm font-light font-houschka space-y-4 sm:space-y-6">
                                <p>The VOCO™ Hotel Brand embodies an AllParty, Everyday spirit. Here, every moment is
a celebration, and fun is seamlessly
integrated into every experience, from
check-in to check-out.</p>
                                <p>VOCO™ Hotels provide a refreshing
alternative for travelers in search of
something unique. Guests can unwind and
enjoy themselves in a relaxed atmosphere
that combines familiar comforts with
exciting elements, resulting in a stay that is
both dependable and distinctive.
</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:pb-48 md:pb-36 sm:pb-28 pb-16 relative">
                    <img src={DesignPattern} className="absolute bottom-0 opacity-15 -left-20 scale-x-[-1] lg:w-[1200px]" alt="" />

                    <div className="2xl:gap-8 gap-4 flex lg:flex-row flex-col items-center relative">
                        <div className="2xl:max-w-[572px] lg:max-w-[490px]">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">The Design direction</h1>
                            <div className="md:text-xl sm:text-lg text-sm font-light font-houschka space-y-4 sm:space-y-6">
                                <p>The VOCO™ (Party) Hotel Design embodies the Design
Philosophy of "Small Change, Big Impact," aligning with
the brand pillars of VOCO™ Hotels. It aims to create a
sleek and sophisticated atmosphere that offers adult
guests a memorable and enjoyable experience, perfect for
vibrant social interactions and relaxation.</p>
                                <p>By focusing on details throughout the design—such as
color schemes, finishes, lighting, décor, and furnishings—
the ambiance is elevated to a refined and upscale level.</p>

                            </div>
                        </div>
                        <div className="w-full">
                            <img src={DesignDetailsPlaceholder20} className="lg:h-[841px] md:h-[620px] sm:h-[590px] sm:max-h-full min-h-[240px] max-h-[400px] w-full object-cover" alt="" />
                        </div>

                    </div>

                </div>
                <div className="flex md:gap-8 sm:gap-5 gap-2 lg:pb-40 md:pb-32 sm:pb-24 pb-16 relative">
                    <div className="w-1/2 basis-1/2 h-full">
                        <img src={DesignDetailsPlaceholder19} className="lg:max-h-[940px] md:h-[460px] lg:h-[940px] w-full object-cover" alt="" />
                        <div className="lg:mt-16 sm:mt-10 mt-4 mb-4 md:text-2xl sm:text-lg text-sm font-light font-houschka space-y-4 md:space-y-8 md:w-full w-[200%]">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">The Arrival - Lounge Lobby                            </h1>
                            <p>Upon arriving at the VOCO™ (Party) Hotel, guests are welcomed by branded walls,
signage, and artwork that create a familiar atmosphere. To establish a vibrant and
immersive experience, guests are greeted with welcome drinks presented in a quirky
manner. The reception area makes a bold statement with its hanging disco artwork and
vibrant colors. To spark the party spirit and promise an unforgettable stay, guests are
invited into a lively, playful, and energetic lobby lounge
</p>

                        </div>

                    </div>
                    <div className="w-1/2 basis-1/2">
                        <img src={DesignDetailsPlaceholder4} className="w-full xl:h-[1290px] lg:h-[1100px] md:h-[600px] object-cover" alt="" />
                    </div>
                    <img src={PressBg2} className="absolute bottom-0 left-0 opacity-40" alt="" />

                </div>
            </div>
            <img src={DesignDetailsPlaceholder21} className="w-full object-cover 2xl:h-[728px] xl:h-[680px] lg:h-[550px] sm:h-[470px] max-h-[370px] lg:mb-28 sm:mb-16 mb-8 min-h-[220px] sm:max-h-[100%] " />
            <div className="relative">
                <img src={PressBg2} className="absolute lg:top-16 top-6 right-0 opacity-40" alt="" />
            </div>
            <div className="max-w-[1832px] mx-auto px-4 w-full">
                <div className="lg:mt-16 sm:mt-10 mt-4  md:text-2xl sm:text-lg text-sm font-light font-houschka space-y-4 md:space-y-8 md:w-full w-[200%] lg:mb-36 md:mb-28 sm:mb-16 mb-8 max-w-[1550px]">
                    <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] uppercase">Hallways and Corridors
                    </h1>
                    <p>As guests walk through a hallway alive with vibrant disco vibes and an inviting, moody atmosphere, they are promised a one-of-a-kind journey during their stay. The hallway features
bespoke carpets and wall finishes that align perfectly with the VOCO brand and its color palette. Both indirect and direct lighting are thoughtfully employed to create a striking visual impact.

</p>
                </div>
                <div className="2xl:gap-x-9 lg:gap-x-4 gap-x-3 grid grid-cols-6 w-full 2xl:gap-y-6 gap-y-5 pb-28">
                    <div className="xl:col-span-4 2xl:gap-x-9 lg:gap-x-4 gap-x-3 col-span-6 grid grid-cols-2">
                        <div className="col-span-1">
                            <div>
                                <img src={DesignDetailsPlaceholder7} className="md:h-[384px] sm:h-[340px] md:mb-6 mb-3 object-cover object-center w-full" alt="" />
                                <img src={DesignDetailsPlaceholder11} className="md:h-[258px] sm:h-[210px] object-cover object-center w-full" alt="" />
                            </div>
                            <p className="md:text-xl sm:text-lg text-[10px] font-light font-houschka space-y-4 sm:space-y-6 lg:w-full sm:w-[200%] sm:mt-7 mt-3">At voco Monaco, you'll find nine distinctively themed party
suites, each crafted for the ultimate party experience: High
Luxe, Red Room, Ladies Room, Miami Vice, Alice in
Wonderland, Jungle Room, Formula 1, Bubbles and Foam,
and Monaco Casino.</p>
                        </div>
                        <div className="col-span-1 ">
                            <img src={DesignDetailsPlaceholder6} className="lg:h-[864px] md:h-[660px] sm:h-[560px]  object-cover object-center w-full h-full" alt="" />
                        </div>

                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder9} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-right w-full" alt="" />
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder12} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="space-y-4 text-center mt-6 md:text-xl sm:text-lg text-sm font-light font-houschka text-[#D0D0D0] xl:block hidden">
                            <p>The High Luxe Room 
                            </p>
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder13} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="md:text-xl text-center sm:text-lg text-sm font-light font-houschka space-y-4  mt-6 text-[#D0D0D0] lg:w-full w-[200%]">
                            <p>The Jungle Room</p>
                        </div>

                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder14} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="md:text-xl text-center sm:text-lg text-sm font-light font-houschka space-y-4  mt-6 text-[#D0D0D0] lg:w-full w-[200%]">
                            <p>The Ladies Room</p>
                        </div>

                    </div>

                </div>
            </div>
            <div className="w-full ">
                <img src={DesignDetailsPlaceholder8} className="2xl:h-[900px] w-full xl:h-[800px] lg:h-[720px] md:h-[620px] sm:h-[590px] sm:max-h-full min-h-[240px] max-h-[400px] relative z-50 object-cover" alt="" />
            </div>
            <div className="lg:pt-48 md:pt-36 sm:pt-28 pt-16 relative max-w-[1832px] mx-auto px-4 w-full">
                <div className="2xl:gap-8 gap-4 flex lg:flex-row flex-col items-center relative">
                    <div className="2xl:max-w-[572px] lg:max-w-[490px]">
                        <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">HOTEL RENOVATIONS

                        </h1>
                        <div className="md:text-xl sm:text-lg text-sm font-light font-houschka space-y-4 sm:space-y-6">
                            <p>This hotel renovation project in Dubai was crafted by
integrating the VOCO DESIGN PRINCIPLES with the
official brand guideline, "small changes, big impact." The
VOCO™ Hotel strives to distinguish itself by achieving an
ideal balance between reliability and uniqueness, offering
upscale amenities in a relaxed atmosphere.</p>
                            <p>The design philosophy of VOCO™ Hotel focuses on
upholding a unified brand identity while celebrating the
distinctive character of each location, resulting in efficient
and high-quality experiences.</p>

                        </div>
                    </div>
                    <div className="w-full">
                        <img src={DesignDetailsPlaceholder3} className="lg:h-[841px] md:h-[620px] sm:h-[590px] sm:max-h-full min-h-[240px] max-h-[400px] w-full object-cover" alt="" />
                    </div>

                </div>

            </div>
            <img src={DesignDetailsPlaceholder5} className="w-full object-cover 2xl:h-[728px] xl:h-[680px] lg:h-[550px] sm:h-[470px] max-h-[370px] lg:mt-28 sm:mt-16 mt-8 min-h-[220px] sm:max-h-[100%] " />

            <div className="relative lg:pt-40 sm:pt-20 pt-16">
                <img src={CreationBg} className="absolute left-0 bottom-0 h-full opacity-50 w-full" alt="" />

                <div className="max-w-[1832px] mx-auto px-4 w-full relative">
                    <div className="flex justify-between items-center 2xl:gap-28 xl:gap-12 lg:gap-5 border-b-2 border-primary lg:pb-20 pb-10 lg:mb-20  mb-12">
                        <div className="2xl:size-[731px] 2xl:min-w-[731px] xl:max-w-1/2 max-w-[45%] lg:block hidden">
                            <img src={ClientReview} className=" w-full h-full object-cover" />
                        </div>
                        <div className="2xl:w-auto xl:max-w-1/2 w-full lg:max-w-[55%]">
                            <h1 className="font-vissa lg:text-5xl md:text-4xl sm:text-3xl text-2xl tracking-[0.02em] md:mb-11 mb-9 md:text-start text-center uppercase">
                                Client Review
                            </h1>
                            <div className="flex sm:mb-10 mb-7 items-center justify-between">
                                <QuoteIcon className='sm:size-auto w-[63px] h-[55px]' />
                            </div>
                            <p className="font-houschka font-light xl:text-[35px] md:text-[28px] sm:text-xl text-sm leading-none">
                                “From start to finish, the whole TwenyOne06 team remained committed
                                and dedicated to achieving the outcome despite the numerous changes
                                along the way. <br /> <br />Govind especially was a pleasure to deal with. His creativity
                                and ability to deliver is simply remarkable - a true professional.”
                                David
                            </p>
                            <div className="bg-primary h-0.5 w-10 lg:mt-10 mt-5"></div>
                            <div className="sm:mt-7 mt-5">
                                <div className="flex sm:gap-3 gap-2 items-center mb-1 sm:mb-1.5">
                                    <h1 className="font-light sm:text-[22px] leading-none">David Cook</h1>
                                    <div className="w-[3px] h-6 bg-primary rounded-[11px]"></div>
                                    <p className="text-[#D0D0D0] font-light sm:text-base text-xs font-houschka">From UAE</p>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">CEO</h1>
                                    <div className="bg-white/80 size-1.5 rounded-full"></div>
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">Contractors Direct</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:mb-2 mb-1 lg:pb-48 md:pb-40 sm:pb-32 pb-24">
                        <h1 className="uppercase lg:mb-12 sm:mb-8 mb-4 font-vissa lg:text-[52px] md:text-4xl sm:text-3xl text-xl tracking-[0.02em]">
                            Related projects
                        </h1>
                        <Swiper
                            loop={true}
                            autoplay={{ delay: 3000 }}
                            slidesPerView={1}
                            spaceBetween={30}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2.1,
                                    spaceBetween: 10,
                                },
                                550: {
                                    slidesPerView: 2.3,
                                    spaceBetween: 10,
                                },
                                1024: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 10,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1440: {
                                    slidesPerView: 3.6,
                                    spaceBetween: 10,
                                },
                                1550: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                            }}
                            className="mySwiper"
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index}>
                                    <Link key={project.id} to={project.link}>
                                        <img
                                            className="lg:mb-8 md:mb-5 mb-3  object-cover w-full lg:h-[310px] h-[250px] md:max-h-full max-h-[200px] min-h-[124px]"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                        <h1 className="xl:text-[28px] lg:text-2xl md:text-base sm:text-sm text-xs font-light font-houschka">
                                            {project.title}
                                        </h1>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DesignDetails