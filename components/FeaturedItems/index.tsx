import Image from "next/image";

export default function FeaturedItems() {
  const items = new Array(4).fill(0).map((_, i) => ({
    id: i + 1,
    title: `ComfiTable ${i + 1}`,
    price: `$${69 + i * 20}`,
    img: '/product-card.png',
  }));

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">Featured Items</h3>
        <div className="flex gap-2">
          <button className="rounded-md border px-3 py-1">Best Selling</button>
          <button className="rounded-md border px-3 py-1">Most Viewed</button>
          <button className="rounded-md border px-3 py-1">Trending Now</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.id} className="rounded-lg bg-white p-4 shadow-sm">
            <div className="h-40 w-full relative">
              <Image src={it.img} alt={it.title} fill style={{objectFit: 'contain'}} />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm font-medium">{it.title}</div>
              <div className="text-sm font-semibold text-amber-600">{it.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
