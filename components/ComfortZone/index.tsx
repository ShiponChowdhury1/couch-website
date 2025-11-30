import Image from "next/image";

export default function ComfortZone() {
  const items = [1,2,3,4].map((i) => ({ id: i, title: `ComfiTable ${i}`, img: '/product-card.png' }));

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold">The Comfort Zone</h3>
        <a href="#" className="text-sm text-amber-600">See all</a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-4">
        {items.map((it) => (
          <div key={it.id} className="rounded-lg bg-white p-4 shadow-sm">
            <div className="h-36 w-full relative">
              <Image src={it.img} alt={it.title} fill style={{objectFit: 'contain'}} />
            </div>
            <div className="mt-3 text-sm font-medium">{it.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
