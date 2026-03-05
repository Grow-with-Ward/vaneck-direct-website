"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/images/63f60d295407276e12936230_LogoVED.svg"
            alt="VanEck Direct"
            width={180}
            height={30}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#" className="text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
            Hoe werkt het?
          </a>
          <div className="group relative">
            <button className="flex items-center gap-1 text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
              Rendement &amp; Kosten
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div className="group relative">
            <button className="flex items-center gap-1 text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
              Support
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <a href="#" className="text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
            Over ons
          </a>
          <a href="#" className="text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
            Contact
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#"
          className="hidden rounded-[20px] bg-[#0ab400] px-[25px] py-[12px] text-sm font-semibold text-white transition-colors hover:bg-[#099a00] lg:block"
        >
          Download de app
        </a>

        {/* Mobile menu button */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <svg className="h-6 w-6 text-[#1f2c3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-[17px] text-[#1f2c3d]">Hoe werkt het?</a>
            <a href="#" className="text-[17px] text-[#1f2c3d]">Rendement &amp; Kosten</a>
            <a href="#" className="text-[17px] text-[#1f2c3d]">Support</a>
            <a href="#" className="text-[17px] text-[#1f2c3d]">Over ons</a>
            <a href="#" className="text-[17px] text-[#1f2c3d]">Contact</a>
            <a href="#" className="mt-2 inline-block rounded-[20px] bg-[#0ab400] px-[25px] py-[12px] text-center text-sm font-semibold text-white">
              Download de app
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
