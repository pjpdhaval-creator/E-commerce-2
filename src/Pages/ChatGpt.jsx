// import React from "react";
// // These imports are essential for the code to run
// import { Search, ShoppingBag, Heart } from "lucide-react";

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen w-full bg-[#f4f3ea] p-4 md:p-8 font-sans text-gray-900">
//       {/* 1. Navbar Section */}
//       <nav className="w-full mb-8">
//         <div className="max-w-[1600px] mx-auto bg-white/70 backdrop-blur-md rounded-full p-2 flex items-center justify-between shadow-sm border border-white">
//           {/* Logo */}
//           <div className="flex items-center gap-2 pl-6 pr-8 border-r border-gray-200">
//             <div className="bg-black text-white p-1 rounded-md">
//               <svg
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="4 20 4 4 20 20 20 4"></polyline>
//               </svg>
//             </div>
//             <span className="text-xl font-bold tracking-tight">nitec.</span>
//           </div>

//           {/* Search Bar */}
//           <div className="flex-1 max-w-2xl px-4 hidden md:block">
//             <div className="relative flex items-center bg-white rounded-full px-5 py-2 shadow-inner border border-gray-100">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 className="w-full bg-transparent outline-none text-sm py-1"
//               />
//               <button className="bg-black text-white p-2 rounded-full absolute right-1 hover:scale-105 transition-transform">
//                 <Search size={16} />
//               </button>
//             </div>
//           </div>

//           {/* Profile & Actions */}
//           <div className="flex items-center gap-3 pr-2">
//             <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
//               <ShoppingBag size={18} />
//             </button>
//             <button className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
//               <Heart size={18} className="text-red-500 fill-red-500" />
//             </button>
//             <div className="flex items-center gap-3 bg-white rounded-full py-1 pl-4 pr-1 shadow-sm border border-gray-100 ml-2">
//               <span className="text-sm font-semibold hidden sm:block">
//                 Ryman Alex
//               </span>
//               <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
//                 <img
//                   src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ryman"
//                   alt="User"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* 2. Main Content Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mx-auto max-w-[1600px]">
//         {/* Left Column */}
//         <div className="lg:col-span-8 flex flex-col gap-6">
//           {/* Hero Section */}
//           <div className="bg-[#fdfdfb] rounded-[2.5rem] p-8 md:p-12 relative flex flex-col justify-between overflow-hidden shadow-sm min-h-[480px]">
//             <div className="z-10 w-full md:w-1/2">
//               <span className="inline-block px-4 py-1.5 bg-gray-100 rounded-full text-xs text-gray-500 mb-6 font-medium">
//                 ⊞ Music is Classic
//               </span>
//               <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
//                 Sequoia Inspiring
//                 <br />
//                 Musico.
//               </h1>

//               <div className="flex items-center gap-6 mb-12">
//                 <span className="text-6xl font-light text-gray-200">01</span>
//                 <div className="h-px bg-gray-200 w-16"></div>
//                 <div>
//                   <h3 className="font-bold text-gray-900">Clear Sounds</h3>
//                   <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed">
//                     Making your dream music come true stay with Sequios Sounds!
//                   </p>
//                 </div>
//               </div>

//               <button className="flex items-center gap-3 bg-[#cbfb45] hover:bg-[#bdf034] text-black px-8 py-4 rounded-full font-bold shadow-lg transition-all hover:-translate-y-1">
//                 View All Products
//                 <span className="bg-black text-white p-1.5 rounded-full">
//                   <Search size={14} className="rotate-90" />
//                 </span>
//               </button>
//             </div>

//             {/* Product Image */}
//             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-[55%] flex justify-end items-center pointer-events-none">
//               {/* Replace with your local image: /p1.png */}
//               <img
//                 src="/public/p1.png"
//                 alt="Headphones"
//                 className="w-full h-120 object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
//               />
//             </div>
//           </div>

//           {/* Bottom Row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-[2rem] p-6 shadow-sm relative group cursor-pointer">
//               <h3 className="font-bold text-lg">More Products</h3>
//               <p className="text-sm text-gray-400 mb-6">460 plus items.</p>
//               <div className="flex gap-3">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
//                   >
//                     <img
//                       src={`https://placehold.co/100?text=${i}`}
//                       alt="item"
//                     />
//                   </div>
//                 ))}
//               </div>
//               <Heart
//                 size={18}
//                 className="absolute top-6 right-6 text-red-500 fill-red-500"
//               />
//             </div>

//             <div className="bg-[#fdfdfb] rounded-[2rem] p-6 flex flex-col items-center justify-center shadow-sm">
//               <div className="w-28 h-28 bg-blue-600 rounded-full flex flex-col items-center justify-center text-white relative mb-4 ring-8 ring-blue-50">
//                 <span className="text-2xl font-black">5m+</span>
//                 <span className="text-[10px] uppercase tracking-widest opacity-80">
//                   Downloads
//                 </span>
//               </div>
//               <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-50 text-sm font-bold">
//                 <span className="text-yellow-400">★</span> 4.6 reviews
//               </div>
//             </div>

//             <div className="bg-[#fdfdfb] rounded-[2rem] p-6 relative overflow-hidden shadow-sm group">
//               <span className="inline-block px-2 py-1 bg-red-50 text-red-500 rounded text-[10px] font-bold mb-3 uppercase tracking-tighter">
//                 Popular
//               </span>
//               <h3 className="font-bold text-lg leading-tight">
//                 Listening Has
//                 <br />
//                 Been Released
//               </h3>
//               <div className="absolute -right-4 -bottom-4 w-32 h-32 rotate-12 group-hover:rotate-0 transition-transform">
//                 <img
//                   src="https://placehold.co/200x200/222/fff?text=Lens"
//                   className="rounded-2xl shadow-xl"
//                   alt="Lens"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="lg:col-span-4 flex flex-col gap-6">
//           <div className="bg-white rounded-[2rem] p-8 shadow-sm">
//             <h3 className="font-bold text-gray-900 mb-6">Popular Colors</h3>
//             <div className="flex justify-between items-center">
//               {[
//                 "bg-blue-500",
//                 "bg-orange-400",
//                 "bg-green-500",
//                 "bg-red-500",
//                 "bg-cyan-400",
//               ].map((color, i) => (
//                 <div
//                   key={i}
//                   className={`w-10 h-10 rounded-full ${color} cursor-pointer hover:scale-110 transition-transform shadow-md ${
//                     i === 0 ? "ring-4 ring-blue-100" : ""
//                   }`}
//                 ></div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-[#fdfdfb] rounded-[2rem] p-8 shadow-sm relative overflow-hidden h-[240px] group">
//             <div className="z-10 relative">
//               <h3 className="font-bold text-2xl mb-2">
//                 New Gen
//                 <br />
//                 X-Bud
//               </h3>
//               <button className="bg-white p-3 rounded-full shadow-md mt-4 group-hover:bg-black group-hover:text-white transition-colors">
//                 <Search size={20} className="rotate-90" />
//               </button>
//             </div>
//             <img
//               src="https://i.pinimg.com/1200x/a5/1f/93/a51f93b3bdbcd0ce3cc3a7bacdac7475.jpg"
//               className="absolute right-0 top-0 w-2/3 h-80 object-cover group-hover:scale-110 transition-transform duration-500 " 
//               alt="Earbuds"
//             />
//           </div>

//           <div className="bg-white rounded-[2rem] shadow-sm relative overflow-hidden flex-1 min-h-[550px] group">
//             <img
//               src="/public/image.png"
//               className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//               alt="VR"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white via-white/80 to-transparent">
//               <h3 className="font-bold text-2xl leading-tight mb-2">
//                 Light Grey Surface
//                 <br />
//                 Headphone
//               </h3>
//               <p className="text-sm text-gray-400 font-medium">
//                 Boosted with bass technology
//               </p>
//             </div>
//             <button className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg">
//               <Search size={20} className="rotate-90" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
