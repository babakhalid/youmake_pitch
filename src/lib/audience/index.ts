import { investorsConfig } from "./configs/investors";
import { ocpConfig } from "./configs/ocp";
import { mouvementConfig } from "./configs/mouvement";
import type { AudienceConfig } from "./types";

export type { AudienceConfig } from "./types";
export type { SlideId } from "./types";

const audienceConfigs: Record<string, AudienceConfig> = {
  investors: investorsConfig,
  ocp: ocpConfig,
  mouvement: mouvementConfig,
};

export const defaultConfig = investorsConfig;

export const audienceSlugs = Object.keys(audienceConfigs);

export function getAudienceConfig(slug: string): AudienceConfig | undefined {
  return audienceConfigs[slug];
}
