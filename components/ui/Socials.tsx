import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa";

const Socials = () => {
    return (
        <div className='fixed left-5 top-0 flex flex-col items-center gap-3'>
            <div className="border-r border-grayish h-[10.8rem]" />
            <div className="socialLinks flex flex-col items-center gap-4">
                <Link href={''}> <FaGithub className="text-grayish hover:text-white size-5" /></Link>
                <Link href={''}> <FaLinkedin className="text-grayish hover:text-white size-5" /></Link>
                <Link href={''}> <FaInstagram className="text-grayish hover:text-white size-5" /></Link>
            </div>
        </div>
    )
}

export default Socials
