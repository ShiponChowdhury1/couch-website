import Navbar from "@/components/Navbar";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-12 pt-32">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="mt-4 text-zinc-600">Learn about our mission to provide affordable furniture for students</p>
      </div>
    </div>
  );
}
