import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "SynthaTalent saved us hundreds of hours in customer support. It’s like having a 24/7 super-assistant.",
    name: "Sophie van Dijk",
    title: "COO at BrightGrowth"
  },
  {
    quote: "The AI Marketing Agent generated better copy than our freelancers — and in seconds.",
    name: "Jonas Meijer",
    title: "Head of Marketing at NovaBrands"
  },
  {
    quote: "We launched new product research in half the time. Incredible output, zero overhead.",
    name: "Fatima Aydin",
    title: "Innovation Lead at Solara"
  },
  {
    quote: "SynthaTalent feels like an extension of my core team — no hiring, no training. Just impact.",
    name: "Emma Bakker",
    title: "Founder at HumanSpark"
  },
  {
    quote: "Our AI Data Scout gathers more insights in a morning than our team did in a week.",
    name: "Marcel Jansen",
    title: "Director of Ops at DataCore"
  },
  {
    quote: "Wait times dropped, customer satisfaction soared. And we did it in under two weeks.",
    name: "Anika Verhoeven",
    title: "Head of CX at Flowtastic"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <main className="px-6 py-12 max-w-2xl mx-auto font-sans text-gray-800 text-center">
      <h1 className="text-3xl font-bold mb-8">What Clients Say</h1>
      <blockquote className="italic text-lg text-gray-600 mb-4">“{current.quote}”</blockquote>
      <p className="font-semibold text-blue-700">{current.name}</p>
      <p className="text-sm text-gray-500">{current.title}</p>
    </main>
  );
}
