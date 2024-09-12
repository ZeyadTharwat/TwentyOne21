import PressPlaceholder from "../../assets/PressPlaceholder.png"
import Button from "../Shared/Button"
import Newspaper from "../../assets/NewsPaper.png"
import PressBg1 from "../../assets/PressBg1.svg"
import Philosophy from "../../assets/Philosophy.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import Trend1 from "../../assets/report.png"
import Trend2 from "../../assets/report2.png"
const PressAndReports = () => {
    const pressItems = [
        {
            img: PressPlaceholder,
            title: "Out the entire design",
            description: "An interior design agency can create content that showcases its…",
            id: 1,
        },
        {
            img: PressPlaceholder,
            title: "Out the entire design",
            description: "An interior design agency can create content that showcases its…",
            id: 2,
        },
        {
            img: PressPlaceholder,
            title: "Out the entire design",
            description: "An interior design agency can create content that showcases its…",
            id: 3,
        },
        {
            img: PressPlaceholder,
            title: "Out the entire design",
            description: "An interior design agency can create content that showcases its…",
            id: 4,
        },
        {
            img: PressPlaceholder,
            title: "Out the entire design",
            description: "An interior design agency can create content that showcases its…",
            id: 5,
        },

    ];
    const trendReports = [
        {
            img: Trend1,
            title: "Innovative Design Trends",
            description: "Explore the latest innovations in design that are shaping the industry. From sustainable materials to cutting-edge technology, stay ahead of the curve with these emerging trends.",
            id: 1,
        },
        {
            img: Trend2,
            title: "Sustainable Architecture",
            description: "Dive into the world of sustainable architecture and discover how eco-friendly designs are revolutionizing urban landscapes. Learn about the techniques and materials driving this green movement.",
            id: 2,
        },
        {
            img: Trend2,
            title: "The Future of Interior Design",
            description: "Discover what the future holds for interior design. With a focus on personalization and functionality, these trends highlight the growing importance of creating spaces that reflect individual lifestyles.",
            id: 3,
        },
    ];
    
    return (
        <div className=" lg:py-40 md:py-32 sm:py-24 py-16 relative">
            <img src={PressBg1} className="absolute top-0 left-0 " alt="" />
            <img src={Philosophy} className="absolute bottom-0 w-full object-cover h-[1448px] right-0 opacity-[0.07] " alt="" />
            <div className="container relative">
                <h1 className="text-center font-vissa lg:mb-14 sm:mb-8 mb-7 tracking-[0.02em] lg:text-6xl md:text-5xl sm:text-4xl text-2xl uppercase">Press</h1>
                <Swiper
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    slidesPerView={1}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 2.3,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },

                        900: {
                            slidesPerView: 2.8,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper"
                >
                    {pressItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div>
                                <img src={item.img} className="w-full xl:min-h-[343px] md:min-h-[270px] md:max-h-[270px]  xl:max-h-[343px] object-cover mb-3" alt={item.title} />
                                <h1 className="md:text-[40px] sm:text-3xl   font-vissa uppercase mt-2 sm:mt-4">{item.title}</h1>
                                <p className="text-[#8D8D8D] font-houschka font-light sm:text-base text-[8px] sm:mb-3 mb-1.5 mt-1 sm:mt-2">{item.description}</p>
                                <Button aspects="sm:size-auto size-7" dir={`/press`} title="Show More" height={48} textStyles="font-light sm:text-sm text-[8px]" className="sm:w-[160px] w-[110px]" width={44} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <img className="md:mt-4 mt-20 mb-10 opacity-40 w-full object-cover" src={Newspaper} alt="News paper" />
            <div className="container">
            <h1 className="text-center font-vissa lg:mb-14 sm:mb-8 mb-7 tracking-[0.02em] lg:text-6xl md:text-5xl sm:text-4xl text-[28px] uppercase">Trend Reports</h1>
            <div className="grid grid-cols-1 gap-10 max-w-[1332px] mx-auto">
                    {trendReports.map((report, index) => (
                        <div key={index} className="flex md:gap-5 gap-12 md:flex-row flex-col-reverse items-center md:text-start text-center">
                            <div className="space-y-6 md:w-auto w-full">
                                <img src={report.img} className="lg:min-w-[450px] lg:max-w-[450px] w-full md:min-w-[380px] lg:min-h-[250px] max-h-[270px]  min-h-[195px] object-cover mb-3" alt={report.title} />
                                <div className="md:hidden block">
                                    <Button aspects="sm:size-auto size-9" dir={`/trend-reports`} title="Show More" height={48} textStyles="font-light text-[10px] sm:text-sm" className="sm:w-[140px] w-[100px]" width={44} />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1 className="mb-2 lg:text-5xl sm:text-3xl text-lg font-vissa uppercase tracking-[0.02em]">{report.title}</h1>
                                    <p className="text-[#D0D0D0] font-houschka font-light sm:text-base text-sm tracking-[0.02em] mb-3 mt-2">{report.description}</p>
                                </div>
                                <div className="md:block hidden">
                                    <Button dir={`/trend-reports`} title="Show More" height={48} textStyles="font-light text-sm" className="w-[140px]" width={44} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>

        </div>
    )
}

export default PressAndReports