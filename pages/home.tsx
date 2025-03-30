import Link from 'next/link';

export default function Home() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto font-sans text-gray-800">
      <nav className="flex justify-center gap-6 mb-10 text-sm font-medium text-blue-700">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/why">Why SynthaTalent</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Always On. Always Learning.</h1>
        <p className="text-lg text-gray-600">
          SynthaTalent delivers intelligent AI-agents that think, learn, and work—just like your best employee, but faster.
        </p>
      </section>
    </main>
  );
}
