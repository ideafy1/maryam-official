import Image from "next/image";
import { siteConfig } from "@/constants/content";
import { getInstagramContent } from "@/lib/instagram";

const placeholderPosts: { id: string; imageUrl: string; link: string; caption?: string }[] = Array.from(
  { length: 9 },
  (_, i) => ({
    id: String(i + 1),
    imageUrl: `/images/instagram-${i + 1}.svg`,
    link: siteConfig.instagramUrl,
    caption: undefined,
  })
);

export async function InstagramSection() {
  const instagramContent = await getInstagramContent();
  const posts = instagramContent.mode === "api" ? instagramContent.posts : placeholderPosts;
  const isPlaceholder = instagramContent.mode === "embed";

  return (
    <section id="instagram" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b08d57]">Follow us on Instagram</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mt-3 mb-4">
            {siteConfig.instagram}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Get inspired by our beautiful gift collections and stay updated with the latest launches
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mb-8">
          {posts.slice(0, 9).map((post, idx) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-lg group"
              aria-label={`View Instagram post ${idx + 1}`}
            >
              <Image
                src={post.imageUrl}
                alt={post.caption ?? `Instagram post ${idx + 1}`}
                fill
                className="object-cover transition group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#b08d57] text-white font-semibold rounded-md hover:bg-[#9a7a4a] transition"
            aria-label="Follow us on Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow {siteConfig.instagram}
          </a>
        </div>

        {isPlaceholder && instagramContent.error && (
          <p className="text-center text-sm text-gray-500 mt-4">{instagramContent.error}</p>
        )}
      </div>
    </section>
  );
}
