// "use client";

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import AnimatedSignature from "./animated-signature";

// const Navbar: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/projects", label: "Projects" },
//     { href: "/reviews", label: "Reviews" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const isActive = (href: string): boolean => {
//     if (href === "/") {
//       return pathname === "/";
//     }
//     return pathname.startsWith(href);
//   };

//   return (
//     <div className="fixed top-2 sm:top-3 md:top-5 left-2 sm:left-4 md:left-8 lg:left-20 right-2 sm:right-4 md:right-8 lg:right-20 z-50">
//       <div className="flex items-center justify-between">
//         {/* Animated Logo/Brand - Hide when scrolled */}
//         <div
//           className={`flex-shrink-0 transition-all duration-300 ${
//             isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <AnimatedSignature />
//         </div>

//         {/* Translucent Navigation Menu - Center when scrolled, else normal position */}
//         <nav
//           className={`transition-all duration-300 border border-white/20 ${
//             isScrolled
//               ? "bg-white/5 backdrop-blur-2xl mx-auto"
//               : "bg-white/3 backdrop-blur-xl"
//           } rounded-full shadow-2xl shadow-black/20`}
//         >
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-6 mx-1 py-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`hover:text-white px-5 py-3 rounded-full text-md transition-all duration-200 hover:bg-white/15 ${
//                     isActive(item.href)
//                       ? "bg-white text-black font-semibold backdrop-blur-sm scale-y-125 !px-8"
//                       : "text-white/90"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button - Inside nav on mobile */}
//           <div className="md:hidden px-4 py-3">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-white hover:text-gray-300 hover:bg-white/10 p-2 rounded-md transition-colors duration-200"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isMobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Mobile menu dropdown */}
//           <div
//             className={`md:hidden absolute top-full left-0 right-0 mt-2 transition-all duration-300 ${
//               isMobileMenuOpen
//                 ? "max-h-64 opacity-100 visible"
//                 : "max-h-0 opacity-0 invisible"
//             }`}
//           >
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className={`hover:text-white hover:bg-white/15 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
//                     isActive(item.href)
//                       ? "text-white font-black bg-white/15"
//                       : "text-white/90"
//                   }`}
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </nav>

//         {/* CTA Button - Outside navbar - Hide when scrolled */}
//         <div
//           className={`flex-shrink-0 transition-all duration-300 ${
//             isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
//           }`}
//         >
//           <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-3 tracking-wider rounded-full text-md font-medium bg-transparent hover:text-black hover:border-white hover:bg-white dark:text-neutral-200 transition duration-200">
//             Contact
//           </button>
//           {/* <button className="px-6 py-3 rounded-full bg-[#FFFFFF] text-md font-medium text-black tracking-wider transform hover:scale-105 hover:bg-[#000000] transition-colors duration-200">
//             Contact
//           </button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import AnimatedSignature from "./animated-signature";
import AnimatedSVGLogo from "./draw-text";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    // { href: "/reviews", label: "Reviews" },
    { href: "/Skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string): boolean => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="fixed top-2 sm:top-3 md:top-5 left-2 sm:left-4 md:left-8 lg:left-20 right-2 sm:right-4 md:right-8 lg:right-20 z-50">
      {/* Single Unified Navigation Bar */}
      <nav
        className={`transition-all duration-300 shadow-2xl shadow-black/20 overflow-hidden ${
          isScrolled
            ? "bg-white/5 backdrop-blur-2xl"
            : "bg-white/3 backdrop-blur-xl"
        } rounded-xl md:rounded-full`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between px-4 py-2">
          {/* Left: Animated Signature */}
          <div className="flex-shrink-0">
            <AnimatedSignature />
          </div>
          {/* <div className="flex-shrink-0">
            <AnimatedSVGLogo 
              width={50} 
              height={26} 
              strokeColor="#00ffff" 
              strokeWidth={1.2}
              className="hover:scale-105 transition-transform duration-200"
            />
          </div> */}

          {/* Center: Navigation Links */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-white px-4 py-2 rounded-full text-sm font-orbitron tracking-wider transition-none hover:rounded-none hover:border-b-2 ${
                  isActive(item.href) ? "text-white" : "text-white/75"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right: Contact Button */}
          <div className="flex-shrink-0 space-x-6">
            {/* {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-white px-4 py-2 rounded-full text-md transition-all duration-200 hover:bg-white/15 ${
                  isActive(item.href)
                    ? "bg-white text-black font-semibold backdrop-blur-sm"
                    : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            ))} */}
            <Link
              href="/contact"
              className={`px-6 py-3 font-orbitron tracking-wider rounded-full text-md font-medium bg-transparent hover:scale-105 hover:bg-white hover:text-black dark:text-white/75 transition duration-200 ${
                isActive("/contact") ? "text-white font-semibold" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Left: Animated Signature */}
            <div className="flex-shrink-0">
              <AnimatedSignature />
            </div>

            {/* Right: Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-300 hover:bg-white/10 p-2 rounded-md transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={`transition-all duration-300 ${
              isMobileMenuOpen
                ? "max-h-80 opacity-100 visible"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-white hover:bg-white/15 block px-3 py-2 rounded-md text-sm font-orbitron tracking-wider font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? "text-white font-semibold bg-white/15"
                      : "text-white/90"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Contact Button in Mobile Menu */}
              <Link
                href="/contact"
                className={` text-center block px-6 py-3 mt-3 text-sm font-orbitron tracking-wider rounded-lg font-medium bg-white/75 hover:bg-white dark:text-black transition duration-200 ${
                  isActive("/contact")
                    ? "bg-white text-black font-semibold"
                    : ""
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
