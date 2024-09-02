import Service1 from "../assets/1.jpg";
import Service2 from "../assets/2.jpg";
import Service3 from "../assets/3.jpg";
import Service4 from "../assets/4.jpg";
import Service5 from "../assets/5.jpg";

const services = [
  {
    title: "Interior Design",
    image: Service1,
  },
  {
    title: "Brand Development",
    image: Service2,
  },
  {
    title: "Market Research",
    image: Service3,
  },
  {
    title: "Experience Strategy",
    image: Service4,
  },
  {
    title: "F&B Consulting",
    image: Service5,
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden max-h-full">
      <div className="grid lg:grid-cols-5 grid-cols-2 w-full ">
        {services.map((service, index) => (
          <div key={index} className={`overflow-hidden relative cursor-pointer group ${index === 4 ? 'lg:block hidden' : ''}`}>
            <h1 className="z-50 absolute font-vissa 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-3xl text-xl text-center text-[#FFEADF] capitalize top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {service.title}
            </h1>
            <img
              className="group-hover:scale-[1.3] relative w-full h-full transition-all duration-300"
              src={service.image}
              alt={service.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
