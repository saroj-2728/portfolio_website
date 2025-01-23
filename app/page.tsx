"use client";

import Image from "next/image";
import Link from "next/link";
import ProjectsBlock from "@/components/Blocks/ProjectsBlock";
import { FaDiscord } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export interface Project {
  imageSrc: string;
  name: string
  description: string
  techStack: string[]
  liveLink: string
}

export default function Home() {

  const projects: Project[] = [
    {
      imageSrc: '/images/p1.jpg',
      name: "ChertNodes",
      description: 'Minecraft servers hosting',
      techStack: ['HTML', 'SCSS', 'Flask', 'Python'],
      liveLink: '#'
    },
    {
      imageSrc: '/images/p2.png',
      name: "ProtectX",
      description: 'Discord anti-crash bot',
      techStack: ['React', 'Express', 'Discord.js', 'Node.js'],
      liveLink: '#'
    },
    {
      imageSrc: '/images/p3.png',
      name: "Kahoot Answers Viewer",
      description: 'Get answers to your kahoot quiz',
      techStack: ['CSS', 'Express', 'Node.js', 'Python'],
      liveLink: '#'
    },
  ]

  return (
    <div className="w-full">
      <div className="my-14 w-full flex flex-row justify-between items-center">
        <div className="info max-w-[48%] space-y-6">
          <h2 className="text-3xl font-semibold leading-relaxed">
            Saroj is a <span className="text-primary"> web designer</span> and <br /> <span className="text-primary"> front-end developer</span>
          </h2>
          <p className="text-grayish leading-relaxed">
            He crafts responsive websites where technologies <br /> meet creativity
          </p>
          <Link
            href={'#'}
            className="">
            <button
              type="button"
              className="mt-6 border border-primary px-5 py-1.5 hover:bg-primary/15 transition duration-300"
            >
              Contact me!!!
            </button>
          </Link>
        </div>

        <div className="image">
          <div className="imageContainer relative">
            <Image
              src={'/images/Image.png'}
              height={460}
              width={460}
              alt="Image"
            />
            <div className="absolute w-[88%] left-5 border border-grayish flex items-center justify-start gap-3 p-1">
              <div className="box size-6 bg-primary" />
              <p className="text-grayish">
                Currenlty working on <span className="text-white">Portfolio</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Random Quote */}
      <div className="max-w-[65%] mt-36 w-auto mx-auto text-2xl">
        <div className="relative border py-7">
          <p className="text-center">
            With great power comes great electricity bill
          </p>
          <div className="absolute top-full right-0 border p-4">
            <p>- Dr. Who</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full projects mt-40 flex flex-col items-center justify-center">
        {/* Title */}
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex items-center w-3/4 gap-3">
            <h2 className="text-3xl font-semibold">
              <span className="text-primary">#</span>projects
            </h2>
            <div className="line w-2/3 border-t border-primary" />
          </div>
          <div>
            <Link
              href={'#'}
              className="hover:text-primary transition duration-300"
            >
              View all -{'>'}
            </Link>
          </div>
        </div>

        {/* Projects list */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          <ProjectsBlock projects={projects} />
        </div>
      </div>

      {/* Skils section */}
      <div className="w-full skills mt-28 flex flex-col items-center justify-center">
        {/* Title */}
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex items-center w-3/4 gap-3">
            <h2 className="text-3xl font-semibold">
              <span className="text-primary">#</span>skills
            </h2>
            <div className="line w-2/3 border-t border-primary" />
          </div>
        </div>

        {/* Skills List */}
        <div className="w-full mt-6 flex flex-row justify-between">
          <div className="image mx-5">
            <Image
              src={'/images/sklmid.png'}
              height={350}
              width={350}
              alt="SklMid Image"
              className="object-cover w-full"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 max-w-[63%] p-5">
            {/* First column - Languages */}
            <div className="border border-grayish max-h-min">
              <p className="text-white border-b border-grayish px-2 py-2">Languages</p>
              <p className="px-2 py-2 text-grayish">
                {
                  ['TypeScript', 'Lua', 'Python', 'JavaScript'].map((lang, index) => (
                    lang + " "
                  ))
                }
              </p>
            </div>

            {/* Second column - spans 2 boxes vertically */}
            <div className="flex flex-col gap-4">
              <div className="border border-grayish max-h-min">
                <p className="text-white border-b border-grayish px-2 py-2">Databases</p>
                <p className="px-2 py-2 text-grayish">
                  {
                    ['SQLite', 'PostgrSQL', 'MongoDB'].map((lang, index) => (
                      lang + " "
                    ))
                  }
                </p>
              </div>
              <div className="border border-grayish max-h-min">
                <p className="text-white border-b border-grayish px-2 py-2">Other</p>
                <p className="px-2 py-2 text-grayish">
                  {
                    ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'].map((lang, index) => (
                      lang + " "
                    ))
                  }
                </p>
              </div>
            </div>

            {/* Third column - spans 2 boxes vertically */}
            <div className="flex flex-col gap-4">
              <div className="border border-grayish max-h-min">
                <p className="text-white border-b border-grayish px-2 py-2">Tools</p>
                <p className="px-2 py-2 text-grayish">
                  {
                    ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font', 'Awesome'].map((lang, index) => (
                      lang + " "
                    ))
                  }
                </p>
              </div>
              <div className="border border-grayish max-h-min">
                <p className="text-white border-b border-grayish px-2 py-2">Frameworks</p>
                <p className="px-2 py-2 text-grayish">
                  {
                    ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'].map((lang, index) => (
                      lang + " "
                    ))
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About me section */}
        <div className="w-full aboutMe mt-28 flex flex-col items-center justify-center">
          {/* Title */}
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-3/4 gap-3">
              <h2 className="text-3xl font-semibold">
                <span className="text-primary">#</span>about-me
              </h2>
              <div className="line w-2/3 border-t border-primary" />
            </div>
          </div>

          {/* About me */}
          <div className="w-full mt-6 flex flex-row justify-between">
            <div className="max-w-[50%]">
              <p className="leading-relaxed text-grayish mb-8">
                Hello, i&apos;m Elias! <br /><br />

                I&apos;m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br /> <br />

                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
              </p>
              <Link
                href={'#'}
                type="button"
                className="border border-primary px-5 py-1.5 hover:bg-primary/15 transition duration-300"
              >
                Read more {'->'}
              </Link>
            </div>

            <div className="imageContainer relative">
              <Image
                src={'/images/abimg.png'}
                height={460}
                width={460}
                alt="Image"
                className="w-full object-cover"
              />
              <div className="absolute w-[80%] left-10 border border-primary" />
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="w-full contact my-28 flex flex-col items-center justify-center">
          {/* Title */}
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex items-center w-3/4 gap-3">
              <h2 className="text-3xl font-semibold">
                <span className="text-primary">#</span>contacts
              </h2>
              <div className="line w-2/3 border-t border-primary" />
            </div>
          </div>

          {/* Contact me */}
          <div className="w-full mt-6 flex flex-row justify-between">
            <div className="max-w-[50%]">
              <p className="leading-relaxed text-grayish mb-8">
                I&apos;m interested in freelance opportunities. However, if you have other request or question, don&apos;t hesitate to contact me.
              </p>
            </div>

            <div className="imageContainer relative border border-grayish p-5 space-y-3">
              <p>Message me here</p>
              <div className="text-grayish hover:text-white">
                <Link
                  href={'https://discordapp.com/users/1073637787934412882'}
                  className="flex flex-row gap-2"
                >
                  <FaDiscord className="size-6" />
                  <span>_saroj_</span>
                </Link>
              </div>
              <div className="text-grayish hover:text-white flex flex-row gap-2">
                <Link
                  href={'mailto:sp0710412@gmail.com'}
                  className="flex flex-row gap-2"
                >
                  <IoMail className="size-6" />
                  <span>sp0710412@gmail.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
