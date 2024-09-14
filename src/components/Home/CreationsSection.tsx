import Button from "../Shared/Button";
import CreationsBg from "../../assets/CreationsBg.jpg";
import HomeCreationCard from "../Shared/HomeCreationCard";
import Creation1 from "../../assets/NAMA YOSO.png"
import Creation2 from "../../assets/Pitfire.png"
import Creation3 from "../../assets/TERO.png"
import Creation4 from "../../assets/Elix.png"

const CreationsSection = () => {
    const creationData = [
        {
            project: "NAMA YOSO",
            type: "F&B Design, BRANDING",
            img: Creation1
        },
        {
            project: "PITFIRE PIZZA - DUBAI HILLS",
            type: "F&B Design",
            img: Creation2
        },
        {
            project: "TERO",
            type: "F&B Design, BRANDING",
            img: Creation3
        },
        {
            project: "Elix Spa",
            type: "BRANDING , Hospitality Design",
            img: Creation4
        },
    ];
 
    return (
        <div className="max-h-full lg:py-44 md:py-32 sm:py-24 py-16  relative flex items-center justify-center">
            <img src={CreationsBg} className="absolute inset-0 lg:block hidden w-full h-full object-cover opacity-5 left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2" alt="" />
            <div className="relative z-50 ">
                <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-vissa uppercase tracking-[0.02em]  text-center lg:mb-28 md:mb-20 sm:mb-16 mb-8">Our Creations</h1>
                    <div className="grid grid-cols-2 xl:gap-x-11 gap-x-3 sm:gap-x-6 xl:gap-y-16 sm:gap-y-10 gap-y-3 container">
                        {creationData.map((creation, index) => (
                            <HomeCreationCard
                                img={creation.img}
                                dir={`/project-details/${index + 1}`}
                                key={index}
                                project={creation.project}
                                type={creation.type}
                            />
                        ))}
                    </div>
                    <div className="flex justify-center lg:mt-20 md:mt-16 sm:mt-12 mt-6">
                        <Button aspects="sm:size-auto size-9" dir="/our-creations" textStyles="sm:text-lg text-xs" title="View All Projects" className="sm:w-[235px] w-[150px]" />
                    </div>
            </div>
        </div>
    );
};

export default CreationsSection;
