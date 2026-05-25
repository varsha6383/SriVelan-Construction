"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => pathname === path;

  return (
    <div className="">
      <div className="relative lg:block xl:block">
        <nav className="absolute top-0 left-0 w-full z-50">
          {/* ✅ Container with max-width 90% for laptop/desktop */}
          <div className="mx-auto w-[85%]  py-4 flex items-center justify-between">
            {/* Logo */}
    <div className="flex items-center space-x-2">
  <Link href="/" onClick={closeMenu}>
    <Image
      src="/logo.png"       // Replace with your logo path
      alt="Brikly Logo"
      width={100}           // Adjust width as needed
      height={40}           // Adjust height as needed
      className="cursor-pointer"
    />
  </Link>
</div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-8 text-white font-sencondary">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/service" },
                { name: "Projects", path: "/projects" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={closeMenu}
                    className={`font-c2a hover:text-lime-400 hover:border-b hover:border-lime-500 hover:pb-2 transition ${
                      isActive(item.path)
                        ? "text-lime-400 border-b border-lime-500 pb-2"
                        : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Button (Desktop only) */}
            <Link href="/contact" onClick={closeMenu}>
              <button className="hidden lg:block bg-lime-400 text-gray-900 font-semibold px-5 py-2 cursor-pointer rounded-full hover:bg-lime-500 transition font-c2a">
                GET IN TOUCH
              </button>
            </Link>

            {/* Animated Mobile Menu Button */}
            <button
              className="lg:hidden flex flex-col justify-between w-5 h-4 focus:outline-none"
              onClick={toggleMenu}
            >
              <motion.span
                className="block h-[1px] bg-white rounded"
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-[1px] bg-white rounded"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block h-[1px] bg-white rounded"
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          {/* Animated Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden bg-[#305658] mx-3 rounded-2xl backdrop-blur-md shadow-lg"
              >
                <ul className="flex flex-col items-center space-y-5 py-6 text-white text-lg font-sencondary">
                  {[
                    { name: "Home", path: "/" },
                    { name: "About", path: "/about" },
                    { name: "Services", path: "/service" },
                    { name: "Projects", path: "/projects" },
                    { name: "Contact", path: "/contact" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        onClick={closeMenu}
                        className={`font-3 transition ${
                          isActive(item.path)
                            ? "text-lime-400 border-b border-lime-500 pb-1"
                            : "hover:text-lime-400"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}

                  <Link href="/contact" onClick={closeMenu}>
                    <button className="bg-lime-400 text-gray-900 font-semibold px-5 py-2 rounded-full hover:bg-lime-500 transition font-c2a">
                      GET IN TOUCH
                    </button>
                  </Link>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </div>
  );
}
