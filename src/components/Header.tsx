"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type MenuItem = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
};

const menuData: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Call For Papers",
    path: "/papers",
    newTab: false,
  },
  {
    id: 4,
    title: "Speakers",
    path: "/speakers",
    newTab: false,
  },
  {
    id: 5,
    title: "Committee",
    path: "/committee",
    newTab: false,
  },
  {
    id: 6,
    title: "Registration",
    path: "/registrations",
    newTab: false,
  },
  {
    id: 7,
    title: "Venue",
    path: "/venue",
    newTab: false,
  },
  {
    id: 8,
    title: "IEM-ICDC 2025",
    path: "https://2025.iemicdc.org",
    newTab: true,
  }
];

const Header = () => {
  const menuRef = useRef<HTMLUListElement>(null);

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const toggleBarColor = "bg-[--primary]";

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="w-full max-w-screen-2xl mx-auto flex flex-wrap items-center justify-between lg:justify-around px-2 py-2 md:py-2 lg:flex-nowrap gap-y-2 min-w-0 overflow-visible relative">
          {/* Left Logos */}
          <div className="flex items-center lg:gap-2 xl:gap-5 gap-0">
            <Link href="/" className="flex items-center xl:gap-4 lg-gap-2">
              <Image
                src="/images/logo-no-bg.png"
                alt="IEM ICDC Logo"
                width={1500}
                height={1500}
                priority
                quality={100}
                className="h-[8vh] md:h-[9vh] lg:h-[13vh] sm:h-[7vh] w-auto max-w-[9rem] sm:max-w-[6rem] md:max-w-[10rem] lg:max-w-[10rem] xl:max-w-[14rem] object-contain"
              />
            </Link>
            <div className="flex flex-col items-center">
              <Image
                src="/images/sp.png"
                alt="Springer"
                width={812}
                height={318}
                priority
                quality={100}
                className="sm:h-[5vh] md:h-[6vh] lg:h-[6vh] xl:h-[7vh] h-[4.4vh] w-auto max-w-[5rem] sm:max-w-[5rem] md:max-w-[7rem] lg:max-w-[7rem] xl:max-w-[8rem] object-contain rounded-lg"
              />
            </div>

            {/* IEM & UEM logos on small/medium */}
            <div className="flex lg:hidden items-center gap-1 lg:gap-1 pl-1 flex-shrink-0">
              <>
                <Image
                  src="/images/iem-logo.png"
                  alt="IEM Logo"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[5.5vh] sm:h-[6vh] md:h-[8vh] w-auto object-contain max-w-[5rem] sm:max-w-[5rem] md:max-w-[6rem]"
                />
                <Image
                  src="/images/uem-logo.png"
                  alt="UEM Logo"
                  width={1500}
                  height={1003}
                  quality={100}
                  priority
                  className="h-[5.5vh] sm:h-[6vh] md:h-[8vh] w-auto object-contain max-w-[5rem] sm:max-w-[5rem] md:max-w-[6rem]"
                />
              </>
            </div>
          </div>

          {/* Navbar toggle (Mobile) */}
          <div className="lg:hidden ml-auto pl-1">
            <button
              onClick={navbarToggleHandler}
              className="block rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#f74a5e]"
            >
              <span
                className={`block h-0.5 w-6 ${toggleBarColor} transition-transform ${navbarOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 ${toggleBarColor} my-1 transition-opacity ${navbarOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`block h-0.5 w-6 ${toggleBarColor} transition-transform ${navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
              />
            </button>
          </div>

          {/* Navigation (No Submenu) */}
          <nav
            className={`w-full transition-all duration-300 ease-in-out ${navbarOpen
                ? "block bg-gray-50 mt-4 p-4 rounded-md shadow-md lg:bg-transparent"
                : "hidden lg:block"
              } lg:w-auto lg:p-0`}
          >
            <ul
              ref={menuRef}
              className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-2 xl:gap-4 lg:space-x-1 lg:mr-2"
            >
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  {menuItem.newTab ? (
                    <a
                      href={menuItem.path ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setNavbarOpen(false)}
                      className="block py-2 px-3 text-[1.08rem] font-medium transition lg:text-center text-gray-700 hover:text-[#f74a5e]"
                    >
                      {menuItem.title}
                    </a>
                  ) : (
                    <Link
                      href={menuItem.path ?? "#"}
                      onClick={() => setNavbarOpen(false)}
                      className={`block py-2 px-3 text-[1.08rem] font-medium transition lg:text-center ${pathname === menuItem.path
                          ? "text-[#f74a7e]"
                          : "text-gray-700 hover:text-[#f74a5e]"
                        }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Logos on large screens */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3 min-w-0 flex-shrink justify-end">
            <>
              <Image
                src="/images/iem-logo.png"
                alt="IEM Logo"
                width={1500}
                height={1003}
                quality={100}
                priority
                className="h-[8vh] lg:h-[9vh] xl:h-[10vh] w-auto object-contain max-w-[7rem] lg:max-w-[8rem]"
              />
              <Image
                src="/images/uem-logo.png"
                alt="UEM Logo"
                width={1500}
                height={1003}
                quality={100}
                priority
                className="h-[8vh] lg:h-[9vh] xl:h-[10vh] w-auto object-contain max-w-[7rem] lg:max-w-[8rem]"
              />
            </>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
