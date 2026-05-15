import bitmap1 from "../assets/Bitmap (1).svg";

export function HowWeWork() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">How We Work</span>
        <h2 className="mb-12 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
          How our law <br /> firm work
        </h2>

        <div className="relative">
          <img 
            src={bitmap1} 
            alt="Consultation" 
            className="h-[360px] w-full object-cover md:h-[480px]"
          />
          <div className="absolute bottom-8 left-8 max-w-md bg-white p-6 shadow-2xl md:p-8">
            <h3 className="mb-3 font-serif text-xl font-bold text-ink">1. Analyzing legislation</h3>
            <p className="text-sm leading-relaxed text-ink/70">
              The primary service rendered by a law firm is to advise clients about their legal rights and responsibilities.
            </p>
            <div className="mt-4 h-1 w-12 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
