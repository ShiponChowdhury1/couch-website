export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="rounded-lg bg-amber-50 p-8 flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold">Transform Your Space with Comfort &amp; Style</h3>
          <p className="mt-2 text-zinc-700">Find curated sets and handpicked pieces to refresh your room.</p>
        </div>
        <div>
          <a className="mt-4 inline-block rounded-md bg-amber-500 px-6 py-3 font-medium text-white" href="#">Shop Now</a>
        </div>
      </div>
    </section>
  );
}
