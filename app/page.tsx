import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ShareBlock } from "@/components/ShareBlock";
import { liveInfo, products } from "@/data/live";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero liveInfo={liveInfo} productCount={products.length} />
      <ProductGrid products={products} influencerName={liveInfo.influencerName} />
      <ShareBlock />
      <Footer liveInfo={liveInfo} />
    </main>
  );
}
