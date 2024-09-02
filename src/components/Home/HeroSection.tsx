import { Link } from "react-router-dom";
import HeroBg from "../../assets/HeroBg.png";
import HeroSignature from "../../assets/HeroSignature.png";
import FacebookIcon from "../Icons/FacebookIcon";
import LinkedInIcon from "../Icons/LinkedInIcon";
import InstagramIcon from "../Icons/InstagramIcon";

const HeroSection = () => {
    return (
        <div className="sm:h-screen h-[50vh] relative">

            <div className="relative container">
                <div className="gap-4 absolute top-6 z-50 md:flex hidden right-5">
                    <Link to={'/'}>
                        <FacebookIcon />
                    </Link>
                    <Link to={'/'}>
                        <InstagramIcon />
                    </Link>
                    <Link to={'/'}>
                        <LinkedInIcon />
                    </Link>
                </div>
            </div>
            <div className="h-full w-full absolute bg-[#0E0E0E]/40 z-10" />
            <img src={HeroBg} className="absolute h-full w-full object-cover object-center" alt="Hero Background" />
            <img className="absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" src={HeroSignature} alt="Signature" />
        </div>
    );
};

export default HeroSection;
