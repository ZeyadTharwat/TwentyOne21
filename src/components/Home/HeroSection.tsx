import HeroBg from "../../assets/NAMA YOSO.png";
// import HeroSignature from "../../assets/HeroSignature.png";

const HeroSection = () => {
    return (
        <div className="sm:h-screen h-[50vh] relative">

            {/* <div className="h-full w-full absolute bg-[#0E0E0E]/40 z-10" /> */}
            <img src={HeroBg} className="absolute h-full w-full object-cover object-center " alt="Hero Background" />
            {/* <img className="absolute z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" src={HeroSignature} alt="Signature" /> */}
            <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full text-center">
            <h1 className="font-vissa z-[9999] text-black 2xl:text-[200px] xl:text-[150px] lg:text-[125px] md:text-[100px] sm:text-7xl text-6xl">DEFINE. DESIGN. DISRUPT.</h1>
            </div>
        </div>
    );
};

export default HeroSection;
