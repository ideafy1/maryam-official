import { testimonials } from "@/constants/content";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b08d57]">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-semibold mt-3">Loved by Customers Across India</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            We craft every hamper with care and passion. Here's what our customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full">
              <div className="flex items-center gap-2 text-[#b08d57] mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <svg key={index} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg leading-relaxed text-gray-100">“{testimonial.text}”</p>
              <p className="mt-6 font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-gray-300">{testimonial.location}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
