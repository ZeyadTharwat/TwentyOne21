import Service1 from "../../assets/Service (1).png";
import Service2 from "../../assets/Service (2).png";
import Service3 from "../../assets/Service (3).png";
import Service4 from "../../assets/Service (4).png";
import Service5 from "../../assets/Service (5).png";

const Services = () => {
  return (
    <div className="overflow-hidden max-h-full">
      <div className="grid lg:grid-cols-5 grid-cols-4 w-full ">
        <div className="overflow-hidden">
          {" "}
          <img
            className="hover:scale-[1.3] relative hover:z-50 w-full h-full transition-all duration-300"
            src={Service1}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden">
          {" "}
          <img
            className="hover:scale-[1.3] relative hover:z-50 w-full h-full transition-all duration-300"
            src={Service3}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden">
          {" "}
          <img
            className="hover:scale-[1.3] relative hover:z-50 w-full h-full transition-all duration-300"
            src={Service5}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden">
          {" "}
          <img
            className="hover:scale-[1.3] relative hover:z-50 w-full h-full transition-all duration-300"
            src={Service4}
            alt="Service"
          />
        </div>
        <div className="overflow-hidden">
          {" "}
          <img
            className="hover:scale-[1.3] relative hover:z-50 w-full h-full transition-all duration-300 lg:block hidden"
            src={Service2}
            alt="Service"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
