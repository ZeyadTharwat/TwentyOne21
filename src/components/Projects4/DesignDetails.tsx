import DesignDetailsPlaceholder from "../../assets/Elix/e9ffbc55c49fb564bb05e65ace0b3d77.jpg"
import DesignDetailsPlaceholder2 from "../../assets/Elix/46c6fd8b3f86e1b518e37352d49d0ca1.jpg"
import DesignDetailsPlaceholder3 from "../../assets/Elix/V10_Edited.jpg"
import DesignDetailsPlaceholder4 from "../../assets/Elix/V07-op2.jpg"
import DesignDetailsPlaceholder5 from "../../assets/Elix/V07-op1.jpg"
import DesignDetailsPlaceholder6 from "../../assets/Elix/image-6.jpg"
import DesignDetailsPlaceholder7 from "../../assets/Elix/image-7.jpg"
import DesignDetailsPlaceholder8 from "../../assets/Elix/V05.jpg"
import DesignDetailsPlaceholder9 from "../../assets/Elix/image-9.jpg"
import DesignDetailsPlaceholder10 from "../../assets/Elix/487a85f27c951a0d068b79a669243ed9.jpg"
import DesignDetailsPlaceholder11 from "../../assets/Elix/image-11.jpg"
import DesignDetailsPlaceholder12 from "../../assets/Elix/v02.jpg"
import DesignDetailsPlaceholder13 from "../../assets/Elix/V12.jpg"
import DesignDetailsPlaceholder14 from "../../assets/Elix/V14.jpg"
import DesignDetailsPlaceholder19 from "../../assets/Elix/v08-op1.jpg"
import DesignDetailsPlaceholder20 from "../../assets/Elix/design-direction.jpg"
import DesignDetailsPlaceholder21 from "../../assets/Elix/v06.jpg"
import CreationPlacehoder from "../../assets/NAMA YOSO.png"
import Creation3 from "../../assets/TERO.png"
import Creation5 from "../../assets/Voco Monaco.png"
import Creation2 from "../../assets/Pitfire.png"
import Review4 from "../../assets/Reviews/Review (4).jpg"
import QuoteIcon from "../Icons/QuoteIcon"
import { Link } from "react-router-dom"
import DesignPattern from "../../assets/DesignDetailsPattern.png"
import PressBg2 from "../../assets/PressBg2.svg"
import CreationBg from "../../assets/CreationsBg.png"
import { Swiper, SwiperSlide } from 'swiper/react';

const projects = [
    {
        title: "NAMA YOSO",
        type: "F&B Design",
        image: CreationPlacehoder,
        id:'nama-yoso'
    },
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
                                <p>ELIX is establishing itself as a unique “party
spa” dedicated to revitalizing hotel guests
and “bringing them back to life.” With this
vision, our concept focuses on developing a
brand that embodies both vibrancy and
harmony</p>
                                <p>Additionally, we are drawing inspiration from
the ancient belief that elixirs could transform
base metals into gold. This idea influences
our visual branding, incorporating golden
and brass accents into our brand materials
and interior designs.
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
                                <p>Elix Spa is crafted to offer a one-of-a-kind and
refreshing experience that revitalizes guests,
harmoniously blending vibrancy with tranquility for an
unforgettable visit.</p>
                                <p>The spa features premium materials, including blue
fluted tiles, antique brass accents, blue faux leather
seating, blue marble, beige travertine, blue granite, and
oak wood cladding, all contributing to a luxurious and
welcoming ambiance.</p>

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
                            <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">Treatment Rooms                            </h1>
                            <p className="mb-4">The incorporation of contemporary and soothing materials like blue fluted ceramic tiles,
light timber flooring, blue fluted panels, beige travertine, beige marble wall panels, antique
brass accents, blue mosaic tiles, blue ceramic wall tiles, oak wood, and blue granite creates
a tranquil, treatment-focused atmosphere.</p>
<p>The idea of natural healing is intricately integrated into the brand’s identity, evident in
every treatment room and enriching the overall guest experience.
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
                    <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] uppercase">Relaxation Areas                    </h1>
                    <p>The Entrance Design Drawing inspiration from the sea and water, the restaurant's distinctive blue color, reminiscent of the ocean, symbolizes tranquility. The orange hue roots in raw salmon, while beige tones pay homage to traditional Japanese canvases and wall partitions. The brand pattern, resembling Damascus steel, epitomizes a traditional Japanese forging technique, creating a cohesive and meaningful narrative for Nama Yoso.
