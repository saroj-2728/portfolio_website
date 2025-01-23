import Link from "next/link";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <footer className='flex flex-col justify-around items-center gap-12 py-6 w-full border-t border-grayish/20'>
    <div className="w-full flex flex-row items-center justify-between gap-3 mt-4 md:mt-0">
      <div className="info space-y-2">
        <h4 className="leading-relaxed text-lg">Saroj</h4>
        <p className="leading-relaxed">Web Designer and front-end developer</p>
      </div>
      <div className="media">
        <h3 className="text-2xl">Media</h3>
        <div className="flex flex-row justify-center items-center gap-4 text-grayish mt-3">
          <Link
            href={'https://discordapp.com/users/1073637787934412882'}
            target="_blank"
            className="hover:text-white"
          >
            <FaDiscord className="size-6" />
          </Link>
          <Link
            href={'https://github.com/saroj-2728'}
            target="_blank"
            className="hover:text-white"
          >
            <FaGithub className="size-6" />
          </Link>
          <Link
            href={'https://discordapp.com/users/1073637787934412882'}
            target="_blank"
            className="hover:text-white"
          >
            <FaDiscord className="size-6" />
          </Link>
        </div>
      </div>
    </div>
    <div className="text-center md:text-left text-grayish pb-2">
      <span> &copy; Copyright {(new Date).getFullYear()}</span>
      <Link href='/' className="px-3 py-1.5 rounded-lg transition-all duration-200">
        Saroj Pandey
      </Link>
    </div>
  </footer>
)

export default Footer;
