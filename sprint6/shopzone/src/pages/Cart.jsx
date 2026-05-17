import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
     <div className="text-center py-20">
  <h1 className="text-4xl font-bold mb-4">
    Your Cart is Empty
  </h1>

  <p className="text-gray-400 mb-6">
    Add some products to get started.
  </p>

  <Link
    to="/shop"
    className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-xl font-medium"
  >
    Browse Products
  </Link>
</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-4"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl"
              />

              <div className="flex-1">
                <h2 className="text-lg font-semibold">
                  {item.title}
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Quantity: {item.quantity}
                </p>

                <p className="text-blue-400 font-bold mt-2">
                  ${item.price}
                </p>
              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-fit">
          <h2 className="text-2xl font-semibold mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between text-lg mb-6">
            <span>Total:</span>
            <span className="font-bold text-blue-400">
              ${totalPrice.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl font-medium">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;