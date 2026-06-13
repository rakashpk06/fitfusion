import Navbar from "@/components/Navbar";
import Link from "next/link";

const allProducts = [
  { id: "1", name: "FlexPro Compression Tee", price: 29.99, category: "tops", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80", badge: "Best Seller" },
  { id: "2", name: "PowerLift Leggings", price: 49.99, category: "bottoms", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80", badge: "New" },
  { id: "3", name: "AirMesh Sports Bra", price: 34.99, category: "tops", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&q=80", badge: null },
  { id: "4", name: "StridePro Running Shoes", price: 89.99, category: "footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80", badge: "Hot" },
  { id: "5", name: "CoreGrip Gym Gloves", price: 19.99, category: "accessories", image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=400&q=80", badge: null },
  { id: "6", name: "HydroFlex Water Bottle", price: 24.99, category: "accessories", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80", badge: "New" },
  { id: "7", name: "TrailBlazer Shorts", price: 39.99, category: "bottoms", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80", badge: null },
  { id: "8", name: "PowerMesh Tank Top", price: 27.99, category: "tops", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80", badge: null },
  { id: "9", name: "ProLift Gym Bag", price: 59.99, category: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80", badge: "New" },
];

const categories = ["all", "tops", "bottoms", "footwear", "accessories"];

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const active = searchParams.category || "all";
  const filtered = active === "all"
    ? allProducts
    : allProducts.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-28 pb-20">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-black mb-2">All Products</h1>
          <p className="text-white/40">Gear up for your best performance</p>
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <Link
              key={cat}
              href={cat === "all" ? "/products" : `/products?category=${cat}`}
              className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition border ${
                active === cat
                  ? "bg-lime-400 text-black border-lime-400"
                  : "border-white/20 text-white/60 hover:border-white/50 hover:text-white"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
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
                <div className="text-white/40 text-xs mb-1 capitalize">{product.category}</div>
                <div className="font-semibold text-white group-hover:text-lime-400 transition mb-3">
                  {product.name}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lime-400 font-bold text-lg">${product.price}</span>
                  <span className="text-xs bg-white/10 hover:bg-lime-400 hover:text-black px-4 py-1.5 rounded-full transition font-medium">
                    Add to Cart
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-white/30">
            <div className="text-5xl mb-4">🔍</div>
            <div className="text-xl">No products found</div>
          </div>
        )}
      </div>
    </main>
  );
}