"use client";
import blogData from "@/components/Blog/blogData";
import SingleBlog from "@/components/Blog/SingleBlog";
import BreadcrumbComponent from "@/components/Common/Breadcrumb";

import React from "react";

const Blog = () => {
  return (
    <>
      <BreadcrumbComponent
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            {blogData.map((blog, index) => (
              <div key={index} className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
