import Image from "next/image";
import { bundles } from '@/lib/data/categories';
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

export default function Bundles() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 bg-[#FFF8ED]">
       <div className="flex justify-between items-center mb-8">
          <div>
             <h3 className="font-medium text-[32px] leading-[100%] tracking-[-0.011em]">
  Discover the Perfect Furniture
  <span className="block mt-2">Bundle for Your Space</span>
</h3>

          </div>
           <div>
            <Button className="w-[154px] h-[59px] bg-[#FFC21A] text-black px-6 py-4 rounded font-medium hover:bg-[#FFD54F]">
             <Plus /> View all
            </Button>
           </div>
       </div>
      
      <div className="flex flex-col gap-6">
        {/* First Row: Two images side by side (50% each) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative overflow-hidden rounded-lg h-64">
            <Image src={bundles[0].img} alt={bundles[0].title} fill style={{objectFit: 'cover'}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-2xl font-semibold px-6 py-3 rounded-md">{bundles[0].title}</h4>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg h-64">
            <Image src={bundles[1].img} alt={bundles[1].title} fill style={{objectFit: 'cover'}} />
            <div className="absolute inset-0 flex items-center justify-center">
              <h4 className="text-white text-2xl font-semibold px-6 py-3 rounded-md">{bundles[1].title}</h4>
            </div>
          </div>
        </div>

        {/* Second Row: Full width image (100%) */}
        <div className="relative overflow-hidden rounded-lg h-80">
          <Image src={bundles[2].img} alt={bundles[2].title} fill style={{objectFit: 'cover'}} />
          <div className="absolute inset-0 flex items-center justify-center">
            <h4 className="text-white text-2xl font-semibold px-6 py-3 rounded-md">{bundles[2].title}</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
