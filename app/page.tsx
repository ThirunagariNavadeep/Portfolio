import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { About } from "@/components/sections/about";
import { SkillsSection } from "@/components/skills/skills-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { ContactSection } from "@/components/contact/contact-section";
import { GithubSection } from "@/components/github/github-section";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProjectsSection />
        <GithubSection />
        <About />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}