import { Footer } from "@/components/Footer";
import { LiveBar } from "@/components/LiveBar";
import { ProductGrid } from "@/components/ProductGrid";
import { ShareBlock } from "@/components/ShareBlock";
import { liveInfo, products } from "@/data/live";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <LiveBar liveInfo={liveInfo} />
      <ProductGrid products={products} influencerName={liveInfo.influencerName} />
      <ShareBlock />
      <Footer liveInfo={liveInfo} />
    </main>
  );
}
