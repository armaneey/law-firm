import { ARTICLES } from "../constants";
import bitmap9 from "../assets/Bitmap (9).svg";
import bitmap10 from "../assets/Bitmap (10).svg";
import bitmap16 from "../assets/Bitmap (16).svg";

const blogImages = [bitmap9, bitmap10, bitmap16];

export function Blog() {
  return (
    <section id="blog" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Blog & News</span>
          <h2 className="font-serif text-4xl font-bold text-ink md:text-5xl">Latest Articles</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ARTICLES.map((article, index) => (
            <article key={article.title}>
              <img 
                src={blogImages[index]} 
                alt={article.title}
                className="mb-5 h-[220px] w-full object-cover"
              />
              <h3 className="mb-4 font-serif text-xl font-bold leading-snug text-ink">{article.title}</h3>
              <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-ink/55">
                <span className="text-gold">{article.category}</span>
                <span>{article.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-2xl bg-cream p-8 shadow-sm ring-1 ring-ink/5">
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-1 font-serif text-2xl font-bold text-ink">Newsletter</h3>
              <p className="text-sm text-ink/65">Cases, business transactions, and other matters.</p>
            </div>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border-b border-ink/30 bg-transparent py-3 text-sm text-ink outline-none placeholder:text-ink/40"
              />
              <button type="submit" className="ml-3 bg-ink px-5 py-3 text-xs font-bold uppercase tracking-widest text-cream">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-ink/65">
          Read All News & Articles. <a href="#blog" className="font-semibold text-ink underline-offset-4 hover:underline">Explore Blog</a>
        </p>
      </div>
    </section>
  );
}
