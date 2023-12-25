import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bazaImg from "@/public//baza.jpg";
import techwaveImg from "@/public/techwave.jpg";
import flashstoreImg from "@/public/flashstore.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Started bachelor's degree",
    location: "Ribeirão Preto, SP",
    description:
      "I have been accepted into a competitive entrance exam and have been awarded a full scholarship at the University of São Paulo (UNIP) for a Bachelor's degree in Computer Science, which will last for 4 years.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Ribeirão Preto, SP",
    description:
      "I worked as a front-end developer for 2 years and 8 months. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Graduated bachelor's degree",
    location: "Ribeirão Preto, SP",
    description:
      "I successfully completed my bachelor's degree, maintaining a solid academic performance and delivering exceptional results at the end of the program.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Brazil",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Laravel PHP, MySQL and UI/UX Design. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Techwave",
    description:
      "A e-commerce website connected with the Amazon Products API, to bring the best deals from the tech world.",
    tags: ["React", "Next.js", "Redux", "Tailwind", "Framer"],
    imageUrl: techwaveImg,
  },
  {
    title: "Baza",
    description:
      "A simple landing page made in VueJs to bring my Figma Design to life and play with some animations.",
    tags: ["VueJs", "Tailwind", "Figma"],
    imageUrl: bazaImg,
  },
  {
    title: "Flash Store Skins",
    description:
      "A CS:GO skins shop, bringing a fresh new design and a better structure to the Backend API, connected with Steam.",
    tags: ["React", "Next.js", "Framer", "Laravel PHP", "MySQL", "Figma"],
    imageUrl: flashstoreImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "PHP",
  "Redux",
  "Laravel",
  "Express",
  "PostgreSQL",
  "Figma",
  "UI/UX",
  "Framer Motion",
] as const;
