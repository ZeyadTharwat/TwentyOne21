import ArrowIcon from "../Icons/ArrowIcon";
import ButtonVector from "../Icons/ButtonVector";
const Button = ({title , className , height , width, textStyles, dir = "#", aspects, download} : {title:string; className?:string; height?:number; width?:number; textStyles?:string; dir?:string; aspects?:string; download?:string}) => {
  return (
    <a className="group" download={download} href={dir}>
        <button className={`relative ${className}`}>
    <ButtonVector className={`${aspects} transition-all duration-300 text-primary group-hover:text-white`} width={width} height={height} />
    <div className={`absolute top-1/2 -translate-y-1/2 sm:left-6 left-[14px] font-houschka font-light uppercase flex gap-1 sm:gap-2.5 items-center group-hover:text-primary text-white transition-all duration-300  ${textStyles}`}>
    <span >{title}</span>
    <ArrowIcon className="sm:size-auto w-[15px] h-2 group-hover:text-primary  transition-all duration-300 group-hover:translate-x-5"/>
    </div>
    </button>
</a>
)
}

export default Button