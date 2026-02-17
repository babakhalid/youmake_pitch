import type { AudienceConfig } from "../types";

export const ocpConfig: AudienceConfig = {
  id: "ocp",
  name: "OCP",
  description: "YouMake pitch for OCP project owners",
  slides: [
    "start",
    "problem",
    "solution",
    "demo",
    "traction",
    "team",
    "mission",
    "vision",
    "book-meeting",
  ],
  content: {
    start: {
      tagline: "Empowering OCP teams to build their own digital tools",
    },
    problem: {
      sectionLabel: "The Challenge",
      cards: [
        { label: "Backlog", text: "IT teams can\u2019t keep up with demand." },
        { label: "Speed", text: "Digital projects take months to deliver." },
        { label: "Dependency", text: "Non-technical teams can\u2019t build what they need." },
      ],
      bottomText:
        "Every department has ideas. Most never get built because the bottleneck is technical capacity.",
    },
    traction: {
      bottomText: "Proven with real users building real tools",
      metrics: [
        { label: "Projects Built", value: "371", showPing: true },
        { label: "Deployed", value: "68", showPing: true },
        { label: "Messages", sublabel: "Users & AI Agents", value: "66.6K", showPing: false },
        { label: "Users", value: "175", showPing: true },
        { label: "Avg Build Time", value: "30m", showPing: true },
        { label: "No Code Required", value: "0", showPing: false },
      ],
    },
    team: {},
    mission: {
      statement:
        "Empowering every OCP team to build the tools they need, without writing a single line of code.",
    },
    vision: {
      heading: "Every OCP team member becomes a builder.",
    },
    "book-meeting": {
      sectionLabel: "Let\u2019s start a pilot",
    },
  },
};
