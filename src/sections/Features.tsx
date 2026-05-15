import { HiOutlineCheckCircle, HiOutlineBriefcase } from "react-icons/hi";
import { YellowPattern } from "../components/YellowPattern";
import pic4 from "../assets/pic (4).svg";
import bitmap22 from "../assets/Bitmap (22).svg"
import bitmap23 from "../assets/Bitmap (23).svg"
import bitmap24 from "../assets/Bitmap (24).svg"
import bitmap25 from "../assets/Bitmap (25).svg"

const FEATURES_DATA = [
  {
    title: "Endurance",
    description: "The primary service rendered by a law firm is to advise clients about.",
    image: bitmap22,
  },
  {
    title: "Communication",
    description: "Rendered by a law firm is to advise clients about their legal rights.",
    image: bitmap23,
  },
  {
    title: "Attention to detail",
    description: "Firm is to advise clients about their legal rights and responsibilities.",
    image: bitmap24,
  },
  {
    title: "Teamwork",
    description: "About their legal rights and responsibilities, and to represent.",
    image: bitmap25,
  },
];

export function Features() {
  return (
    <section id="features" className="bg-cream py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-10 lg:grid-cols-2">
        <div>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Features</span>
          <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Collegiality and <br /> esprit de corps
          </h2>
          <p className="mb-8 max-w-md leading-relaxed text-ink/70">
            The primary service is to advise clients about their legal rights and responsibilities.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-ink">
              <HiOutlineCheckCircle className="text-gold" size={20} />
              <span className="font-medium">Competent, Hard-Working, Focused</span>
            </li>
            <li className="flex items-center gap-3 text-ink">
              <HiOutlineCheckCircle className="text-gold" size={20} />
              <span className="font-medium">Commitment to Quality</span>
            </li>
            <li className="flex items-center gap-3 text-ink">
              <HiOutlineCheckCircle className="text-gold" size={20} />
              <span className="font-medium">Sense of Fairness</span>
            </li>
          </ul>
        </div>

        <div className="relative h-[460px] w-full">
          <img 
            src={pic4} 
            alt="Lawyer Speaking" 
            className="absolute left-0 top-10 h-[320px] w-[240px] object-cover shadow-lg"
          />
          <div className="absolute left-[200px] top-0 hidden h-12 w-12 items-center justify-center bg-ink text-gold md:flex">
            <HiOutlineBriefcase size={22} />
          </div>
          
          <YellowPattern className="absolute bottom-0 right-0 h-[160px] w-[200px]" variant="horizontal" />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES_DATA.map((card) => (
            <article
              key={card.title}
              className="group relative h-64 overflow-hidden transition hover:shadow-2xl"
            >
              <img 
                src={card.image} 
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-ink/60" />
              <div className="relative z-10 p-6">
                <h3 className="mb-2 font-serif text-xl font-bold text-cream">{card.title}</h3>
                <p className="text-sm text-cream/80">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}