export type SlideId =
  | "start"
  | "problem"
  | "solution"
  | "demo"
  | "traction"
  | "team"
  | "mission"
  | "vision"
  | "revenue-model"
  | "whats-next"
  | "book-meeting";

export type StartContent = {
  tagline?: string;
};

export type ProblemContent = {
  sectionLabel?: string;
  cards?: { label: string; text: string }[];
  bottomText?: string;
};

export type SolutionContent = {
  sectionLabel?: string;
  bottomSlogan?: string;
};

export type DemoContent = {
  sectionLabel?: string;
  videoSrc?: string;
  bottomText?: string;
};

export type TractionContent = {
  sectionLabel?: string;
  metrics?: { label: string; sublabel?: string; value: string; showPing?: boolean }[];
  bottomText?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type TeamContent = {
  sectionLabel?: string;
  missionStatement?: string;
  members?: TeamMember[];
};

export type MissionContent = {
  sectionLabel?: string;
  statement?: string;
};

export type VisionContent = {
  sectionLabel?: string;
  heading?: string;
};

export type SubscriptionContent = {
  sectionLabel?: string;
  bottomText?: string;
};

export type NextContent = {
  sectionLabel?: string;
};

export type BookContent = {
  sectionLabel?: string;
  calLink?: string;
};

export type SlideContentMap = {
  start: StartContent;
  problem: ProblemContent;
  solution: SolutionContent;
  demo: DemoContent;
  traction: TractionContent;
  team: TeamContent;
  mission: MissionContent;
  vision: VisionContent;
  "revenue-model": SubscriptionContent;
  "whats-next": NextContent;
  "book-meeting": BookContent;
};

export type AudienceConfig = {
  id: string;
  name: string;
  description?: string;
  slides: SlideId[];
  content: {
    [K in SlideId]?: Partial<SlideContentMap[K]>;
  };
};
