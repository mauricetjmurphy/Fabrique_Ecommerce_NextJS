import * as React from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

// Import a static image file
import defaultCardImage from "/public/images/hanger.webp";

declare type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

export default function CardImage({
  imageSrc = defaultCardImage,
  imageAltText,
}: {
  imageSrc: StaticImageData;
  imageAltText: string;
}) {
  return (
    <Link href={"/"}>
      <Image className="cursor-pointer" src={imageSrc} alt={imageAltText} />
    </Link>
  );
}

type NavLinkItem = {
  name: string;
  to: string;
};

const LeftSiteLinks = () => {
  const leftLinks = [
    { name: "New", to: "./search" },
    { name: "Denim", to: "/login" },
    { name: "Clothing", to: "/cart" },
    { name: "Footware", to: "/cart" },
  ].filter(Boolean) as NavLinkItem[];

  return (
    <div className="flex items-center w-1/2 justify-start">
      {leftLinks.map((item) => (
        <Link className="" key={item.name} href={item.to}>
          <div className="mr-4 text-stone-600 text-base font-bold tracking-widest cursor-pointer hover:text-yellow-700">
            {item.name.toUpperCase()}
          </div>
        </Link>
      ))}
    </div>
  );
};

const RightSiteLinks = () => {
  const rightLinks = [
    { name: "Accessories", to: "/products/accessories" },
    { name: "Sale", to: "/products/sale" },
    { name: "About", to: "/about" },
    { name: "Discount", to: "/discount" },
  ].filter(Boolean) as NavLinkItem[];

  return (
    <div className="flex items-center w-1/2 justify-end">
      {rightLinks.map((item) => (
        <Link key={item.name} href={item.to}>
          <div className="mr-4 text-base text-stone-600 font-bold tracking-widest cursor-pointer hover:text-yellow-700">
            {item.name.toUpperCase()}
          </div>
        </Link>
      ))}
    </div>
  );
};

export const SiteNavigation = () => {
  return (
    <nav className="h-20 flex px-10">
      <LeftSiteLinks />
      <CardImage imageSrc={defaultCardImage} imageAltText={"hanger"} />
      <RightSiteLinks />
    </nav>
  );
};
