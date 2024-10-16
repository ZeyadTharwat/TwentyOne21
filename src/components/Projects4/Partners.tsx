import Partner1 from "../../assets/Elix/CID MENA - HIGHLY COMMENDED.png";
import Partner2 from "../../assets/Elix/HEART OF EUROPE.png";

const Partners = () => {
    return (
        <div className="w-full sm:h-[200px] h-[250px] bg-[#1A1A1A] relative">
            <div className="w-full h-full gradient-border absolute "></div>
            <div className="absolute inset-0 h-full w-full blur-[52.5px] z-50"></div>
            <div className="h-full gradient-bg flex items-center justify-center relative " >
                <div className="relative z-[9999999] container mx-1">
                    <div className="flex justify-center lg:gap-10 sm:gap-5 gap-x-4 gap-y-6 items-center scale-x-[-1]">
                    <div className="col-span-1 max-w-[300px] sm:max-w-[350px] basis-1/2">
                            <img  src={Partner1} alt="Partner 1" />
                        </div>
                    <div className="col-span-1 max-w-[250px] sm:max-w-[200px] basis-1/2">
                            <img  src={Partner2} alt="Partner 2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
