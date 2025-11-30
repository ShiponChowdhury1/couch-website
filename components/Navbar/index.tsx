import Image from "next/image";
import Link from "next/link";
import logo from '../../public/categories/logo.png';
import { Search } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import profileImage from '../../public/transform/profile.jpg';
export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="Logo" width={40} height={40} />
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
          <button className="p-2 rounded-full bg-zinc-100"><Search /></button>
          <button className="p-2 rounded-full bg-zinc-100">🛒</button>
            <button className="p-2 rounded-full ">
                 <Avatar>
                     <AvatarImage src={profileImage.src} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
        </Avatar>
            </button>
        </div>
      </div>
    </header>
  );
}
