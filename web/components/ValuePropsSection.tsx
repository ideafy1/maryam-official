import { valueProps } from "@/constants/content";

export function ValuePropsSection() {
  return (
    <section id="value-props" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg transition hover:shadow-lg"
            >
              <div className="text-5xl mb-4" aria-hidden="true">
                {prop.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#111111]">{prop.title}</h3>
              <p className="text-gray-600 leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
