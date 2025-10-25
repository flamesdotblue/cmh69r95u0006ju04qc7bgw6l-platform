import React from 'react';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Building modern web experiences
          </h1>
          <p className="mt-5 text-base sm:text-lg text-white/70 max-w-xl">
            Hi, I'm techw_annabe — a 16 y/o creator from India crafting stylish, fast, and accessible
            UIs. I love animations, clean code, and futuristic design aesthetics.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-3 text-sm font-medium transition shadow-lg shadow-indigo-500/25"
            >
              <Rocket className="h-4 w-4" /> Explore Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-5 py-3 text-sm font-medium transition"
            >
              <Star className="h-4 w-4" /> Let's Collaborate
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md text-center">
            <StatItem label="Projects" value="12+" />
            <StatItem label="Tech Stack" value="React • TS • Tailwind" />
            <StatItem label="Focus" value="UI • Animations" />
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="relative h-[380px] sm:h-[460px] lg:h-[520px]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10" />
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <AnimatedPanel />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-4">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-white/60">{label}</div>
    </div>
  );
}

function AnimatedPanel() {
  return (
    <div className="h-full w-full relative">
      <div className="absolute -top-16 -left-10 h-72 w-72 bg-gradient-to-tr from-indigo-500/40 via-fuchsia-400/30 to-cyan-400/40 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-6 h-64 w-64 bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 blur-3xl rounded-full animate-[pulse_5s_ease-in-out_infinite]" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="h-40 w-40 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_60px_rgba(99,102,241,0.35)]">
          <div className="h-full w-full relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(99,102,241,0.25),rgba(34,211,238,0.2),rgba(236,72,153,0.2),rgba(99,102,241,0.25))] animate-[spin_12s_linear_infinite]" />
            <div className="absolute inset-[2px] rounded-[10px] bg-neutral-950/60 border border-white/10 grid place-items-center">
              <div className="text-center text-sm text-white/80">
                Futuristic
                <div className="text-xs text-white/60">Interactive Panel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
