import bitmap4 from "../assets/Bitmap (4).svg";
import bitmap5 from "../assets/Bitmap (5).svg";
import bitmap6 from "../assets/Bitmap (6).svg";
import bitmap7 from "../assets/Bitmap (7).svg";

const team = [
  { name: "Klavdia Dedova", role: "Partner", image: bitmap4 },
  { name: "Magnus Kekhuis", role: "Managing Partner", image: bitmap5 },
  { name: "Usha Oliver", role: "Senior Associate", image: bitmap6 },
  { name: "Zarela Reed", role: "Partner", image: bitmap7 },
];

export function Team() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-gold">Our Team</span>
          <h2 className="font-serif text-4xl font-bold text-ink md:text-5xl">Team of lawyers</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <article key={member.name} className="bg-gold">
              <img 
                src={member.image} 
                alt={member.name}
                className="h-[280px] w-full object-cover"
              />
              <div className="bg-cream p-5 shadow-md">
                <h3 className="font-serif text-lg font-bold text-ink">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-ink/60">{member.role}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/70">
          Know More About <a href="#" className="font-semibold text-ink underline-offset-4 hover:underline">Our Team</a>
        </p>
      </div>
    </section>
  );
}
