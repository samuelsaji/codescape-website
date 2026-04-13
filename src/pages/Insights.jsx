import React, { useState } from 'react';

/**
 * Insights Page Component
 * Combines Featured Case Studies and Fresh Blog Insights.
 */
function Insights() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Development', 'UI/UX Design', 'Mobile Apps', 'Branding', 'Consulting'];

  const caseStudies = [
    {
      title: "Fintech Dashboard Redesign",
      category: "Web Development",
      description: "A complete overhaul of a financial analytics platform focusing on data visualization and user retention.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLfGClWTK0WS939fpVbh35ThAxjqxYbRI_-y2bzNLwiYbnyfodW1l4UdiCriK2JHJIzMaLiyK3tlb-lyLPMRUdT9qtLRKAgPR2BfH7kge3bL-jsP1LSi0Y_51VUSsDx0Ghypgyt16o7QMB3DLc4MchPXT5s32-JLjrrOQMqDzWnDlEvEoeXts40Wdf_qAvuFgZh_lXfgSXawbJSoxMqIcuWjy7awbb_47TexhSDSGmRyil8kZql53JLVuh4pzBOGHCBGWa1Pa3pdQ"
    },
    {
      title: "Eco-Life Store",
      category: "Web Development", // Map 'E-commerce' to Web Development filter
      description: "Sustainable e-commerce platform built with Shopify Plus, featuring custom 3D product configurators.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_m9amkGCVxD2MvTIvXZRyq7smdKAvTOkh8o2FVCLHoZkmsHV0ZQ5ohYvn1RFtiYilCS1vCK2WJ1hAJ-cNrY6IFJJ8WkAgBg8_luwPnEghWNdcOputjn6WcC45E03sgy_iHKHQsb8xUV8HG3LZ4iV2XwMjnEyR0cONfe0ruDd92dzDUkeI41XS_y66eNzTr_SSIV-oWbmT9OqsQJ4lDfnvleT5QbTT7dhG75TwADxs3ZeQLlBnhXtlU9w6nuB8_bEgavDKG87Dhvg"
    },
    {
      title: "Nomad Travel App",
      category: "Mobile Apps",
      description: "An award-winning travel companion app designed for digital nomads to find workspaces worldwide.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtPadYW-nZlSGgGah-Q7SRg2fJm1Dxo8d8TVbZINrRJVyOvee_6Q-F1bWxtOiFKnDmNbaheJzMYUMAYoB0V4jfwU6eipZuQP8vziYWrhNukVljv8LI-g-11wht-VUIw5G4g5jSdVXXpLb9IJCYw5QD7NgLxXQCkWtgV-ogMkG35YzKohnDovneaTtRf3naq7ZV20UE9sZOEGIM1AgOO-YWXZe2lBVc19_IAMfSQMBgh4vpymIWfn5P0mrw5Sf1x3-UwH_-ANf9fAk"
    },
    {
      title: "Apex Corporate Identity",
      category: "Branding",
      description: "Rebranding a Fortune 500 logistics company to reflect speed, reliability, and modern technology.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg4tFHYb1k3kjRyoTB2khJZGmqmZZggr2CFbxPFBy6-wgF0GCKXAsGtCD0h06oEbqK-YMVYGOZRe37roM0BaxNirZ2AepbO28eqAFyqkowNn6ZnzMM9__1NIoHPDr8If2q18HLRGNvoPqgyErNMcnclmr_sF6nM6i-alsIt6HDv3MKPKfHtkndBIrVKdyPNfTZ-007l2dVla7uX-HxyiPJIXlwuj9yqa2NAGSHdeukxiETihWiYOlh6oVdUIohmuWugCc6mktwkAA"
    },
    {
      title: "HealthTech Portal",
      category: "UI/UX Design",
      description: "Patient-centric design system for a telemedicine provider, ensuring accessibility for all age groups.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnyzxLf-WzMjrRT8rD8tcmt1yhV9koZC7q-nqVAO-CIFB1qDGFdxmZ0myGZxxgZb9df8OApn65Ms3kDq3dPEljkZE6KbAVK7V0XyCvYeRvHRG9ha4_uvN5bbvHCf_t7ligYggm2xTtS-BIxWAG_xx-QLM5lOBUJpttTWgyeupr4yMiYehs5g4WiJPpcUjLlLBnA8IBpDpKukR54m4Fmiuo9a4FinVs4sPofVEY2VOwTZlNBixP3MeJjX3tTJJ-ZXXEARS6oVWCLt0"
    },
    {
      title: "StartUp Strategy",
      category: "Consulting",
      description: "Digital transformation roadmap for a Series B funded SaaS startup entering the enterprise market.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRbyqfG-ahoXLEyBMDGlr4t53uJwfiIMLKDEI3KpindUCez4Z77PllchC-6bfa4ettxaOK8vSTA1_QiGOXTQRgydpLqbIEsP_VygQyQpAR00og4ihkXF4T0dhBPHVoYzbDq-IHicSmJoRfu714nWrZ3rpvFH8uVsKdTLzLGHV4OdxyNKTaC2LWhUak5BvnVKFZ2j7o18w6huYXtGRCbfuRBvJtb9fpcakyDysIvZGxNy8XiybouQdVLtP9-M3ZpCEbXlC8eexY6V0"
    }
  ];

  const articles = [
    { title: "The Future of AI in Web Design", date: "May 12, 2026", category: "AI & Tech", img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" },
    { title: "Building Scalable SaaS Products", date: "April 28, 2026", category: "SaaS", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { title: "Design Systems for Global Brands", date: "April 15, 2026", category: "Design", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800" }
  ];

  const filteredProjects = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(p => p.category === activeFilter);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-20 relative z-10 text-center">
          <h1 className="text-7xl md:text-8xl font-semibold text-gray-900 tracking-tight mb-8 leading-none">
            Crafting Digital <span className="text-blue-500 italic">Experiences</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 leading-relaxed">
            Explore our selected works where strategy meets design. We help brands transform their digital presence with modern, scalable solutions.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-12 px-20">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeFilter === filter ? 'bg-gray-900 text-white shadow-xl shadow-gray-200' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
            >
              {filter === 'All' ? 'All Works' : filter}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-32 px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, i) => (
            <article key={i} className="group flex flex-col h-full bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <span className="text-white text-xs font-black tracking-widest uppercase">View Case Study →</span>
                </div>
              </div>
              <div className="flex-1 p-10 flex flex-col">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-400 text-[10px] font-semibold tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-500 transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-gray-500 font-medium text-sm mb-10 flex-1 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-3 group-hover:translate-x-3 transition-transform duration-500">
                  <span className="text-[10px] font-black text-gray-900 uppercase underline decoration-2 underline-offset-8">Read Story</span>
                  <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 px-20 bg-[#f5f5f7] rounded-[100px]">
        <div className="mb-20">
          <h2 className="text-5xl font-semibold text-gray-900 tracking-tight mb-4">Fresh Insights</h2>
          <p className="text-gray-500 leading-relaxed font-medium">Thought leadership and technical deep-dives.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((article, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="rounded-[40px] overflow-hidden aspect-video relative mb-8 shadow-lg">
                <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="px-2">
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-3">{article.date}</p>
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-500 transition-colors">{article.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-20 mt-32 pb-32">
        <div className="relative h-[400px] rounded-[60px] overflow-hidden flex flex-col items-center justify-center">
          <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000" alt="Water Background" className="absolute inset-0 w-full h-full object-cover opacity-90" />
          <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
              Subscribe to our newsletter.
            </h2>
            <p className="text-white/80 leading-relaxed font-medium mb-10 max-w-2xl mx-auto">
              Get the latest insights, news and special offers directly in your inbox.
            </p>
            <form className="flex flex-col md:flex-row items-center justify-center gap-4" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="px-8 py-5 w-full md:w-96 bg-white rounded-full outline-none text-gray-700 placeholder-gray-400 font-medium" />
              <button className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-all shadow-xl active:scale-95 whitespace-nowrap">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Insights;
