import Service1 from "../../assets/1.jpg";
import Service2 from "../../assets/2.jpg";
import Service3 from "../../assets/3.jpg";
import Service4 from "../../assets/4.jpg";
import Service5 from "../../assets/5.jpg";
import InteriorDesign from "../../assets/ServicesIcons/Interior Design.svg";
import ExperienceStrategy from "../../assets/ServicesIcons/Experience Strategy.svg";
import FBConsulting from "../../assets/ServicesIcons/F&B Consulting.svg";
import BrandDevelopment from "../../assets/ServicesIcons/Brand Development.svg";
import MarketResearch from "../../assets/ServicesIcons/Market Research.svg";
import ArrowIcon from "../Icons/ArrowIcon";
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay , FreeMode } from "swiper/modules";

const services = [
  {
    icon: InteriorDesign,
    title: "Interior Design",
    image: Service1,
    listItems: ["Restaurants & Bars", "Hospitality Design", "Commercial Design", "Workspace Design", "Residential Design "],
    description:"TwentyOne06 creates custom environments that blend creativity and functionality, delivering engaging spaces that enhance user experiences in the hospitality, retail, and commercial sectors. Our design approach focuses on blending aesthetics with purpose, ensuring that every space is both visually compelling and highly functional.",
    cta:true
  },
  {
    icon: BrandDevelopment,
    title: "Brand Development",
    image: Service2,
    listItems: ["Brand identity development", "Logo design", "Packaging design", "Brand messaging", "Visual branding"],
    description:"TwentyOne06 creates custom environments that blend creativity and functionality, delivering engaging spaces that enhance user experiences in the hospitality, retail, and commercial sectors. Our design approach focuses on blending aesthetics with purpose, ensuring that every space is both visually compelling and highly functional.",
    cta:true
  },
  {
    icon: MarketResearch,
    title: "Market Research",
    image: Service3,
    listItems: ["Industry analysis", "Consumer insights", "Competitor benchmarking", "Market positioning", "Trend forecasting"],
    description:"At TwentyOne06, we provide comprehensive market insights that guide informed decisions. Our data-driven research uncovers trends, consumer behavior, and competitor strategies, helping your brand position itself effectively within the F&B, hospitality, and commercial landscapes. We ensure your business stays ahead with clear, actionable intelligence.",
    cta:true
  },
  {
    icon: ExperienceStrategy,
    title: "Experience Strategy",
    image: Service4,
    listItems: ["Guest experiences design", "Multisensory environments", "Storytelling integration", "Customer engagement", "Emotion-driven experiences"],
    description:"TwentyOne06 creates guest journeys that blend storytelling with multisensory design, aligning each touchpoint with your brand's identity. From concept to execution, we focus on crafting meaningful interactions that leave a lasting emotional impact on your customers.",
    cta:false
  },
  {
    icon: FBConsulting,
    title: "F&B Consulting",
    image: Service5,
    listItems: ["Menu development", "Operational efficiency", "Workflow optimization", "Culinary experience design", "Dining concept development"],
    description:"TwentyOne06 integrates culinary and design elements to deliver unique, cohesive dining experiences. We ensure that your F&B spaces are both operationally sound and visually impactful, enhancing the guest experience.",
    cta:false
  },
];

const Services = () => {
  return (
    <div id="Services" className="overflow-hidden max-h-full">
        <Swiper
        loop={true}
        freeMode={true}
        autoplay={{
        delay: 50,
        disableOnInteraction: false,
        }}
        modules={[Autoplay, FreeMode]}
        
        speed={2500}
                    
          breakpoints={{
            0: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
              },
          }}          
        >
        {services.map((service, index) => (
            <SwiperSlide className="bg-[#0E0E0E] !h-auto" key={index}>
          <div className={`overflow-hidden relative cursor-pointer group `}>
            <div className="z-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:2xl:top-1/3 group-hover:top-1/4 transition-all duration-300 group-hover:xl:opacity-100 group-hover:opacity-0">
              <img className="mx-auto 2xl:mb-20 lg:mb-10 mb-5 2xl:size-14 md:size-12 sm:size-10 size-8" src={service.icon} alt={service.title} />
              <h1 className="font-vissa 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] capitalize ">
                {service.title}
              </h1>
            </div>
            <div className="z-50 top-1/2 left-1/2 w-full xl:-translate-y-0 -translate-y-1/2 -translate-x-1/2 absolute group-hover:opacity-100 opacity-0 transition-all duration-300 2xl:px-6 sm:px-3 px-1">
              <ul className="2xl:mb-20 xl:mb-10 mb-6 list-disc sm:pl-4 pl-2.5">
                {service.listItems.map((item, idx) => (
                  <li className="md:text-xs text-[7px]  sm:py-1 relative " key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="xl:text-base md:text-xs text-[6px]">{service.description}</p>
              {service.cta &&               <Link to={'contact-us'} className="text-primary  md:text-base text-[6px] flex items-center sm:gap-3 gap-1.5 md:px-3 px-1 sm:py-1 py-0.5 2xl:mt-7 mt-4 bg-[#FFEADF] w-fit rounded-full justify-center">Get In Touch <ArrowIcon className="sm:size-auto w-1.5" /></Link>
            }
            </div>
            <img className="group-hover:scale-[1.3] relative w-full h-full transition-all duration-300" src={service.image} alt={service.title} />
          </div>
                      </SwiperSlide>

        ))}
        </Swiper>
    </div>
  );
};

export default Services;
