import BlogInfo from "../../components/Blogs/BlogInfo"
import BlogOverview from "../../components/Blogs/BlogOverview"
// import RelatedImages from "../../components/Blogs/RelatedImages"
import HeroSection from "../../components/Shared/HeroSection"

const BlogDetails = () => {
    return (
        <>
            <HeroSection page="Blog Details" breadcrumb="Blog Details" />
            <div className="bg-[#FFEADF] lg:pt-40 sm:pt-32 pt-14 lg:pb-48 sm:pb-40 pb-16">
                <div className="flex lg:flex-row flex-col gap-7 xl:gap-20 container justify-center text-black">
                <BlogInfo/>
                {/* <RelatedImages /> */}
                </div>
            </div>
            <BlogOverview/>
        </>
    )
}

export default BlogDetails