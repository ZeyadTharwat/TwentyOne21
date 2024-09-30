import DesignDetailsPlaceholder from "../../assets/Project2-3.png"
import DesignDetailsPlaceholder2 from "../../assets/Project-2-4.png"
import DesignDetailsPlaceholder3 from "../../assets/Project2-5.png"
import DesignDetailsPlaceholder4 from "../../assets/Project2-6.png"
import DesignDetailsPlaceholder5 from "../../assets/Project2-7.png"
import DesignDetailsPlaceholder6 from "../../assets/Project2-8.png"
import DesignDetailsPlaceholder7 from "../../assets/Project2-9.png"
import DesignDetailsPlaceholder8 from "../../assets/Project2-10.png"
import DesignDetailsPlaceholder9 from "../../assets/Project2-11.png"
import DesignDetailsPlaceholder11 from "../../assets/Project2-12.png"
import DesignDetailsPlaceholder12 from "../../assets/Project2-13.png"
import DesignDetailsPlaceholder13 from "../../assets/Project2-14.png"
import DesignDetailsPlaceholder10 from "../../assets/Project2-15.png"
import DesignDetailsPlaceholder14 from "../../assets/Project2-16.png"
import DesignDetailsPlaceholder18 from "../../assets/Project2-17.png"
import DesignDetailsPlaceholder16 from "../../assets/Creation2.jpg"
import ClientReview from "../../assets/Reviews/Review (3).jpg"
import QuoteIcon from "../Icons/QuoteIcon"
import { Link } from "react-router-dom"
import DesignPattern from "../../assets/DesignDetailsPattern.png"
import PressBg2 from "../../assets/PressBg2.svg"
import CreationBg from "../../assets/CreationsBg.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import CreationPlacehoder from "../../assets/NAMA YOSO.png"
import Creation3 from "../../assets/TERO.png"
import Creation4 from "../../assets/Elix.png"
import Creation5 from "../../assets/Voco Monaco.png"

