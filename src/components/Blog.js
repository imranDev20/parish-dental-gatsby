import React from "react";
import SectionHeader from "./SectionHeader";
import BracesImage from "../images/braces.jpeg";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Braces for tens",
      text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.",
      date: "17TH NOVEMBER 2020",
      image: BracesImage,
    },
    {
      id: 2,
      title: "Braces for teens",
      text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.",
      date: "17TH NOVEMBER 2020",
      image: BracesImage,
    },
    {
      id: 3,
      title: "Braces for teens",
      text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh mel integre facilis.",
      date: "17TH NOVEMBER 2020",
      image: BracesImage,
    },
  ];

  return (
    <section className="my-36">
      <div className="container px-10 mx-auto ">
        <div className="my-10">
          <SectionHeader
            subTitle="Dental Practice"
            mainTitle="Read Latest Articles"
            description="In sea viderer delicatissimi, urbanitas sententiae quo blandit maiorum euripidis."
          />

          <div className="grid grid-cols-3 gap-5">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                text={blog.text}
                name={blog.name}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
