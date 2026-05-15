//import { Stats } from "../sections/Stats";
import CountUp from "react-countup";

const Stats= [
  {
    label: 'stats',
    description: 'show stats',
    value: '2'
  }
]
export function Stat() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-px bg-ink/10 px-6 md:grid-cols-2 md:px-10">
        {Stats.map((Stats, i) => (
          <div key={Stats.value} className={`bg-cream p-10 ${i === 0 ? "md:row-span-2" : ""}`}>
            <p className={`font-serif font-bold text-ink ${i === 0 ? "text-6xl md:text-7xl" : "text-4xl md:text-5xl"}`}>
              {/^[\d,.]+$/.test(Stats.value.replace("$", "")) ? (
                <CountUp end={parseFloat(Stats.value.replace(/[$,]/g, ""))} duration={2.5} separator="," prefix={Stats.value.startsWith("$") ? "$" : ""} enableScrollSpy scrollSpyOnce />
              ) : (
                Stats.value
              )}
            </p>
            {Stats.label && <p className="mt-4 font-serif text-xl font-bold text-ink">{Stats.label}</p>}
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/65">{Stats.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
