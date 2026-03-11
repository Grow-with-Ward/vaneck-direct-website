"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDownloadModal } from "@/components/DownloadModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openModal } = useDownloadModal();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/63f60d295407276e12936230_LogoVED.svg"
            alt="VanEck Direct"
            width={180}
            height={30}
            className="h-7 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/hoe-werkt-het" className="text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
            Hoe werkt het?
          </Link>
          <div className="group relative">
            <button
              className="flex items-center gap-1 text-[17px] text-[#1f2c3d] hover:text-[#0e3065]"
              aria-haspopup="true"
            >
              Rendement &amp; Kosten
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-50 min-w-[200px] rounded-lg bg-white py-2 shadow-lg group-hover:visible group-focus-within:visible">
              <Link href="/rendement" className="block px-4 py-2 text-sm text-[#1f2c3d] hover:bg-[#f2f3f7]">
                Rendement
              </Link>
              <Link href="/kosten" className="block px-4 py-2 text-sm text-[#1f2c3d] hover:bg-[#f2f3f7]">
                Kosten
              </Link>
            </div>
          </div>
          <div className="group relative">
            <button
              className="flex items-center gap-1 text-[17px] text-[#1f2c3d] hover:text-[#0e3065]"
              aria-haspopup="true"
            >
              Support
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-50 min-w-[200px] rounded-lg bg-white py-2 shadow-lg group-hover:visible group-focus-within:visible">
              <Link href="/faq" className="block px-4 py-2 text-sm text-[#1f2c3d] hover:bg-[#f2f3f7]">
                FAQ
              </Link>
              <Link href="/support" className="block px-4 py-2 text-sm text-[#1f2c3d] hover:bg-[#f2f3f7]">
                Support
              </Link>
              <Link href="/blog" className="block px-4 py-2 text-sm text-[#1f2c3d] hover:bg-[#f2f3f7]">
                Blog
              </Link>
            </div>
          </div>
          <Link href="/ons-verhaal" className="text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
            Over ons
          </Link>
          <Link href="/contact" className="text-[17px] text-[#1f2c3d] hover:text-[#0e3065]">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <button
          onClick={openModal}
          className="hidden rounded-[20px] bg-[#0ab400] px-[25px] py-[12px] text-sm font-semibold text-white transition-colors hover:bg-[#099a00] lg:block"
        >
          Download de app
        </button>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="h-6 w-6 text-[#1f2c3d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="/hoe-werkt-het" className="text-[17px] text-[#1f2c3d]">Hoe werkt het?</Link>
            <Link href="/rendement" className="text-[17px] text-[#1f2c3d]">Rendement</Link>
            <Link href="/kosten" className="text-[17px] text-[#1f2c3d]">Kosten</Link>
            <Link href="/faq" className="text-[17px] text-[#1f2c3d]">FAQ</Link>
            <Link href="/support" className="text-[17px] text-[#1f2c3d]">Support</Link>
            <Link href="/blog" className="text-[17px] text-[#1f2c3d]">Blog</Link>
            <Link href="/ons-verhaal" className="text-[17px] text-[#1f2c3d]">Over ons</Link>
            <Link href="/contact" className="text-[17px] text-[#1f2c3d]">Contact</Link>
            <button
              onClick={() => { setMobileMenuOpen(false); openModal(); }}
              className="mt-2 w-full rounded-[20px] bg-[#0ab400] px-[25px] py-[12px] text-center text-sm font-semibold text-white transition-colors hover:bg-[#099a00]"
            >
              Download de app
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
