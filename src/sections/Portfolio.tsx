import bitmap2 from "../assets/Bitmap (2).svg";
import bitmap3 from "../assets/Bitmap (3).svg";

const portfolio = [
  {
    title: "Nam libero tempore",
    subtitle: "Cum soluta nobis est eligendi",
    image: bitmap2,
  },
  {
    title: "Optio cumque nihil",
    subtitle: "Impedit quo minus id quod",
    image: bitmap3,
  },
];

export function Portfolio() {
  return (
    <section id="cases" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Portfolio</span>
        <h2 className="mb-12 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
          Best result <br /> latest cases
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {portfolio.map((item) => (
            <article key={item.title} className="group relative h-[320px] overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold via-gold/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="font-serif text-2xl font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#cases" className="inline-block bg-ash px-8 py-3 text-xs font-bold uppercase tracking-[0.25em] text-ink shadow-md ring-1 ring-ink/10 hover:bg-ink hover:text-cream">
            All Cases
          </a>
        </div>
      </div>
    </section>
  );
}
