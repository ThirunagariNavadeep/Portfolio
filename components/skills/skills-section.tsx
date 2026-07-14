"use client";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { skillCategories } from "@/data/skills";
import { SkillCard } from "./skill-card";

export function SkillsSection() {
  return (
    <FadeIn>
      <section id="skills" className="py-32">
        <Container>

          <div className="mb-16 text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">
              Core Expertise
            </p>

            <h2 className="mt-4 text-5xl font-black">
              Technologies I Work With
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                title={category.title}
                emoji={category.emoji}
                skills={category.skills}
              />
            ))}
          </div>

        </Container>
      </section>
    </FadeIn>
  );
}