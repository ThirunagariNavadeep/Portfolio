interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

export function TimelineItem({
  year,
  title,
  company,
  description,
}: TimelineItemProps) {
  return (
    <div className="relative pl-12">

      <div className="absolute left-2 top-2 h-full w-[2px] bg-white/10" />

      <div className="absolute left-0 top-2 h-5 w-5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20" />

      <p className="text-sm uppercase tracking-widest text-cyan-400">
        {year}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-1 text-zinc-400">
        {company}
      </p>

      <p className="mt-4 leading-7 text-zinc-500">
        {description}
      </p>

    </div>
  );
}