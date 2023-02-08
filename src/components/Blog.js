import React from "react";
import blog1 from "../assets/images/blog/1.jpg";
import blog2 from "../assets/images/blog/2.jpg";
import blog3 from "../assets/images/blog/3.jpg";
import { BsHeart } from "react-icons/bs";
import { AiOutlineComment } from "react-icons/ai";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlUser } from "react-icons/sl";
const Blog = () => {
  const blogs = [
    {
      image: blog1,
      date: "April 10, 2022",
      title: "Fostering future Schools & social Innovation.",
      author: "Ned Nwoko",
      love: "5",
      comment: "2",
      type: "podcast",
    },
    {
      image: blog2,
      date: "October 16, 2022",
      title: "The Surprising Reason for High College Tuition.",
      author: "Unago .C. Shege",
      love: "4",
      comment: "1",
      type: "Writing",
    },
    {
      image: blog3,
      date: "May 10, 2023",
      title: "Taking Courses are better than spending Six years in School.",
      author: "idon Kpai",
      love: "9",
      comment: "5",
      type: "Audio",
    },
  ];
  return (
    <div className="back-blog__area blog__area pt-5 pb-5">
      <div className="container blog__width">
        <div className="back__title__section text-center">
          <h6 className="back__subtitle">From our blog</h6>
          <h2 className="back__tittle"> Latest from our Blogs </h2>
        </div>
        <div className="row">
          {blogs.map((blog, i) => (
            <div
              className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
              key={i}
            >
              <div className="blog__card mb-5">
                <div className="blog__thumb w-img p-relative">
                  <a className="blog__thumb--image" href="/">
                    <img src={blog.image} alt="This the first card " />
                  </a>
                  <a className="blog__thumb--pre-title" href="blog.html">
                    {blog.type}
                  </a>
                </div>
                <div className="blog__card--content">
                  <div className="blog__card--content-area mb-25">
                    <span className="blog__card--date">{blog.date}</span>
                    <h3 className="blog__card--title">
                      <a href="/">{blog.title}</a>
                    </h3>
                    <a className="blog__card--link" href="/">
                      {" "}
                      Read more <IoIosArrowRoundForward />
                    </a>
                  </div>
                  <div className="blog__card--icon ">
                    <div className="blog__card--icon-1">
                      <SlUser />
                      <span>{blog.author}</span>
                    </div>
                    <div className="blog__card--icon-2">
                      <div className="blog__card--icon-2-first">
                        <BsHeart />
                        <span>{blog.love}</span>
                      </div>
                      <div className="blog__card--icon-2-second">
                        <AiOutlineComment />
                        <span>{blog.comment}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
