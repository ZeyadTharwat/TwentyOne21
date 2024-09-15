import { useState } from "react";
import BlogCard from "../components/Blogs/BlogCard";
import ArrowIcon from "../components/Icons/ArrowIcon";
import BlogBg from "../assets/CreationsBg.png";
import BlogsBg2 from "../assets/BlogsBg.svg";
import BlogPlaceholder from "../assets/Blogs/Blog1.jpg";
import Blog2 from "../assets/Blogs/Blog2.png";
import Blog3 from "../assets/Blogs/Blog3.png";
import Blog4 from "../assets/Blogs/Blog4.png";
import Blog5 from "../assets/Blogs/Blog5.png";
import Blog6 from "../assets/Blogs/Blog6.jpg";
import Blog7 from "../assets/Blogs/Blog7.png";

const Blogs = () => {
  const blogData = [
    { img: BlogPlaceholder, title: "Responsible Design" },
    { img: Blog2, title: "Design storytelling/press at TwentyOne06 - 2024 for far." },
    { img: Blog3, title: "How the F&B industry ignites hyper-responsiveness and adaptability in design" },
    { img: Blog4, title: "Harnessing the 'Power of Weird' in Design Thinking" },
    { img: Blog5, title: '"Can You Do This Quicker?" - Dubai Interior Designers answer the burning age-old question.' },
    { img: Blog6, title: "Plate to perception - The marketing impact of a restaurant's interior design." },
    { img: Blog7, title: "Why UAE restaurant owners should consider brand development when designing F&B spaces." },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  // Calculate the number of pages
  const totalPages = Math.ceil(blogData.length / blogsPerPage);

  // Get the blogs for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="md:py-44 py-24 bg-[#FFEADF] text-black relative">
      <img
        src={BlogBg}
        className="absolute top-1/2 -translate-y-1/2 opacity-70 right-0 scale-x-[-1] w-full"
        alt=""
      />
      <div className="text-center md:mb-28 mb-12 px-5">
        <h1 className="font-vissa lg:text-[95px] sm:text-7xl text-[68px] tracking-[0.04em] leading-none mb-4 uppercase">
          Our Blogs
        </h1>
      </div>
      <div className="relative">
        <img src={BlogsBg2} className="absolute -top-14 left-0" alt="" />
        <div className="grid container lg:grid-cols-3 sm:grid-cols-2 xl:gap-x-14 md:gap-x-8 gap-x-4 xl:gap-y-16 md:gap-y-12 gap-y-8 mb-20 relative">
          {currentBlogs.map((blog, index) => (
            <BlogCard id={index + 1} img={blog.img} title={blog.title} key={index} />
          ))}
        </div>
        <div className="flex md:gap-16 gap-9 justify-center px-5">
          <button
            className={`flex items-center gap-2 ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={handlePreviousPage}
          >
            <ArrowIcon className="rotate-180 sm:size-auto w-2.5" />
            <span className="uppercase font-light text-xs md:text-lg font-houschka">
              Previous
            </span>
          </button>
          <div className="flex md:gap-7 gap-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`font-light md:text-[22px] text-base font-houschka ${
                  currentPage === i + 1 ? "text-primary" : ""
                }`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {`0${i + 1}`}
              </button>
            ))}
          </div>
          <button
            className={`flex items-center gap-1 sm:gap-2 ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
            onClick={handleNextPage}
          >
            <span className="uppercase font-light text-xs md:text-lg font-houschka">
              Next
            </span>
            <ArrowIcon className="sm:size-auto w-2.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
