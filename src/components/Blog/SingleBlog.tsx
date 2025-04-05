import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;
  return (
    <div
      className="relative pb-1 overflow-hidden bg-white rounded-md wow fadeInUp shadow-one dark:bg-dark"
      data-wow-delay=".1s"
    >
      <Link href="/" className="relative block h-[220px] w-full">
        <span className="absolute z-20 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white capitalize rounded-full top-6 right-6 bg-primary">
          {tags[0]}
        </span>
        <Image src={image} alt="image" fill />
      </Link>
      <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
        <h3>
          <Link
            href="/"
            className="block mb-4 text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="pb-6 mb-6 text-base font-medium border-b border-body-color border-opacity-10 text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>
        <div className="flex items-center">
          <div className="flex items-center pr-5 mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative w-10 h-10 overflow-hidden rounded-full">
                <Image src={author.image} alt="author" fill />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                By {author.name}
              </h4>
              <p className="text-xs text-body-color">{author.designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Date
            </h4>
            <p className="text-xs text-body-color">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
