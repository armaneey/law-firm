const LOGOS = [
  'Digitalside',
  'vortex',
  'TRAVEL EXPLORER',
  'FUZION SOURCE',
  'MediaFury PRODUCTION'
];

export function LogoStrip() {
  return (
    <section className="bg-ink py-12">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-around gap-10 px-6 md:px-10">
        {LOGOS.map((logo) => (
          <span key={logo} className="font-serif text-base font-bold uppercase tracking-wider text-cream/60 md:text-lg">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
