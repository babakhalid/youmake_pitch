"use client";

import { SectionBook } from "@/components/pitch/section-book";
import { SectionDemo } from "@/components/pitch/section-demo";
import { SectionNext } from "@/components/pitch/section-next";
import { SectionProblem } from "@/components/pitch/section-problem";
import { SectionSolution } from "@/components/pitch/section-solution";
import { SectionStart } from "@/components/pitch/section-start";
import { SectionSubscription } from "@/components/pitch/section-subscription";
import { SectionMission } from "@/components/pitch/section-mission";
import { SectionTeam } from "@/components/pitch/section-team";
import { SectionTraction } from "@/components/pitch/section-traction";
import { SectionVision } from "@/components/pitch/section-vision";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { AudienceConfig, SlideId } from "@/lib/audience";
import { useEffect, useRef, useState } from "react";
import { CarouselToolbar } from "./carousel-toolbar";
import { QRCode } from "./qr-code";

// eslint-disable-next-line
const SLIDE_COMPONENTS: Record<SlideId, React.ComponentType<any>> = {
  start: SectionStart,
  problem: SectionProblem,
  solution: SectionSolution,
  demo: SectionDemo,
  traction: SectionTraction,
  team: SectionTeam,
  mission: SectionMission,
  vision: SectionVision,
  "revenue-model": SectionSubscription,
  "whats-next": SectionNext,
  "book-meeting": SectionBook,
};

// Declare Umami types
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

type Props = {
  config: AudienceConfig;
};

export function PitchCarusel({ config }: Props) {
  const [views, setViews] = useState(0);
  const called = useRef(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const slideStartTime = useRef<number>(Date.now());
  const previousSlideRef = useRef<number>(0);

  const slideNames = config.slides;
  const bookSlideIndex = slideNames.indexOf("book-meeting");

  useEffect(() => {
    async function fetchViewsCount() {
      try {
        // const data = await setViewCount("pitch");
        // setViews(data);
        setViews(18000);
      } catch {}
    }

    if (!called.current) {
      fetchViewsCount();
      called.current = true;
    }
  }, [called.current]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    // Track initial slide view
    const initialSlide = api.selectedScrollSnap();
    trackSlideView(initialSlide);

    api.on("select", () => {
      const newSlide = api.selectedScrollSnap();
      const previousSlide = previousSlideRef.current;

      // Track time spent on previous slide
      const timeSpent = Math.round((Date.now() - slideStartTime.current) / 1000);
      if (window.umami && timeSpent > 0) {
        window.umami.track("slide-duration", {
          slide: slideNames[previousSlide],
          slideNumber: previousSlide + 1,
          duration: timeSpent,
          audience: config.id,
        });
      }

      // Track new slide view
      trackSlideView(newSlide);
      slideStartTime.current = Date.now();
      previousSlideRef.current = newSlide;

      setCurrent(newSlide + 1);
    });
  }, [api]);

  const trackSlideView = (slideIndex: number) => {
    if (window.umami) {
      window.umami.track("slide-view", {
        slide: slideNames[slideIndex],
        slideNumber: slideIndex + 1,
        audience: config.id,
      });
    }
  };

  const shareUrl = config.id === "investors"
    ? "https://pitch.youmake.dev"
    : `https://pitch.youmake.dev/${config.id}`;

  return (
    <div className="relative w-full min-h-full">
      {/* Persistent Logo */}
      <a href="https://youmake.dev" target="_blank" rel="noopener noreferrer" className="fixed top-4 left-4 md:left-8 z-50">
        <img
          src="/logo_yomake_white.png"
          alt="Yomake Logo"
          width={40}
          height={40}
          className="dark:invert-0 invert"
        />
      </a>

      {/* QR Code */}
      <div className="fixed top-4 right-4 md:right-8 z-50 hidden md:block">
        <QRCode url={shareUrl} />
      </div>

      <Carousel className="w-full min-h-full relative" setApi={setApi}>
        <CarouselContent>
          {slideNames.map((slideId, index) => {
            const Component = SLIDE_COMPONENTS[slideId];
            const content = config.content[slideId];
            const extraProps = slideId === "demo"
              ? { playVideo: current === index + 1 }
              : {};

            return (
              <CarouselItem key={slideId}>
                <Component content={content} {...extraProps} />
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselToolbar
          views={views}
          bookSlideIndex={bookSlideIndex}
          shareUrl={shareUrl}
        />
      </Carousel>
    </div>
  );
}
