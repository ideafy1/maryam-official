import Image from "next/image";
import { hero, siteConfig } from "@/constants/content";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <Image
        src={siteConfig.heroImage}
        alt="The Maryam Gift Store"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          {hero.headline}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto drop-shadow-md">
          {hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={hero.ctaPrimary.href}
            className="inline-block px-8 py-4 bg-[#b08d57] text-white font-semibold rounded-md hover:bg-[#9a7a4a] transition shadow-lg hover:shadow-xl"
            aria-label={hero.ctaPrimary.text}
          >
            {hero.ctaPrimary.text}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="inline-block px-8 py-4 bg-white text-[#111111] font-semibold rounded-md hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            aria-label={hero.ctaSecondary.text}
          >
            {hero.ctaSecondary.text}
          </a>
        </div>
      </div>
      
      <a
        href="#value-props"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
