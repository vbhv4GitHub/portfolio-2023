import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const SearchBox = dynamic(() => import('components/UI/SearchBox/SearchBox'));
const GithubIcon = dynamic(() => import('components/UI/SvgIcons/GithubIcon'));

const Navbar = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  return (
    <header className="text-gray-300 bg-gray-800 shadow-md">
      <div className="container flex flex-col items-center justify-between px-4 py-2 mx-auto md:flex-row">
        <div className="flex justify-between w-full md:w-auto">
          <Link href="/" aria-label="vbhv4WebDev Logo">
            <Image className="cursor-pointer" src="/logo-84x84.png" alt="vbv4WebDev Logo" height={50} width={50} />
          </Link>
          <button className="md:hidden" aria-label="Navigation Menu" onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}>
            {isNavMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`${
            isNavMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4`}
        >
          <Link href="/" className="transition-colors duration-300 hover:text-blue-300">
            Home
          </Link>
          <Link href="/blog" className="transition-colors duration-300 hover:text-blue-300">
            Blog
          </Link>
          <a
            href="https://github.com/vbhv4GitHub"
            target="_blank"
            rel="noreferrer"
            aria-label="Github profile"
            className="inline-flex items-center px-4 py-2 text-yellow-500 transition-colors duration-300 border border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white"
          >
            <GithubIcon className="w-5 h-5 mr-2 animate-bounce" />
            Github
          </a>
          <SearchBox />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
