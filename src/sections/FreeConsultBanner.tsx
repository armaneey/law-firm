import { DarkWavePattern } from "../components/YellowPattern";

export function FreeConsultBanner() {
  return (
    <section className="bg-cream py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="relative overflow-hidden bg-white">
          <DarkWavePattern className="absolute inset-0 h-full w-full" />
          <div className="relative flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center md:p-14">
            <div>
              <h3 className="font-serif text-3xl font-bold text-white md:text-4xl">Free consultation</h3>
              <p className="mt-2 max-w-lg text-sm text-white/70">
                The primary service rendered by a law firm is to advise clients about their legal rights and responsibilities.
              </p>
            </div>
            <a href="#contact" className="bg-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white hover:bg-cream">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
