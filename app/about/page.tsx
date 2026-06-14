import Navbar from "@/components/Navbar";
import Link from "next/link";

const stats = [
  { value: "10k+", label: "Happy Athletes" },
  { value: "84+", label: "Products" },
  { value: "4.9★", label: "Average Rating" },
  { value: "50+", label: "Countries Shipped" },
];

const values = [
  { emoji: "⚡", title: "Performance First", desc: "Every product is engineered for maximum performance. We don't cut corners — your gear shouldn't either." },
  { emoji: "🌱", title: "Sustainably Made", desc: "We use recycled materials and ethical manufacturing. Looking good shouldn't cost the planet." },
  { emoji: "💪", title: "Built for Everyone", desc: "From beginners to elite athletes — FitFusion gear is designed to push every body further." },
  { emoji: "🔬", title: "Lab Tested", desc: "Every fabric, every stitch is tested in real training conditions before it reaches you." },
];

const team = [
  { name: "Alex Rivera", role: "Founder & CEO", emoji: "👨‍💼", bio: "Former Olympic sprinter turned entrepreneur. Built FitFusion to give every athlete access to pro-level gear." },
  { name: "Priya Sharma", role: "Head of Design", emoji: "👩‍🎨", bio: "10 years in sportswear design. Obsessed with the intersection of function and fashion." },
  { name: "Marcus Chen", role: "Head of Technology", emoji: "👨‍💻", bio: "Ex-Nike engineer. Leads all fabric innovation and performance testing at FitFusion." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-1.5 text-lime-400 text-sm mb-6">
            🏋️ Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            WE LIVE FOR
            <br />
            <span className="text-lime-400">THE GRIND.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            FitFusion was born in a garage gym in 2021. We were tired of choosing between gear that looked good and gear that performed. So we built both.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
              <div className="text-4xl font-black text-lime-400 mb-2">{stat.value}</div>
              <div className="text-white/40 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">
              OUR MISSION IS
              <br />
              <span className="text-lime-400">YOUR BEST SELF.</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              We believe the right gear can be the difference between a good workout and a great one. That's why every FitFusion product goes through 6 months of design, testing, and refinement before it reaches your door.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              From compression tees that support your muscles to running shoes that protect your joints — we obsess over the details so you can focus on the gains.
            </p>
            <Link
              href="/products"
              className="bg-lime-400 text-black font-bold px-8 py-3 rounded-full hover:bg-lime-300 transition text-sm tracking-wide inline-block"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-lime-400/10 rounded-3xl blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80"
              alt="Athletes training"
              className="relative rounded-3xl w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3">WHAT WE STAND FOR</h2>
          <p className="text-white/40">The values that drive everything we do</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white/5 border border-white/10 hover:border-lime-400/30 rounded-2xl p-6 transition">
              <div className="text-4xl mb-4">{value.emoji}</div>
              <h3 className="font-bold text-lg mb-3">{value.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black mb-3">MEET THE TEAM</h2>
          <p className="text-white/40">The people behind FitFusion</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-6xl mb-4">{member.emoji}</div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <div className="text-lime-400 text-sm mb-4">{member.role}</div>
              <p className="text-white/40 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 py-16 pb-20">
        <div className="relative bg-lime-400 rounded-3xl p-12 overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-black mb-3">READY TO LEVEL UP?</h2>
            <p className="text-black/60 mb-6">Join 10,000+ athletes who train with FitFusion</p>
            <Link
              href="/products"
              className="bg-black text-white font-bold px-8 py-3 rounded-full hover:bg-black/80 transition inline-block text-sm"
            >
              SHOP NOW
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