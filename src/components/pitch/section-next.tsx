"use client";

import { useState } from "react";
import type { NextContent } from "@/lib/audience/types";
import { Eyebrow, SectionLabel } from "./ui";

type Video = {
  id: string;
  kicker: string;
  title: string;
};

const VIDEOS: Video[] = [
  {
    id: "kdUYbJqiSO8",
    kicker: "Overview",
    title: "Build apps & AI agents without coding",
  },
  {
    id: "2N_C3AET2po",
    kicker: "Security",
    title: "Build secure web apps with AI",
  },
  {
    id: "F-mTh4R6tz0",
    kicker: "Mobile",
    title: "Build a mobile app with AI",
  },
  {
    id: "gu9PcNlc83k",
    kicker: "Agents",
    title: "AI agent orchestration, explained",
  },
];

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="border border-border bg-card rounded-[1.5rem] p-3 md:p-4 flex flex-col gap-3 transition-colors duration-300 hover:bg-accent/40">
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Play: ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/30" />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-[#131620] transition-transform duration-300 group-hover:scale-105">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.54-6.86a1.03 1.03 0 0 0 0-1.76L9.56 4.26A1.03 1.03 0 0 0 8 5.14z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="px-1 pb-1">
        <Eyebrow>{video.kicker}</Eyebrow>
        <h3 className="text-sm md:text-base font-medium tracking-[-0.01em] mt-1 leading-snug">
          {video.title}
        </h3>
      </div>
    </div>
  );
}

type Props = {
  content?: NextContent;
};

export function SectionNext({ content }: Props) {
  return (
    <div className="h-screen relative w-screen overflow-hidden">
      <SectionLabel>{content?.sectionLabel ?? "Demos"}</SectionLabel>

      <div className="container h-full flex flex-col px-4 md:px-8 py-20 md:py-16 overflow-y-auto md:overflow-visible">
        <div className="m-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 w-full max-w-4xl">
          {VIDEOS.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
}
