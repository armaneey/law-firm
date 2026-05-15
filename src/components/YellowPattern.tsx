type Props = { className?: string; variant?: "vertical" | "horizontal" };

export function YellowPattern({ className = "", variant = "vertical" }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 600"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="400" height="600" fill="#F7C35F" />
      <g stroke="#0D0D0D" strokeOpacity="0.18" fill="none" strokeWidth="1">
        {Array.from({ length: 50 }).map((_, i) => (
          <path
            key={i}
            d={
              variant === "vertical"
                ? `M -50 ${i * 14} Q 200 ${i * 14 - 60} 450 ${i * 14}`
                : `M ${i * 12} -20 Q ${i * 12 + 80} 300 ${i * 12} 620`
            }
          />
        ))}
      </g>
    </svg>
  );
}

export function DarkWavePattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 240"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="1200" height="240" fill="#0D0D0D" />
      <g stroke="#F7C35F" strokeOpacity="0.25" fill="none" strokeWidth="1">
        {Array.from({ length: 30 }).map((_, i) => (
          <path key={i} d={`M -50 ${i * 10} Q 600 ${i * 10 - 80} 1250 ${i * 10}`} />
        ))}
      </g>
    </svg>
  );
}

export function PhotoPlaceholder({
  label,
  className = "",
  tone = "gold",
}: {
  label: string;
  className?: string;
  tone?: "gold" | "dark";
}) {
  const bg = tone === "gold" ? "bg-gold" : "bg-ink";
  const fg = tone === "gold" ? "text-ink/60" : "text-cream/70";
  return (
    <div className={`${bg} ${className} relative overflow-hidden`}>
      <div className={`absolute inset-0 flex items-center justify-center font-serif text-xs uppercase tracking-widest ${fg}`}>
        {label}
      </div>
    </div>
  );
}
