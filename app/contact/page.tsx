import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-12 pt-32">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-zinc-600">Get in touch with our team</p>
      </div>
    </div>
  );
}
