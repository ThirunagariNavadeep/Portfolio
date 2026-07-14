interface StatCardProps {
  title: string;
  value: string;
}

export function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
      <p className="text-xs uppercase tracking-widest text-zinc-400">
        {title}
      </p>

      <h3 className="mt-3 text-3xl font-bold">
        {value}
      </h3>
    </div>
  );
}