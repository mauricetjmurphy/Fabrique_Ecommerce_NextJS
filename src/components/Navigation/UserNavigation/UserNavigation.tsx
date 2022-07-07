import * as React from "react";
import Link from "next/link";

import {
  FaPinterestP,
  FaSnapchatGhost,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";

import {
  instagramUrl,
  pinterestUrl,
  snapchatUrl,
  tiktokUrl,
} from "../../../data/url";

type SocialLinkItem = {
  name: string;
  to: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

const SocialLinks = () => {
  const links = [
    { name: "Instagram", to: instagramUrl, icon: FaInstagram },
    { name: "Pinterest", to: pinterestUrl, icon: FaPinterestP },
    { name: "Snapchat", to: snapchatUrl, icon: FaSnapchatGhost },
    { name: "Tiktok", to: tiktokUrl, icon: FaTiktok },
  ].filter(Boolean) as SocialLinkItem[];

  return (
    <div className="flex items-center w-1/2 justify-start">
      {links.map((item) => (
        <Link className="" key={item.name} href={item.to}>
          <item.icon className="ml-2 text-stone-600 cursor-pointer hover:text-yellow-700" />
        </Link>
      ))}
    </div>
  );
};

type UserNavigationItem = {
  name: string;
  to: string;
};

const UserNavLinks = () => {
  const userNavLinks = [
    { name: "Search", to: "./search" },
    {
      name: "Login",
      to: "/login",
    },
    {
      name: "Cart",
      to: "/cart",
    },
  ].filter(Boolean) as UserNavigationItem[];

  return (
    <div className="flex items-center w-1/2 justify-end">
      {userNavLinks.map((item) => (
        <Link key={item.name} href={item.to}>
          <div className="mr-2 text-stone-600 text-xs cursor-pointer hover:text-yellow-700">
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export const UserNavigation = () => {
  return (
    <nav className="h-12 flex px-5">
      <SocialLinks />
      <UserNavLinks />
    </nav>
  );
};
