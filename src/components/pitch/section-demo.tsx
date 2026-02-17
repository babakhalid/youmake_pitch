"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import type { DemoContent } from "@/lib/audience/types";

type Props = {
  playVideo: boolean;
  content?: DemoContent;
};

export function SectionDemo({ playVideo, content }: Props) {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setPlaying] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useHotkeys(
    "space",
    () => {
      togglePlay();
    },
    []
  );

  useHotkeys(
    "backspace",
    () => {
      handleRestart();
    },
    [playerRef]
  );

  useEffect(() => {
    if (isDesktop && playVideo && playerRef.current) {
      playerRef.current.play();
      setPlaying(true);
    }
  }, [playVideo, isDesktop]);

  const handleRestart = () => {
    if (playerRef.current) {
      playerRef.current.currentTime = 0;
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
    }

    setPlaying((prev) => !prev);
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        {content?.sectionLabel ?? "Demo"}
      </span>

      <div className="container h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8">
        <div className="group relative w-full max-w-4xl">
          {/* Play/Pause Controls */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 hidden md:flex space-x-4 items-center justify-center opacity-0 z-30 transition-all duration-300">
            <Button
              size="icon"
              className="rounded-full w-12 h-12 bg-black/50 border border-white/20 text-white hover:bg-black/70 backdrop-blur-sm"
              onClick={handleRestart}
            >
              <Icons.Reply size={20} />
            </Button>
            <Button
              size="icon"
              className="rounded-full w-14 h-14 bg-white text-black hover:bg-white/90"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Icons.PauseOutline size={24} />
              ) : (
                <Icons.PlayOutline size={24} />
              )}
            </Button>
          </div>

          {/* Video */}
          <video
            ref={playerRef}
            onClick={togglePlay}
            src={content?.videoSrc ?? "/demo.mp4"}
            controls={!isDesktop}
            loop
            muted
            playsInline
            className="w-full rounded-2xl border border-border bg-[#121212] cursor-pointer"
          />
        </div>

        {/* Bottom Text */}
        <p className="text-[#555] text-lg mt-8 text-center tracking-wide">
          {content?.bottomText ?? "See YouMake in action"}
        </p>
      </div>
    </div>
  );
}
