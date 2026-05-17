function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-3">
          Contact Us
        </p>

        <h1 className="text-4xl font-bold mb-4">
          Get in Touch
        </h1>

        <p className="text-gray-400">
          Have questions or want to discuss a project?
          Send us a message.
        </p>
      </div>

      {/* Form */}
      <form className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 outline-none"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 outline-none resize-none"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;