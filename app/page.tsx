"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PacmanLoader } from "react-spinners";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((m) => m.TypeAnimation),
  { ssr: false },
);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
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
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-10">
        <div className="flex flex-col gap-5 max-w-xl">
          <h1 className="text-lg font-semibold text-zinc-400">
            <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              👋
            </span>{" "}
            Hi, I'm
          </h1>

          <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Mohit Kumar
          </h1>

          <h2 className="text-xl md:text-2xl text-zinc-300">
            <TypeAnimation
              sequence={[
                "Senior Frontend Engineer",
                1800,
                "Learning Backend...🚀",
                1800,
                "Web Developer",
                1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="text-zinc-400 leading-7">
            I build scalable, high-performance web applications using React,
            Next.js, and TypeScript. Passionate about clean architecture and
            modern UI.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1mhaNhiGaQNkESigM2QXfjPGkye9FYlnS/view"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium hover:opacity-90"
            >
              📄 Download CV
            </a>

            <Link
              href="/projects"
              className="px-6 py-2 rounded-full border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10"
            >
              🚀 View Projects
            </Link>
          </div>
        </div>

        <div className="w-[300px] md:w-[400px]">
          <Player
            autoplay
            loop
            speed={0.4}
            src="https://assets3.lottiefiles.com/private_files/lf30_WdTEui.json"
          />
        </div>
      </div>
    </div>
  );
}
