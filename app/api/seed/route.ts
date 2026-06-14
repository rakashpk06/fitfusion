import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

const products = [
  { name: "FlexPro Compression Tee", price: 29.99, category: "tops", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=800&q=80", badge: "Best Seller", description: "Built for high-intensity training, the FlexPro Compression Tee offers superior muscle support and moisture-wicking fabric to keep you dry and focused.", sizes: ["XS", "S", "M", "L", "XL"], rating: 4.8, reviews: 124, stock: 100 },
  { name: "PowerLift Leggings", price: 49.99, category: "bottoms", image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80", badge: "New", description: "Designed for maximum flexibility and comfort during squats and deadlifts. 4-way stretch fabric with a high waistband for core support.", sizes: ["XS", "S", "M", "L", "XL"], rating: 4.9, reviews: 89, stock: 100 },
  { name: "AirMesh Sports Bra", price: 34.99, category: "tops", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=800&q=80", description: "Lightweight and breathable sports bra with AirMesh panels for superior ventilation.", sizes: ["XS", "S", "M", "L"], rating: 4.7, reviews: 67, stock: 100 },
  { name: "StridePro Running Shoes", price: 89.99, category: "footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", badge: "Hot", description: "Engineered for speed and comfort on any terrain. Responsive cushioning and breathable upper.", sizes: ["7", "8", "9", "10", "11", "12"], rating: 4.9, reviews: 203, stock: 100 },
  { name: "CoreGrip Gym Gloves", price: 19.99, category: "accessories", image: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=80", description: "Full palm protection with anti-slip grip technology. Wrist wrap support for heavy lifting.", sizes: ["S/M", "L/XL"], rating: 4.6, reviews: 45, stock: 100 },
  { name: "HydroFlex Water Bottle", price: 24.99, category: "accessories", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=80", badge: "New", description: "1L BPA-free water bottle with time markers. Leak-proof lid and wide mouth for easy filling.", sizes: ["1L"], rating: 4.8, reviews: 156, stock: 100 },
  { name: "TrailBlazer Shorts", price: 39.99, category: "bottoms", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=800&q=80", description: "Lightweight and quick-dry shorts perfect for running, HIIT, and outdoor training.", sizes: ["XS", "S", "M", "L", "XL"], rating: 4.7, reviews: 78, stock: 100 },
  { name: "PowerMesh Tank Top", price: 27.99, category: "tops", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80", description: "Ultra-breathable mesh tank top designed for intense workouts. Relaxed fit with deep armholes.", sizes: ["S", "M", "L", "XL"], rating: 4.5, reviews: 34, stock: 100 },
  { name: "ProLift Gym Bag", price: 59.99, category: "accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80", badge: "New", description: "Spacious 40L gym bag with separate wet/dry compartment, shoe pocket, and laptop sleeve.", sizes: ["One Size"], rating: 4.9, reviews: 112, stock: 100 },
];

export async function GET() {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    return NextResponse.json({ message: "Database seeded successfully!", count: products.length });
  } catch (error: any) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}