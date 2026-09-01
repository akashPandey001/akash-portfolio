import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const education = [
  {
    school: 'HIET, Ghaziabad',
    credential: "Bachelor's Degree",
    status: 'Pursuing',
  },
  {
    school: 'CBSE',
    credential: 'Class 12',
    status: 'Completed',
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-panel/50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading eyebrow="05 / Education" title="Learning foundations, strengthened by hands-on work." />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 0.08}>
              <article className="h-full bg-panel p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{item.status}</p>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.035em] text-paper">{item.credential}</h3>
                <p className="mt-2 text-sm text-muted">{item.school}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
