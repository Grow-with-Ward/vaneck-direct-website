"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";

type DownloadModalContextType = {
  openModal: () => void;
};

const DownloadModalContext = createContext<DownloadModalContextType>({
  openModal: () => {},
});

export function useDownloadModal() {
  return useContext(DownloadModalContext);
}

export function DownloadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DownloadModalContext.Provider value={{ openModal: () => setIsOpen(true) }}>
      {children}

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-500 transition-colors hover:bg-white hover:text-gray-800"
              onClick={() => setIsOpen(false)}
              aria-label="Sluiten"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="grid md:grid-cols-[1fr_auto]">
              {/* Left: content */}
              <div className="p-8 md:p-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0ab400]">
                  Download de app
                </span>
                <h2 className="font-heading mt-3 text-2xl font-bold leading-tight text-[#211f54] md:text-3xl">
                  Start nu met VanEck Direct
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#4a5568]">
                  Laat je geld voor je werken — download onze app nu en begin
                  met beheerd beleggen. Beschikbaar in de App Store en Google
                  Play!
                </p>

                <ul className="mt-6 space-y-3">
                  {[
                    "Investeer in jouw toekomst",
                    "Passend bij jouw situatie.",
                    "VanEck, een bekende naam, sinds 1955.",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold text-[#211f54]">
                      <svg
                        className="h-5 w-5 shrink-0 text-[#0ab400]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://apps.apple.com/nl/app/vaneck-direct/id1545588838"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/app_store.png"
                      alt="Download in de App Store"
                      width={156}
                      height={52}
                      className="h-auto w-auto"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.vaneck.direct"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/google_play.png"
                      alt="Download via Google Play"
                      width={156}
                      height={52}
                      className="h-auto w-auto"
                    />
                  </a>
                </div>
              </div>

              {/* Right: phone mockup */}
              <div className="hidden items-end justify-center bg-gradient-to-b from-[#0e3065] to-[#211f54] px-8 pt-8 md:flex">
                <Image
                  src="https://cdn.prod.website-files.com/632d69cdf2cfb16b18ae5be1/68f89c641eed5f32e1a297fb_Homescreen%202.0%20(1).png"
                  alt="VanEck Direct app scherm"
                  width={220}
                  height={440}
                  className="h-auto w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </DownloadModalContext.Provider>
  );
}
