import { policies } from "@/constants/content";

export function PolicyHighlightsSection() {
  return (
    <section id="policies" className="py-24 bg-[#f7e9f2]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-[#b08d57]">Care & Assurance</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] mt-3">Shipping, Returns & Payments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            We ensure a seamless gifting experience from order to delivery with flexible payment options and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.values(policies).map((section) => (
            <article key={section.title} className="bg-white rounded-xl shadow-sm p-8 h-full">
              <h3 className="text-2xl font-semibold text-[#111111] mb-4">{section.title}</h3>
              <ul className="space-y-3 text-gray-600">
                {section.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex w-2 h-2 rounded-full bg-[#b08d57]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
