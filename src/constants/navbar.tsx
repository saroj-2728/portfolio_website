import { ReactNode } from "react";
import { MdOutlineExplore, MdOutlineFeed, MdOutlineMailOutline } from "react-icons/md";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { BiFace } from "react-icons/bi";
import { TfiThought } from "react-icons/tfi";
import { PiStack } from "react-icons/pi";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";

export type NavItem = {
  title: string;
  href: string;
  keyNav: string;
  icon: ReactNode;
};

// Navigation links
export const navigation: NavItem[] = [
  {
    title: "Explore",
    href: "/",
    keyNav: "1",
    icon: <MdOutlineExplore className="size-6 p-0 box-content" />
  },
  {
    title: "Achievements",
    href: "/achievements",
    keyNav: "2",
    icon: <GrAchievement className="size-5 p-0 box-content" />
  },
  {
    title: "Projects",
    href: "/projects",
    keyNav: "3",
    icon: <LiaProjectDiagramSolid className="size-6 p-0 box-content" />
  },
  {
    title: "About",
    href: "/about",
    keyNav: "4",
    icon: <BiFace className="size-6 p-0 box-content" />
  },
]

export const resourceNavigation: NavItem[] = [
  {
    title: "Feed",
    href: "/feed",
    keyNav: "5",
    icon: <MdOutlineFeed className="size-6 p-0 box-content" />
  },
  {
    title: "Thoughts",
    href: "/thoughts",
    keyNav: "6",
    icon: <TfiThought className="size-6 p-0 box-content" />
  },
  {
    title: "Stack",
    href: "/stack",
    keyNav: "7",
    icon: <PiStack className="size-6 p-0 box-content" />
  },
]

export const socialNavigation: NavItem[] = [
  {
    title: "Contact",
    href: "/contact",
    keyNav: "C",
    icon: <MdOutlineMailOutline className="size-6 p-0 box-content" />
  },
  {
    title: "Github",
    keyNav: "G",
    href: "https://github.com/saroj-2728",
    icon: <FaGithub className="size-6 p-0 box-content" />,
  },
  {
    title: "Linkedin",
    keyNav: "L",
    href: "https://www.linkedin.com/in/saroj27/",
    icon: <FaLinkedin className="size-6 p-0 box-content" />,
  },
  {
    title: "Instagram",
    keyNav: "I",
    href: "https://www.instagram.com/_sar0j_/",
    icon: <FaInstagram className="size-6 p-0 box-content" />,
  },
]
