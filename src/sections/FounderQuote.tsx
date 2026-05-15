import bitmap4 from "../assets/Bitmap (4).svg"

export function FounderQuote() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <img 
          src={bitmap4} 
          alt="Founder" 
          className="h-[400px] w-full object-cover md:h-[460px]"
        />
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Founder Quote</span>
          <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Partnership <br /> between lawyers
          </h2>
          <p className="mb-6 max-w-md text-base italic leading-relaxed text-ink/75">
            "A law firm is usually a partnership between lawyers who have come together to offer their expertise to clients under one name. These partners share the profits of the firm as well as the risks."
          </p>
          <p className="font-serif text-lg font-semibold text-ink">Peter Taylor</p>
        </div>
      </div>
    </section>
  );
}
