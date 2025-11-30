import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import ShopByCategories from "@/components/ShopByCategories";
import FeaturedItems from "@/components/FeaturedItems";
import Bundles from "@/components/Bundles";
import ComfortZone from "@/components/ComfortZone";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <Navbar />

      <main className="mx-auto max-w-7xl pt-20">
        <Banner />
        <ShopByCategories />
        <FeaturedItems />
        <Bundles />
        <ComfortZone />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
