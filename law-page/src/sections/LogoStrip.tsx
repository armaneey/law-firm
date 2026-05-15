import bitmap12 from "../assets/Bitmap (12).svg";
import bitmap13 from "../assets/Bitmap (13).svg";
import bitmap14 from "../assets/Bitmap (14).svg";
import bitmap15 from "../assets/Bitmap (15).svg";

const LOGOS =[
  {image: bitmap12 },
  {image: bitmap13},
  {image: bitmap14},
  {image: bitmap15},
]


export function LogoStrip() {
  return (
    <section className="bg-black py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-10 px-6 md:px-10">
        {LOGOS.map((logo, index) => (
          <img
            key={index}
            src={logo.image}
            alt={`Logo ${index + 1}`}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>
    </section>
  );

}
