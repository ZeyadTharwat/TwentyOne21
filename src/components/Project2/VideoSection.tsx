import VideoPlaceholder from "../../assets/Pitfire/Project2-1.jpg";
import Partners from "./Partners"
import Project from "../../assets/Pitfire/Project2-2.png";

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
