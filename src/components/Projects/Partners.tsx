import Partner1 from "../../assets/NAMA YOSO/Partner (1).png";
import Partner2 from "../../assets/NAMA YOSO/Partner (2).png";
import Partner3 from "../../assets/NAMA YOSO/Partner (3).png";
import Partner4 from "../../assets/NAMA YOSO/Partner (4).png";

const Partners = () => {
    return (
        <div className="w-full sm:h-[200px] h-[250px] bg-[#1A1A1A] relative">
            <div className="w-full h-full gradient-border absolute "></div>
            <div className="absolute inset-0 h-full w-full blur-[52.5px] z-50"></div>
            <div className="h-full gradient-bg flex items-center justify-center relative " >
                <div className="relative z-[9999999] container mx-1">
                    <div className="flex justify-center lg:gap-10 sm:gap-5 gap-x-4 gap-y-6 items-center sm:flex-nowrap flex-wrap scale-x-[-1]">
                    <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner1} alt="Partner 1" />
                        </div>
                        <div className="col-span-1 max-w-[250px] sm:max-w-[200px] basis-1/4">
                            <img className="mx-auto" src={Partner2} alt="Partner 2" />
                        </div>
                        <div className="col-span-1 max-w-[250px] sm:max-w-[200px] basis-1/4">
                            <img className="mx-auto" src={Partner3} alt="Partner 3" />
                        </div>
                        <div className="col-span-1 max-w-[250px] sm:max-w-[200px] basis-1/4">
                            <img className="mx-auto" src={Partner4} alt="Partner 4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
