interface SkillCardProps {
  title: string;
  emoji: string;
  skills: string[];
}

export function SkillCard({
  title,
  emoji,
  skills,
}: SkillCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40">

      <div className="mb-6 text-4xl">
        {emoji}
      </div>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>

    </div>
  );
}