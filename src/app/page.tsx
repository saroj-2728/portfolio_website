'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoCopyOutline } from "react-icons/io5";
import LinkCard from "@/components/ui/LinkCard";
import LinkTiles from "@/components/ui/LinkTiles";
import FeedCard from "@/components/ui/FeedCard";
import { newDrops, thoughts, cards, techStack } from "@/constants/home";
import Link from "next/link";

export default function Home() {

  const router = useRouter();

  const [copied, setCopied] = useState(false)

  return (
    <main className="flex flex-col items-center min-h-screen pt-10">
      <div className="max-w-[960px] w-full mx-auto">

        {/* Header section */}
        <header className="me p-12 pb-0 space-y-6">
          <h1 className="text-5xl font-bold text-primary">Hey, I&apos;m Saroj. <br /> I design software.
          </h1>
          <p className="mt-3 text-lg">
            The Original Dashboard-Styled Personal Website Template for <br /> Framer just got a revamp – with Dashfolio NEO.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <button
              onClick={() => router.push("/about")}
              className="px-6 py-2.5 font-semibold bg-icon text-primary rounded-md hover:opacity-70 transition duration-[400ms]"
            >
              About
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText("sp0710412@gmail.com")
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              }}
              className="px-6 py-2.5 font-semibold text-primary border border-brd rounded-lg text-center align-middle hover:bg-accent hover:opacity-70 transition duration-[400ms]"
            >
              <IoCopyOutline className={`size-4 text-secondary inline-block`} /> <span className={`${copied ? "text-secondary" : ""} `}>{copied ? "Copied" : "E-mail"}</span>
            </button>
          </div>
        </header>

        {/* New drops */}
        <div className="newDrops p-12 pb-0 space-y-6">
          <div className="title">
            <h2 className="font-bold text-primary">New Drops</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {
              newDrops.map((drop, index) => (
                <LinkCard
                  key={index}
                  href={drop.href}
                  imageSrc={drop.imageSrc}
                  title={drop.title}
                  description={drop.description}
                  tag={drop.tag}
                />
              ))
            }
          </div>
        </div>

        {/* Thoughts */}
        <div className="thoughts p-12 space-y-6">
          <div className="border border-brd rounded-md">
            <div className="p-3 flex flex-col gap-6">
              <div className="title p-4 pb-0">
                <h2 className="font-bold text-primary">Thoughts</h2>
                <p>Sharing experiences, knowledge and videos on design & tech.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {
                  thoughts.map((thought, index) => (
                    <LinkTiles
                      key={index}
                      href={thought.href}
                      mainText={thought.mainText}
                      secondaryText={thought.secondaryText}
                      icon={thought.icon}
                    />
                  ))
                }
              </div>
            </div>

            {/* NewsLetter Subscription */}
            <NewsLetterSubscription
              mainText="Want more?"
              secondaryText="Subscribe to my newsletter to get updates on new content."
              borderTopRounded={false}
            />
          </div>
        </div>

        {/* Feed and Services*/}
        <div className="feed px-12 py-0 grid grid-cols-1 gap-8 sm:grid-cols-2">
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
        <div className="thoughts p-12 space-y-6">
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
              <div className="p-3 pt-0 flex items-center justify-center w-full">
                <Link
                  href="/stack"
                  className="text-primary w-full text-center border border-brd rounded-md hover:opacity-70 transition duration-[400ms]"
                >
                  <div
                    className="py-2.5 w-full bg-accent"
                  >
                    View all
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface Props {
  mainText: string;
  secondaryText: string;
  borderTopRounded: boolean;
}

const NewsLetterSubscription = ({ mainText, secondaryText, borderTopRounded }: Props) => {

  const [email, setEmail] = useState<string>("")

  const handleNewsLetterFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Email submitted: ", email)
  }

  return (
    <div className={`p-6 bg-accent flex flex-row flex-nowrap items-center justify-between gap-8 ${borderTopRounded ? "rounded-t-md" : ""}`}>
      <div className="">
        <h3 className="text-primary font-bold">{mainText}</h3>
        <p className="text-secondary">{secondaryText}</p>
      </div>
      <div className="">
        <form
          onSubmit={handleNewsLetterFormSubmission}
          className="flex flex-row flex-nowrap gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="p-2 focus:outline-none focus:border-white/20 border border-brd bg-transparent rounded-lg"
          />
          <button className="p-2 px-6 bg-icon text-primary rounded-lg hover:opacity-70 transition duration-[400ms]">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export { NewsLetterSubscription }