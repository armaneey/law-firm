import { HiOutlineScale } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";
import { YellowPattern, PhotoPlaceholder } from "../components/YellowPattern";

export function LegalRights() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        {/* Image collage */}
        <div className="relative h-[520px] w-full">
          <YellowPattern className="absolute left-0 top-12 h-[260px] w-[140px]" variant="horizontal" />
          <PhotoPlaceholder label="Attorney" tone="dark" className="absolute left-12 top-0 h-[320px] w-[240px] shadow-lg" />
          <div className="absolute left-[260px] top-[120px] hidden h-12 w-12 items-center justify-center bg-gold text-ink md:flex">
            <HiOutlineScale size={22} />
          </div>
          <PhotoPlaceholder label="Gavel" className="absolute bottom-0 right-4 h-[280px] w-[260px] shadow-lg md:right-12" />
          <div className="absolute bottom-12 left-20 hidden h-12 w-12 items-center justify-center bg-ink text-gold md:flex">
            <HiOutlineScale size={22} />
          </div>
        </div>

        {/* Copy */}
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Law Service</span>
          <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Legal rights and <br /> responsibilities
          </h2>
          <p className="mb-4 font-serif text-xl font-semibold text-ink">Represent clients in civil cases</p>
          <p className="mb-8 max-w-md leading-relaxed text-ink/70">
            The primary service rendered by a law firm is to advise clients about their legal rights and responsibilities, and to represent clients in civil or criminal cases, business transactions.
          </p>
          <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-ink hover:text-gold">
            Read More <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
