import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <div className="relative min-h-screen bg-[#0B1120] text-white overflow-hidden">
      <div className="relative min-h-screen bg-[#0B1120] text-white overflow-hidden">
    <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full"></div>
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B1120]/70 backdrop-blur-xl">

  <div className="flex items-center justify-between px-6 lg:px-16 py-5">

    {/* LOGO */}
    <h1 className="text-2xl lg:text-4xl font-extrabold tracking-tight">
      INFOCERA
    </h1>

    {/* DESKTOP MENU */}
    <ul className="hidden lg:flex gap-8 text-sm text-gray-300 font-medium">

      <li className="hover:text-white cursor-pointer transition">
        Home
      </li>

      <li className="hover:text-white cursor-pointer transition">
        Services
      </li>

      <li className="hover:text-white cursor-pointer transition">
        Technologies
      </li>

      <li className="hover:text-white cursor-pointer transition">
        Portfolio
      </li>

      <li className="hover:text-white cursor-pointer transition">
        About
      </li>

      <li className="hover:text-white cursor-pointer transition">
        Contact
      </li>

    </ul>

    {/* DESKTOP BUTTON */}
    <button className="hidden lg:block bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-full text-sm font-medium">
      Get Started
    </button>

    {/* MOBILE MENU BUTTON */}
    <button
      className="lg:hidden text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✕" : "☰"}
    </button>

  </div>

  {/* MOBILE MENU */}
  {menuOpen && (

    <div className="lg:hidden px-6 pb-6">

      <ul className="flex flex-col gap-5 text-gray-300 font-medium">

        <li>Home</li>
        <li>Services</li>
        <li>Technologies</li>
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>

      </ul>

      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-full font-medium">
        Get Started
      </button>

    </div>
  )}

</nav>

      {/* HERO SECTION */}
     <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-16 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-24 lg:pb-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 z-10 relative">

        {/* LEFT SIDE */}
        <div className="flex-1 max-w-2xl w-full">

          <p className="text-gray-400 text-base sm:text-lg mt-6 leading-relaxed max-w-xl">
            Modern IT Solutions
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">

            Building

            <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {" "}Digital{" "}
            </span>

            Experiences
          </h1>

          <p className="text-gray-400 text-lg mt-8 leading-relaxed max-w-xl">
            We help startups and businesses build scalable,
            modern, and user-focused digital products with
            cutting-edge technologies.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/20">
              Start Project
            </button>

            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/20">
              Learn More
            </button>

          </div>
        </div>

        {/* RIGHT SIDE */}
     <div className="flex-1 flex justify-center w-full">
{/* <div className="absolute top-40 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-500/20 blur-[180px] rounded-full"> */}
          <div className="relative animate-[float_6s_ease-in-out_infinite]">

            {/* GLOW */}
            <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-30 rounded-full"></div>

            {/* CARD */}
            <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-6 sm:p-10 rounded-3xl w-full max-w-[300px] sm:max-w-[350px] min-h-[260px] sm:min-h-[350px] flex flex-col justify-center">

              <div className="space-y-5">

                <div className="bg-white/10 p-4 rounded-xl">
                  🚀 Modern Web Development
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  ⚡ SaaS Product Design
                </div>

                <div className="bg-white/10 p-4 rounded-xl">
                  🤖 AI Integration Solutions
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>


      {/* STATS SECTION */}

<section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 mt-6">

  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">

    <div className="text-center">
      <h3 className="text-4xl font-bold text-blue-400">
        150+
      </h3>

      <p className="text-gray-400 mt-2">
        Projects Completed
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-4xl font-bold text-cyan-400">
        50+
      </h3>

      <p className="text-gray-400 mt-2">
        Global Clients
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-4xl font-bold text-purple-400">
        10+
      </h3>

      <p className="text-gray-400 mt-2">
        Years Experience
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-4xl font-bold text-pink-400">
        24/7
      </h3>

      <p className="text-gray-400 mt-2">
        Support Available
      </p>
    </div>

  </div>

