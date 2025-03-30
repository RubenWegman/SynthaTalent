export default function About() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6">About SynthaTalent</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Our Founder: Lysa Wegner</h2>
        <p className="mb-4">
          Lysa Wegner is a strategic thinker with a background in AI implementation and service design. After leading digital transformation at DelphiWorks and BrightDesk Group, she founded SynthaTalent to challenge how companies scale.
        </p>
        <p className="italic text-gray-600">
          “What if AI doesn't just support... but actually works?”
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Origin Story</h2>
        <p>
          The idea for SynthaTalent was born in a crisis Zoom call. Lysa saw teams overwhelmed by tasks they couldn't keep up with. She envisioned AI not as a tool, but as a digital teammate — scalable, trainable, and always available.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Professional Background</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Founder at SynthaTalent (2025–now)</li>
          <li>Strategy Lead at DelphiWorks Technologies (2021–2024)</li>
          <li>Service Consultant at BrightDesk Group (2017–2021)</li>
          <li>MSc in Business Information Management – Erasmus University</li>
        </ul>
      </section>
    </main>
  );
}
