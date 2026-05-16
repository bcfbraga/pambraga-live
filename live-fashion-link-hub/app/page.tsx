import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { IntroBlock } from "@/components/IntroBlock";
import { ProductGrid } from "@/components/ProductGrid";
import { ShareBlock } from "@/components/ShareBlock";
import { liveInfo, products } from "@/data/live";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Hero liveInfo={liveInfo} productCount={products.length} />
      <IntroBlock influencerName={liveInfo.influencerName} />
      <ProductGrid products={products} influencerName={liveInfo.influencerName} />
      <ShareBlock />
      <Footer liveInfo={liveInfo} />
    </main>
  );
}
