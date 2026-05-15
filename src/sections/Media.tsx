const media = [
  {
    brand: "The New Yorker",
    quote: "The primary service rendered by a law firm is to advise clients about their legal rights.",
    source: "Legal Affairs",
  },
  {
    brand: "Bloomberg",
    quote: "Represent clients in legal matters and provide expert advice about their legal rights.",
    source: "Business Law",
  },
  {
    brand: "Forbes",
    quote: "Dedicated to achieving the best outcomes for our clients through expert legal representation.",
    source: "Corporate Law",
  },
  {
    brand: "Fast Company",
    quote: "Experienced team committed to excellence in legal services and client satisfaction.",
    source: "Legal Innovation",
  },
];

export function Media() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-7xl bg-cream px-6 md:px-10">
        <div className="bg-cream p-10 shadow-sm ring-1 ring-ink/5 md:p-14">
          <h2 className="mb-12 text-center font-serif text-3xl font-bold text-ink md:text-4xl">We on media</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {media.map((m) => (
              <div key={m.brand}>
                <p className="mb-4 font-serif text-base font-bold uppercase tracking-wider text-gold">{m.brand}</p>
                <p className="mb-4 text-sm italic leading-relaxed text-ink/80">"{m.quote}"</p>
                <p className="text-xs uppercase tracking-widest text-ink/50">{m.source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
