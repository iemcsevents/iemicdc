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
  submenu?: MenuItem[];
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
    id: 9,
    title: "Schedule",
    path: "/schedule",
    newTab: false,
  },
  {
    id: 8,
    title: "Previous Editions",
    newTab: false,
    submenu: [
      {
        id: 91,
        title: "IEM-ICDC 2026",
        path: "https://2026.iemicdc.org",
        newTab: true,
      },
      {
        id: 92,
        title: "IEM-ICDC 2025",
        path: "https://2025.iemicdc.org",
        newTab: true,
      },
    ],
  }
];

const Header = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();

  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  return (
    <div className="flex justify-center w-full relative z-50">
      <header className={`fixed transition-all duration-500 w-full max-w-7xl px-4 md:px-6 ${sticky ? "top-4" : "top-6 md:top-8"
        }`}>
        <div className={`w-full flex items-center justify-between transition-all duration-500 px-4 py-2 ${sticky
            ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-purple-500/10 border border-white/50 rounded-full"
            : "bg-white/95 backdrop-blur-md shadow-2xl shadow-purple-900/10 border border-purple-100 rounded-[2.5rem]"
          }`}>
          {/* Left: Logos */}
          <div className="flex items-center gap-3 md:gap-5">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-inner border border-gray-100 transition-transform hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="IEM-ICDC 2027 Logo"
                  fill
                  priority
                  className="object-contain p-1.5"
                />
              </div>
            </Link>


          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={navbarToggleHandler}
              className="p-2 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-colors focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {navbarOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <ul ref={menuRef} className="flex items-center gap-1">
              {menuData.map((menuItem, index) => (
                <li key={index} className="relative group">
                  {menuItem.submenu ? (
                    <>
                      <button className="flex items-center gap-1.5 py-2 px-3 lg:px-4 text-[0.95rem] font-semibold text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all">
                        {menuItem.title}
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 hidden group-hover:block bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-2xl min-w-[200px] border border-gray-100 z-50 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {menuItem.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            {subItem.newTab ? (
                              <a
                                href={subItem.path ?? "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
                              >
                                {subItem.title}
                              </a>
                            ) : (
                              <Link
                                href={subItem.path ?? "#"}
                                className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : menuItem.newTab ? (
                    <a
                      href={menuItem.path ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 px-3 lg:px-4 text-[0.95rem] font-semibold text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all"
                    >
                      {menuItem.title}
                    </a>
                  ) : (
                    <Link
                      href={menuItem.path ?? "#"}
                      className={`block py-2 px-3 lg:px-4 text-[0.95rem] font-semibold rounded-full transition-all ${pathname === menuItem.path
                          ? "text-purple-600 bg-purple-50"
                          : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                        }`}
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Sponsor Logos */}
          <div className="hidden lg:flex items-center gap-2 border-l border-gray-200 pl-4">
            <div className="relative w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-1 overflow-hidden">
              <Image src="/images/iem-logo.png" alt="IEM Logo" fill className="object-contain p-1" />
            </div>
            <div className="relative w-10 h-10 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center p-1 overflow-hidden">
              <Image src="/images/uem-logo.png" alt="UEM Logo" fill className="object-contain p-1" />
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`absolute top-full left-4 right-4 mt-4 bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-100 rounded-3xl overflow-hidden transition-all duration-300 transform origin-top lg:hidden ${navbarOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
          }`}>
          <div className="p-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            {menuData.map((menuItem, index) => (
              <div key={index}>
                {menuItem.submenu ? (
                  <div className="flex flex-col">
                    <span className="py-3 px-4 text-[1.05rem] font-semibold text-gray-900 border-b border-gray-50">
                      {menuItem.title}
                    </span>
                    <div className="flex flex-col pl-4 mt-1 space-y-1">
                      {menuItem.submenu.map((subItem, subIndex) => (
                        subItem.newTab ? (
                          <a
                            key={subIndex}
                            href={subItem.path ?? "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setNavbarOpen(false)}
                            className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl"
                          >
                            {subItem.title}
                          </a>
                        ) : (
                          <Link
                            key={subIndex}
                            href={subItem.path ?? "#"}
                            onClick={() => setNavbarOpen(false)}
                            className="block py-2.5 px-4 text-sm font-medium text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-xl"
                          >
                            {subItem.title}
                          </Link>
                        )
                      ))}
                    </div>
                  </div>
                ) : menuItem.newTab ? (
                  <a
                    href={menuItem.path ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setNavbarOpen(false)}
                    className="block py-3 px-4 text-[1.05rem] font-semibold text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl"
                  >
                    {menuItem.title}
                  </a>
                ) : (
                  <Link
                    href={menuItem.path ?? "#"}
                    onClick={() => setNavbarOpen(false)}
                    className={`block py-3 px-4 text-[1.05rem] font-semibold rounded-xl ${pathname === menuItem.path
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                      }`}
                  >
                    {menuItem.title}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Bottom Logos */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="relative w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                <Image src="/images/iem-logo.png" alt="IEM" fill className="object-contain p-1.5" />
              </div>
              <div className="relative w-12 h-12 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
                <Image src="/images/uem-logo.png" alt="UEM" fill className="object-contain p-1.5" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
