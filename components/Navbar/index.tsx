import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
          <span className="font-semibold text-lg">Couch</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
          <Link href="/" className="hover:text-zinc-900">Home</Link>
          <Link href="/shop" className="hover:text-zinc-900">Shop</Link>
          <Link href="/rent" className="hover:text-zinc-900">Rent</Link>
          <Link href="/bundles" className="hover:text-zinc-900">Bundles</Link>
          <Link href="/about-us" className="hover:text-zinc-900">About us</Link>
          <Link href="/contact" className="hover:text-zinc-900">Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/shop" className="hidden md:inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white">Shop</Link>
          <button className="p-2 rounded-full bg-zinc-100">🔍</button>
          <button className="p-2 rounded-full bg-zinc-100">🛒</button>
        </div>
      </div>
    </header>
  );
}
