"use client";

import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { PROJECT_LIST } from "../constants";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PacmanLoader color="#ad46ff" size={25} />
      </div>
    );
  }

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-8 bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECT_LIST.map((p, index) => (
          <div
            key={index}
            className="group rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-4 flex flex-col justify-between h-[180px]">
              <div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  {p.title}
                </h2>

                <div className="relative group/tooltip">
                  <p className="text-sm text-zinc-400 line-clamp-2 cursor-pointer">
                    {p.description}
                  </p>

                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 rounded-lg bg-linear-to-r from-indigo-500 to-purple-600 text-white text-xs p-3 opacity-0 scale-95 group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 transition-all duration-200 pointer-events-none z-50 shadow-xl">
                    {p.description}

                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-purple-600 rotate-45"></div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.open(p.link, "_blank")}
                className="cursor-pointer mt-4 w-full rounded-full py-2 text-sm font-medium bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition"
              >
                🚀 Preview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
