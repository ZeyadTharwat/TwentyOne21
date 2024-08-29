import Partner1 from "../../assets/Partner (1).png";
import Partner2 from "../../assets/Partner (2).png";
import Partner3 from "../../assets/Partner (3).png";
import Partner4 from "../../assets/Partner (4).png";
import Partner5 from "../../assets/Partner (5).png";
import Partner6 from "../../assets/Partner (6).png";

const Partners = () => {
    return (
        <div className="w-full sm:h-[600px] h-[460px] bg-[#1A1A1A] relative">
            <div className="w-full h-full gradient-border absolute "></div>
            <div className="absolute inset-0 h-full w-full blur-[52.5px] z-50"></div>
            <div className="bg w-full h-full flex flex-col items-center justify-center ">
                <h1 className="md:mb-8 mb-4 md:text-5xl  text-2xl lg:text-[56px] tracking-[0.02em] font-vissa leading-none uppercase text-center text-[#FDE9DE] scale-x-[-1] ">
                    Our Satisfied Customers
                </h1>
                <div className="relative space-y-10 z-[9999999] container">
                    <div className="grid grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-10 items-center scale-x-[-1]">
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner1} alt="Partner 1" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner2} alt="Partner 2" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner3} alt="Partner 3" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner4} alt="Partner 4" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner5} alt="Partner 5" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner6} alt="Partner 6" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner1} alt="Partner 1" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner2} alt="Partner 2" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner3} alt="Partner 3" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner4} alt="Partner 4" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner5} alt="Partner 5" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner6} alt="Partner 6" />
                        </div>
                        <div className="lg:col-span-2 col-span-1"></div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner3} alt="Partner 3" />
                        </div>
                        <div className="col-span-1">
                            <img className="mx-auto" src={Partner4} alt="Partner 4" />
                        </div>
                        <div className="lg:col-span-2 col-span-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
