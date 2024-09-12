import ButtonVector2 from "../../assets/ButtonVector2.svg"
import ArrowIcon from "../Icons/ArrowIcon";
const Button = ({title , className , height , width, textStyles, dir = "#", aspects, download} : {title:string; className?:string; height?:number; width?:number; textStyles?:string; dir?:string; aspects?:string; download?:string}) => {
  return (
    <a download={download} href={dir}>
        <button className={`relative ${className}`}>
    <img className={aspects} width={width} height={height} src={ButtonVector2} />
    <div className={`absolute top-1/2 -translate-y-1/2 sm:left-6 left-[14px] font-houschka font-light uppercase flex gap-1 sm:gap-2.5 items-center ${textStyles}`}>
    <span>{title}</span>
    <ArrowIcon className="sm:size-auto w-[15px] h-2"/>
    </div>
    </button>
</a>
)
}

export default Button