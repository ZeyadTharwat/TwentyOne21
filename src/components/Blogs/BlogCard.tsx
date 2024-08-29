import { Link } from "react-router-dom"
import BlogPlaceholder from "../../assets/BlogPlaceholder.png"
import Button from "../Shared/Button"
const BlogCard = ({title} : {title:string}) => {
  return (
    <Link to='/blog-details/1'>
        <div className="text-black space-y-4">
        <img className="w-full" src={BlogPlaceholder} alt="" />
        <h1 className="tracking-[0.02em] xl:text-[32px] md:text-[28px] text-2xl font-vissa uppercase">{title}</h1>
        <Button aspects="sm:size-auto size-9" title="Show More" textStyles="text-black font-light font-houschka sm:text-sm text-[10px]" className="w-[150px]" height={48} width={45}/>
    </div>
</Link>
  )
}

export default BlogCard