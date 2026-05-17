import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">
          {product.title}
        </h3>

        <p className="text-gray-400 text-sm mt-2 line-clamp-2">
          {product.description}
        </p>

        <p className="text-blue-400 font-bold mt-4">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;