import { HiOutlineLibrary, HiStar } from "react-icons/hi";
import { YellowPattern } from "../components/YellowPattern";
import pic from "../assets/pic.svg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32 pb-0 md:pt-40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-20 md:px-10 lg:grid-cols-2 lg:gap-8">
        {/* Left Content */}
        <div id="about" className="flex flex-col justify-center pt-4 lg:pt-8">
          <span className="mb-6 text-xs font-bold uppercase tracking-[0.3em] text-gold">Law Firm</span>
          <h1 className="font-serif text-5xl font-bold leading-[1.1] text-ink md:text-6xl lg:text-7xl">
            Legal advice <br /> and other <br /> assistance
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70">
            The primary service is to advise clients about their legal rights and responsibilities.
          </p>
          <div className="mt-10">
            <a href="#services" className="inline-block bg-ink px-12 py-4 text-xs font-bold uppercase tracking-[0.25em] text-cream transition hover:bg-ink/85">
              Services
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative h-[500px] w-full md:h-[600px] lg:h-[650px]">
          <YellowPattern className="absolute right-0 top-0 h-full w-[90%]" />
          
          {/* Combined Image */}
          <img 
            src={pic} 
            alt="Lawyers" 
            className="absolute left-0 top-8 z-10 h-[400px] w-full object-cover shadow-xl md:left-4 md:h-[480px]"
          />
          
          {/* Building Icon */}
          <div className="absolute right-8 top-[50px] z-20 hidden h-14 w-14 items-center justify-center rounded-full bg-ink text-gold shadow-lg md:flex">
            <HiOutlineLibrary size={24} />
          </div>
          
          {/* Testimonial Card */}
          <div className="absolute bottom-12 right-4 z-20 max-w-[300px] bg-cream p-5 shadow-2xl md:right-8">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold" />
              <div>
                <p className="font-serif text-sm font-bold text-ink">Good Firm</p>
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <HiStar key={i} size={13} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs italic leading-relaxed text-ink/70">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
