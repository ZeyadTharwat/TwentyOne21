import DesignDetailsPlaceholder from "../../assets/DesignDetails.png"
import DesignDetailsPlaceholder2 from "../../assets/DesignDetails2.png"
import DesignDetailsPlaceholder3 from "../../assets/DesignDetails3.png"
import DesignDetailsPlaceholder4 from "../../assets/DesignDetails4.png"
import DesignDetailsPlaceholder5 from "../../assets/DesignDetails5.png"
import DesignDetailsPlaceholder6 from "../../assets/DesignDetails6.png"
import DesignDetailsPlaceholder7 from "../../assets/DesignDetails7.png"
import DesignDetailsPlaceholder8 from "../../assets/DesignDetails8.png"
import DesignDetailsPlaceholder9 from "../../assets/DesignDetails9.png"
import DesignDetailsPlaceholder10 from "../../assets/DesignDetails10.png"
import DesignDetailsPlaceholder11 from "../../assets/DesignDetails11.png"
import DesignDetailsPlaceholder12 from "../../assets/DesignDetails12.png"
import DesignDetailsPlaceholder13 from "../../assets/DesignDetails13.png"
import DesignDetailsPlaceholder14 from "../../assets/DesignDetails14.png"
import DesignDetailsPlaceholder19 from "../../assets/DesignDetails19.png"
import DesignDetailsPlaceholder20 from "../../assets/DesignDetails20.png"
import DesignDetailsPlaceholder21 from "../../assets/DesignDetails21.png"

import Review6 from "../../assets/Reviews/Review (6).jpg"
import QuoteIcon from "../Icons/QuoteIcon"
import { Link } from "react-router-dom"
import DesignPattern from "../../assets/DesignDetailsPattern.png"
import PressBg2 from "../../assets/PressBg2.svg"
import CreationBg from "../../assets/CreationsBg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import Creation2 from "../../assets/Pitfire.png"
import Creation3 from "../../assets/TERO.png"
import Creation4 from "../../assets/Elix.png"
import Creation5 from "../../assets/Voco Monaco.png"

