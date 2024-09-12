import { useState } from "react";
import VideoPlaceholder from "../../assets/Project3-1.png";
import PlayIcon from "../Icons/PlayIcon";
import Partners from "./Partners";
import Project from "../../assets/Project3-2.png";
import VPlayer from "vnetwork-player";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute w-full h-full bg-black/40 inset-0 z-10"></div>
        {!showVideo && (
          <>
                    <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
            onClick={handlePlayClick}
          >
            <PlayIcon className="lg:size-auto sm:size-24 size-[75px]" />
          </button>
        <img
        src={VideoPlaceholder}
        className="lg:h-[900px] sm:h-[600px] sm:max-h-full max-h-[400px] min-h-[250px] w-full object-cover"
        alt=""
        />
</>
      )}
        {showVideo && (
          <div className="relative z-50">
                      <VPlayer
                      autoPlay
            source="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            color="#BA0A40"
          />
          </div>
        )}
      </div>
      <Partners />
      <img src={Project} className="lg:h-[800px] sm:h-[500px] sm:max-h-full max-h-[350px] min-h-[220px]  w-full object-cover lg:mt-[200px] md:mt-40 sm:mt-32 mt-16" />
    </div>
  );
};

export default VideoSection;
