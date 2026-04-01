import React from "react";
import { Truck, CreditCard, Headphones } from "lucide-react";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* Top Bar */}
      <div className="bg-[#5a1f0f] text-white text-[11px] py-2 text-center">
        Support: (406) 555-0120
        <span className="mx-4 opacity-40">|</span>
        Sign up and <span className="font-bold text-orange-400">GET 25% OFF</span>
      </div>

      {/* Header */}
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">About Us</h1>
        <p className="text-sm text-gray-400">Home / About Us</p>
      </div>

      {/* Story */}
      <section className="max-w-5xl mx-auto px-6 text-center mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Our Story
        </span>

        <h2 className="text-4xl font-bold mt-4 mb-6">
          Crafted with Care: Fine Materials, Thoughtful Design
        </h2>

        <p className="text-slate-500 text-sm max-w-3xl mx-auto mb-8">
          We are a modern eCommerce platform delivering quality products with
          trust and style. Our mission is to make your shopping experience smooth,
          fast, and enjoyable.
        </p>

        <p className="text-2xl italic text-[#5a1f0f] font-serif">
          Dhaval Patel
        </p>
        <p className="text-xs text-slate-400 uppercase">Founder</p>

        {/* Images */}
        <div className="grid md:grid-cols-2 gap-4 mt-12">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80"
            className="w-full h-[400px] object-cover rounded-md"
            alt=""
          />

          <div className="grid grid-rows-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
              className="w-full h-[190px] object-cover rounded-md"
              alt=""
            />
            <img
              src="https://images.unsplash.com/photo-1773698403328-e6891737b7dd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full h-[190px] object-cover rounded-md"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f3bc65] py-12 mb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 text-center gap-6">
          <Stat number="25+" label="Years" />
          <Stat number="180+" label="Stores" />
          <Stat number="100K+" label="Customers" />
          <Stat number="35+" label="Awards" />
          <Stat number="98%" label="Satisfied" />
        </div>
      </section>

      {/* Product Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-24">
        <img
          src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80"
          className="w-full h-[450px] object-cover rounded-md"
          alt=""
        />

        <div>
          <h2 className="text-3xl font-bold mb-4">
            We Make Things Comfy, Pretty, and Fancy
          </h2>

          <p className="text-slate-500 text-sm mb-6">
            Our products are crafted with premium materials and designed for
            comfort and style.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <Feature title="100% Cotton" />
            <Feature title="Breathable Fabric" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6 text-center mb-24">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <TeamCard
            name="Arlene McCoy"
            role="Designer"
            img="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80" 
              />
          <TeamCard
            name="Bessie Cooper"
            role="CEO"
            img="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
          />
          <TeamCard
            name="Jenny Wilson"
            role="Developer"
            img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
          />
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 py-12 border-t">
        <IconBox icon={<Truck />} title="Free Shipping" />
        <IconBox icon={<CreditCard />} title="Secure Payment" />
        <IconBox icon={<Headphones />} title="24/7 Support" />
      </section>

    </div>
  );
}

/* COMPONENTS */

function Stat({ number, label }) {
  return (
    <div>
      <p className="text-2xl font-bold">{number}</p>
      <p className="text-xs uppercase">{label}</p>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-xs text-slate-400">
        Premium quality material for better comfort.
      </p>
    </div>
  );
}

function TeamCard({ name, role, img }) {
  return (
    <div>
      <img
        src={img}
        className="w-full h-[300px] object-cover rounded-md mb-3"
        alt={name}
      />
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm text-gray-400">{role}</p>
    </div>
  );
}

function IconBox({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-orange-500">{icon}</div>
      <h4 className="font-semibold">{title}</h4>
    </div>
  );
}