"use client";

import Link from "next/link";
import { ShoppingCart, Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { useCartStore } from "@/lib/store";
import CartDrawer from "./CartDrawer";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const getTotalItems = useCartStore((state) => state.getTotalItems);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Zap className="text-lime-400 w-6 h-6" fill="currentColor" />
            <span className="text-xl font-bold tracking-tight">
              Fit<span className="text-lime-400">Fusion</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <Link href="/products" className="hover:text-white transition">All Products</Link>
            <Link href="/products?category=tops" className="hover:text-white transition">Tops</Link>
            <Link href="/products?category=bottoms" className="hover:text-white transition">Bottoms</Link>
            <Link href="/products?category=footwear" className="hover:text-white transition">Footwear</Link>
            <Link href="/products?category=accessories" className="hover:text-white transition">Accessories</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 hover:text-lime-400 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-lime-400 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>

            <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-white/10 px-4 py-4 flex flex-col gap-4 text-sm text-white/70">
            <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-white transition">All Products</Link>
            <Link href="/products?category=tops" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Tops</Link>
            <Link href="/products?category=bottoms" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Bottoms</Link>
            <Link href="/products?category=footwear" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Footwear</Link>
            <Link href="/products?category=accessories" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Accessories</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white transition">About</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-white transition">Contact</Link>
          </div>
        )}
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}