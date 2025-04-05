import { Brand } from "@/types/brand";
import Image from "next/image";
import React from "react";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "UIdeck",
    href: "https://uideck.com",
    image: "/images/brands/uideck-light.svg",
    image2: "/images/brands/uideck.svg",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://tailgrids.com",
    image: "/images/brands/tailgrids-light.svg",
    image2: "/images/brands/tailgrids.svg",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://lineicons.com",
    image: "/images/brands/lineicons-light.svg",
    image2: "/images/brands/lineicons.svg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://plainadmin.com",
    image: "/images/brands/plainadmin-light.svg",
    image2: "/images/brands/plainadmin.svg",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "https://tailadmin.com",
    image: "/images/brands/tailadmin-light.svg",
    image2: "/images/brands/tailadmin.svg",
  },
  {
    id: 6,
    name: "TailAdmin",
    href: "https://formbold.com",
    image: "/images/brands/formbold-light.svg",
    image2: "/images/brands/formbold.svg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div
              className="flex flex-wrap items-center justify-center px-8 py-8 rounded-sm bg-gray-light dark:bg-[oklch(0.26 0.02 265.77)] sm:px-10 md:mx-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]"
              data-wow-delay=".1s"
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, image2, name } = brand;

  return (
    <div className="flex items-center justify-center w-1/2 px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative w-full h-10 transition opacity-70 hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image className="hidden dark:block" src={image} fill alt={name} />
        <Image className="block dark:hidden" src={image2} fill alt={name} />
      </a>
    </div>
  );
};
