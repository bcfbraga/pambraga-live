import { LiveLinkPage } from "@/components/LiveLinkPage";
import { live1806Info, live1806Products } from "@/data/live-18-06";

export default function Live1806Page() {
  return <LiveLinkPage liveInfo={live1806Info} products={live1806Products} />;
}
