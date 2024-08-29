import VideoPlaceholder from "../../assets/VideoPlaceholder.png"
import PlayIcon from "../Icons/PlayIcon"
import Partners from "../Home/Partners"
import YOSO from "../../assets/YOSO.png"
const VideoSection = () => {
  return (
    <div>
        <div className="relative">
        <div className="absolute w-full h-full bg-black/40 inset-0 z-10"></div>
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"><PlayIcon/></button>
        <img src={VideoPlaceholder} className="h-[900px] w-full object-cover" alt="" />
    </div>
<Partners/>
<img src={YOSO} className="h-[800px] w-full object-cover mt-[200px]" />
</div>
  )
}

export default VideoSection