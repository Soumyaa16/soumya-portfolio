"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Revo, Linkedin, Envelope, Instagram } from "revoicons";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { IconCloud } from "@/components/ui/icon-cloud";


const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}


export default function Home() {
  const { scrollYProgress } = useScroll();

  const sections = ["Work", "Tools", "Skills", "Testimonials", "Socials"];
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const top = el.getBoundingClientRect().top;
          const offset = window.innerHeight / 2;
          if (top <= offset && top + el.offsetHeight > offset) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="relative bg-white bg-[url('/noise.svg')] bg-repeat bg-auto bg-fixed">

      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex flex-col items-center justify-center p-4 bg-[url('/noise.svg'),linear-gradient(to_top,white,transparent),url('/gradient.svg')] bg-[repeat,no-repeat,no-repeat] bg-[auto,cover,cover] bg-center">
        <div className="flex flex-col items-center justify-center z-10 text-accent text-center">
          <h1 className="text-[150px] md:text-[220px] leading-none mb-2 font-[family-name:var(--font-nautigal)]">
            Hello
          </h1>

          <div className="max-w-3xl text-xl md:text-2xl font-light leading-relaxed">
            <p className="mb-4">
              I'm <span className="font-semibold">Soumya</span>, an aspiring software engineer with a focus on cloud technologies and backend systems.
            </p>
            <p className="text-accent/80 text-base md:text-lg">
              I enjoy turning ideas into working solutions and exploring how systems scale in real world scenarios. I learn by building, experimenting, and continuously improving my problem-solving skills.
            </p>
          </div>
        </div>

        <div className="absolute bottom-12 flex gap-4 animate-bounce">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent/60">
            <path d="M12 4V20M12 20L5 13M12 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent/60 mt-2">
            <path d="M12 4V20M12 20L5 13M12 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent/60">
            <path d="M12 4V20M12 20L5 13M12 20L19 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </section>

      <div className="w-full">

        <div className="w-full">

          {/* Work Section */}
          <section id="work" className="h-fit">
            <div className="w-full h-fit">
              <div className="flex flex-col gap-20 px-4 md:px-8">

                {/* Card 1 */}
                <motion.div
                  className="sticky mt-[16vh] top-[16vh] h-fit md:h-[60vh] bg-[#FFF2BD] rounded-4xl md:rounded-[3rem]"
                  style={{
                    scale: useTransform(
                      scrollYProgress,
                      [0, 0.2],
                      [1, typeof window !== "undefined" && window.innerWidth >= 768 ? 0.92 : 0.80]
                    )
                  }}
                >
                  <Link
                    href="https://github.com/Soumyaa16/AstroChat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <div className="py-6 pl-6 h-full flex flex-col md:flex-row">
                      <div className="flex-1 flex flex-col justify-center text-accent">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-3">AstroChat</h3>
                        <p className="text-lg mb-4">Astro theme chatbot using T5 model</p>
                      </div>

                      <div className="flex-1 mt-4 md:mt-0 md:ml-6 relative h-full">
                        <Image
                          src="/card1-img.png"
                          alt="card1"
                          width={500}
                          height={500}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="sticky top-[19vh] md:top-[20vh] h-fit md:h-[60vh] bg-[#C7E0F9] rounded-4xl md:rounded-[3rem]"
                  style={{
                    scale: useTransform(
                      scrollYProgress,
                      [0, 0.2],
                      [1, typeof window !== "undefined" && window.innerWidth >= 768 ? 0.94 : 0.85]
                    )
                  }}
                >
                  <Link
                    href="https://github.com/Soumyaa16/Kidney-Stone-Detection-Model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <div className="py-6 pl-6 h-full flex flex-col md:flex-row">
                      <div className="flex-1 flex flex-col justify-center text-accent">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-3">Kidney Stone Detection</h3>
                        <p className="text-lg mb-4">Kidney stone detection model using YOLOv9</p>
                      </div>

                      <div className="flex-1 mt-4 md:mt-0 md:ml-6 relative h-full">
                        <Image
                          src="/test.png"
                          alt="E-Commerce Screenshot"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>


                {/* Card 3 */}
                <motion.div
                  className="sticky top-[22vh] md:top-[24vh] h-fit md:h-[60vh] bg-[#D8C1F4] rounded-4xl md:rounded-[3rem]"
                  style={{
                    scale: useTransform(
                      scrollYProgress,
                      [0, 0.2],
                      [1, typeof window !== "undefined" && window.innerWidth >= 768 ? 0.96 : 0.90]
                    )
                  }}
                >
                  <Link
                    href="https://github.com/Soumyaa16/pylib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <div className="py-6 pl-6 h-full flex flex-col md:flex-row">
                      <div className="flex-1 flex flex-col justify-center text-accent">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-3">PyLib</h3>
                        <p className="text-lg mb-4">Python library for library</p>
                      </div>

                      <div className="flex-1 mt-4 md:mt-0 md:ml-6 relative h-full">
                        <Image
                          src="/test.png"
                          alt="E-Commerce Screenshot"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>


                {/* Card 4 */}
                <motion.div
                  className="sticky top-[25vh] md:top-[28vh] h-fit md:h-[60vh] bg-[#D0D4DE] rounded-4xl md:rounded-[3rem]"
                  style={{
                    scale: useTransform(
                      scrollYProgress,
                      [0, 0.2],
                      [1, typeof window !== "undefined" && window.innerWidth >= 768 ? 0.98 : 0.95]
                    )
                  }}
                >
                  <Link
                    href="https://github.com/Soumyaa16/soumya-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-full"
                  >
                    <div className="py-6 pl-6 h-full flex flex-col md:flex-row">
                      <div className="flex-1 flex flex-col justify-center text-accent">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-3">Portfolio Website</h3>
                        <p className="text-lg mb-4">Modern portfolio with smooth animations and responsive design</p>
                      </div>

                      <div className="flex-1 mt-4 md:mt-0 md:ml-6 relative h-full">
                        <Image
                          src="/test.png"
                          alt="E-Commerce Screenshot"
                          width={600}
                          height={400}
                        />
                      </div>
                    </div>
                  </Link>
                </motion.div>


                {/* Card 5 */}
                <motion.div
                  className="sticky top-[28vh] md:top-[32vh] h-[60vh] bg-[#D0D4DE] rounded-4xl md:rounded-[3rem]"
                  style={{
                    scale: useTransform(
                      scrollYProgress,
                      [0, 0.2],
                      [1, typeof window !== "undefined" && window.innerWidth >= 768 ? 1 : 1]
                    )
                  }}
                >
                  <div className="p-6 h-full flex items-center justify-center">
                    <h3 className="text-2xl font-semibold text-accent">More Soon!</h3>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section id="tools" className="min-h-[70vh] w-full flex flex-col justify-center items-center">
            <h2 className="text-xl md:text-3xl text-center font-medium mt-16 md:mt-0 mb-8 md:mb-24 text-accent">I spend most of my days <br /> working with these tools</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-12 w-full pb-16 md:pb-0">
              {[
                { name: "Tool1", desc: "Lorem ipsum lorem" },
                { name: "Tool2", desc: "Lorem ipsum lorem" },
                { name: "Tool3", desc: "Lorem ipsum lorem" },
                { name: "Tool4", desc: "Lorem ipsum lorem" },
                { name: "Tool5", desc: "Lorem ipsum lorem" },
                { name: "Tool6", desc: "Lorem ipsum lorem" },
              ].map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center space-x-4 p-4 md:p-2"
                >
                  <Revo className="w-16 md:w-12 h-16 md:h-12" color={"#242424"} />

                  <div>
                    <p className="text-lg md:text-base font-medium text-accent">{tool.name}</p>
                    <p className="text-base md:text-sm text-accent/70">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="min-h-screen w-full flex flex-col justify-center items-center md:-mt-32">
            <h2 className="text-xl md:text-3xl text-center font-medium mb-8 md:mb-24 text-accent">Skills that help me build<br /> extraordinary products</h2>

            <div className="w-full max-w-4xl h-[500px]">
              <IconCloudDemo />
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="min-h-[70vh] w-full flex flex-col justify-center items-center md:-mt-32">
            <h2 className="text-xl md:text-3xl text-center font-medium mb-16 md:mb-24 text-accent">
              What my clients<br className="block md:hidden" /> say about me
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {[
                { text: "Working with Soumya was a fantastic experience. He delivered on time and exceeded expectations.", name: "Sarah Johnson", color: "#FFF2BD", rotate: 3 },
                { text: "The product design and development were seamless. Highly recommend!", name: "Michael Lee", color: "#DDE9FF", rotate: -5 },
                { text: "Amazing attention to detail and great communication throughout.", name: "Amit Sharma", color: "#FFC2D7", rotate: 2 },
              ].map((t, i) => (
                <motion.div
                  key={i}
                  className="text-accent px-6 py-10 rounded-xl flex flex-col justify-between transform"
                  style={{ backgroundColor: t.color }}
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: typeof window !== "undefined" && window.innerWidth >= 768 ? t.rotate : 0 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="text-base line-clamp-4 mb-4 font-light">{t.text}</p>
                  <p className="text-right">— {t.name}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Socials Section */}
          <section id="socials" className="min-h-[70vh] w-full flex flex-col justify-center md:-mt-32">
            <h2 className="text-xl md:text-3xl text-center font-medium mb-16 md:mb-24 text-accent">
              Want to Connect?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
              {[
                { text: "LINKEDIN", icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/soumyadubeyy/" },
                { text: "INSTAGRAM", icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/yourprofile" },
                { text: "TWITTER / X", icon: <Envelope className="w-6 h-6" />, href: "https://twitter.com/yourprofile" },
                { text: "EMAIL", icon: <Envelope className="w-6 h-6" />, href: "mailto:kdsoumya10@gmail.com" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-t border-accent/70 px-4 md:px-6 cursor-pointer pt-6 group"
                >
                  <span className="opacity-70 transition-all duration-200 transform group-hover:opacity-100 group-hover:scale-105">
                    {item.text}
                  </span>
                  <span className="opacity-70 transition-all duration-200 transform group-hover:opacity-100 group-hover:scale-105">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section id="footer" className="h-fit w-full px-4 pt-8 md:pt-16 pb-4">
            <div className="flex flex-row justify-between items-center text-accent/70 text-xs md:text-sm">
              <div>©2025 - Soumya Dubey</div>
              <div>Engineered by <Link href="https://soumyaya.vercel.app/" target="_blank"><span className="underline underline-offset-4 decoration-accent/70 cursor-pointer hover:text-accent">this guy.</span></Link></div>
            </div>
          </section>

        </div>
      </div >
    </div >
  );
}
