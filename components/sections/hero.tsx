import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <Container>
        <div className="max-w-4xl">
          <p className="mb-4 text-blue-400">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-black leading-tight md:text-8xl">
            Navadeep Thirunagari
          </h1>

          <h2 className="mt-4 text-2xl text-zinc-400 md:text-4xl">
            Data Analyst • Machine Learning Engineer
          </h2>

          <p className="mt-8 max-w-2xl text-lg text-zinc-500">
            I build interactive dashboards, machine learning
            applications, and AI-powered products that transform
            data into business insights.
          </p>
        </div>
      </Container>
    </section>
  );
}