import Link from "next/link";

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row justify-around items-center px-6 py-6 w-full bg-[var(--bg-section)]'>
      <div className="text-center md:text-left">
        <Link href='/' className="px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200">
          &copy; 2024 Saroj Pandey
        </Link>
      </div>
      <div className="link-container flex flex-row gap-3 mt-4 md:mt-0">
        <Link href='/' className="px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200">
          Home
        </Link>
        <Link href='/about' className="px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200">
          About
        </Link>
        <Link href='/projects' className="px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200">
          Projects
        </Link>
        <Link href='/contact' className="px-3 py-1.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200">
          Contact
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