</section>


      {/* SERVICES SECTION */}

<section className="relative z-10 border-t border-white/5 max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-20">

  {/* SECTION HEADER */}
  <div className="text-center mb-16">

    <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-4">
      Our Services
    </p>

    <h2 className="text-4xl lg:text-5xl font-bold">
      Smart Digital Solutions
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed text-lg text-center">
      We create scalable digital experiences that help
      businesses grow faster with modern technologies.
    </p>

  </div>

  {/* CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* CARD 1 */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20">

      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-3xl mb-6">
        🚀
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        Web Development
      </h3>

      <p className="text-gray-400 leading-relaxed">
        Modern responsive websites and scalable web apps
        built with cutting-edge technologies.
      </p>

    </div>

    {/* CARD 2 */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 ">

      <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-3xl mb-6">
        ⚡
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        SaaS Solutions
      </h3>

      <p className="text-gray-400 leading-relaxed">
        High-performance SaaS platforms designed for
        startups and modern businesses.
      </p>

    </div>

    {/* CARD 3 */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20">

      <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl mb-6">
        🤖
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        AI Integration
      </h3>

      <p className="text-gray-400 leading-relaxed">
        AI-powered automation and intelligent systems
        to optimize digital workflows.
      </p>

    </div>

  </div>

</section>


{/* TECHNOLOGIES SECTION */}

<section className="relative z-10 border-t border-white/5 max-w-7xl mx-auto px-8 lg:px-16 py-24">

  {/* HEADER */}
  <div className="text-center mb-16">

    <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
      Technologies
    </p>

    <h2 className="text-4xl lg:text-5xl font-bold">
      Powered By Modern Tech
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed text-lg">
      We use the latest technologies and frameworks
      to build fast, scalable, and future-ready
      digital solutions.
    </p>

  </div>

  {/* TECH GRID */}
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

    {/* TECH CARD */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-4">
        ⚛️
      </div>

      <h3 className="font-semibold text-lg">
        React
      </h3>

    </div>

    {/* TECH CARD */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:border-green-400/40 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-4">
        🟢
      </div>

      <h3 className="font-semibold text-lg">
        Node.js
      </h3>

    </div>

    {/* TECH CARD */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-4">
        🌐
      </div>

      <h3 className="font-semibold text-lg">
        Next.js
      </h3>

    </div>

    {/* TECH CARD */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:border-yellow-400/40 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-4">
        💛
      </div>

      <h3 className="font-semibold text-lg">
        JavaScript
      </h3>

    </div>

    {/* TECH CARD */}
    <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-center hover:border-purple-400/40 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-4">
        🤖
      </div>

      <h3 className="font-semibold text-lg">
        AI Tools
      </h3>

    </div>

  </div>

</section>

{/* PORTFOLIO SECTION */}

<section className="relative z-10 border-t border-white/5 max-w-7xl mx-auto px-8 lg:px-16 py-24">

  {/* HEADER */}
  <div className="text-center mb-16">

    <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
      Portfolio
    </p>

    <h2 className="text-4xl lg:text-5xl font-bold">
      Featured Projects
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-relaxed text-lg">
      Explore some of our recent digital products,
      SaaS platforms, and modern web experiences.
    </p>

  </div>

  {/* PROJECT GRID */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* PROJECT CARD */}
    <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-400/40 transition-all duration-300">

      {/* IMAGE */}
      <div className="h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">

        <div className="text-7xl group-hover:scale-110 transition duration-500">
          🚀
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-2xl font-semibold">
            SaaS Dashboard
          </h3>

          <span className="text-sm text-blue-400">
            Web App
          </span>

        </div>

        <p className="text-gray-400 leading-relaxed">
          A modern SaaS analytics platform with
          real-time dashboard features and scalable
          cloud architecture.
        </p>

        <button className="mt-6 text-blue-400 hover:text-blue-300 transition">
          View Project →
        </button>

      </div>

    </div>

    {/* PROJECT CARD */}
    <div className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/40 transition-all duration-300">

      {/* IMAGE */}
      <div className="h-72 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">

        <div className="text-7xl group-hover:scale-110 transition duration-500">
          🤖
        </div>

      </div>

      {/* CONTENT */}
      <div className="p-8">

        <div className="flex items-center justify-between mb-4">

          <h3 className="text-2xl font-semibold">
            AI Automation Tool
          </h3>

          <span className="text-sm text-purple-400">
            AI Product
          </span>

        </div>

        <p className="text-gray-400 leading-relaxed">
          Intelligent automation platform powered by
          AI workflows and smart business integrations.
        </p>

        <button className="mt-6 text-purple-400 hover:text-purple-300 transition">
          View Project →
        </button>

      </div>

    </div>

  </div>

</section>
{/* CTA SECTION */}

<section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-24">

  <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-white/10 rounded-[40px] p-12 lg:p-20 text-center backdrop-blur-xl">

    {/* GLOW */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[150px] rounded-full"></div>

    {/* CONTENT */}
    <div className="relative z-10">

      <p className="text-cyan-400 uppercase tracking-[4px] text-sm mb-4">
        Start Your Project
      </p>

      <h2 className="text-4xl lg:text-6xl font-bold leading-tight">

        Let’s Build The Future
        <br />

        Together

      </h2>

      <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
        We help startups and businesses create modern,
        scalable, and high-performing digital products
        that deliver real impact.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">

        <button className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 px-10 py-4 rounded-full font-semibold shadow-2xl shadow-blue-500/20">
          Get Started
        </button>

        <button className="border border-white/20 hover:border-cyan-400 hover:bg-white/5 transition-all duration-300 px-10 py-4 rounded-full font-semibold">
          Schedule Call
        </button>

      </div>

    </div>

  </div>

</section>
{/* FOOTER */}

<footer className="relative z-10 border-t border-white/10 mt-24">

  <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

      {/* BRAND */}
      <div>

        <h2 className="text-3xl font-bold mb-6">
          INFOCERA
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Building scalable digital products,
          SaaS platforms, and modern web
          experiences for businesses worldwide.
        </p>

      </div>

      {/* QUICK LINKS */}
      <div>

        <h3 className="text-lg font-semibold mb-6">
          Quick Links
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li className="hover:text-white transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Services
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Portfolio
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>

        </ul>

      </div>

      {/* SERVICES */}
      <div>

        <h3 className="text-lg font-semibold mb-6">
          Services
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li className="hover:text-white transition cursor-pointer">
            Web Development
          </li>

          <li className="hover:text-white transition cursor-pointer">
            SaaS Solutions
          </li>

          <li className="hover:text-white transition cursor-pointer">
            UI/UX Design
          </li>

          <li className="hover:text-white transition cursor-pointer">
            AI Integration
          </li>

        </ul>

      </div>

      {/* CONTACT */}
      <div>

        <h3 className="text-lg font-semibold mb-6">
          Contact
        </h3>

        <ul className="space-y-4 text-gray-400">

          <li>
            hello@infocera.com
          </li>

          <li>
            +91 98765 43210
          </li>

          <li>
            India
          </li>

        </ul>

      </div>

    </div>

    {/* BOTTOM */}
    <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

      <p className="text-gray-500 text-sm">
        © 2026 INFOCERA. All rights reserved.
      </p>

      {/* SOCIALS */}
      <div className="flex gap-5 text-xl">

        <span className="hover:text-blue-400 transition cursor-pointer">
          🌐
        </span>

        <span className="hover:text-pink-400 transition cursor-pointer">
          📸
        </span>

        <span className="hover:text-cyan-400 transition cursor-pointer">
          💼
        </span>

      </div>

    </div>

  </div>

</footer>

    </div>
  )
}

export default App