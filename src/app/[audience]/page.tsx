import { PitchCarusel } from "@/components/pitch/pitch-carousel";
import { getAudienceConfig, audienceSlugs } from "@/lib/audience";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return audienceSlugs.map((audience) => ({ audience }));
}

export function generateMetadata({
  params,
}: {
  params: { audience: string };
}): Metadata {
  const config = getAudienceConfig(params.audience);
  if (!config) return {};

  return {
    title: `YouMake - ${config.name} Pitch`,
    description: config.description,
  };
}

export default function AudiencePage({
  params,
}: {
  params: { audience: string };
}) {
  const config = getAudienceConfig(params.audience);
  if (!config) notFound();

  return <PitchCarusel config={config} />;
}
