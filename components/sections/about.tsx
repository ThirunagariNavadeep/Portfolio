import { Container } from "@/components/ui/container";
import { profile } from "@/data/profile";
import { FadeIn } from "@/components/animations/fade-in";
import {
  MapPin,
  Briefcase,
  Target,
  BarChart3,
} from "lucide-react";

export function About() {
  return (
    <FadeIn>
      <section id="about" className="py-32">
        <Container>
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
                About Me
              </p>

              <h2 className="mt-4 text-5xl font-black leading-tight">
                Building Data Products with Real-World Impact
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
                {profile.description
                  .split("\n\n")
                  .map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(6,182,212,.15)]">
              <div className="space-y-8">

                <div className="flex items-center gap-4">
                  <MapPin className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Location</p>
                    <h3 className="font-semibold">{profile.location}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Briefcase className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Status</p>
                    <h3 className="font-semibold text-emerald-400">
                      {profile.status}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Target className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Focus</p>
                    <h3 className="font-semibold">{profile.focus}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <BarChart3 className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-zinc-500">Technologies</p>
                    <h3 className="font-semibold">
                      {profile.technologies}
                    </h3>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Container>
      </section>
    </FadeIn>
  );
}