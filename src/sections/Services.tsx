import { SERVICES } from "../constants";
import bitmap2 from "../assets/Bitmap (2).svg";
import bitmap3 from "../assets/Bitmap (3).svg";

const serviceImages = [bitmap2, bitmap3, bitmap2, bitmap3];

export function Service() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Service</span>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Types of services <br /> we can provide
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((service, index) => (
            <article
              key={service.title}
              className="group relative h-56 overflow-hidden transition hover:shadow-2xl"
            >
              <img 
                src={serviceImages[index]} 
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gold/80" />
              <div className="relative z-10 p-8">
                <h3 className="mb-2 font-serif text-2xl font-bold text-ink">{service.title}</h3>
                <p className="text-sm text-ink/75">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#features" className="inline-block bg-cream px-8 py-3 text-xs font-bold uppercase tracking-[0.25em] text-ink shadow-md ring-1 ring-ink/10 hover:bg-ink hover:text-cream">
            See More
          </a>
        </div>
      </div>
    </section>
  );
}
