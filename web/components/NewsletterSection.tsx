"use client";

import { useState, FormEvent } from "react";
import { newsletter } from "@/constants/content";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In production, you'd call your newsletter API here
    // For now, just show success
    setStatus("success");
    setEmail("");

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="newsletter" className="py-24 bg-[#111111] text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">{newsletter.headline}</h2>
        <p className="text-gray-300 mb-8 leading-relaxed">{newsletter.subheadline}</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={newsletter.placeholderEmail}
            required
            disabled={status === "loading"}
            className="flex-1 px-6 py-4 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#b08d57] disabled:opacity-50"
            aria-label={newsletter.placeholderEmail}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-4 bg-[#b08d57] text-white font-semibold rounded-md hover:bg-[#9a7a4a] transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={newsletter.ctaText}
          >
            {status === "loading" ? "Subscribing..." : newsletter.ctaText}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-[#b08d57] font-medium" role="status">
            Thank you for subscribing!
          </p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-400 font-medium" role="alert">
            Something went wrong. Please try again.
          </p>
        )}

        <p className="text-sm text-gray-400 mt-4">{newsletter.privacyNote}</p>
      </div>
    </section>
  );
}
