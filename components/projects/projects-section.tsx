"use client";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "./project-card";

export function ProjectsSection() {
  const featured = featuredProjects[0];
  const others = featuredProjects.slice(1);

  return (
    <FadeIn>
      <section id="projects" className="py-32">
        <Container>
          {/* Section Heading */}

          <div className="mb-20 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Featured Projects
            </p>

            <h2 className="text-5xl font-black md:text-6xl">
              Data Products & Analytics Solutions
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              A collection of business intelligence dashboards, analytics
              platforms, and AI-powered applications designed to solve
              real-world business problems using data.
            </p>
          </div>

          {/* Featured Project */}

          <div className="mb-20">
            <ProjectCard
              slug={featured.slug}
              title={featured.title}
              tagline={featured.tagline}
              description={featured.description}
              image={featured.image}
              stack={featured.stack}
              highlights={featured.highlights}
              github={featured.github}
            />
          </div>

          {/* Remaining Projects */}

          <div className="grid gap-8 lg:grid-cols-3">
            {others.map((project) => (
              <ProjectCard
                key={project.id}
                slug={project.slug}
                title={project.title}
                tagline={project.tagline}
                description={project.description}
                image={project.image}
                stack={project.stack}
                highlights={project.highlights}
                github={project.github}
              />
            ))}
          </div>
        </Container>
      </section>
    </FadeIn>
  );
}