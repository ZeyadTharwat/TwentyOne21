import { Link } from "react-router-dom"
import Button from "../Shared/Button"
import ArrowIcon from "../Icons/ArrowIcon"
import { Swiper, SwiperSlide } from "swiper/react";
const blogs = [
  {
    id: 1,
    title: "Sustainable Design: How to Create an…",
    description: "An interior design agency can create content that showcases its…",
  },
  {
    id: 2,
    title: "Innovative Ideas for Modern Interiors…",
    description: "Discover the latest trends in interior design with our…",
  },
  {
    id: 3,
    title: "Maximizing Small Spaces with Style…",
    description: "Learn how to make the most of limited space with these tips…",
  },
  {
    id: 5,
    title: "Maximizing Small Spaces with Style…",
    description: "Learn how to make the most of limited space with these tips…",
  },
  {
    id: 6,
    title: "Maximizing Small Spaces with Style…",
    description: "Learn how to make the most of limited space with these tips…",
  },

];


const BlogsSection = () => {
  return (
    <div className="lg:py-40 md:py-32 sm:py-24 pt-16 pb-[100px]">
      <div className="container">
        <div className="flex md:justify-between justify-center items-center mb-12">
          <h1 className="2xl:text-6xl lg:text-5xl sm:text-4xl text-2xl md:text-start text-center tracking-[0.02em] font-vissa uppercase">
            Sharing Our Knowledge and Passion<br /> for Interiors
          </h1>
          <div className="md:block hidden">
            <Button dir="/blogs" title="view all blogs" width={60} height={64} className="w-[200px]" textStyles="text-lg font-light" />
          </div>
        </div>
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: {
              slidesPerView: 1.3,
              spaceBetween: 18,
            },

            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
          }}          
          pagination={{ clickable: true }}
        >
          {blogs.map((blog) => (
            <SwiperSlide className="bg-[#0E0E0E] py-10 sm:py-14 px-6 lg:pl-10 lg:pr-14 !h-auto" key={blog.id}>
              <Link to={`/blog-details/${blog.id}`} className="group">
                <div className="py-1.5">
                  <h1 className="font-vissa text-sm sm:text-[22px] tracking-[0.02em] mb-4 sm:mb-9 group-hover:text-primary duration-300 transition-all">
                    {blog.title}
                  </h1>
                  <div className="h-1 w-5 bg-primary sm:mb-6 mb-4 sm:mt-7" />
                  <p className="text-[#8D8D8D] sm:text-base text-[10px] font-light font-houschka mb-7 sm:mb-11">
                    {blog.description}
                  </p>
                  <Link
                    to={`/blog-details/${blog.id}`}
                    className="flex group-hover:text-primary items-center gap-1.5 sm:gap-0.5 font-light font-houschka text-[10px] sm:text-lg uppercase"
                  >
                    Learn More
                    <ArrowIcon className="group-hover:ml-5 duration-300 sm:size-auto w-3 transition-all group-hover:text-primary" />
                  </Link>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="md:hidden block mt-8">
          <Button aspects="sm:size-auto size-9" dir="/blogs" title="view all blogs" width={60} height={64} className="sm:w-[200px] w-[120px]" textStyles="sm:text-lg text-[10px] font-light" />
        </div>

      </div>
    </div>
  )
}

export default BlogsSection