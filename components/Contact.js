export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
          <form className="max-w-lg mx-auto bg-light p-8 shadow rounded">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded p-2"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border-gray-300 rounded p-2"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full border-gray-300 rounded p-2"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  