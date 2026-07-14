import { Container } from "@/components/ui/container";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export function GithubSection() {
  return (
    <section className="py-32">
      <Container>

        <div className="overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-black p-12">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <div className="mb-6 flex items-center gap-4">

                <FaGithub className="text-5xl text-white" />

                <div>

                  <p className="uppercase tracking-[0.35em] text-cyan-400">
                    GitHub
                  </p>

                  <h2 className="text-5xl font-black">
                    Explore More Projects
                  </h2>

                </div>

              </div>

              <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                These featured projects represent only a portion of my work.
                Explore my GitHub profile to find machine learning models,
                analytics platforms, Power BI dashboards, NLP applications,
                and open-source experiments.
              </p>

            </div>

            <div className="flex justify-center lg:justify-end">

              <a
                href="https://github.com/ThirunagariNavadeep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-cyan-500 px-8 py-5 text-lg font-bold text-black transition hover:scale-105 hover:bg-cyan-400"
              >
                Visit GitHub

                <ArrowUpRight size={22} />

              </a>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}