const projects = [
    {
        title: "NAMA YOSO",
        type: "F&B Design",
        image: CreationPlacehoder,
        id:'nama-yoso'
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
                                <img className="lg:h-[634px] md:h-[500px] sm:h-[300px] min-h-[200px] w-[475px] object-cover" src={DesignDetailsPlaceholder3} alt="" />
                            </div>

                        </div>
                        <div className="2xl:max-w-[422px] xl:max-w-[380px]">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">The Design concept</h1>
                            <div className="md:text-xl sm:text-xl text-xl font-light font-houschka space-y-4 sm:space-y-6">
                                <p>Inspired by the alchemy of bakery, the design concept mirrors Pitfire's dough-making process, where two or more ingredients merge to evoke a reaction. Pairing materials strategically, the design seeks to create harmony akin to the synthesis of flour and water in dough preparation.</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:pb-48 md:pb-36 sm:pb-28 pb-16 relative">
                    <img src={DesignPattern} className="absolute bottom-0 opacity-15 -left-20 scale-x-[-1] lg:w-[1200px]" alt="" />

                    <div className="2xl:gap-8 gap-4 flex lg:flex-row flex-col items-center relative">
                        <div className="2xl:max-w-[572px] lg:max-w-[490px]">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">The Design journey</h1>
                            <div className="md:text-xl sm:text-xl text-xl font-light font-houschka space-y-4 sm:space-y-6">
                                <p>Characterized by rustic textures and materials that can be refined, the space revolves around a central bar, serving assist as a focal point. Raw textures and layered details contribute to an immersive experience that embodies the brand's rebellious spirit.</p>
                                <p>At the heart of Pitfire's brand essence lie four primary categories an architecture, counterculture, knowledge, and quality. These pillars encapsulate the brand's ethos of raw rebellion, celebrating the religion of baking and respecting the craft of dough-making</p>

                            </div>
                        </div>
                        <div className="w-full">
                            <img src={DesignDetailsPlaceholder4} className="lg:h-[841px] md:h-[620px] sm:h-[590px] sm:max-h-full min-h-[240px] max-h-[400px] w-full object-cover" alt="" />
                        </div>

                    </div>

                </div>
                <div className="lg:pb-40 md:pb-32 sm:pb-24 pb-16">
                <div className="flex md:gap-8 sm:gap-5 gap-2 relative">
                    <div className="w-1/2 basis-1/2 md:h-full">
                        <img src={DesignDetailsPlaceholder5} className="lg:max-h-[940px] md:h-[460px] lg:h-full h-full w-full object-cover" alt="" />
                        <div className="lg:mt-16 sm:mt-10 mt-4 mb-4 md:text-xl sm:text-xl text-xl font-light font-houschka space-y-4 md:space-y-8 w-full md:block hidden">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] uppercase">Design Details - The Bar</h1>
                            <p>The central island bar, a first for Pitfire, commands attention with its impactful presence. The bar's ceiling
                            designed as a dome, enhances its prominence, while meticulous details such as textured brick walls and 
                            oxidized black metal finishes contribute to its allure.</p>
                        </div>

                    </div>
                    <div className="w-1/2 basis-1/2">
                        <img src={DesignDetailsPlaceholder6} className="w-full object-cover sm:max-h-full max-h-[300px]" alt="" />
                    </div>
                    <img src={PressBg2} className="absolute bottom-0 left-0 opacity-40" alt="" />

                </div>
                <div className="lg:mt-16 sm:mt-10 mt-4 mb-4 md:text-xl sm:text-xl text-xl font-light font-houschka space-y-4 md:space-y-8 w-full block md:hidden">
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] uppercase">Design Details - The Bar</h1>
                            <p>The central island bar, a first for Pitfire, commands attention with its impactful presence. The bar's ceiling
                            designed as a dome, enhances its prominence, while meticulous details such as textured brick walls and 
                            oxidized black metal finishes contribute to its allure.</p>
                        </div>

                </div>
            </div>
            <img src={DesignDetailsPlaceholder7} className="w-full object-cover 2xl:h-[728px] xl:h-[680px] lg:h-[550px] sm:h-[470px] max-h-[370px] lg:mb-28 sm:mb-16 mb-8 min-h-[220px] sm:max-h-[100%] " />
            <div className="relative">
                <img src={PressBg2} className="absolute lg:top-16 top-6 right-0 opacity-40" alt="" />
            </div>
            <div className="max-w-[1832px] mx-auto px-4 w-full">
                <div className="lg:mt-16 sm:mt-10 mt-4  md:text-xl sm:text-xl text-xl font-light font-houschka space-y-4 md:space-y-8 md:w-full w-[100%] lg:mb-36 md:mb-28 sm:mb-16 mb-8 max-w-[1550px]">
                    <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] uppercase">Design Details - Booth Seating</h1>
                    <p>Slim and minimalistic furniture, adorned in brand colors, complements the space. Low freestanding walls
                    and waiting bench seating, crafted with rustic wood framing and black leather
                    upholstery, add to the ambiance.</p>
                </div>
                <div className="2xl:gap-x-9 lg:gap-x-4 gap-x-3 grid grid-cols-6 w-full 2xl:gap-y-6 gap-y-5 ">
                    <div className="xl:col-span-4 2xl:gap-x-9 lg:gap-x-4 gap-x-3 col-span-6 grid grid-cols-2">
                        <div className="col-span-1">
                            <div>
                                <img src={DesignDetailsPlaceholder8} className="lg:h-[490px] md:h-[380px] sm:h-[340px] md:mb-6 mb-3 object-cover object-center w-full" alt="" />
                                <img src={DesignDetailsPlaceholder9} className="lg:h-[350px] md:h-[255px] sm:h-[210px] object-cover object-center w-full" alt="" />
                            </div>
                        </div>
                        <div className="col-span-1 ">
                            <img src={DesignDetailsPlaceholder11} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full max-h-[390px] object-cover object-center w-full" alt="" />
                        </div>

                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder16} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder12} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder13} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder10} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                    </div>

                </div>
                <div className="md:text-xl sm:text-xl text-xl font-light font-houschka space-y-4  mt-6 text-[#D0D0D0] ">
                    <p>Original Pitfire signage art adds a nostalgic touch, further enriching the space's cultural tapestry. Art takes center stage in the design narrative, echoing Pitfire's collaboration with local artists. Portraits of iconic figures such as 'The Grateful Dead' adorn the walls, as well as a wall full of vibrant poster art encapsulating the brand’s love of creating visuals, creating Instagram-worthy moments that pay homage to the brand's counter-cultural roots.</p>
                </div>
            </div>
            <div className="w-full pt-[20px]">
                <img src={DesignDetailsPlaceholder14} className="2xl:h-[900px] w-full xl:h-[800px] lg:h-[720px] md:h-[620px] sm:h-[590px] sm:max-h-full min-h-[240px] max-h-[400px] relative z-50 object-cover" alt="" />
            </div>
            <div className="lg:pt-48 md:pt-36 sm:pt-28 pt-16 relative max-w-[1832px] mx-auto px-4 w-full">
                <div className="2xl:gap-8 gap-4 flex lg:flex-row flex-col items-center relative">
                    <div className="2xl:max-w-[572px] lg:max-w-[490px]">
                        <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">F&B Brand Evolution</h1>
                        <div className="md:text-xl sm:text-xl text-xl font-light font-houschka space-y-4 sm:space-y-6">
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
                        <img src={DesignDetailsPlaceholder18} className="lg:h-[841px] md:h-[620px] sm:h-[590px] sm:max-h-full min-h-[240px] max-h-[400px] w-full object-cover" alt="" />
                    </div>

                </div>

            </div>

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
                            <p className="font-houschka font-light text-[#D0D0D0] text-xl sm:text-xl">
                            I recently had the pleasure of working with TwentyOne06, and I can confidently say they are a fantastic design company. Their commitment to authenticity and quality is evident in every aspect of their work. The team is not only highly professional but also incredibly responsive, making the entire process seamless and enjoyable. From the initial consultation to the final delivery, TwentyOne06 exceeded my expectations. Their innovative designs reflect a deep understanding of client needs and current trends, resulting in truly unique and impactful solutions. If you’re looking for a design partner who values excellence and creativity, I wholeheartedly recommend TwentyOne06. They are a cut above the rest!
                            </p>
                            <div className="bg-primary h-0.5 w-10 lg:mt-10 mt-5"></div>
                            <div className="sm:mt-7 mt-5">
                                <div className="flex sm:gap-3 gap-2 items-center mb-1 sm:mb-1.5">
                                    <h1 className="font-light sm:text-[22px] leading-none">James Knight Paccheco</h1>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">Co-Founder / Chef / Host</h1>
                                    <div className="bg-white/80 size-1.5 rounded-full"></div>
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">the Chef JKP Podcast /  Culinary Consultant</h1>
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
