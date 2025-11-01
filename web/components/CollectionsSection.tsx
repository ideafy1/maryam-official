import Image from "next/image";
import Link from "next/link";
import { collections } from "@/constants/content";

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 bg-[#f7e9f2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#b08d57]">Curated Collections</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mt-3">Featured Hampers</h2>
          </div>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-[#b08d57] font-medium hover:text-[#9a7a4a]"
            aria-label="View all collections"
          >
            View all collections
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <article
              key={collection.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition">
              <div className="relative w-full h-56">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#111111] mb-3">{collection.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{collection.description}</p>
                <Link
                  href={collection.href}
                  className="inline-flex items-center gap-2 text-[#b08d57] font-medium hover:text-[#9a7a4a]"
                  aria-label={`Explore ${collection.title}`}
                >
                  Explore collection
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
