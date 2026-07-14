"use client";

import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/animations/fade-in";
import { experience } from "@/data/experience";
import { TimelineItem } from "./timeline-item";

export function ExperienceSection() {
  return (
    <FadeIn>
      <section id="experience" className="py-32">
        <Container>

          <div className="mb-16 text-center">

            <p className="uppercase tracking-[0.35em] text-cyan-400">
              Career Journey
            </p>

            <h2 className="mt-4 text-5xl font-black">
              My Learning Path
            </h2>

          </div>

          <div className="space-y-16">
            {experience.map((item) => (
              <TimelineItem
                key={`${item.year}-${item.title}`}
                year={item.year}
                title={item.title}
                company={item.company}
                description={item.description}
              />
            ))}
          </div>

        </Container>
      </section>
    </FadeIn>
  );
}