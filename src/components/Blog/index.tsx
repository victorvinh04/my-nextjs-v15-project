"use client";
import blogData from "./blogData";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const Blog = () => {
  return (
    <section
      id="blog"
      className="py-16 bg-gray-light dark:bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-7 xl:grid-cols-3">
        {blogData.map((blog) => (
          <div key={blog.id} className="w-full">
            <SingleBlog blog={blog} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
