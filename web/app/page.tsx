import { HeroSection } from "@/components/HeroSection";
import { ValuePropsSection } from "@/components/ValuePropsSection";
import { CollectionsSection } from "@/components/CollectionsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { PolicyHighlightsSection } from "@/components/PolicyHighlightsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuePropsSection />
      <CollectionsSection />
      <InstagramSection />
      <TestimonialsSection />
      <FaqSection />
      <PolicyHighlightsSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
