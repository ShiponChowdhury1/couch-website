import Image from "next/image";

export default function Bundles() {
  const bundles = [
    { id: 1, title: 'Living Room', img: '/bundle-living.png' },
    { id: 2, title: 'Bedroom', img: '/bundle-bedroom.png' },
    { id: 3, title: 'Dining Room', img: '/bundle-dining.png' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h3 className="text-2xl font-semibold">Discover the Perfect Furniture Bundle for Your Space</h3>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {bundles.map((b) => (
          <div key={b.id} className="relative overflow-hidden rounded-lg">
            <div className="h-48 w-full relative">
              <Image src={b.img} alt={b.title} fill style={{objectFit: 'cover'}} />
            </div>
            <div className="absolute left-4 bottom-4 rounded-md bg-black/50 px-3 py-2 text-white">{b.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
