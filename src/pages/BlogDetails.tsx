import BlogInfo from "../components/Blogs/BlogInfo"
import BlogOverview from "../components/Blogs/BlogOverview"
import RelatedImages from "../components/Blogs/RelatedImages"
import HeroSection from "../components/Shared/HeroSection"

const BlogDetails = () => {
    return (
        <>
            <HeroSection page="Blog Details" breadcrumb="Blog Details" />
            <div className="bg-[#FFEADF] pt-40 pb-48">
                <div className="flex gap-20 container justify-center text-black">
                <BlogInfo/>
                <RelatedImages />
                </div>
            </div>
            <BlogOverview/>
        </>
    )
}

export default BlogDetails