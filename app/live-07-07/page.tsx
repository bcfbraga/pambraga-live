import { LiveLinkPage } from "@/components/LiveLinkPage";
import { live0707Info, live0707Products } from "@/data/live-07-07";

export default function Live0707Page() {
  return <LiveLinkPage liveInfo={live0707Info} products={live0707Products} />;
}
