export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 gap-8 sm:grid-cols-4">
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm text-zinc-300">support@couch.example</p>
        </div>
        <div>
          <h4 className="font-semibold">Our Service</h4>
          <ul className="mt-2 text-sm text-zinc-300">
            <li>Payment</li>
            <li>Shipping</li>
            <li>Warranty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">About</h4>
          <ul className="mt-2 text-sm text-zinc-300">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Client Service</h4>
          <ul className="mt-2 text-sm text-zinc-300">
            <li>Help Center</li>
            <li>Returns</li>
            <li>Order Tracking</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
