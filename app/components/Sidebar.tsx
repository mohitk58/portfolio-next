"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faRocket,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faHashnode,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const navItems = [
  { href: "/", icon: faHome, label: "HOME" },
  { href: "/projects", icon: faRocket, label: "PROJECTS" },
  { href: "/about", icon: faUser, label: "ABOUT" },
  { href: "/contact", icon: faEnvelope, label: "CONTACT" },
  { href: "/timeline", icon: faTimeline, label: "TIMELINE" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed z-50 left-0 top-0 h-full w-20 bg-black flex flex-col items-center justify-between py-6 shadow-lg">
      <Link href="/">
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-purple-500/40">
          MK
        </div>
      </Link>
      <nav className="flex flex-col gap-6 items-center">
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className={`text-xl transition-all duration-300 ${
                  isActive
                    ? "text-purple-500 scale-110"
                    : "text-zinc-400 group-hover:text-purple-400 group-hover:scale-110"
                }`}
              />

              <span className="absolute left-12 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-4">
        <a href="https://github.com/mohitk58" target="_blank">
          <FontAwesomeIcon
            className="text-zinc-400 hover:text-white"
            icon={faGithub}
          />
        </a>
        <a href="https://hashnode.com/@KumMoh" target="_blank">
          <FontAwesomeIcon
            className="text-zinc-400 hover:text-white"
            icon={faHashnode}
          />
        </a>
        <a href="https://www.linkedin.com/in/mohit58/" target="_blank">
          <FontAwesomeIcon
            className="text-zinc-400 hover:text-white"
            icon={faLinkedin}
          />
        </a>
      </div>
    </div>
  );
}
