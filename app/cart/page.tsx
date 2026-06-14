"use client";

import Navbar from "@/components/Navbar";
import { useCartStore } from "@/lib/store";
import { Trash2, Plus, Minus, ShoppingBag, Zap } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
          <ShoppingBag className="w-24 h-24 text-white/10 mb-6" />
          <h1 className="text-3xl font-black mb-3">Your cart is empty</h1>
          <p className="text-white/40 mb-8">Looks like you haven't added anything yet</p>
          <Link
            href="/products"
            className="bg-lime-400 text-black font-bold px-8 py-3 rounded-full hover:bg-lime-300 transition text-sm tracking-wide"
          >
            SHOP NOW
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-4xl font-black mb-1">Your Cart</h1>
            <p className="text-white/40">{items.length} item{items.length > 1 ? "s" : ""}</p>
          </div>
          <button
            onClick={clearCart}
            className="text-white/30 hover:text-red-400 text-sm transition"
          >
            Clear all
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-white/30 hover:text-red-400 transition ml-4"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-white/40 text-sm mb-4">Size: {item.size}</div>
                  <div className="flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black flex items-center justify-center transition"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-lime-400 hover:text-black flex items-center justify-center transition"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-lime-400 font-bold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Subtotal</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Shipping</span>
                  <span className="text-lime-400">Free</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span>Tax (8%)</span>
                  <span>${(getTotalPrice() * 0.08).toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between font-black text-xl">
                  <span>Total</span>
                  <span className="text-lime-400">
                    ${(getTotalPrice() * 1.08).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo code */}
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Promo code"
                  className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-lime-400 transition"
                />
                <button className="bg-white/10 hover:bg-lime-400 hover:text-black px-4 py-2 rounded-xl text-sm font-medium transition">
                  Apply
                </button>
              </div>

              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full bg-lime-400 text-black font-bold py-4 rounded-full hover:bg-lime-300 transition text-sm tracking-wide"
              >
                <Zap className="w-4 h-4" fill="currentColor" />
                CHECKOUT
              </Link>

              <Link
                href="/products"
                className="block text-center text-white/40 text-sm mt-4 hover:text-white transition"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}