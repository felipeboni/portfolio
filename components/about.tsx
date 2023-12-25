"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">

        Embarking on my journey into the realm of technology, I initiated my foray into <span className="font-bold">web design at the age of 15</span>, progressing to <span className="font-bold">programming by the age of 17</span>. Determined to translate this passion into a tangible career, I secured a <span className="font-bold">full scholarship for a Bachelor's degree in Computer Science</span> at <span className="italic">Universidade Paulista (UNIP)</span> through the <span className="italic">PROUNI</span> program.
      </p>

      <p className="mb-3">
        Following a year of dedicated academic pursuit, I transitioned into an <span className="font-bold">8-month internship</span>, culminating in my appointment as a <span className="font-bold">Junior Developer</span> within the same agency. Concurrently, I operated as a <span className="font-bold">freelance web developer</span>, undertaking projects that demanded a nuanced understanding of both design and programming principles.
      </p>

      <p className="mb-3">
        Post-graduation, I transitioned into roles as an <span className="font-bold">independent fullstack developer</span>, spearheading projects encompassing <span className="font-bold">UI/UX design and comprehensive system development</span>. Proficient in utilizing <span className="font-bold">Laravel for backend development</span> and <span className="font-bold">NextJS for frontend implementation</span>, I've navigated complex technical landscapes with a focus on delivering robust solutions.
      </p>

      <p className="mb-3">
        Beyond the codebase, my interests extend to maintaining a disciplined fitness regimen, engaging in automotive pursuits, and continual self-improvement through the acquisition of new skills, including language acquisition and music production.
      </p>
    </motion.section >
  );
}
