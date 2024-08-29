import { useState } from "react";
import Button from "../Shared/Button";
import CreationCard from "../Shared/CreationCard";
import CreationBg from "../../assets/CreationsBg.png"
import PressBg2 from "../../assets/PressBg2.svg"


const ProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const creationData = [
        { project: "PITFIRE PIZZA - DUBAI HILLS", type: "Interior design, Branding" },
        { project: "LUXURY VILLA - PALM JUMEIRAH", type: "Luxury design" },
        { project: "MODERN OFFICE SPACE - DIFC", type: "Interior design, Office planning" },
        { project: "RESTAURANT REDESIGN - MARINA", type: "Interior design, Branding" },
        { project: "MODERN OFFICE SPACE - DIFC", type: "Interior design, Office planning" },
        { project: "RESTAURANT REDESIGN - MARINA", type: "Interior design, Branding" }
    ];

    const categories = ["All", "Luxury design", "Interior design", "Branding", "Office planning"];

    const filteredData = selectedCategory === "All" 
        ? creationData 
        : creationData.filter(creation => 
            creation.type.toLowerCase().includes(selectedCategory.toLowerCase())
        );

    return (
        <div className="md:pt-40 pt-14 md:pb-32 pb-[100px] relative">
            <div className="w-full h-full absolute inset-0 z-50 bg-textureBg bg-no-repeat bg-cover"/>
            <img src={PressBg2} className="absolute bottom-52 right-0 " alt="" />
            <img src={CreationBg} className="absolute left-0 top-1/2 -translate-y-1/2 w-full" alt="" />
            <div className='container'>
                <div className="flex justify-between items-center relative z-50 gap-10">
                    <div className="flex gap-2.5 md:gap-4 flex-wrap">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`md:px-5 px-3 md:py-3 py-[5px] font-semibold text-[8px] md:text-sm border transition-all duration-300 h-full hover:bg-primary hover:text-white font-syne  ${
                                    selectedCategory === category 
                                    ? "text-white bg-primary border-[#FD3270]" 
                                    : "text-white/70 border-white/70"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                                            <button className="block md:hidden text-white/70 h-full md:min-w-[120px] min-w-[80px] border-white/70 md:px-8 px-5 py-[5px] md:py-3 font-semibold text-[8px] md:text-sm border font-syne capitalize">
                        Sort By
                    </button>
                    </div>
                    <button className="md:block hidden text-white/70 h-full md:min-w-[120px] min-w-[80px] border-white/70 md:px-8 px-5 py-2 md:py-3 font-semibold text-[8px] md:text-sm border font-syne capitalize">
                        Sort By
                    </button>
                </div>
                <div className="grid lg:grid-cols-2 xl:gap-x-11 gap-x-5  xl:gap-y-16 md:gap-y-12 gap-y-7 md:mt-24 mt-9 relative z-[99999]">
                    {filteredData.map((creation, index) => (
                        <CreationCard dir="/project-details/1" key={index} project={creation.project} type={creation.type} />
                    ))}
                </div>
                <div className="flex justify-center md:mt-16 mt-9 md:pt-1 pt-0.5 relative z-50">
                    <Button textStyles="sm:text-lg text-[10px]" aspects="size-9" title="View All Projects" className="sm:w-[235px] w-[130px]" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;
