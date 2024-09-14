import Partner1 from "../../assets/Voco/image-missing.jpg";
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
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner1} alt="Partner 1" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner1} alt="Partner 1" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto md:max-w-[150px] max-w-[100px] basis-1/4" src={Partner1} alt="Partner 1" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
