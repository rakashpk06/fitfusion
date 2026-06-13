import Navbar from "@/components/Navbar";
import Link from "next/link";

const featuredProducts = [
  {
    id: "1",
    name: "FlexPro Compression Tee",
    price: 29.99,
    category: "Tops",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "PowerLift Leggings",
    price: 49.99,
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80",
    badge: "New",
  },
  {
    id: "3",
    name: "AirMesh Sports Bra",
    price: 34.99,
    category: "Tops",
    image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&q=80",
    badge: null,
  },
  {
    id: "4",
    name: "StridePro Running Shoes",
    price: 89.99,
    category: "Footwear",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
    badge: "Hot",
  },
  {
    id: "5",
    name: "CoreGrip Gym Gloves",
    price: 19.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&q=80",
    badge: null,
  },
  {
    id: "6",
    name: "HydroFlex Water Bottle",
    price: 24.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80",
    badge: "New",
  },
];

const categories = [
  { name: "Tops", emoji: "👕", count: "24 items" },
  { name: "Bottoms", emoji: "👖", count: "18 items" },
  { name: "Footwear", emoji: "👟", count: "12 items" },
  { name: "Accessories", emoji: "🎒", count: "30 items" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/10 via-transparent to-transparent" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center pt-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-1.5 text-lime-400 text-sm mb-6">
              <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
              New collection dropped
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tight mb-6">
              TRAIN
              <br />
              <span className="text-lime-400">HARDER.</span>
              <br />
              LOOK
              <br />
              <span className="text-white/30">BETTER.</span>
            </h1>
            <p className="text-white/50 text-lg mb-8 max-w-md">
              Premium gym & activewear built for performance. From compression tees to running shoes — gear up for your best workout.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/products"
                className="bg-lime-400 text-black font-bold px-8 py-3 rounded-full hover:bg-lime-300 transition text-sm tracking-wide"
              >
                SHOP NOW
              </Link>
              <Link
                href="/products?category=new"
                className="border border-white/20 text-white px-8 py-3 rounded-full hover:border-white/50 transition text-sm"
              >
                New Arrivals
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-lime-400">10k+</div>
                <div className="text-white/40 text-xs mt-1">Happy Athletes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-400">84+</div>
                <div className="text-white/40 text-xs mt-1">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-lime-400">4.9★</div>
                <div className="text-white/40 text-xs mt-1">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-lime-400/20 rounded-3xl blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80"
              alt="FitFusion Hero"
              className="relative rounded-3xl w-full object-cover h-[600px]"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/10">
              <div className="text-xs text-white/50 mb-1">Featured Product</div>
              <div className="font-semibold">FlexPro Compression Tee</div>
              <div className="text-lime-400 font-bold mt-1">$29.99</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
        <p className="text-white/40 mb-8">Find exactly what you need</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.name.toLowerCase()}`}
              className="bg-white/5 hover:bg-lime-400/10 border border-white/10 hover:border-lime-400/30 rounded-2xl p-6 text-center transition group"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <div className="font-semibold group-hover:text-lime-400 transition">{cat.name}</div>
              <div className="text-white/40 text-sm mt-1">{cat.count}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-10 pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-white/40">Top picks for your training</p>
          </div>
          <Link
            href="/products"
            className="text-lime-400 text-sm hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-lime-400/30 rounded-2xl overflow-hidden transition"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <div className="text-white/40 text-xs mb-1">{product.category}</div>
                <div className="font-semibold text-white group-hover:text-lime-400 transition mb-3">
                  {product.name}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lime-400 font-bold text-lg">
                    ${product.price}
                  </span>
                  <span className="text-xs bg-white/10 hover:bg-lime-400 hover:text-black px-4 py-1.5 rounded-full transition font-medium">
                    Add to Cart
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="relative bg-lime-400 rounded-3xl p-12 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-black mb-3">GET 20% OFF YOUR FIRST ORDER</h2>
            <p className="text-black/60 mb-6">Use code FITFUSION20 at checkout</p>
            <Link
              href="/products"
              className="bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-black/80 transition inline-block text-sm"
            >
              CLAIM OFFER
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 text-center text-white/30 text-sm">
        © 2026 FitFusion. Built with Next.js & AI.
      </footer>
    </main>
  );
}