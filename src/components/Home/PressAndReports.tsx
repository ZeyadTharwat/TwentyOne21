import Article1 from "../../assets/Press - Cover Photos/Interior Design Concept of the Year Hotel.jpg"
import Article2 from "../../assets/Press - Cover Photos/Interior-Design-Concept-of-the-Year-Hotel-Voco-Monaco-Dubai-TwentyOne06-1000x750 (1).jpg"
import Button from "../Shared/Button"
import Newspaper from "../../assets/NewsPaper.png"
import PressBg1 from "../../assets/PressBg1.svg"
import Philosophy from "../../assets/Philosophy.webp"
import { Swiper, SwiperSlide } from 'swiper/react';
import Report1 from "../../assets/4- TREND REPORTS/Covers/cover-1.png";
import Report1File from "../../assets/4- TREND REPORTS/Art in Hospitality Spaces.pdf";
import Report2 from "../../assets/4- TREND REPORTS/Covers/cover (1)-1.png";
import Report2File from "../../assets/4- TREND REPORTS/Beyond Walls - Hospitality-driven Workspace Design.pdf.pdf";
import Report3 from "../../assets/4- TREND REPORTS/Covers/TREND REPORTS (4)-1.png";
import Report3File from "../../assets/4- TREND REPORTS/Dining at the Dorchester.pdf";
import { Link } from "react-router-dom"
const PressAndReports = () => {
    const pressItems = [
        {
            img: Article1,
            title: "Trophy time: CID Award-winners strike a pose",
            description: "An interior design agency can create content that showcases its…",
            article: "https://www.commercialinteriordesign.com/news/trophy-time-cid-award-winners-strike-a-pose",
            id: 1,
        },
        {
            img: Article2,
            title: "On stage: The CID Awards 2024 MENA winners",
            description: "An interior design agency can create content that showcases its…",
            article: "https://www.commercialinteriordesign.com/news/on-stage-the-cid-awards-2024-mena-winners",
            id: 2,
        },

    ];
    const trendReports = [
        {
            img: Report1,
            title: "Art in Hospitality Spaces",
            description: "Explore the latest innovations in design that are shaping the industry. From sustainable materials to cutting-edge technology, stay ahead of the curve with these emerging trends.",
            id: 1,
            file: Report1File
        },
        {
            img: Report2,
            title: "Beyond Walls - Hospitality-driven Workspace Design",
            description: "Dive into the world of sustainable architecture and discover how eco-friendly designs are revolutionizing urban landscapes. Learn about the techniques and materials driving this green movement.",
            id: 2,
            file: Report2File
        },
        {
            img: Report3,
            title: "Dining at the Dorchester",
            description: "Discover what the future holds for interior design. With a focus on personalization and functionality, these trends highlight the growing importance of creating spaces that reflect individual lifestyles.",
            id: 3,
            file: Report3File
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
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 10,
                        },

                        900: {
                            slidesPerView: 2,
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
                            <Link to={item.article}>
                                <img src={item.img} className="w-full xl:min-w-[343px] md:min-w-[270px] md:max-w-[270px]  xl:max-w-[343px] xl:min-h-[380px] md:min-h-[320px] md:max-h-[320px]  xl:max-h-[380px] object-cover mb-3" alt={item.title} />
                                <h1 className="md:text-[40px] sm:text-3xl   font-vissa uppercase mt-2 sm:mt-4">{item.title}</h1>
                                <p className="text-[#8D8D8D] font-houschka font-light sm:text-base text-[8px] sm:mb-3 mb-1.5 mt-1 sm:mt-2">{item.description}</p>
                                <Button aspects="sm:size-auto size-7" dir={item.article} title="Show More" height={48} textStyles="font-light sm:text-sm text-[8px]" className="sm:w-[160px] w-[110px]" width={44} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center md:mt-20 mt-10">
                    <Button aspects="sm:size-auto size-9" dir="/press" textStyles="sm:text-lg text-xs" title="View All Press" className="sm:w-[235px] w-[150px]" />

                </div>
            </div>
            <img className="md:mt-4 mt-20 mb-10 opacity-40 w-full object-cover" src={Newspaper} alt="News paper" />
            <div className="container">
                <h1 className="text-center font-vissa lg:mb-14 sm:mb-8 mb-7 tracking-[0.02em] lg:text-6xl md:text-5xl sm:text-4xl text-[28px] uppercase">Trend Reports</h1>
                <div className="grid grid-cols-1 gap-10 max-w-[1332px] mx-auto">
                    {trendReports.map((report, index) => (
                        <div key={index} className="flex md:gap-5 gap-12 md:flex-row flex-col-reverse items-center md:text-start text-center">
                            <div className="space-y-6 md:w-auto w-full">
                                <img src={report.img} className="lg:min-h-[480px] lg:max-h-[480px] w-full md:min-h-[380px] md:max-h-[380px] sm:max-h-[355px] max-h-[300px]  sm:min-h-[355px] min-h-[300px] object-cover mb-3 md:min-w-[400px] md:max-w-[400px]" alt={report.title} />
                                <div className="md:hidden block">
                                    <Button aspects="sm:size-auto size-9" dir={`/trend-reports`} title="Show More" height={48} textStyles="font-light text-[10px] sm:text-sm" className="sm:w-[140px] w-[100px]" width={44} />
                                </div>
                            </div>
                            <div className="max-w-2xl">
                                <div>
                                    <h1 className="mb-2 lg:text-5xl sm:text-3xl text-lg font-vissa uppercase tracking-[0.02em]">{report.title}</h1>
                                    <p className="text-[#D0D0D0] font-houschka font-light sm:text-base text-sm tracking-[0.02em] mb-3 mt-2">{report.description}</p>
                                </div>
                                <div className="md:block hidden">
                                    <Button download={`Report : ${report.title}`}

                                        dir={report.file}
                                        title="Show More" height={48} textStyles="font-light text-sm" className="w-[140px]" width={44} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center md:mt-20 mt-10">
                    <Button aspects="sm:size-auto size-9" dir="/trend-reports" textStyles="sm:text-lg text-xs" title="View All Reports" className="sm:w-[235px] w-[150px]" />

                </div>

            </div>

        </div>
    )
}

export default PressAndReports