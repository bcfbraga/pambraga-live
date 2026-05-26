import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";
import { ShareBlock } from "@/components/ShareBlock";
import { liveInfo, products } from "@/data/live";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <ProductGrid products={products} influencerName={liveInfo.influencerName} />
      <ShareBlock />
      <Footer liveInfo={liveInfo} />
    </main>
  );
}
