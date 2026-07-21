import Image from "next/image";
import type { TeamContent, TeamMember } from "@/lib/audience/types";
import { Eyebrow, SectionLabel } from "./ui";

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    name: "Khalid BABA",
    role: "Co-founder",
    bio: "PhD in AI and Education. Former Head of Mission at UM6P, helping departments create digital solutions. Saw the struggle for non-technical people and decided to build YouMake for them.",
    image: "/DSC07008.jpg",
  },
  {
    name: "Hajar B.",
    role: "Co-founder",
    bio: "Influencer and Master in Digital Marketing. Leading growth and community building for YouMake.",
    image: "/hajarbaba.png",
  },
];

type Props = {
  content?: TeamContent;
};

export function SectionTeam({ content }: Props) {
  const members = content?.members ?? DEFAULT_MEMBERS;

  return (
    <div className="h-screen relative overflow-hidden">
      <SectionLabel>{content?.sectionLabel ?? "Who we are"}</SectionLabel>

      <div className="container h-full flex flex-col px-4 md:px-8 py-20 md:py-16 overflow-y-auto md:overflow-visible">
        <div className="m-auto flex flex-col gap-4 md:gap-5 w-full max-w-3xl">
          {members.map((member) => (
            <div
              key={member.name}
              className="relative border border-border bg-card rounded-[1.5rem] p-5 md:p-8 transition-colors duration-300 hover:bg-accent/40"
            >
              <div
                className={`flex ${member.image ? "gap-4 md:gap-6 items-start" : "flex-col"}`}
              >
                {member.image && (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    quality={100}
                    className="rounded-full object-cover w-16 h-16 md:w-28 md:h-28 flex-shrink-0"
                  />
                )}
                <div className="flex flex-col">
                  <h2 className="text-xl md:text-2xl font-medium tracking-[-0.02em]">
                    {member.name}
                  </h2>
                  <Eyebrow className="mt-1">{member.role}</Eyebrow>
                  <p className="text-muted-foreground text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
