"use client";

import Image from "next/image";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

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
    <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_25px_80px_rgba(6,182,212,.15)]">

      {/* Image */}

      <div className="relative overflow-hidden">

        {image ? (
          <Image
            src={image}
            alt={title}
            width={1400}
            height={900}
            className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-[320px] items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="text-center">
              <div className="mb-4 text-7xl">📊</div>

              <h3 className="text-2xl font-bold">
                {title}
              </h3>

              <p className="mt-2 text-zinc-400">
                Preview Coming Soon
              </p>
            </div>
          </div>
        )}

        <div className="absolute left-5 top-5 rounded-full bg-cyan-500/90 px-4 py-2 text-sm font-semibold text-black">
          Featured
        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        {tagline && (
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            {tagline}
          </p>
        )}

        <h2 className="mt-3 text-3xl font-black leading-tight">
          {title}
        </h2>

        <p className="mt-5 leading-8 text-zinc-400">
          {description}
        </p>

        {/* Highlights */}

        {highlights.length > 0 && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <CheckCircle2
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-sm text-zinc-300">
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Stack */}

        <div className="mt-8 flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-3 rounded-xl border border-white/10 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:bg-white/5"
          >
            View Case Study
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>

    </div>
  );
}