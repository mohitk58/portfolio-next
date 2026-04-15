"use client";

import Link from "next/link";
import { TIMELINE_DATA } from "../constants";
import TimelineItems from "../components/TimelineItems";
import dynamic from "next/dynamic";

const Background = dynamic(() => import("../components/Background"), {
  ssr: false,
});

export default function TimelinePage() {
  return (
    <div className="relative min-h-screen text-white">
      <Background />

      <div className="flex justify-between items-center px-6 pt-6 relative z-10">
        <h1 className="text-3xl font-bold bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Timeline
        </h1>

        <Link
          href="/"
          className="text-sm px-4 py-2 border border-white/20 rounded-full hover:bg-white/10 transition"
        >
          ← Go Back
        </Link>
      </div>

      <div className="relative z-10 mt-14 px-6">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20" />
        <div className="flex justify-between items-center relative">
          {TIMELINE_DATA.map((item, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <TimelineItems
                title={item.heading}
                date={item.date}
                link={item.link}
                origin={item.origin}
                originColor={item.originColor}
                conversionText={item.conversionText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
