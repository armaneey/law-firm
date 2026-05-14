import { FiArrowRight } from "react-icons/fi";
import { YellowPattern } from "../components/YellowPattern";
import bitmap11 from "../assets/Bitmap (4).svg";

export function AboutFirm() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">About Firm</span>
        <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight text-ink md:text-5xl">
          Advise clients about their legal rights and responsibilities, and to represent clients in which legal advice.
        </h2>
        <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink hover:text-gold">
          Learn More <FiArrowRight />
        </a>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 md:px-10">
        <div className="relative h-[280px] w-full md:h-[420px]">
          <YellowPattern className="absolute inset-0 h-full w-full" />
          <img 
            src={bitmap11} 
            alt="Scales of Justice" 
            className="relative z-10 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
