"use client";

import { setViewCount } from "@/actions/set-view-count";
import { SectionBook } from "@/components/pitch/section-book";
import { SectionDemo } from "@/components/pitch/section-demo";
import { SectionNext } from "@/components/pitch/section-next";
import { SectionProblem } from "@/components/pitch/section-problem";
import { SectionSolution } from "@/components/pitch/section-solution";
import { SectionStart } from "@/components/pitch/section-start";
import { SectionSubscription } from "@/components/pitch/section-subscription";
import { SectionTeam } from "@/components/pitch/section-team";
import { SectionTraction } from "@/components/pitch/section-traction";
import { SectionVision } from "@/components/pitch/section-vision";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";
import { CarouselToolbar } from "./carousel-toolbar";
import { QRCode } from "./qr-code";

// Slide names for analytics tracking
const SLIDE_NAMES = [
  "start",
  "problem",
  "solution",
  "demo",
  "traction",
  "team",
  "vision",
  "revenue-model",
  "whats-next",
  "book-meeting",
] as const;

// Declare Umami types
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, unknown>) => void;
    };
  }
}

export function PitchCarusel() {
  const [views, setViews] = useState(0);
  const called = useRef(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const slideStartTime = useRef<number>(Date.now());
  const previousSlideRef = useRef<number>(0);

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
          slide: SLIDE_NAMES[previousSlide],
          slideNumber: previousSlide + 1,
          duration: timeSpent,
        });
      }

      // Track new slide view
      trackSlideView(newSlide);
      slideStartTime.current = Date.now();
      previousSlideRef.current = newSlide;

      setCurrent(newSlide + 1);
    });
  }, [api]);

  // Track slide view
  const trackSlideView = (slideIndex: number) => {
    if (window.umami) {
      window.umami.track("slide-view", {
        slide: SLIDE_NAMES[slideIndex],
        slideNumber: slideIndex + 1,
      });
    }
  };

  return (
    <div className="relative w-full min-h-full">
      {/* Persistent Logo */}
      <div className="fixed top-4 left-4 md:left-8 z-50">
        <img
          src="/logo_yomake_white.png"
          alt="Yomake Logo"
          width={40}
          height={40}
          className="dark:invert-0 invert"
        />
      </div>

      {/* QR Code */}
      <div className="fixed top-4 right-4 md:right-8 z-50 hidden md:block">
        <QRCode />
      </div>
      
      <Carousel className="w-full min-h-full relative" setApi={setApi}>
        <CarouselContent>
        <CarouselItem>
          <SectionStart />
        </CarouselItem>
        <CarouselItem>
          <SectionProblem />
        </CarouselItem>
        <CarouselItem>
          <SectionSolution />
        </CarouselItem>
        <CarouselItem>
          <SectionDemo playVideo={current === 4} />
        </CarouselItem>
        <CarouselItem>
          <SectionTraction />
        </CarouselItem>
        <CarouselItem>
          <SectionTeam />
        </CarouselItem>
        <CarouselItem>
          <SectionVision />
        </CarouselItem>
        <CarouselItem>
          <SectionSubscription />
        </CarouselItem>
        <CarouselItem>
          <SectionNext />
        </CarouselItem>
        <CarouselItem>
          <SectionBook />
        </CarouselItem>
      </CarouselContent>

      <CarouselToolbar views={views} />
      </Carousel>
    </div>
  );
}
