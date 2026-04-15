"use client";

type Props = {
  title: string;
  date: string;
  link?: string;
  origin?: string;
  originColor?: string;
  conversionText?: string;
};

export default function TimelineItems({
  title,
  date,
  link,
  origin,
  originColor = "#a855f7",
  conversionText,
}: Props) {
  return (
    <div className="relative flex justify-center mb-12">
      {/* Line */}
      <div className="absolute top-0 left-1/2 w-[2px] h-full bg-white/10 -translate-x-1/2"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-xl bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
        {/* Title */}
        <h2 className="text-lg font-semibold text-white mb-2">{title}</h2>

        {/* Origin Badge */}
        {origin && (
          <span
            className="inline-block text-xs px-3 py-1 rounded-full mb-3 text-white"
            style={{ backgroundColor: originColor }}
          >
            {origin}
          </span>
        )}

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            className="block text-sm text-indigo-400 hover:underline mb-2"
          >
            {conversionText || "View"}
          </a>
        )}

        {/* Date */}
        <p className="text-xs text-zinc-400">{date}</p>
      </div>

      {/* Dot */}
      <div className="absolute left-1/2 top-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-black -translate-x-1/2 shadow-md"></div>
    </div>
  );
}
