import type { AudienceConfig } from "../types";

export const mouvementConfig: AudienceConfig = {
  id: "mouvement",
  name: "Mouvement",
  description: "YouMake pitch for OCP Mouvement intrapreneurship program",
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
    problem: {
      bottomText:
        "I lived it. My colleagues had great ideas but no way to build them. I was the one turning their vision into code — but one person can't scale. That's why I created YouMake.",
    },
    traction: {
      sectionLabel: "Already Shipping",
      bottomText: "Built by non-technical teams. Deployed and running.",
      metrics: [
        { label: "Projects", value: "371", showPing: true },
        { label: "Deployed", value: "68", showPing: true },
        { label: "Messages", sublabel: "Users & AI", value: "66.6K", showPing: false },
        { label: "Builders", value: "175", showPing: true },
        { label: "To Prototype", value: "30m", showPing: true },
        { label: "Code Required", value: "Zero", showPing: false },
      ],
    },
    team: {
      sectionLabel: "Behind YouMake",
      members: [
        {
          name: "Born from the ecosystem.",
          role: "AI & Engineering",
          bio: "UM6P researchers and engineers who saw firsthand how hard it is to deploy without a dev team.",
        },
        {
          name: "With you until it deploys.",
          role: "Support & Onboarding",
          bio: "French, Arabic, Darija. We walk alongside every project owner from first idea to live product.",
        },
      ],
    },
    mission: {
      statement:
        "We exist so no Mouvement project dies waiting for a developer.",
    },
  },
};
