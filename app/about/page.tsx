"use client";

import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import { SKILLS } from "../constants";

export default function AboutPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 700);
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
    <div className="px-6 py-10 min-h-screen flex items-center justify-center">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="relative group">
            <img
              src="/about.svg"
              alt="About"
              className="w-[320px] md:w-[400px] rounded-2xl shadow-lg transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-indigo-500 to-purple-500 opacity-20 blur-2xl -z-10"></div>
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-6 bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h1>

          <p className="text-zinc-400 mb-4 leading-relaxed">
            I am a{" "}
            <span className="text-white font-semibold">
              Senior Frontend Engineer
            </span>{" "}
            with 6+ years of experience building scalable and high-performance
            web applications. I specialize in{" "}
            <span className="text-indigo-400 font-medium">
              React, Next.js, and TypeScript
            </span>
            .
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            I have hands-on experience integrating frontend systems with backend
            services and APIs. I focus on building reusable components,
            optimizing performance, and maintaining clean architecture.
          </p>

          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-white/10 text-zinc-300 border border-white/10 backdrop-blur-md hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
