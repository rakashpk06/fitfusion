"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email Us",
      value: "support@fitfusion.com",
      desc: "We reply within 24 hours",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      desc: "Mon–Fri, 9am–6pm EST",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      value: "123 Fitness Ave, NY 10001",
      desc: "Our flagship store",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Working Hours",
      value: "Mon–Fri: 9am–6pm",
      desc: "Weekend: 10am–4pm",
    },
  ];

  const faqs = [
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping is available at checkout for 1-2 day delivery." },
    { q: "What is your return policy?", a: "We offer free returns within 30 days of purchase. Items must be unworn and in original packaging." },
    { q: "Do you ship internationally?", a: "Yes! We ship to 50+ countries worldwide. International shipping takes 7-14 business days." },
    { q: "How do I find my size?", a: "Check our size guide on each product page. When in doubt, size up — our compression wear runs slightly small." },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/20 rounded-full px-4 py-1.5 text-lime-400 text-sm mb-6">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            WE'D LOVE TO
            <br />
            <span className="text-lime-400">HEAR FROM YOU.</span>
          </h1>
          <p className="text-white/40 text-lg">
            Have a question, feedback, or just want to say hi? We're always here for our athletes.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactInfo.map((info) => (
            <div key={info.title} className="bg-white/5 border border-white/10 hover:border-lime-400/30 rounded-2xl p-6 transition">
              <div className="text-lime-400 mb-3">{info.icon}</div>
              <div className="font-semibold mb-1">{info.title}</div>
              <div className="text-white text-sm font-medium mb-1">{info.value}</div>
              <div className="text-white/40 text-xs">{info.desc}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <h2 className="text-3xl font-black mb-2">Send a Message</h2>
            <p className="text-white/40 mb-8">Fill out the form and we'll get back to you shortly.</p>

            {submitted ? (
              <div className="bg-lime-400/10 border border-lime-400/30 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-2xl font-black text-lime-400 mb-2">Message Sent!</h3>
                <p className="text-white/50">Thanks for reaching out! We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-lime-400 text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/50 mb-2 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/50 mb-2 block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@email.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-white/50 mb-2 block">Subject</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition text-white/70"
                  >
                    <option value="" disabled className="bg-[#111]">Select a subject</option>
                    <option value="order" className="bg-[#111]">Order Issue</option>
                    <option value="return" className="bg-[#111]">Returns & Refunds</option>
                    <option value="product" className="bg-[#111]">Product Question</option>
                    <option value="shipping" className="bg-[#111]">Shipping</option>
                    <option value="other" className="bg-[#111]">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-white/50 mb-2 block">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-lime-400 transition placeholder:text-white/20 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-lime-400 text-black font-bold py-4 rounded-full hover:bg-lime-300 transition text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      SEND MESSAGE
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-black mb-2">FAQs</h2>
            <p className="text-white/40 mb-8">Quick answers to common questions.</p>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white/5 border border-white/10 hover:border-lime-400/20 rounded-2xl p-6 transition">
                  <h3 className="font-semibold mb-2 text-lime-400">{faq.q}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-10 text-center text-white/30 text-sm">
        © 2026 FitFusion. Built with Next.js & AI.
      </footer>
    </main>
  );
}