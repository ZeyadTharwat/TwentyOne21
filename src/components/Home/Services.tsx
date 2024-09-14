import { Link } from "react-router-dom";
import Service1 from "../../assets/1.jpg";
import Service2 from "../../assets/2.jpg";
import Service3 from "../../assets/3.jpg";
import Service4 from "../../assets/4.jpg";
import Service5 from "../../assets/5.jpg";
import ArrowIcon from "../Icons/ArrowIcon";
import InteriorDesign from "../../assets/ServicesIcons/Interior Design.svg";
import ExperienceStrategy from "../../assets/ServicesIcons/Experience Strategy.svg";
import FBConsulting from "../../assets/ServicesIcons/F&B Consulting.svg";
import BrandDevelopment from "../../assets/ServicesIcons/Brand Development.svg";
import MarketResearch from "../../assets/ServicesIcons/Market Research.svg";

const services = [
  {
    icon: InteriorDesign,
    title: "Interior Design",
    image: Service1,
    listItems: ["Restaurants & Bars", "Hospitality", "Resimerical", "Retail", "Bespoke Furniture"],
  },
  {
    icon: BrandDevelopment,
    title: "Brand Development",
    image: Service2,
    listItems: ["Logo Design", "Brand Guidelines", "Market Positioning", "Digital Presence", "Campaign Planning"],
  },
  {
    icon: MarketResearch,
    title: "Market Research",
    image: Service3,
    listItems: ["Surveys & Polls", "Focus Groups", "Data Analysis", "Industry Reports", "Customer Insights"],
  },
  {
    icon: ExperienceStrategy,
    title: "Experience Strategy",
    image: Service4,
    listItems: ["Customer Journey", "UX Design", "Touchpoint Analysis", "Product Experience", "Service Design"],
  },
  {
    icon: FBConsulting,
    title: "F&B Consulting",
    image: Service5,
    listItems: ["Menu Development", "Kitchen Layout", "Staff Training", "Cost Control", "Supply Chain Management"],
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden max-h-full">
      <div className="grid lg:grid-cols-5 grid-cols-4 w-full ">
        {services.map((service, index) => (
          <div key={index} className={`overflow-hidden relative cursor-pointer group ${index === 4 ? 'lg:block hidden' : ''}`}>
            <div className="z-50 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 group-hover:2xl:top-1/3 group-hover:top-1/4 transition-all duration-300 group-hover:xl:opacity-100 group-hover:opacity-0">
              <img className="mx-auto 2xl:mb-20 lg:mb-10 mb-5 2xl:size-20 md:size-16 sm:size-12 size-10" src={service.icon} alt={service.title} />
              <h1 className="font-vissa 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] capitalize ">
                {service.title}
              </h1>
            </div>
            <div className="z-50 top-1/2 left-1/2 w-full xl:-translate-y-0 -translate-y-1/2 -translate-x-1/2 absolute group-hover:opacity-100 opacity-0 transition-all duration-300 2xl:px-6 sm:px-3 px-1">
              <ul className="2xl:mb-20 xl:mb-10 mb-6 list-none p-0 ">
                {service.listItems.map((item, idx) => (
                  <li className="md:text-xs text-[10px] flex items-center py-1 relative md:pl-6 sm:pl-4 pl-2.5 before:content-[''] before:md:border-4 before:border-2 before:border-[#FFEADF] before:md:size-4 before:sm:size-2.5 before:size-1.5  before:inline-block before:mr-2 before:absolute before:left-0" key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="xl:text-sm md:text-xs text-[9px] sm:block hidden">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis repellat sed velit dignissimos voluptatibus dolorum, temporibus eius corrupti, nisi ullam maxime consequatur animi doloremque blanditiis totam illo repellendus distinctio aperiam qui .</p>
              <Link to={'contact-us'} className="text-primary mx-auto md:text-sm text-[10px] flex items-center sm:gap-3 gap-1.5 md:px-3 px-1.5 py-1 2xl:mt-7 sm:mt-4 bg-[#FFEADF] w-fit rounded-full justify-center">Get In Touch <ArrowIcon /></Link>
            </div>
            <img className="group-hover:scale-[1.3] relative w-full h-full transition-all duration-300" src={service.image} alt={service.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
