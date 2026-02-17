import { PitchCarusel } from "@/components/pitch/pitch-carousel";
import { defaultConfig } from "@/lib/audience";

export default function Home() {
  return <PitchCarusel config={defaultConfig} />;
}
