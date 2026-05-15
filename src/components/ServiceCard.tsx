import type { Service } from "../constants";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative border border-ink/10 bg-cream p-8 transition hover:border-gold hover:shadow-xl">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center bg-gold text-ink transition group-hover:bg-ink group-hover:text-gold">
        <Icon size={26} />
      </div>
      <h3 className="mb-3 font-serif text-2xl font-bold text-ink">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink/70">{service.description}</p>
    </article>
  );
}
