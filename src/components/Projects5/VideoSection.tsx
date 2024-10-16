import VideoPlaceholder from "../../assets/Voco/C01 (1).jpg";
import Partners from "./Partners";
import YOSO from "../../assets/Voco/C02 (2).jpg";

const VideoSection = () => {

  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full inset-0 z-10"></div>
        <img
        src={VideoPlaceholder}
        className="lg:h-[900px] sm:h-[600px] sm:max-h-full max-h-[400px] min-h-[250px] w-full object-cover"
        alt=""
        />
      </div>
      <Partners />
      <img src={YOSO} className="lg:h-[800px] sm:h-[500px] sm:max-h-full max-h-[350px] min-h-[220px]  w-full object-cover " />
    </div>
  );
};

export default VideoSection;
