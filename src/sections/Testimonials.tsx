import baby1 from "../assets/baby (1).svg";

export function Testimonials() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Testimonials</span>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Words from <br /> trusted clients
          </h2>
        </div>

        <div className="relative">
          <img 
            src={baby1} 
            alt="Happy Client" 
            className="h-[370px] w-full object-cover md:h-[450px]"
          />
          <div className="absolute right-4 top-1/2 max-w-sm -translate-y-1/2 bg-cream p-8 shadow-2xl md:right-12">
            <p className="mb-4 font-serif text-base italic leading-relaxed text-ink">
              "A lawyer's responsibility is to take on other people's problems and find solutions. It's a challenging and intellectual pursuit, but it's also a stressful one."
            </p>
            <p className="text-sm font-semibold text-ink/70">Yvonne Thompson</p>
          </div>
        </div>
      </div>
    </section>
  );
}
