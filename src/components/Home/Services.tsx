import Service1 from "../../assets/Service (1).png"
import Service2 from "../../assets/Service (2).png"
import Service3 from "../../assets/Service (3).png"
import Service4 from "../../assets/Service (4).png"
import Service5 from "../../assets/Service (5).png"

const Services = () => {
  return (
    <div className="grid lg:grid-cols-5 grid-cols-4 w-full h-full">
        <div className="overflow-hidden w-full h-full">
        <img className="hover:scale-[1.3] w-full h-full transition-all duration-300" src={Service1} alt="Service" />
        </div>
        <div className="overflow-hidden w-full h-full">
        <img className="hover:scale-[1.3] w-full h-full transition-all duration-300" src={Service3} alt="Service" />
        </div>
        <div className="overflow-hidden w-full h-full">
        <img className="hover:scale-[1.3] w-full h-full transition-all duration-300" src={Service5} alt="Service" />
        </div>
        <div className="overflow-hidden w-full h-full">
        <img className="hover:scale-[1.3] w-full h-full transition-all duration-300" src={Service4} alt="Service" />
        </div>
        <div className="overflow-hidden w-full h-full lg:block hidden">
        <img className="hover:scale-[1.3] w-full h-full transition-all duration-300" src={Service2} alt="Service" />
        </div>

    </div>
  )
}

export default Services