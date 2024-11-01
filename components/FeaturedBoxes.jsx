"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, inView, animate } from "framer-motion";

export default function FeaturedBoxes() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: 1,
      title: "About Me",
      description: "I'm a passionate web developer with a focus on crafting seamless and engaging experiences. Skilled in modern web technologies, I love bringing ideas to life and solving complex problems through clean, efficient code."
    },
    {
      id: 2,
      title: "What I'm Learning",
      description: "I'm currently diving into JavaScript frameworks and building projects to enhance my skills. I'm also exploring resources like freeCodeCamp and Codecademy to boost my knowledge."
    },
    {
      id: 3,
      title: "Future Goals",
      description: "In the future, I aim to specialize in full-stack development and contribute to open-source projects. I'm eager to learn more and grow as a developer."
    },
    {
      id: 4,
      title: "Feedback Welcome!",
      description: "I value your insights on my projects and would love to hear your thoughts. Feel free to reach out with any feedback!"
    },
    {
      id: 5,
      title: "Fun Fact",
      description: "I love playing Clash Of Clans. Below is the link to my profile if you want to have a look.",
      link: "https://link.clashofclans.com/?action=OpenSCID&p=51-7df4a22e-8923-48b5-8a14-4e112fb82705"
    },
  ];

  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      inView(container.current, (info) => {
        const animation = animate(info.target, { opacity: 1 });
        return () => animation.stop();
      });
    }
  }, []);

  const selectedItem = items.find((item) => item.id === selectedId);

  return (
    <div className="max-w-[1080px] bg-[var(--bg-section)] flex items-center justify-center p-4">
      <div className="flex flex-col sm:flex-row flex-wrap justify-center w-full gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-[var(--bg-primary)] rounded-lg shadow-custom md:px-3 px-4 py-4 cursor-pointer w-full sm:w-[45%] md:w-[30%]"
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <motion.h5 className="md:text-lg font-bold pb-1">{item.title}</motion.h5>
            <motion.p className="text-sm md:text-base">
              {item.description}
              </motion.p>
            {item.link && (
              <motion.a
                href={item.link}
                target="_blank"
                className="text-[var(--accent-primary)] inline-block"
              >
                Clash Of Clans Profile
              </motion.a>
            )}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center md:p-4"
            onClick={() => setSelectedId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[var(--bg-primary)] max-w-[90%] md:max-w-[520px] rounded-lg md:p-8 p-4 relative border border-[var(--accent-primary)]"
              ref={container}
              layoutId={selectedId}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.h5 className="md:text-2xl text-xl font-bold text-[var(--accent-primary)]">
                {selectedItem.title}
              </motion.h5>
              <motion.p className="text-base sm:text-xl md:my-3 my-1.5">
                {selectedItem.description}
              </motion.p>
              {selectedItem.link && (
                <motion.a
                  href={selectedItem.link}
                  target="_blank"
                  className="text-[var(--accent-primary)]"
                >
                  Clash Of Clans Profile
                </motion.a>
              )}
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-1 right-1 hover:bg-[var(--bg-section)] rounded-full p-1 transition-all duration-300"
                role="button"
                aria-label="Close"
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#dc2626">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


/* 


*/