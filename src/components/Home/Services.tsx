import Service1 from "../../assets/Service (1).png";
import Service2 from "../../assets/Service (2).png";
import Service3 from "../../assets/Service (3).png";
import Service4 from "../../assets/Service (4).png";
import Service5 from "../../assets/Service (5).png";

const Services = () => {
  return (
    <div className="overflow-hidden max-h-full">
      <div className="grid lg:grid-cols-5 grid-cols-4 w-full ">
        <div className="overflow-hidden relative">
          <h1 className="z-50 absolute font-vissa xl:text-7xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] uppercase  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          Experience Strategy
          </h1>
          {" "}
          <img
            className="hover:scale-[1.3] relative w-full h-full transition-all duration-300"
            src={Service1}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden relative">
          <h1 className="z-50 absolute font-vissa xl:text-7xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] capitalize top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          Interior Design
          </h1>
          {" "}
          <img
            className="hover:scale-[1.3] relative w-full h-full transition-all duration-300"
            src={Service3}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden relative">
          <h1 className="z-50 absolute font-vissa xl:text-7xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] capitalize top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          Market Research
          </h1>
          {" "}
          <img
            className="hover:scale-[1.3] relative w-full h-full transition-all duration-300"
            src={Service5}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden relative">
          <h1 className="z-50 absolute font-vissa xl:text-7xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] capitalize top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          Brand Development
          </h1>
          {" "}
          <img
            className="hover:scale-[1.3] relative w-full h-full transition-all duration-300"
            src={Service4}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden relative">
          <h1 className="z-50 absolute font-vissa xl:text-7xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] capitalize top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          F&B Consulting
          </h1>
          {" "}
          <img
            className="hover:scale-[1.3] relative w-full h-full transition-all duration-300 lg:block hidden"
            src={Service2}
            alt="Service"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
