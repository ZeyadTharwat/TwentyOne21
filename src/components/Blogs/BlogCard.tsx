import { Link } from "react-router-dom"
import Button from "../Shared/Button"
const BlogCard = ({title , img , id} : {title:string, img:string , id:number}) => {
  return (
    <Link target="_blank" to={`/blog-details/${id}`}>
        <div className="text-black space-y-4 h-full flex flex-col justify-between">
          <div className="space-y-4">
          <img className="w-full max-h-[250px] h-[250px] object-contain" src={img} alt="" />
        <h1 className="tracking-[0.02em] xl:text-[32px] md:text-[28px] text-2xl font-vissa uppercase">{title}</h1>
          </div>
        <Button aspects="sm:size-auto size-9" title="Show More" textStyles="!text-black !group-hover:text-primary font-light font-houschka sm:text-sm text-[10px]" className="w-[150px]" height={48} width={45}/>
    </div>
</Link>
  )
}

export default BlogCard