import { Link } from "react-router-dom";

const CreationCard = ({project , type , dir = "" , img} : {project:string; type:string; dir?:string; img:string }) => {
  return (
    <Link to={dir}>
        <div className="group relative">
    <img className="sm:max-h-[433px] sm:h-[433px] h-[260px] w-full object-cover" src={img} />
    <div className="h-full w-full absolute bg-black/40 inset-0 group-hover:opacity-100 opacity-0 transition-all duration-300 flex flex-col items-center justify-center font-houschka uppercase">
        <h1 className="font-black md:text-2xl mb-1 md:mb-1.5 ">{project}</h1>
        <h2 className="md:text-lg text-xs font-bold text-[#D0D0D0] mb-3">{type}</h2>
        <div className="relative">
            <p className="font-light md:text-lg text-xs relative z-50">View project details</p>
            <div className="bg-primary/70 md:h-3 h-2.5 w-full absolute bottom-0"></div>
        </div>
    </div>
</div>
</Link>
)
}

export default CreationCard
