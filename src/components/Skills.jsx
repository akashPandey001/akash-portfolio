import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="bg-panel/50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="02 / Skills"
            title="A focused stack for e-commerce and content-driven websites."
            description="The tools I use most often to move from design intent and business requirements to a responsive, maintainable build."
          />
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="h-full bg-panel p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-paper">{group.title}</h3>
                  <span className="font-mono text-xs text-accent">0{index + 1}</span>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                  {group.items.map((item) => (
                    <li key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
