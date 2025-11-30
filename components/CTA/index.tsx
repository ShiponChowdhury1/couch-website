import Image from "next/image";
import bestSofa from '../../public/transform/bestSofa.png'

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-2xl p-12 flex flex-col md:flex-row md:items-center md:justify-between" style={{ backgroundColor: '#F6FEC6' }}>
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-4 text-zinc-900">
            Transform Your Space with Comfort &amp; Style
          </h3>
          <button className="mt-6 bg-[#FFC21A] text-black font-medium px-8 py-3 rounded hover:bg-[#FFD54F] transition-colors">
            Shop Now
          </button>
        </div>
        <div className="flex-1 flex justify-end mt-8 md:mt-0">
          <Image src={bestSofa} alt="Best Sofa" width={500} height={300} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
