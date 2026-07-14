import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  GitBranch,
  CheckCircle2,
  Lightbulb,
  Target,
  Wrench,
  TrendingUp,
} from "lucide-react";
import { featuredProjects } from "@/data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = featuredProjects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 md:pt-20">
        <Link
          href="/#projects"
          className="mb-12 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-cyan-400"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              {project.tagline}
            </p>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
              {project.description}
            </p>

            {/* Tech Stack */}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Button */}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
            >
              <GitBranch size={20} />
              View Source Code
            </a>
          </div>

          {/* Project Preview */}

          <div>
            {project.image ? (
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-[0_30px_100px_rgba(6,182,212,0.12)]">
                <Image
                  src={project.image}
                  alt={`${project.title} dashboard preview`}
                  width={1600}
                  height={1000}
                  priority
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
            ) : (
              <div className="flex min-h-[420px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8 shadow-[0_30px_100px_rgba(6,182,212,0.1)]">
                <div className="text-center">
                  <div className="text-7xl">📊</div>

                  <h2 className="mt-6 text-3xl font-black">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-zinc-500">
                    Project preview coming soon
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Highlights */}

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Project Capabilities
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Key Highlights
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.04]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                  <CheckCircle2
                    size={20}
                    className="text-cyan-400"
                  />
                </div>

                <span className="font-medium text-zinc-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Case Study
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            From Problem to Insight
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            A concise overview of the business challenge, the solution
            developed, and the value created through the project.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Business Problem */}

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:border-cyan-400/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Target className="text-cyan-400" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              01
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Business Problem
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              {project.businessProblem}
            </p>
          </article>

          {/* Solution */}

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:border-cyan-400/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
              <Wrench className="text-cyan-400" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              02
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Solution
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              {project.solution}
            </p>
          </article>

          {/* Outcome */}

          <article className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:border-cyan-400/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
              <TrendingUp className="text-cyan-400" />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              03
            </p>

            <h3 className="mt-3 text-2xl font-bold">
              Outcome
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              {project.outcome}
            </p>
          </article>
        </div>
      </section>

      {/* Insights */}

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/[0.08] via-white/[0.03] to-transparent p-6 md:p-10">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Heading */}

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                <Lightbulb className="text-cyan-400" />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Analysis
              </p>

              <h2 className="mt-4 text-4xl font-black">
                Key Insights
              </h2>

              <p className="mt-5 leading-8 text-zinc-400">
                The project transforms raw data into focused analytical
                insights that make patterns and business trends easier to
                understand.
              </p>
            </div>

            {/* Insight List */}

            <div className="grid gap-4">
              {project.insights.map((insight, index) => (
                <div
                  key={insight}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500 font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-zinc-300">
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                Explore the Project
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Want to see the implementation?
              </h2>

              <p className="mt-3 text-zinc-400">
                Explore the repository for project files, analysis, and
                implementation details.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold transition hover:border-cyan-400 hover:bg-white/5"
              >
                <ArrowLeft size={18} />
                All Projects
              </Link>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
              >
                <GitBranch size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}