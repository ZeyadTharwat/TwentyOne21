import VideoPlaceholder from "../../assets/Elix/v09.edited.jpg";
import Partners from "./Partners";
import YOSO from "../../assets/Elix/V04.jpg";

const VideoSection = () => {

  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full bg-black/40 inset-0 z-10"></div>
        <img
        src={VideoPlaceholder}
        className="lg:h-[900px] sm:h-[600px] sm:max-h-full max-h-[400px] min-h-[250px] w-full object-cover"
        alt=""
        />
      </div>
      <Partners />
      <img src={YOSO} className="lg:h-[800px] sm:h-[500px] sm:max-h-full max-h-[350px] min-h-[220px]  w-full object-cover lg:mt-[200px] md:mt-40 sm:mt-32 mt-16" />
    </div>
  );
};

export default VideoSection;
