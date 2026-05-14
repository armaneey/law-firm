import bitmap12 from "../assets/Bitmap (12).svg";
import bitmap13 from "../assets/Bitmap (13).svg";
import bitmap14 from "../assets/Bitmap (14).svg";
import bitmap15 from "../assets/Bitmap (15).svg";

const awards = [
  { image: bitmap12, name: "Award 1" },
  { image: bitmap13, name: "Award 2" },
  { image: bitmap14, name: "Award 3" },
  { image: bitmap15, name: "Award 4" },
];

export function Awards() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <h2 className="mb-12 font-serif text-3xl font-bold text-ink md:text-4xl">Our awards</h2>
        <div className="flex flex-wrap items-center justify-around gap-8">
          {awards.map((award) => (
            <img 
              key={award.name}
              src={award.image}
              alt={award.name}
              className="h-16 w-auto opacity-80 transition hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
