import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    role: "Web Developer",
    company: "Get Me Rank",
    location: "Noida",
    period: "Oct 2025 — Present",
    summary:
      "Building and improving responsive web experiences, with day-to-day work across CMS development, front-end implementation, and client-focused website updates.",
  },
  {
    role: "Web Development Intern",
    company: "Amba Digital Design India",
    location: "Gurgaon",
    period: "Jul 2025 - Oct 2025",
    summary:
      "Supported website development work across responsive layouts, CMS content, and practical front-end tasks while strengthening production workflow fundamentals.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-y border-white/10 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="03 / Experience"
            title="Production experience shaped by real client work."
          />
        </Reveal>

        <div className="relative ml-2 border-l border-white/10 md:ml-[24%]">
          {roles.map((item, index) => (
            <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
              <article className="relative grid gap-4 border-b border-white/10 py-9 pl-8 first:pt-2 last:border-b-0 md:grid-cols-[0.5fr_1fr] md:gap-10 md:pl-10">
                <span
                  className="absolute -left-[5px] top-10 h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-ink"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-sm font-medium text-accent">
                    {item.period}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">
                    {item.location}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-paper">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-paper/75">{item.company}</p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                    {item.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
