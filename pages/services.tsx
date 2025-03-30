export default function Services() {
  return (
    <main className="px-6 py-12 max-w-3xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <p className="mb-6">
        SynthaTalent provides intelligent, task-oriented AI agents that integrate seamlessly with your operations.
        Below are the core roles we offer:
      </p>

      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">AI Receptionist</h2>
          <p className="text-gray-700">
            Manages first-line communication, schedules meetings, and answers repetitive queries with natural language understanding.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">AI Marketing Agent</h2>
          <p className="text-gray-700">
            Generates copy, analyzes engagement data, and executes campaigns across channels—on autopilot.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">AI Data Scout</h2>
          <p className="text-gray-700">
            Collects, summarizes, and structures insights from reports, websites, and datasets—instantly.
          </p>
        </li>
      </ul>
    </main>
  );
}
