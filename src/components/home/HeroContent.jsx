export default function FeatureBadge({ text }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700">
      <div className="w-2 h-2 rounded-full bg-green-500"></div>

      <span className="text-sm text-slate-300">
        {text}
      </span>
    </div>
  );
}