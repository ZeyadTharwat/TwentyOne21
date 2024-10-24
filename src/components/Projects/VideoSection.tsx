import { useState } from "react";
import VideoPlaceholder from "../../assets/VideoPlaceholder.png";
import PlayIcon from "../Icons/PlayIcon";
import Partners from "./Partners";
import YOSO from "../../assets/YOSO.png";

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
            <iframe
              className="w-full lg:h-[900px] sm:h-[600px] sm:max-h-full max-h-[400px] min-h-[250px]"
              src="https://www.youtube.com/embed/s0zNbWmCBqc?autoplay=1&mute=1"
              title="Nama Yoso - The Storytelling Journey of the Award-Winning Restaurant Design by TwentyOne06"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <Partners />
      <img
        src={YOSO}
        className="lg:h-[700px] sm:h-[500px] sm:max-h-full max-h-[350px] min-h-[160px]  w-full object-contain "
      />
    </div>
  );
};

export default VideoSection;
