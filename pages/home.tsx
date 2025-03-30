import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Always On. Always Learning.</h1>
          <p className="text-lg md:text-xl text-blue-100 mb-6">
            Meet your new AI-powered team — scalable, smart, and built for impact.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-semibold shadow"
            >
              Request a Demo
            </Link>
            <Link
              href="/services"
              className="border border-yellow-400 text-yellow-400 hover:text-yellow-300 px-6 py-3 rounded-full font-semibold"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-8">What would you like to explore?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-blue-900">
          <Link href="/about" className="block p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">About</h3>
            <p className="text-sm text-gray-600">Our story, founder, and vision.</p>
          </Link>
          <Link href="/why" className="block p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Why SynthaTalent</h3>
            <p className="text-sm text-gray-600">What makes us different.</p>
          </Link>
          <Link href="/testimonials" className="block p-6 border rounded-xl hover:shadow-lg transition">
            <h3 className="font-semibold text-lg mb-2">Testimonials</h3>
            <p className="text-sm text-gray-600">Hear what clients say about us.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
