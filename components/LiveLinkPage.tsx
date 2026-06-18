import { Footer } from "@/components/Footer";
import { LiveBar } from "@/components/LiveBar";
import { ProductGrid } from "@/components/ProductGrid";
import { ShareBlock } from "@/components/ShareBlock";
import type { LiveInfo, Product } from "@/data/live";

type LiveLinkPageProps = {
  liveInfo: LiveInfo;
  products: Product[];
};

export function LiveLinkPage({ liveInfo, products }: LiveLinkPageProps) {
  return (
    <main className="min-h-screen overflow-hidden">
      <LiveBar liveInfo={liveInfo} />
      <ProductGrid products={products} influencerName={liveInfo.influencerName} />
      <ShareBlock />
      <Footer liveInfo={liveInfo} />
    </main>
  );
}
