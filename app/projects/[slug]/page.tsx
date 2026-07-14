import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, GitBranch, CheckCircle2 } from "lucide-react";
import { featuredProjects } from "@/data/projects";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = featuredProjects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.35em] text-cyan-400">
              {project.tagline}
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">
              {project.title}
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
            >
              <GitBranch size={20} />
              View Source Code
            </a>

          </div>

          {/* Right */}

          <div>

            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                width={1600}
                height={1000}
                className="rounded-3xl border border-white/10 shadow-2xl"
              />
            ) : (
              <div className="flex h-[500px] items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
                <div className="text-center">
                  <div className="text-8xl">📊</div>

                  <h2 className="mt-5 text-3xl font-bold">
                    Dashboard Preview
                  </h2>

                  <p className="mt-2 text-zinc-500">
                    Coming Soon
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </section>

      {/* Highlights */}

      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

          <h2 className="text-4xl font-black">
            Key Highlights
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {project.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 p-5"
              >
                <CheckCircle2
                  className="text-cyan-400"
                />

                <span className="text-lg">
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Business Impact */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">
              Business Problem
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Organizations need clear insights from raw data to
              improve decision making and monitor business
              performance.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">
              Solution
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Developed an interactive analytics dashboard
              enabling users to explore KPIs, trends,
              customer behavior and performance metrics.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold">
              Outcome
            </h3>

            <p className="mt-5 leading-8 text-zinc-400">
              Delivered meaningful visual insights that
              simplify complex datasets and support
              strategic business decisions.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}