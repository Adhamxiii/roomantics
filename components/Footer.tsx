import { footerLinks } from "@/data/footer";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-fit bg-black py-6 sm:h-screen sm:py-24">
      <div className="h-full w-full px-6 sm:px-24">
        <div className="mb-6 flex h-full w-full flex-col items-center justify-center sm:mb-0">
          <p className="font-bebas text-[12vw] text-white">
            Let&apos;s talk
          </p>
          <ul className="flex items-center justify-center gap-6 max-sm:flex-col">
            {footerLinks.map((link, i) => (
              <li
                key={i}
                className="mx-3 flex gap-3 rounded-full border-2 border-white px-3 py-1 text-white duration-300 hover:bg-white hover:text-black"
              >
                <Link href={link.href} target="_blank">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
