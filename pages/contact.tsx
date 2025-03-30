export default function Contact() {
  return (
    <main className="px-6 py-12 max-w-2xl mx-auto font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <p className="mb-6 text-center text-gray-600">
        Interested in working with AI agents that never sleep?  
        Reach out and let’s build your intelligent workforce.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded px-4 py-2"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-2 rounded font-semibold hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
