export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 grid gap-4 md:grid-cols-[0.7fr_1.3fr] md:items-end md:gap-10">
      <div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-[-0.04em] text-paper sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base md:justify-self-end">
          {description}
        </p>
      ) : null}
    </div>
  );
}
