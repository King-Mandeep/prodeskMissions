import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-blue-400 uppercase tracking-[4px] text-sm mb-4">
            Welcome to ShopZone
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Discover Amazing Products at Great Prices
          </h1>

          <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-xl">
            Browse thousands of quality products and enjoy a seamless shopping experience.
          </p>

          <div className="mt-8">
            <Link
              to="/shop"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-medium"
            >
              Start Shopping
            </Link>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              📱 Electronics
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              👕 Fashion
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              🏠 Home
            </div>
            <div className="bg-slate-800 rounded-2xl p-6 text-center">
              💄 Beauty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;