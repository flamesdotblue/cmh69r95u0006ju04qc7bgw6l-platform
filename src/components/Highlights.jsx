import React from 'react';
import { Star, Code2, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Clean Animations',
    icon: Sparkles,
    desc: 'Subtle, intentional motion for delight — inspired by modern component libraries and smooth micro-interactions.',
    tag: 'UI/UX',
  },
  {
    title: 'Performance First',
    icon: Code2,
    desc: 'Fast loads and snappy interactions using React + Vite, Tailwind, and best practices for accessibility.',
    tag: 'Engineering',
  },
  {
    title: 'Aesthetic Systems',
    icon: Star,
    desc: 'Thoughtful color, typography, and spacing systems that scale across pages and components.',
    tag: 'Design',
  },
];

export default function Highlights() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Highlights</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Things I care about when building: crisp visuals, smooth animations, and readable code.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-md bg-white/10 hover:bg-white/15 px-4 py-2 text-sm"
          >
            Get in touch
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, icon: Icon, tag }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 overflow-hidden">
      <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 blur-2xl group-hover:blur-[42px] transition-all" />
      <div className="flex items-center gap-3">
        <div className="grid place-items-center h-10 w-10 rounded-lg bg-white/10 border border-white/10">
          <Icon className="h-5 w-5 text-indigo-300" />
        </div>
        <div className="text-xs text-white/60">{tag}</div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mt-4 flex flex-wrap gap-2">
        {['React', 'Tailwind', 'Framer Motion', 'Vite'].map((chip) => (
          <span key={chip} className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/80">
            {chip}
          </span>
        ))}
      </div>
    </div>
  );
}