const projects = [
    {
        title: "PITFIRE PIZZA - DUBAI HILLS",
        type: "F&B Design",
        image: Creation2,
        id:'pitfire-pizza'
    },
    {
        title: "TERO",
        type: "F&B Design, BRANDING",
        image: Creation3,
        id:'tero'
    },
    {
        title: "Elix Spa",
        type: "BRANDING , Hospitality Design",
        image: Creation4,
        id:'elix-spa'
    },
    {
        title: "Voco Monaco",
        type: "Hospitality Design",
        image: Creation5,
        id:'voco-monaco'
    },
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
                                <p>Drawing inspiration from the sea and water, the restaurant's distinctive blue color, reminiscent of the ocean, symbolizes tranquility. The orange hue roots in raw salmon, while beige tones pay homage nontraditional Japanese canvases and wall partitions.</p>
                                <p>The brand pattern, resembling Damascussteel, epitomizes a traditional Japaneseforging technique, creating a cohesive andmeaningful narrative for Nama Yoso.</p>

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
                                <p>2023A robust branding and storytelling concept master fully guided the interior design of Nama Yoso. Inspired byTwentyOne06's comprehensive "Nature Provides research report, the restaurant's color palette and brand pattern were curated around the essence of raw ingredients.</p>
                                <p>The material selection, marked by natural wood, natural stone boulders, and brass accents, seamlessly complements the restaurant's brand direction, creating cohesive and immersive ambiance. Ceiling</p>

                            </div>
                        </div>
                        <div className="w-full">
                            <img src={DesignDetailsPlaceholder20} className="lg:h-[841px] md:h-[620px] sm:h-[590px] sm:max-h-full min-h-[240px] max-h-[400px] w-full object-cover" alt="" />
                        </div>

                    </div>

                </div>
                <div className="flex md:gap-8 sm:gap-5 gap-2 lg:pb-40 md:pb-32 sm:pb-24 pb-16 relative">
                    <div className="w-1/2 basis-1/2 h-full">
                        <img src={DesignDetailsPlaceholder19} className="lg:max-h-[940px] md:h-[460px] lg:h-full w-full object-cover" alt="" />
                        <div className="lg:mt-16 sm:mt-10 mt-4 mb-4 md:text-2xl sm:text-lg text-sm font-light font-houschka space-y-4 md:space-y-8 md:w-full w-[200%]">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">Ceiling & Lighting Design:</h1>
                            <p>The central ceiling feature above the main dining area at Nama Yoso was a key element. Adorned with beige linen and canvas fabric curtains, featuring traditional Japanese drawings, it strategically reflects the brand pattern. Woven fabric with blue wave-like patterns and flexible light strips creates a visually captivating design element.</p>
                        </div>

                    </div>
                    <div className="w-1/2 basis-1/2">
                        <img src={DesignDetailsPlaceholder4} className="w-full object-cover" alt="" />
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
                    <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] uppercase">The Entrance Design</h1>
                    <p>The Entrance Design Drawing inspiration from the sea and water, the restaurant's distinctive blue color, reminiscent of the ocean, symbolizes tranquility. The orange hue roots in raw salmon, while beige tones
                        pay homage to traditional Japanese canvases and wall partitions. The brand pattern, resembling Damascus steel, epitomizes a traditional Japanese forging technique, creating a cohesive and
                        meaningful narrative for Nama Yoso.</p>
                </div>
                <div className="2xl:gap-x-9 lg:gap-x-4 gap-x-3 grid grid-cols-6 w-full 2xl:gap-y-6 gap-y-5 pb-28">
                    <div className="xl:col-span-4 2xl:gap-x-9 lg:gap-x-4 gap-x-3 col-span-6 grid grid-cols-2">
                        <div className="col-span-1">
                            <div>
                                <img src={DesignDetailsPlaceholder7} className="md:h-[384px] sm:h-[340px] md:mb-6 mb-3 object-cover object-center w-full" alt="" />
                                <img src={DesignDetailsPlaceholder11} className="md:h-[258px] sm:h-[210px] object-cover object-center w-full" alt="" />
                            </div>
                            <p className="md:text-xl sm:text-lg text-[10px] font-light font-houschka space-y-4 sm:space-y-6 lg:w-full sm:w-[200%] sm:mt-7 mt-3">Using a blend of sand and stone, the design’s artistic stone feature showcases the restaurant's logo on hand-picked boulders in raked sand. The arrangement aligns with the brand's pattern, creating a cohesive link to the restaurant's natural theme.</p>
                        </div>
                        <div className="col-span-1 ">
                            <img src={DesignDetailsPlaceholder6} className="lg:h-[864px] md:h-[660px] sm:h-[560px]  object-cover object-center w-full h-full" alt="" />
                        </div>

                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder9} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder12} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="space-y-4 mt-6 md:text-xl sm:text-lg text-sm font-light font-houschka text-[#D0D0D0] xl:block hidden">
                            <p>Zen Garden feature - Artistic stone and sand artwork.</p>
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder13} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="md:text-xl sm:text-lg text-sm font-light font-houschka space-y-4  mt-6 text-[#D0D0D0] lg:w-full w-[200%]">
                            <p>The Mountain Wall - Bespoke concrete texture finish Adorned</p>
                        </div>

                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder14} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="md:text-xl sm:text-lg text-sm font-light font-houschka space-y-4  mt-6 text-[#D0D0D0] lg:w-full w-[200%]">
                            <p>Custom furniture - Natural wood with leather upholstery</p>
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
                        <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">F&B Brand Evolution</h1>
                        <div className="md:text-xl sm:text-lg text-sm font-light font-houschka space-y-4 sm:space-y-6">
                            <p>Ito create an evolution of an existing brand, TwentyOne06
                                weaves the brand's values and culture into the new offering.
                                Drawing inspiration from the brand's storytelling narrative,
                                designers craft an authentic design concept that enhances
                                existing strengths and adds value in areas that require
                                attention.</p>
                            <p>When approaching design for existing F&B brands, we are
                                not reinventing the wheel. “Govind Shepley. Creative
                                Director and Founder of TwentyOne06 states, “We play on
                                their strengths”."</p>

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
                            <img src={Review6} className=" w-full h-full object-cover" />
                        </div>
                        <div className="2xl:w-auto xl:max-w-1/2 w-full lg:max-w-[55%]">
                            <h1 className="font-vissa lg:text-5xl md:text-4xl sm:text-3xl text-2xl tracking-[0.02em] md:mb-11 mb-9 md:text-start text-center uppercase">
                                Client Review
                            </h1>
                            <div className="flex sm:mb-10 mb-7 items-center justify-between">
                                <QuoteIcon className='sm:size-auto w-[63px] h-[55px]' />
                            </div>
                            <p className="font-houschka font-light xl:text-[35px] md:text-[28px] sm:text-xl text-sm leading-none">
                            The process of collaborating with TwentyOne06 began with them getting to know me personally and understanding where I'm coming from. They adapted to my expectations while adding their own unique design input. It was a challenge for TwentyOne06 because many restaurant designers tend to replicate designs, but they didn’t. Instead, they transformed the design into what it is today, which is commendable.
                            </p>
                            <div className="bg-primary h-0.5 w-10 lg:mt-10 mt-5"></div>
                            <div className="sm:mt-7 mt-5">
                                <div className="flex sm:gap-3 gap-2 items-center mb-1 sm:mb-1.5">
                                    <h1 className="font-light sm:text-[22px] leading-none">Reif Othman</h1>
                                    <div className="w-[3px] h-6 bg-primary rounded-[11px]"></div>
                                    <p className="text-[#D0D0D0] font-light sm:text-base text-xs font-houschka">From UAE</p>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">Owner And Chef</h1>
                                    <div className="bg-white/80 size-1.5 rounded-full"></div>
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">Hotaru Holdings</h1>
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
                                    <Link key={project.id} to={`/project-details/${project.id}`}>
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