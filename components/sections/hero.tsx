import { AuroraBackground } from "@/components/effects/aurora-background";
import { Dashboard } from "@/components/dashboard/dashboard";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <AuroraBackground />

      <Container>
        <div className="relative z-10 grid items-center gap-20 py-24 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-lg font-medium text-cyan-400">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl font-black leading-tight tracking-tight md:text-7xl xl:text-8xl">
              Navadeep
              <br />
              Thirunagari
            </h1>

            <h2 className="mt-6 max-w-xl text-2xl font-bold leading-tight text-white md:text-4xl">
              Transforming Data into
              <br />
              Intelligent Products.
            </h2>

            <p className="mt-5 text-lg font-medium text-cyan-400">
              Data Analyst • Machine Learning Engineer • AI Builder
            </p>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              I design intelligent applications, build machine learning
              solutions, create interactive dashboards, and transform
              complex data into meaningful business insights.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              {/* View Projects */}
              <a
                href="#projects"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
              >
                View Projects
              </a>

              {/* Download Resume */}
              <a
                href="/resume/Navadeep_Thirunagari_Data_Analyst_Resume.pdf"
                download
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-white/10"
              >
                Download Resume
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-20 animate-bounce text-sm font-medium text-zinc-500">
              ↓ Scroll to Explore
            </div>
          </div>

          {/* Right Content */}
          <div className="flex justify-center lg:justify-end">
            <Dashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}