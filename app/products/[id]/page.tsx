"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState, use } from "react";
import { useCartStore } from "@/lib/store";

const allProducts = [
  { id: "1", name: "FlexPro Compression Tee", price: 29.99, category: "Tops", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80", badge: "Best Seller", description: "Built for high-intensity training, the FlexPro Compression Tee offers superior muscle support and moisture-wicking fabric to keep you dry and focused.", sizes: ["XS", "S", "M", "L", "XL"], rating: 4.8, reviews: 124 },
  { id: "2", name: "PowerLift Leggings", price: 49.99, category: "Bottoms", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80", badge: "New", description: "Designed for maximum flexibility and comfort during squats and deadlifts. 4-way stretch fabric with a high waistband for core support.", sizes: ["XS", "S", "M", "L", "XL"], rating: 4.9, reviews: 89 },
  { id: "3", name: "AirMesh Sports Bra", price: 34.99, category: "Tops", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80", badge: null, description: "Lightweight and breathable sports bra with AirMesh panels for superior ventilation. Medium support perfect for yoga, pilates and cardio.", sizes: ["XS", "S", "M", "L"], rating: 4.7, reviews: 67 },
  { id: "4", name: "StridePro Running Shoes", price: 89.99, category: "Footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", badge: "Hot", description: "Engineered for speed and comfort on any terrain. Responsive cushioning and a breathable upper make these the perfect all-day training shoe.", sizes: ["7", "8", "9", "10", "11", "12"], rating: 4.9, reviews: 203 },
  { id: "5", name: "CoreGrip Gym Gloves", price: 19.99, category: "Accessories", image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80", badge: null, description: "Full palm protection with anti-slip grip technology. Wrist wrap support for heavy lifting. One size fits most.", sizes: ["S/M", "L/XL"], rating: 4.6, reviews: 45 },
  { id: "6", name: "HydroFlex Water Bottle", price: 24.99, category: "Accessories", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80", badge: "New", description: "1L BPA-free water bottle with time markers to keep you hydrated throughout your workout. Leak-proof lid and wide mouth for easy filling.", sizes: ["1L"], rating: 4.8, reviews: 156 },
  { id: "7", name: "TrailBlazer Shorts", price: 39.99, category: "Bottoms", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=800&q=80", badge: null, description: "Lightweight and quick-dry shorts perfect for running, HIIT, and outdoor training. Built-in liner for extra comfort and support.", sizes: ["XS", "S", "M", "L", "XL"], rating: 4.7, reviews: 78 },
  { id: "8", name: "PowerMesh Tank Top", price: 27.99, category: "Tops", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80", badge: null, description: "Ultra-breathable mesh tank top designed for intense workouts. Relaxed fit with deep armholes for full range of motion.", sizes: ["S", "M", "L", "XL"], rating: 4.5, reviews: 34 },
  { id: "9", name: "ProLift Gym Bag", price: 59.99, category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80", badge: "New", description: "Spacious 40L gym bag with separate wet/dry compartment, shoe pocket, and laptop sleeve. Built for the serious athlete on the go.", sizes: ["One Size"], rating: 4.9, reviews: 112 },
];

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = allProducts.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    addItem({
      id: product!.id,
      name: product!.name,
      price: product!.price,
      image: product!.image,
      size: selectedSize,
      quantity: 1,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (!product) {
    return (
      <main className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link href="/products" className="text-lime-400 hover:underline">
            Back to products
          </Link>
        </div>
      </main>
    );
  }

  const related = allProducts
    .filter((p) => p.category === product.category && p.id !== id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-white/40 mb-8">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition">Products</Link>
          <span>/</span>
          <span className="text-white">{product.name}</span>
        </div>

        {/* Product detail */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-lime-400/5 rounded-3xl blur-3xl" />
            <img
              src={product.image}
              alt={product.name}
              className="relative rounded-3xl w-full h-[500px] object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <div className="text-white/40 text-sm mb-2">{product.category}</div>
            <h1 className="text-4xl font-black mb-4">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? "text-lime-400" : "text-white/20"}>★</span>
                ))}
              </div>
              <span className="text-white/60 text-sm">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-white/60 leading-relaxed mb-8">{product.description}</p>

            {/* Price */}
            <div className="text-4xl font-black text-lime-400 mb-8">${product.price}</div>

            {/* Size selector */}
            <div className="mb-8">
              <div className="text-sm font-medium text-white/60 mb-3">SELECT SIZE</div>
              <div className="flex items-center gap-3 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-lg text-sm transition ${
                      selectedSize === size
                        ? "border-lime-400 text-lime-400 bg-lime-400/10"
                        : "border-white/20 hover:border-lime-400 hover:text-lime-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-white/30 text-xs mt-2">Please select a size</p>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 font-bold py-4 rounded-full transition text-sm tracking-wide ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-lime-400 text-black hover:bg-lime-300"
                }`}
              >
                {added ? "✓ ADDED TO CART!" : "ADD TO CART"}
              </button>
              <button className="p-4 border border-white/20 rounded-full hover:border-lime-400 transition text-xl">
                ♡
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl mb-1">🚚</div>
                <div className="text-xs text-white/40">Free Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">↩️</div>
                <div className="text-xs text-white/40">Easy Returns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="text-xs text-white/40">Authentic</div>
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.id}`}
                  className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-lime-400/30 rounded-2xl overflow-hidden transition"
                >
                  <img src={p.image} alt={p.name} className="w-full h-48 object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-4">
                    <div className="font-semibold group-hover:text-lime-400 transition mb-1">{p.name}</div>
                    <div className="text-lime-400 font-bold">${p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}