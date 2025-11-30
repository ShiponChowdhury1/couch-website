import { featuredItems } from "@/lib/data/categories";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function FeaturedItems() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 bg-white">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-3xl font-bold mb-2">Featured Items</h3>
          <p className="text-sm text-zinc-600">Trending Now: Best-Selling & Most-Rented Items!</p>
        </div>
        <div className="flex gap-3">
          <button className="w-[166px] h-14 bg-[#FFC21A] text-black font-medium px-8 py-3 rounded hover:bg-[#FFD54F] transition-colors">
            Best Selling
          </button>
          <button className="w-[175px] h-14 bg-white text-black font-medium px-8 py-3 rounded border border-zinc-300 hover:bg-zinc-50 transition-colors">
            Most Rented
          </button>
          <button className="w-[175px] h-14 bg-white text-black font-medium px-8 py-3 rounded border border-zinc-300 hover:bg-zinc-50 transition-colors">
            Trending Now
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
        {featuredItems.map((item) => (
          <div key={item.id} className="rounded-lg p-4 relative group hover:shadow-lg transition-shadow" style={{ backgroundColor: '#F5F5F5' }}>
            {/* Heart Icon */}
            <button className="absolute top-6 right-6 z-10 bg-white rounded-full p-2 shadow-sm hover:bg-zinc-100">
              <Heart className="w-5 h-5 text-zinc-600" />
            </button>

            {/* Product Image */}
            <div className="h-56 w-full relative mb-4 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
              <Image 
                src={item.img} 
                alt={item.title} 
                fill 
                style={{objectFit: 'contain'}} 
                className="p-4"
              />
            </div>

            {/* Product Info */}
            <div>
              <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold">${item.price}/mo</span>
                <span className="text-sm text-zinc-600">${item.buyPrice} to buy</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < item.rating ? 'text-yellow-400 fill-current' : 'text-zinc-300 fill-current'}`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="#" className="inline-flex items-center gap-2 font-medium hover:underline">
          View All Furniture <span>→</span>
        </a>
      </div>
    </section>
  );
}
