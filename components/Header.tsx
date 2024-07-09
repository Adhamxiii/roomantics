"use client";

import { headerLinks } from "@/data/header";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="absolute z-10 flex w-full items-center justify-between px-6">
      <div className="flex w-full items-center justify-between border-b-2 border-white py-3">
        <Link href="/" className="font-bebas text-xl text-white">
          <span className="text-3xl">R</span>oomantics
        </Link>

        <ul
          className={`absolute right-0 flex h-screen w-screen flex-col items-center justify-center gap-6 bg-black duration-300 sm:relative sm:top-0 sm:h-fit sm:w-fit sm:flex-row sm:bg-transparent ${showMenu ? "top-0" : "-top-[100vh]"}`}
        >
          {headerLinks.map((link, i) => {
            return (
              <li key={i} className="text-base uppercase text-white">
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>

        <div className="">
          <button
            className="relative z-20 text-white sm:hidden"
            onClick={() => toggleMenu()}
          >
            {showMenu ? "Close" : "Menu"}
          </button>
          <button className="hidden rounded-full border-2 border-white px-3 py-1 font-bebas text-white hover:bg-white hover:text-black sm:block">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
