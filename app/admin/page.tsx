"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Trash2, Edit, Package, TrendingUp, ShoppingBag, Star, X, Save } from "lucide-react";

interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  badge?: string;
  description: string;
  sizes: string[];
  rating: number;
  reviews: number;
  stock: number;
}

const emptyProduct = {
  name: "",
  price: 0,
  category: "tops",
  image: "",
  badge: "",
  description: "",
  sizes: [] as string[],
  rating: 0,
  reviews: 0,
  stock: 100,
};

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [form, setForm] = useState(emptyProduct);
  const [saving, setSaving] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const categories = ["tops", "bottoms", "footwear", "accessories"];
  const allSizes = ["XS", "S", "M", "L", "XL", "XXL", "7", "8", "9", "10", "11", "12", "S/M", "L/XL", "1L", "One Size"];

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
    setLoading(false);
  };

  const handleEdit = (product: Product) => {
    setEditProduct(product);
    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.image,
      badge: product.badge || "",
      description: product.description,
      sizes: product.sizes,
      rating: product.rating,
      reviews: product.reviews,
      stock: product.stock,
    });
    setShowForm(true);
  };

  const handleNew = () => {
    setEditProduct(null);
    setForm(emptyProduct);
    setShowForm(true);
  };

  const handleSave = async () => {
    setSaving(true);
    const method = editProduct ? "PUT" : "POST";
    const url = editProduct ? `/api/products/${editProduct._id}` : "/api/products";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    setShowForm(false);
    fetchProducts();
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setDeleteId(null);
    fetchProducts();
  };

  const toggleSize = (size: string) => {
    setForm((f) => ({
      ...f,
      sizes: f.sizes.includes(size)
        ? f.sizes.filter((s) => s !== size)
        : [...f.sizes, size],
    }));
  };

  const stats = [
    { label: "Total Products", value: products.length, icon: <Package className="w-5 h-5" />, color: "text-lime-400" },
    { label: "Categories", value: 4, icon: <ShoppingBag className="w-5 h-5" />, color: "text-blue-400" },
    { label: "Avg Rating", value: products.length ? (products.reduce((a, p) => a + p.rating, 0) / products.length).toFixed(1) : 0, icon: <Star className="w-5 h-5" />, color: "text-yellow-400" },
    { label: "Total Reviews", value: products.reduce((a, p) => a + p.reviews, 0), icon: <TrendingUp className="w-5 h-5" />, color: "text-purple-400" },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lime-400 font-black text-xl">⚡ FitFusion</Link>
          <span className="text-white/20">|</span>
          <span className="text-white/60 text-sm">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-white/40 hover:text-white text-sm transition">← Back to store</Link>
          <button
            onClick={handleNew}
            className="flex items-center gap-2 bg-lime-400 text-black font-bold px-4 py-2 rounded-full text-sm hover:bg-lime-300 transition"
          >
            <Plus className="w-4 h-4" />
            Add Product
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className={`${stat.color} mb-3`}>{stat.icon}</div>
              <div className="text-2xl font-black mb-1">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Products table */}
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <h2 className="font-bold text-lg">All Products</h2>
            <span className="text-white/40 text-sm">{products.length} products</span>
          </div>

          {loading ? (
            <div className="text-center py-20 text-white/40">Loading products...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 text-white/40 text-xs uppercase">
                    <th className="text-left px-6 py-3">Product</th>
                    <th className="text-left px-6 py-3">Category</th>
                    <th className="text-left px-6 py-3">Price</th>
                    <th className="text-left px-6 py-3">Stock</th>
                    <th className="text-left px-6 py-3">Rating</th>
                    <th className="text-left px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="border-b border-white/5 hover:bg-white/3 transition">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={product.image} alt={product.name} className="w-12 h-12 rounded-xl object-cover" />
                          <div>
                            <div className="font-medium text-sm">{product.name}</div>
                            {product.badge && (
                              <span className="text-xs bg-lime-400/20 text-lime-400 px-2 py-0.5 rounded-full">{product.badge}</span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-white/60 text-sm capitalize">{product.category}</td>
                      <td className="px-6 py-4 text-lime-400 font-bold">${product.price}</td>
                      <td className="px-6 py-4 text-white/60 text-sm">{product.stock}</td>
                      <td className="px-6 py-4 text-white/60 text-sm">⭐ {product.rating}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="p-2 hover:bg-white/10 rounded-lg transition text-white/60 hover:text-white"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteId(product._id)}
                            className="p-2 hover:bg-red-400/10 rounded-lg transition text-white/60 hover:text-red-400"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h2 className="font-bold text-lg">{editProduct ? "Edit Product" : "Add New Product"}</h2>
              <button onClick={() => setShowForm(false)} className="text-white/40 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-sm text-white/50 mb-1 block">Product Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 transition"
                    placeholder="e.g. FlexPro Compression Tee"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-1 block">Price ($)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: parseFloat(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 transition"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-1 block">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 transition text-white"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c} className="bg-[#111]">{c}</option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-white/50 mb-1 block">Image URL</label>
                  <input
                    value={form.image}
                    onChange={(e) => setForm({ ...form, image: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 transition"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-1 block">Badge (optional)</label>
                  <input
                    value={form.badge}
                    onChange={(e) => setForm({ ...form, badge: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 transition"
                    placeholder="e.g. New, Hot, Best Seller"
                  />
                </div>
                <div>
                  <label className="text-sm text-white/50 mb-1 block">Stock</label>
                  <input
                    type="number"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: parseInt(e.target.value) })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 transition"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-white/50 mb-1 block">Description</label>
                  <textarea
                    rows={3}
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-lime-400 transition resize-none"
                    placeholder="Product description..."
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-sm text-white/50 mb-2 block">Sizes</label>
                  <div className="flex flex-wrap gap-2">
                    {allSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-xs border transition ${
                          form.sizes.includes(size)
                            ? "bg-lime-400 text-black border-lime-400 font-bold"
                            : "border-white/20 text-white/60 hover:border-white/40"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setShowForm(false)}
                  className="flex-1 border border-white/20 py-3 rounded-full text-sm hover:border-white/40 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="flex-1 bg-lime-400 text-black font-bold py-3 rounded-full text-sm hover:bg-lime-300 transition flex items-center justify-center gap-2"
                >
                  <Save className="w-4 h-4" />
                  {saving ? "Saving..." : editProduct ? "Update Product" : "Add Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirmation */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 max-w-sm w-full text-center">
            <div className="text-4xl mb-4">🗑️</div>
            <h3 className="font-bold text-lg mb-2">Delete Product?</h3>
            <p className="text-white/40 text-sm mb-6">This action cannot be undone.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 border border-white/20 py-3 rounded-full text-sm hover:border-white/40 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteId)}
                className="flex-1 bg-red-500 text-white font-bold py-3 rounded-full text-sm hover:bg-red-400 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}