import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center py-20">
        Loading product...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-400">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-400 leading-relaxed mb-6">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-blue-400 mb-6">
            ${product.price}
          </p>

         <button
  onClick={() => addToCart(product)}
  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-medium"
>
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;