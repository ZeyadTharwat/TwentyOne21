import Button from "../Shared/Button";
import CreationsBg from "../../assets/CreationsBg.jpg";
import HomeCreationCard from "../Shared/HomeCreationCard";

const CreationsSection = () => {
    const creationData = [
        { project: "PITFIRE PIZZA - DUBAI HILLS", type: "INTERIOR DESIGN, BRANDING" },
        { project: "LUXURY VILLA - PALM JUMEIRAH", type: "INTERIOR DESIGN" },
        { project: "MODERN OFFICE SPACE - DIFC", type: "INTERIOR DESIGN, OFFICE PLANNING" },
        { project: "RESTAURANT REDESIGN - MARINA", type: "INTERIOR DESIGN, BRANDING" }
    ];

    return (
        <div className="md:py-32 sm:py-24 py-16 lg:py-56">
            <div>
                <h1 className="lg:text-6xl md:text-5xl sm:text-3xl text-2xl font-vissa uppercase tracking-[0.02em] lg:mb-28 md:mb-20 sm:mb-16 mb-7 text-center">Our Creations</h1>
                <div className="relative">
                    <img src={CreationsBg} className="absolute inset-0 lg:block hidden w-full opacity-5 left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2" alt="" />
                    <div className="grid grid-cols-2 xl:gap-x-11 gap-x-3 sm:gap-x-6 xl:gap-y-16 sm:gap-y-10 gap-y-3 container">
                        {creationData.map((creation, index) => (
                            <HomeCreationCard dir="/project-details/1" key={index} project={creation.project} type={creation.type} />
                        ))}
                    </div>
                    <div className="flex justify-center md:mt-16 mt-4 lg:mt-20 pt-2">
                        <Button aspects="sm:size-auto size-9" dir="/projects" textStyles="sm:text-lg text-xs" title="View All Projects" className="sm:w-[235px] w-[150px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreationsSection;
