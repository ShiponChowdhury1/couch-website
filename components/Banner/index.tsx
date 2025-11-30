import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 flex flex-col-reverse gap-8 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold leading-tight">Affordable &amp; Sustainable Furniture for Students</h2>
          <p className="mt-4 text-zinc-100/90">Quality furniture at student-friendly prices. Styled for compact spaces and built to last.</p>
          <div className="mt-6 flex gap-4">
            <a className="rounded-md bg-amber-400 px-4 py-2 font-medium text-zinc-900 shadow-sm" href="#">Shop Now</a>
            <a className="rounded-md border border-white/30 px-4 py-2 text-white" href="#">Sell Your Furniture</a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-48 relative -translate-y-2">
            <Image src="/hero-chair.png" alt="chair" fill style={{objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </section>
  );
}
