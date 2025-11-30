import Image from "next/image";

export default function ShopByCategories() {
  const categories = [
    { id: 1, title: 'Sofa', img: '/cat-sofa.png' },
    { id: 2, title: 'Table', img: '/cat-table.png' },
    { id: 3, title: 'Dining Chair', img: '/cat-chair.png' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h3 className="text-2xl font-semibold">Shop by categories</h3>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {categories.map((c) => (
          <div key={c.id} className="rounded-lg bg-white p-4 shadow-sm">
            <div className="h-36 w-full relative">
              <Image src={c.img} alt={c.title} fill style={{objectFit: 'contain'}} />
            </div>
            <div className="mt-4 text-center font-medium">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
