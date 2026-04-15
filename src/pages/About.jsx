import React from 'react';

/**
 * About Page Component
 * "Boutique-Luxury" redesign. Focus on massive whitespace, narrative depth, and cinematic visuals.
 */
function About() {
  const values = [
    { title: "Innovation", desc: "We don't just follow trends; we set them. Exploring new technologies to give you a competitive edge.", offset: "mt-0" },
    { title: "Partnership", desc: "We act as an extension of your team, deeply understanding your goals to deliver results that matter.", offset: "mt-24" },
    { title: "Excellence", desc: "Every pixel and line of code is crafted with obsession. Quality is our foundation.", offset: "mt-12" }
  ];

  const team = [
    { name: "John Doe", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600" },
    { name: "Jane Smith", role: "Creative Director", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600" },
    { name: "Mike Johnson", role: "CTO", img: "https://images.unsplash.com/photo-1506794778242-92bb52bd3586?auto=format&fit=crop&q=80&w=600" },
    { name: "Sarah Williams", role: "Head of Strategy", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-50/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-gray-50/50 rounded-full blur-[100px]" />
      </div>

      {/* Cinematic Hero */}
      <header className="relative z-10 min-h-screen flex flex-col justify-start pt-24 px-8 lg:px-24">
        <div className="max-w-[1400px]">
          <h1 className="text-[12vw] lg:text-[10vw] font-semibold text-blue-500 leading-[0.85] tracking-tighter mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
            Design <br />
            <span className="italic">Driven</span> By <br />
            Purpose.
          </h1>
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mt-12 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
            <p className="text-2xl lg:text-3xl text-gray-400 max-w-2xl font-medium leading-tight">
              At Codescape, we combine artistic vision with technical precision to build digital experiences that <span className="text-gray-900">redefine industries</span>.
            </p>
            <div className="flex flex-col items-center gap-4 group cursor-pointer">
              <span className="text-[10px] font-bold text-gray-300 tracking-[0.3em] uppercase group-hover:text-blue-500 transition-colors italic">Scroll to Explore</span>
              <div className="w-[1px] h-24 bg-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-blue-500 animate-scroll-line" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Philosophy Section - "What Is Codescape" */}
      <section className="relative z-10 pt-32 pb-64 px-8 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-4 sticky top-32">
            <h2 className="text-[8vw] lg:text-[6vw] font-bold text-gray-900/5 tracking-tighter leading-none mb-8">01</h2>
            <h3 className="text-4xl font-semibold text-blue-500 tracking-tight leading-tight">Philosophy & <br /><span className="italic">Vision.</span></h3>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <p className="text-4xl lg:text-6xl font-semibold text-gray-900 tracking-tighter leading-[1.1]">
              We specialize in crafting captivating websites, seamless e-commerce solutions, and cutting-edge app developments.
            </p>
            <p className="text-2xl lg:text-3xl text-gray-400 font-medium leading-relaxed max-w-3xl">
              Our passion extends beyond code; it's about transforming ideas into <span className="text-blue-500">immersive digital experiences</span>. Join us on a journey where innovation meets functionality, and your success becomes our mission.
            </p>
            <p className="text-xl lg:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl pt-12 border-t border-gray-100 italic">
              "Your success is not just a goal; it's our commitment. At Codescape, we're not just a service provider; we're your digital partner, dedicated to transforming possibilities into realities."
            </p>
          </div>
        </div>
      </section>

      {/* Staggered Values Section */}
      <section className="relative z-10 py-64 px-8 lg:px-24 bg-[#f8fafc] rounded-[100px] lg:rounded-[160px]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl lg:text-8xl font-semibold text-gray-900 tracking-tighter leading-none">The Foundation of <br />Trust.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {values.map((v, i) => (
              <div key={i} className={`group bg-white p-12 lg:p-16 rounded-[60px] shadow-2xl shadow-blue-500/5 ${v.offset} hover:-translate-y-4 transition-all duration-700`}>
                <span className="text-[10px] font-bold text-gray-300 tracking-[0.4em] uppercase mb-8 block group-hover:text-blue-500 transition-colors italic">0{i+1}</span>
                <h3 className="text-4xl font-semibold text-gray-900 mb-6 tracking-tight">{v.title}</h3>
                <p className="text-xl text-gray-400 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Team Grid */}
      <section className="relative z-10 py-64 px-8 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
            <div>
              <span className="text-xs font-bold tracking-[0.4em] text-blue-500 uppercase mb-8 block italic">Human Capital</span>
              <h2 className="text-6xl lg:text-9xl font-semibold text-gray-900 tracking-tighter leading-none">The <span className="italic">Visionaries</span>.</h2>
            </div>
            <p className="text-2xl text-gray-400 font-medium max-w-md">Our technical hub where creativity meets precision. Open and ready for collaboration.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative rounded-[60px] overflow-hidden aspect-[3/4] mb-8 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-700">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                  <div className="absolute inset-x-0 bottom-0 p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-gray-900/60 to-transparent">
                    <button className="w-full py-4 bg-white text-gray-900 rounded-full font-bold text-sm hover:bg-blue-500 hover:text-white transition-all">View Profile</button>
                  </div>
                </div>
                <h4 className="text-3xl font-semibold text-gray-900 tracking-tight uppercase leading-none mb-2 italic">{member.name}</h4>
                <p className="text-sm font-bold text-gray-300 tracking-[0.2em] uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Finisher */}
      <footer className="relative z-10 py-64 px-8 lg:px-24 bg-gray-900 text-center rounded-t-[100px] lg:rounded-t-[160px]">
        <h2 className="text-6xl lg:text-[10vw] font-semibold text-white tracking-tighter leading-none mb-16">
          Ready to <br /><span className="text-blue-400 italic">Codescape?</span>
        </h2>
        <button className="px-16 py-8 bg-white text-gray-900 rounded-full font-bold text-2xl hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)] transition-all active:scale-95 shadow-2xl">
          Let's Begin
        </button>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scroll-line {
          animation: scroll-line 2s cubic-bezier(0.7, 0, 0.3, 1) infinite;
        }
      `}} />
    </div>
  );
}

export default About;
