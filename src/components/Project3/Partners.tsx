import Partner1 from "../../assets/tero/CATERER MIDDLE EAST.png";
import Partner2 from "../../assets/tero/DESIGN ET AL.png";
import Partner3 from "../../assets/tero/FACT.png";
import Partner4 from "../../assets/tero/FRAME.png";
import Partner5 from "../../assets/tero/MICHELIN.png";

const Partners = () => {
    return (
        <div className="w-full sm:h-[200px] h-[250px] bg-[#1A1A1A] relative">
            <div className="w-full h-full gradient-border absolute "></div>
            <div className="absolute inset-0 h-full w-full blur-[52.5px] z-50"></div>
            <div className="h-full gradient-bg flex items-center justify-center relative " >
                <div className="relative z-[9999999] container mx-1">
                    <div className="flex justify-center lg:gap-10 sm:gap-10 gap-x-7 gap-y-6 items-center sm:flex-nowrap flex-wrap scale-x-[-1]">
                    <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner1} alt="Partner 1" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner2} alt="Partner 2" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner3} alt="Partner 3" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner4} alt="Partner 4" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner5} alt="Partner 5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
