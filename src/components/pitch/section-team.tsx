import Image from "next/image";
import type { TeamContent, TeamMember } from "@/lib/audience/types";

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
      <span className="absolute left-16 md:left-20 top-4 text-lg z-10">
        {content?.sectionLabel ?? "Who we are"}
      </span>

      <div className="container h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8">
        <div className="flex flex-col gap-5 w-full max-w-3xl">
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative border border-border bg-[#121212] rounded-2xl p-5 md:p-8 transition-all duration-300 hover:border-[#333]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div className={`relative z-10 flex ${member.image ? "gap-4 md:gap-6 items-start" : "flex-col"}`}>
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
                  <h2 className="text-xl md:text-2xl font-medium">{member.name}</h2>
                  <span className="text-[#878787] text-xs md:text-sm">{member.role}</span>
                  <p className="text-[#878787] text-xs md:text-sm mt-2 md:mt-3 leading-relaxed">
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
