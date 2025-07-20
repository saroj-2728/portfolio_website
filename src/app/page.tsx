'use client'
import { useState } from "react";
import { urlFor } from "@/sanity/sanityImage";

import ProjectCard from "@/components/ui/ProjectCard";
import FeedCard from "@/components/ui/FeedCard";
import LinkTiles from "@/components/ui/LinkTiles";
import Button from "@/components/ui/Button";
// import GradientBorder from "@/components/GradientBorder";
import { IoCopyOutline } from "react-icons/io5";
// import NewsLetterSubscription from "@/components/NewsLetterSub";

import { cards, techStack } from "@/constants/home";
// import { thoughts } from "@/constants/home";

import { useProjects } from "@/contexts/ProjectsContext";

export default function Home() {

  const { projects, isLoading } = useProjects();

  const [copied, setCopied] = useState(false)

  return (
    <main className="flex flex-col items-center min-h-screen pt-10">
      <div className="max-w-[960px] w-full mx-auto">

        {/* Header section */}
        <header className="me md:p-12 md:pb-0 pb-12 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Hey, I&apos;m Saroj. <br /> I design software.
          </h1>
          <p className="mt-3 text-lg max-w-xl">
            Turning ideas into stunning, seamless experiences with a touch of creativity and precision.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <Button
              variant="primary"
              size="md"
              href="/about"
            >
              About
            </Button>
            <Button
              variant="secondary"
              size="md"
              icon={IoCopyOutline}
              onClick={() => {
                navigator.clipboard.writeText("sp0710412@gmail.com")
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
            >
              {copied ? "Copied" : "E-mail"}
            </Button>
          </div>
        </header>

        {/* New drops */}
        <div className="newDrops md:p-12 md:pb-0 pb-12 space-y-6">
          <div className="title">
            <h2 className="font-bold text-primary">New Projects</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {
              isLoading ? (
                Array.from({ length: 2 }).map((_, index) => (
                  <ProjectCard
                    key={index}
                    loading={true}
                  />
                ))
              ) : (
                projects.slice(0, 2).map((drop, index) => (
                  <ProjectCard
                    key={index}
                    href={`/projects/${drop.slug}`}
                    imageSrc={urlFor(drop.images[0])}
                    title={drop.title}
                    description={drop.summary}
                    loading={false}
                  />
                ))
              )
            }
          </div>
        </div>

        {/* Feed and Services*/}
        <div className="feed md:px-12 md:pt-12 md:pb-0 pb-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {
            cards.map((card, index) => (
              <FeedCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                href={card.href}
              />
            ))
          }
        </div>

        {/* Stack */}
        <div className="thoughts md:p-12 pb-20 space-y-6">
          <div className="border border-brd rounded-md">
            <div className="p-3 flex flex-col gap-6">
              <div className="title p-4 pb-0">
                <h2 className="font-bold text-primary">Stack</h2>
                <p>Software and resources I use on a regular basis.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {
                  techStack.map((item, index) => (
                    <LinkTiles
                      key={index}
                      href={item.href}
                      mainText={item.mainText}
                      secondaryText={item.secondaryText}
                      imageSrc={item.imageSrc}
                    />
                  ))
                }
              </div>
              <div className="p-3 pt-0 flex items-center justify-center w-full rounded-md">
                <Button
                  variant="secondary"
                  size="md"
                  href="/stack"
                  fullWidth={true}
                >
                  View all
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}