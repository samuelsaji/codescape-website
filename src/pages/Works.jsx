import React from 'react';

/**
 * Our Works Page Component
 */
function Works() {
  const projects = [
    { title: "Atomized", category: "Web Design", image: "/portfolio_web.png", color: "bg-blue-900" },
    { title: "Mtailor", category: "Graphic Design", image: "/portfolio_graphic.png", color: "bg-orange-800" },
    { title: "Echo", category: "Motion Design", image: "/portfolio_motion.png", color: "bg-green-900" },
    { title: "Pylon", category: "Product Design", image: "/portfolio_brand.png", color: "bg-purple-900" },
    { title: "Cert-Ed", category: "Web Development", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", color: "bg-gray-900" },
    { title: "Tbrew", category: "Branding", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800", color: "bg-red-950" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="px-20 py-24 flex flex-col md:flex-row items-center justify-between gap-16 border-b border-gray-100 mb-24">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-7xl md:text-8xl font-semibold text-gray-900 leading-[0.9] tracking-tighter italic">
            Featured <br /><span className="text-blue-500">Case Studies</span>
          </h1>
        </div>
        <div className="flex-1 max-w-xl">
          <p className="text-2xl text-gray-400 font-medium leading-relaxed">
            Explore our collection of award-winning projects where we pushed the limits of design and technology to deliver exceptional results.
          </p>
        </div>
      </section>

      <div className="px-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div className={`relative aspect-[16/10] ${project.color} rounded-[60px] overflow-hidden mb-8 shadow-2xl transition-transform duration-700 hover:scale-[1.02]`}>
              <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-12">
                <span className="text-xs font-bold text-white/60 uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-5xl font-semibold text-white tracking-tight uppercase leading-none">{project.title}</h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-4">
              <h4 className="text-2xl font-semibold text-gray-900 tracking-tight">{project.title}</h4>
              <div className="flex gap-4">
                <span className="px-4 py-1.5 rounded-full border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Strategy</span>
                <span className="px-4 py-1.5 rounded-full border border-gray-100 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Execution</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grid CTA */}
      <section className="px-20 mt-40 pb-32">
        <div className="relative h-[500px] rounded-[80px] overflow-hidden flex flex-col items-center justify-center shadow-2xl shadow-blue-500/5">
          <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000" alt="Water Background" className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="relative z-10 text-center px-8">
            <h2 className="text-6xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-12 max-w-4xl mx-auto">
              Ready to build something <span className="text-blue-300 italic">extraordinary</span>?
            </h2>
            <button className="px-14 py-7 bg-white text-gray-900 rounded-full font-bold text-xl hover:bg-black hover:text-white transition-all active:scale-95 shadow-2xl">
              Start a project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Works;
