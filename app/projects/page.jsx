"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Next Chat App",
    description: "A private messaging system made with Next.js, Socket.io, Express.js, and Tailwind CSS.",
    tags: ["Next.js", "Express.js", "Socket.io", "Tailwind CSS"],
    live: "https://next-js-chat-app-5lgs.vercel.app/",
    repo: "https://github.com/saroj-2728/next_js_chat_app",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[var(--bg-primary)] text-[var(--text-primary)] py-16 px-6">
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-8"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <motion.p
        className="text-base sm:text-lg md:text-xl text-center mb-12 text-[var(--text-secondary)] max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Here are some of the projects I&#39;ve worked on. Each project showcases unique aspects of my skill set and ability to solve problems creatively.
      </motion.p>
      <div className="flex md:flex-row flex-col md:flex-wrap justify-center gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[var(--bg-card)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 md:w-[30%] min-w-[250px] max-w-[400px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <h2 className="md:text-2xl text-xl font-bold mb-2">{project.title}</h2>
            <p className="text-[var(--text-secondary)] mb-4 text-[15px] md:text-lg">
              {project.description}
              </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="px-3 py-1 bg-[var(--accent-secondary)] text-white rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex md:flex-row flex-col gap-4 items-center justify-around">
              <a
                href={project.live}
                className="inline-block md:px-4 px-0 md:py-2 py-3 bg-[var(--accent-primary)] text-white rounded-lg font-bold transition duration-300 md:w-auto w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                href={project.repo}
                className="inline-block md:px-4 px-0 md:py-2 py-3 bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold rounded-lg hover:text-white hover:bg-[var(--accent-primary)] transition duration-300 md:w-auto w-full text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="flex gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        More Projects Coming Soon!
      </motion.div>
    </div>
  );
}
