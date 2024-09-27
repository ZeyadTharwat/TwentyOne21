import VideoPlaceholder from "../../assets/Project2-2.png";
import Partners from "./Partners"
import Project from "../../assets/Project2-1.jpg";

const VideoSection = () => {

  return (
    <div>
      <div className="relative">
        <img
        src={VideoPlaceholder}
        className="lg:h-[900px] sm:h-[600px] sm:max-h-full max-h-[400px] min-h-[250px] w-full object-cover"
        alt=""
        />
      </div>
      <Partners />
      <img src={Project} className="lg:h-[800px] sm:h-[500px] sm:max-h-full max-h-[350px] min-h-[220px]  w-full object-cover " />
    </div>
  );
};

export default VideoSection;
