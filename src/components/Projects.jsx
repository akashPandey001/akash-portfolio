import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/projects';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const tabs = Object.keys(projects);

function ProjectCard({ project, index, activeTab }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-panel transition-shadow hover:border-accent/35 hover:shadow-glow"
    >
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-[#111316]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(217,142,74,0.14),transparent_30%)]" />
        <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted">
          <span>{activeTab}</span>
          <span>Live Project</span>
        </div>
        <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/10 bg-white/[0.035] p-4">
          <div className="mb-3 h-1.5 w-12 rounded-full bg-accent/80" />
          <div className="h-2 w-2/3 rounded-full bg-white/15" />
          <div className="mt-2 h-2 w-1/2 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-paper">{project.name}</h3>
            <p className="mt-1 text-xs text-muted">{project.domain}</p>
          </div>
          <span className="text-lg text-accent transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
        </div>
        <p className="mt-5 min-h-[3.5rem] text-sm leading-6 text-muted">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex border-b border-accent/50 pb-1 text-sm font-semibold text-paper transition-colors hover:text-accent"
          aria-label={`Visit ${project.name} live site in a new tab`}
        >
          Visit Live Site
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('Shopify');

  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="04 / Projects"
            title="Selected work across Shopify and WordPress."
            description="A sample of live client projects. Replace the preview panels with real project screenshots before deploying for the strongest presentation."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-8 inline-flex rounded-full border border-white/10 bg-panel p-1" role="tablist" aria-label="Project categories">
            {tabs.map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab)}
                  id={`project-tab-${tab.toLowerCase()}`}
                  aria-controls="project-panel"
                  className={`relative isolate overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${active ? 'text-ink' : 'text-muted hover:text-paper'}`}
                >
                  {active ? (
                    <motion.span
                      layoutId="project-tab"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  ) : null}
                  <span className="relative z-10">{tab}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div
          id="project-panel"
          role="tabpanel"
          aria-labelledby={`project-tab-${activeTab.toLowerCase()}`}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {projects[activeTab].map((project, index) => (
              <ProjectCard key={project.url} project={project} index={index} activeTab={activeTab} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
