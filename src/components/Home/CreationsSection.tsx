import Button from "../Shared/Button";
import CreationsBg from "../../assets/CreationsBg.jpg";
import HomeCreationCard from "../Shared/HomeCreationCard";
import Creation1 from "../../assets/CreationPlaceholder.png"
import Creation2 from "../../assets/Creation2.jpg"
import Creation3 from "../../assets/Creation3.jpg"
import Creation4 from "../../assets/Elix.png"

const CreationsSection = () => {
    const creationData = [
        {
            project: "PITFIRE PIZZA - DUBAI HILLS",
            type: "INTERIOR DESIGN, BRANDING",
            img: Creation1
        },
        {
            project: "LUXURY VILLA - PALM JUMEIRAH",
            type: "INTERIOR DESIGN",
            img: Creation2
        },
        {
            project: "MODERN OFFICE SPACE - DIFC",
            type: "INTERIOR DESIGN, OFFICE PLANNING",
            img: Creation3
        },
        {
            project: "Elix Spa",
            type: "BRANDING , Hospitality Design",
            img: Creation4
        }
    ];
 
    return (
        <div className="h-full lg:py-0 md:py-32 sm:py-24 py-16  relative flex items-center justify-center">
            <img src={CreationsBg} className="absolute inset-0 lg:block hidden w-full h-full object-cover opacity-5 left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2" alt="" />
            <div className=" flex flex-col items-center justify-around relative z-50 md:min-h-screen md:gap-y-0 gap-y-10">
                <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-vissa uppercase tracking-[0.02em]  text-center">Our Creations</h1>
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
                    <div className="flex justify-center ">
                        <Button aspects="sm:size-auto size-9" dir="/our-creations" textStyles="sm:text-lg text-xs" title="View All Projects" className="sm:w-[235px] w-[150px]" />
                    </div>
            </div>
        </div>
    );
};

export default CreationsSection;
