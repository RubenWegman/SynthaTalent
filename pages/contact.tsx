export function Contact() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2" rows={4}></textarea>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded">Send Message</button>
      </form>
    </main>
  );
}

export default Contact;