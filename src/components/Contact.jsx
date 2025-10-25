import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Let's build something together</h2>
              <p className="mt-3 text-white/70">
                I’m open to collaborations, freelance gigs, and creative experiments. Drop a message and I’ll reply soon.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:techwannabeee@gmail.com"
                  className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-4 py-2 text-sm"
                >
                  <Mail className="h-4 w-4" /> Email me
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = Object.fromEntries(new FormData(form));
                const body = encodeURIComponent(
                  `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
                );
                window.location.href = `mailto:techwannabeee@gmail.com?subject=Inquiry%20from%20Portfolio&body=${body}`;
              }}
            >
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full rounded-md bg-neutral-900/60 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Tell me about your idea..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2.5 text-sm font-medium"
              >
                Send Message
              </button>
              <p className="text-xs text-white/50 mt-2">No phone number required. I'll reply via email.</p>
            </form>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} techw_annabe — Designed with modern UI principles.
        </p>
      </div>
    </section>
  );
}