</p>
                </div>
                <div className="2xl:gap-x-9 lg:gap-x-4 gap-x-3 grid grid-cols-6 w-full 2xl:gap-y-6 gap-y-5 pb-28">
                    <div className="xl:col-span-4 2xl:gap-x-9 lg:gap-x-4 gap-x-3 col-span-6 grid grid-cols-2">
                        <div className="col-span-1">
                            <div>
                                <img src={DesignDetailsPlaceholder7} className="md:h-[384px] sm:h-[340px] md:mb-6 mb-3 object-cover object-center w-full" alt="" />
                                <img src={DesignDetailsPlaceholder11} className="md:h-[258px] sm:h-[210px] object-cover object-center w-full" alt="" />
                            </div>
                            <p className="md:text-xl sm:text-lg text-[10px] font-light font-houschka space-y-4 sm:space-y-6 lg:w-full sm:w-[200%] sm:mt-7 mt-3">Consistent Brand Identity: Distinctive Elix Elements
The design upholds a robust brand identity by integrating
features that resonate with Elix Spa's philosophy of
natural healing and rejuvenation.</p>
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
                        <div className="space-y-4 text-center mt-6 md:text-xl sm:text-lg text-sm font-light font-houschka text-[#D0D0D0] xl:block hidden">
                            <p>Changing Rooms Large </p>
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder13} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="md:text-xl text-center sm:text-lg text-sm font-light font-houschka space-y-4  mt-6 text-[#D0D0D0] lg:w-full w-[200%]">
                            <p>Co-ed Wet Areas</p>
                        </div>

                    </div>
                    <div className="xl:col-span-2 col-span-3">
                        <img src={DesignDetailsPlaceholder14} className="lg:h-[864px] md:h-[660px] sm:h-[560px] sm:max-h-full min-h-[260px] max-h-[390px] object-cover object-center w-full" alt="" />
                        <div className="md:text-xl text-center sm:text-lg text-sm font-light font-houschka space-y-4  mt-6 text-[#D0D0D0] lg:w-full w-[200%]">
                            <p>Jacuzzi Pool</p>
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
                        <h1 className=" font-vissa lg:text-[64px] md:text-5xl sm:text-4xl text-2xl leading-none tracking-[0.02em] mb-5 sm:mb-8 md:mb-12 uppercase">THE SPA EXPERIENCE
                        </h1>
                        <div className="md:text-xl sm:text-lg text-sm font-light font-houschka space-y-4 sm:space-y-6">
                            <p>The inspiration behind ELIX Spa stems from the belief that
elixirs are natural potions designed to rejuvenate and heal
individuals. This idea is intricately embedded in the brand's
core identity.</p>
                            <p>In this spa, the principle of natural healing will be integrated
into every treatment offered, broadening the definition of
"elixir" to encompass more than just liquid forms.</p>

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
                            <img src={Review4} className=" w-full h-full object-cover" />
                        </div>
                        <div className="2xl:w-auto xl:max-w-1/2 w-full lg:max-w-[55%]">
                            <h1 className="font-vissa lg:text-5xl md:text-4xl sm:text-3xl text-2xl tracking-[0.02em] md:mb-11 mb-9 md:text-start text-center uppercase">
                                Client Review
                            </h1>
                            <div className="flex sm:mb-10 mb-7 items-center justify-between">
                                <QuoteIcon className='sm:size-auto w-[63px] h-[55px]' />
                            </div>
                            <p className="font-houschka font-light text-[#D0D0D0] text-sm sm:text-lg">
                            I had the pleasure of working with Govind Shepley, Mike, Hannah, Sabiha and Satinder on Voco Monaco Lobby renovation and ELIX Spa. Twentyone06’s creativity, hard work, passion and patience is truly inspiring on all project portfolios we collaborate on. Well done to you all!  
                            </p>
                            <div className="bg-primary h-0.5 w-10 lg:mt-10 mt-5"></div>
                            <div className="sm:mt-7 mt-5">
                                <div className="flex sm:gap-3 gap-2 items-center mb-1 sm:mb-1.5">
                                    <h1 className="font-light sm:text-[22px] leading-none">Marwa Sharaky</h1>
                                </div>
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">Senior Design Manager</h1>
                                    <div className="bg-white/80 size-1.5 rounded-full"></div>
                                    <h1 className="text-white/80 font-light sm:text-base text-xs font-houschka">Kleindienst Group (Voco Monaco, Elix Spa)</h1>
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
