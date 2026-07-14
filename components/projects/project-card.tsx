"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  slug: string;
  title: string;
  tagline?: string;
  description: string;
  image?: string;
  stack: string[];
  highlights?: string[];
  github: string;
}

export default function ProjectCard({
  slug,
  title,
  tagline,
  description,
  image,
  stack,
  highlights = [],
  github,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -8,
      }}
      className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/40"
    >
      {/* Hover Glow */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 z-0 h-72 w-72 rounded-full bg-cyan-500/0 blur-[100px] transition-all duration-700 group-hover:bg-cyan-500/10"
      />

      {/* Image */}

      <div className="relative z-10 overflow-hidden">
        {image ? (
          <>
            <Image
              src={image}
              alt={`${title} dashboard preview`}
              width={1400}
              height={900}
              className="h-[280px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] md:h-[320px]"
            />

            {/* Image overlay */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
          </>
        ) : (
          <div className="relative flex h-[280px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black md:h-[320px]">
            {/* Decorative grid */}

            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                `,
                backgroundSize: "35px 35px",
              }}
            />

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 text-center"
            >
              <div className="text-6xl">
                📊
              </div>

              <h3 className="mx-auto mt-5 max-w-sm px-6 text-xl font-bold">
                {title}
              </h3>

              <p className="mt-2 text-sm text-zinc-500">
                Analytics Platform
              </p>
            </motion.div>
          </div>
        )}

        {/* Featured badge */}

        <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          Featured
        </div>
      </div>

      {/* Content */}

      <div className="relative z-10 p-6 md:p-8">
        {tagline && (
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {tagline}
          </p>
        )}

        <h2 className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl">
          {title}
        </h2>

        <p className="mt-5 leading-7 text-zinc-400">
          {description}
        </p>

        {/* Highlights */}

        {highlights.length > 0 && (
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-cyan-400"
                />

                <span className="text-sm text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}

        <div className="mt-8 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/[0.08] px-3 py-1.5 text-sm font-medium text-cyan-300 transition duration-300 group-hover:border-cyan-400/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 font-semibold transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>

          <Link
            href={`/projects/${slug}`}
            className="group/button inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:shadow-[0_10px_40px_rgba(6,182,212,0.2)]"
          >
            View Case Study

            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
            />
          </Link>
        </div>
      </div>

      {/* Bottom accent line */}

      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}