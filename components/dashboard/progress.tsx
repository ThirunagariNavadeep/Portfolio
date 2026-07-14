interface ProgressProps {
  title: string;
  width: string;
}

export function Progress({
  title,
  width,
}: ProgressProps) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span>{title}</span>
        <span>{width}</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-cyan-400"
          style={{
            width,
          }}
        />
      </div>
    </div>
  );
}