import { HiOutlineLibrary, HiStar } from "react-icons/hi";
import { YellowPattern, PhotoPlaceholder } from "../components/YellowPattern";
import pic5 from "..//assets/pic (5).svg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32 pb-0 md:pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 md:px-10 lg:grid-cols-2 lg:gap-8">
        
        <div id="about" className="flex flex-col justify-center pt-4 lg:pt-8">
          <span className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gold">Law Firm</span>
          <h1 className="font-serif text-5xl font-bold leading-[1.1] text-ink md:text-6xl lg:text-7xl">
            Legal advice <br /> and other <br /> assistance
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70">
            The primary service is to advise clients about their legal rights and responsibilities.
          </p>
          <div className="mt-10">
            <a href="#services" className="inline-block bg-black px-12 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-ink/85">
              Services
            </a>
          </div>
        </div>


          <div className="relative h-[500px] w-full md:h-[600px] lg:h-[650px]">

  <YellowPattern className="absolute right-0 top-0 h-full w-[90%] z-0" />
  <img
    src={pic5}
    alt="Founder"
    className="relative z-10 h-[400px] w-full object-cover md:h-[460px]"
  />

</div>
        
        </div>
      
    </section>
  );
}
