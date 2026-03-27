import { useRef, useState, useEffect } from 'react'
import './App.css'

/**
 * Main Application Component
 * Manages the global layout, navigation, and section orchestration.
 */
function App() {
  // Forced update to sync marquee animation: 2026-03-27T08:35
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <nav className="flex items-center justify-between px-20 py-4 bg-white border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Awesomic Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Center Nav Links */}
        <ul className="flex items-center gap-6 list-none">
          <li><a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">Our Work</a></li>
          <li><a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">Insights</a></li>
          <li>
            <a href="#" className="flex items-center gap-1 text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">
              <span className="text-red-500"></span> Careers
            </a>
          </li>
          <li><a href="#" className="text-sm text-gray-700 font-medium hover:text-gray-900 transition-colors">About us</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <a href="#" className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
            Contact Us
          </a>
        </div>
      </nav>

      <main className="px-20 py-20 flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="flex-1 max-w-2xl">
          <div className="flex flex-wrap gap-3 mb-8">
            {/* <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full">
              <div className="w-5 h-5 bg-[#FF6600] rounded flex items-center justify-center text-[10px] text-white font-bold">Y</div>
              <span className="text-xs font-medium text-gray-600">Backed by Y Combinator</span>
            </div>*/}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-100 rounded-full">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-xs font-medium text-gray-600">4.9 <span className="text-green-500">★</span> 4.9</span>
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-semibold text-gray-900 leading-[1.1] tracking-tight">
            Where <span className="text-gray-400">Creativity</span> Meets Technology
          </h1>
        </div >
        <div className="flex-1 max-w-xl">
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">
            We believe that a well establised Digital presence is the cornerstone of any successful online presence. We are passionate about creating stunning and functional Websites and Applications that not only capture attention but also drive results for our clients.
            {/* <span className="inline-flex -space-x-2 mx-2 align-middle">
              <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/30?u=1" alt="" /></div>
              <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/30?u=2" alt="" /></div>
              <div className="w-6 h-6 rounded-full bg-gray-400 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/30?u=3" alt="" /></div>
            </span> talent and get your projects delivered.*/}
          </p>
          <div className="bg-white p-2 pl-6 border border-gray-100 rounded-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center gap-4 max-w-md">
            <input type="text" placeholder="Email address" className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm" />
            <button className="px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-black transition-all shadow-lg active:scale-95 whitespace-nowrap">Contact Us</button>
          </div>
        </div>
      </main >

      {/* Logo Marquee Section */}
      < section className="py-12 border-t border-gray-100 overflow-hidden bg-white" >
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center w-max">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-16 items-center">
              <LogoItem icon="pentagon" text="PENTAGON" />
              <LogoItem icon="diamond" text="CERT-ED" />
              <LogoItem icon="rocket" text="HAIER INC" />
              <LogoItem icon="lightning" text="UNWIND" />
              <LogoItem icon="cube" text="TBREW" />
              <LogoItem icon="circle" text="SJA KOCHI" />
              <LogoItem icon="shield" text="ORION ACADEMY" />
            </div>
          ))}
        </div>
      </section >

      {/* Portfolio Horizontal Scroll Section */}
      < HorizontalScrollSection >
        <PortfolioCard title="Web & product" image="/portfolio_web.png" tags={["Web", "UX/UI design", "Mobile app"]} />
        <PortfolioCard title="Graphic design & marketing material" image="/portfolio_graphic.png" tags={["Social media creative", "Banners", "Pitch decks", "Packaging"]} />
        <PortfolioCard title="Motion design & video production" image="/portfolio_motion.png" tags={["Animated videos", "2D/3D motion", "AI video", "Editing"]} hasVideo={true} />
        <PortfolioCard title="Brand identity" image="/portfolio_brand.png" tags={["Logo design", "Brand guidelines", "Stationery"]} />
      </HorizontalScrollSection >

      {/* Why Teams Choose Section */}
      < section className="py-24 px-20 bg-white" >
        <h2 className="text-5xl font-semibold text-center text-gray-900 mb-16">Why teams choose Codescape</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">
          <div className="flex flex-col gap-6">
            <StatsBlock title="4 000+" subtitle="Customers" logos={["Coca-Cola", "Disney", "GENESIS", "Udemy"]} icon={<UsersIcon />} />
            <PortraitBlock title="Vetted 0.82% talent" image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" />
            <ImageBlock title="Match with talents within 24 hours" image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" />
          </div>
          <div className="flex flex-col">
            <div className="group relative bg-[#f5f5f7] rounded-[40px] overflow-hidden h-full min-h-[700px]">
              <div className="p-8 flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?u=marty" alt="Marty" className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold text-gray-900">Marty Kausas</h4>
                  <p className="text-xs text-gray-500">Founder of <span className="text-[#FF6600] font-bold">Pylon Y</span> (W23)</p>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" alt="Marty" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/60 to-transparent">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <TagsBlock title="20,000+" subtitle="Projects completed" tags={["Motion", "Brand identity", "Product design", "Presentation", "Email marketing", "Analytics", "Marketing", "Software development", "Frontend"]} icon={<CheckIcon />} />
            <StatsBlock title="80+" subtitle="Skill sets" icon={<BriefcaseIcon />} />
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Flat monthly fee</h3>
              <p className="text-sm text-gray-400 mb-8">from $990/month</p>
              <div className="w-40 h-40 bg-[#c8e6c9] rounded-full flex items-center justify-center overflow-hidden">
                <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=200" alt="Moss object" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < CTASection />

      {/* Capabilities Section */}
      < CapabilitiesSection />

      {/* Testimonials Section */}
      < TestimonialsSection />

      {/* Consultation Section */}
      < ConsultationSection />

      {/* Talent Carousel Section */}
      < TalentCarousel />

      {/* Footer Section */}
      < Footer />
    </div >
  )
}

/**
 * ConsultationSection Component
 * Hero-style banner with a moss landscape background and glassmorphism CTA.
 */
function ConsultationSection() {
  return (
    <section className="relative h-[450px] rounded-t-[100px] overflow-hidden -mt-20 z-30">
      <img
        src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000"
        alt="Moss Landscape"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1] max-w-4xl mx-auto drop-shadow-2xl">
          Free consultation to scope your creative projects
        </h2>
        <button className="flex items-center gap-4 px-10 py-4 bg-white/10 backdrop-blur-2xl border border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all shadow-2xl active:scale-95 text-base group">
          <span className="text-white/40 tracking-widest text-xs group-hover:text-white/60 transition-colors">&gt;&gt;&gt;</span>
          Book demo
          <span className="text-white/40 tracking-widest text-xs group-hover:text-white/60 transition-colors">&lt;&lt;&lt;</span>
        </button>
      </div>
    </section>
  )
}

/**
 * TestimonialsSection Component
 * Masonry grid of client quotes and featured image cards.
 */
function TestimonialsSection() {
  const testimonials = [
    [
      { name: "Nik Kotov", title: "Founder & CEO at Atomized", quote: "Recently engaged CODESCAPE for a side project I'm working on. Saw results literally on day 1. Overall very impressed and will definitely continue to use them.", avatar: "https://i.pravatar.cc/100?u=nik" },
      { name: "Miles Penn", title: "Founder at Mtailor", quote: "Incredible deal and service. We've been using them for a while and just doubled our capacity, because they're reliable, good, and easy to work with.", avatar: "https://i.pravatar.cc/100?u=miles" },
      { name: "Tal Feld", title: "Co-founder & CEO at Echo", quote: "We did the 1 to 1 plan, exceeded our expectations. Amazing support. Highly recommend.", avatar: "https://i.pravatar.cc/100?u=tal" }
    ],
    [
      { name: "Erick Enriquez", title: "Co-founder & CEO at Inquiry", quote: "CODESCAPE really quickly matched me to a designer for what I thought would be a short engagement, but ended up being a year long. High quality work.", avatar: "https://i.pravatar.cc/100?u=erick" },
      { featured: true }
    ],
    [
      { name: "Ben Warren", title: "Co-founder & CTO at Snowpilot", quote: "We used CODESCAPE for our logo design and have received lots of unprompted compliments. Highly recommended!", avatar: "https://i.pravatar.cc/100?u=ben" },
      { name: "Ng Yi Ying", title: "Founder at AllSome", quote: "We are subscribing Pro and have only good words for the CODESCAPE team! Fast matching, outstanding communication, and cost saving! We highly recommend them!", avatar: "https://i.pravatar.cc/100?u=ng" },
      { name: "Rakesh Goyal", title: "Co-founder & CEO at Veit", quote: "Love CODESCAPE - When we started out we got all our design and landing page work done from them. They are fast and high quality!", avatar: "https://i.pravatar.cc/100?u=rakesh" }
    ]
  ];

  return (
    <section className="py-24 px-20 bg-white">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">Trusted By 400+ Companies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {testimonials.map((col, i) => (
          <div key={i} className="flex flex-col gap-6">
            {col.map((item, j) => (
              item.featured ? <FeaturedTestimonial key="featured" /> : <TestimonialCard key={j} {...item} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

function TestimonialCard({ name, title, quote, avatar }) {
  return (
    <div className="p-10 bg-[#f5f5f7] rounded-[32px] hover:shadow-xl transition-all duration-500 group">
      <div className="flex items-center gap-4 mb-8">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all" />
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-xs text-gray-400 font-medium">{title}</p>
        </div>
      </div>
      <p className="text-gray-500 leading-relaxed font-medium">"{quote}"</p>
    </div>
  )
}

function FeaturedTestimonial() {
  return (
    <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-gray-900 group">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" alt="Marty" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-10">
        <h4 className="text-2xl font-bold text-white mb-1">Marty Kausas</h4>
        <p className="text-gray-400 font-medium">Founder @ Pylon</p>
      </div>
    </div>
  )
}

/**
 * CapabilitiesSection Component
 * Implements a sticky sidebar navigation and a 2-3-2 grid of service cards.
 */
function CapabilitiesSection() {
  const categories = ["Design", "No-code development", "Marketing", "Software development"];
  const services = [
    { title: "UI/UX design", tags: ["Website", "Landing page", "Mobile & web app", "UX/UI audit"], image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800", wide: true },
    { title: "Motion design & video production", tags: ["Animated videos", "2D/3D motion", "AI", "Video editing"], image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", wide: true },
    { title: "Brand identity", tags: ["Logo design", "Brand guidelines"], image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
    { title: "Product design", tags: ["Research", "Prototyping", "Testing"], image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800" },
    { title: "Graphic design", tags: ["Social media creative", "Banners"], image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" },
    { title: "Packaging & Merch", tags: ["Packaging design", "Merchandise"], image: "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&q=80&w=800", wide: true },
    { title: "Book & eBook", tags: ["Print & eBook design", "Graphics"], image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800", wide: true }
  ];

  return (
    <section className="py-24 px-20 bg-[#f5f5f7] rounded-t-[100px] -mt-10 relative z-20">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Pilled Style */}
        <aside className="lg:w-[320px] h-fit sticky top-24 bg-[#f5f5f7] rounded-[40px] overflow-hidden flex flex-col items-center p-8 min-h-[600px] relative">
          <div className="w-full mb-12">
            <h4 className="text-2xl font-black text-gray-500 uppercase tracking-widest mb-2">your <span className="text-[#00C2FF]">success</span></h4>
            <p className="text-2xl font-black text-gray-900 uppercase tracking-tighter">becomes our mission</p>
          </div>

          <nav className="w-full flex flex-col gap-3 relative z-10">
            <button className="flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-sm">

              <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Webdesigning</span>
            </button>
            <button className="flex items-center gap-4 bg-white/50 px-6 py-4 rounded-full opacity-60">

              <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">E-comerce</span>
            </button>
            <button className="flex items-center gap-4 bg-white/50 px-6 py-4 rounded-full opacity-60">

              <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">App development </span>
            </button>
            <button className="flex items-center gap-4 bg-white/50 px-6 py-4 rounded-full opacity-60">

              <span className="text-[10px] font-black text-gray-400 uppercase tracking-tight">Digital Marketing </span>
            </button>
          </nav>

          <div className="absolute bottom-0 left-0 w-full h-1/3">
            <img
              src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=600"
              alt=""
              className="w-full h-full object-cover opacity-100 rounded-t-[100px] border-t border-white/20"
            />
          </div>
        </aside>

        {/* Services Grid - 2-3-2 Pattern */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-x-8 gap-y-12">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} isSmall={i >= 2 && i <= 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * ServiceCard Component
 * Individual cards for the capabilities grid with variable widths.
 */
function ServiceCard({ title, tags, image, wide, isSmall }) {
  const widthClass = isSmall ? 'w-[calc(33.333%-22px)]' : 'w-[calc(50%-16px)]';

  return (
    <div className={`${widthClass} group cursor-pointer`}>
      <div className="relative rounded-[40px] overflow-hidden bg-gray-100 border border-gray-200 aspect-[16/11]">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
        <div className="absolute inset-x-0 bottom-6 px-6 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-900/10 text-[8px] font-black text-gray-400 uppercase tracking-widest bg-white/80 backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * CTASection Component
 * Immersive call-to-action banner with a water background.
 */
function CTASection() {
  return (
    <section className="px-20 pb-20">
      <div className="relative h-[400px] rounded-[40px] overflow-hidden flex flex-col items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000"
          alt="Water Background"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-tight max-w-3xl mx-auto">
            You are one call away from a top creative <span className="text-[#00C2FF]">tech</span> team
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="text"
              placeholder="Email address"
              className="px-8 py-5 w-full md:w-96 bg-white rounded-full outline-none text-gray-700 placeholder-gray-400 font-medium"
            />
            <button className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-all shadow-xl active:scale-95 whitespace-nowrap">
              Book a call
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * HorizontalScrollSection Component
 * Implements a sticky vertical-to-horizontal scroll interaction.
 * Translates page scroll progress into horizontal movement for its children.
 */
function HorizontalScrollSection({ children }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollRange = containerRef.current.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      if (scrolled >= 0 && scrolled <= scrollRange) setScrollProgress(scrolled / scrollRange);
      else if (scrolled < 0) setScrollProgress(0);
      else setScrollProgress(1);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalWidth = 450 * 4 + 32 * 3 + 160;
  const translateX = scrollProgress * (totalWidth - window.innerWidth);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden no-scrollbar">
        <div ref={scrollRef} className="flex px-20 gap-8 transition-transform duration-100 ease-out" style={{ transform: `translateX(${-translateX}px)` }}>
          {children}
        </div>
      </div>
    </section>
  )
}

/**
 * PortfolioCard Component
 * Displays individual portfolio items with image, title, and tags.
 * Features a zoom effect on hover and high-clarity image rendering.
 */
function PortfolioCard({ title, image, tags, color = "bg-gray-900", hasVideo = false }) {
  return (
    <div className={`group relative flex-shrink-0 w-[450px] h-[550px] ${color} rounded-[40px] overflow-hidden cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.01]`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
      />
      <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent">
        <h3 className="text-3xl font-bold text-white mb-6 leading-tight max-w-[250px]">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs font-medium backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
        {hasVideo && (
          <div className="absolute right-10 bottom-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * LogoItem Component
 * Renders a brand logo for the marquee section with specific SVG icons.
 */
function LogoItem({ icon, text }) {
  const getIcon = () => {
    switch (icon) {
      case 'diamond': return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
      case 'rocket': return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      case 'lightning': return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      case 'cube': return <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
      case 'pentagon': return <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 9.5L5.5 21H18.5L22 9.5L12 2Z" /></svg>;
      default: return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
    }
  }
  return (
    <div className="flex items-center gap-2 text-gray-400 font-bold text-sm tracking-widest uppercase grayscale hover:grayscale-0 transition-all cursor-default opacity-60 hover:opacity-100">
      {getIcon()}
      <span>{text}</span>
    </div>
  )
}

/**
 * StatsBlock Component
 * Renders data-driven blocks (e.g., Customers count) with an animated logo marquee.
 */
function StatsBlock({ title, subtitle, logos, icon }) {
  return (
    <div className="bg-[#f5f5f7] rounded-[40px] p-10 relative overflow-hidden">
      <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm z-10">{icon}</div>
      <h3 className="text-4xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 mb-10">{subtitle}</p>
      {logos && (
        <div className="relative w-full overflow-hidden opacity-40 grayscale -mx-10 whitespace-nowrap">
          <div
            className="flex gap-12 items-center w-max px-10"
            style={{ animation: 'marquee-reverse 40s linear infinite' }}
          >
            {/* Many repetitions for a perfectly seamless loop */}
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((l, i) => (
              <span key={`${l}-${i}`} className="text-xs font-black tracking-widest uppercase">
                {l}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/**
 * PortraitBlock Component
 * Specifically designed for the "Vetted talent" block with a portrait image.
 */
function PortraitBlock({ title, image }) {
  return (
    <div className="bg-[#f5f5f7] rounded-[40px] pt-10 overflow-hidden text-center">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <img src={image} alt="" className="w-full h-48 object-cover object-top" />
    </div>
  )
}

/**
 * ImageBlock Component
 * A generic image container used within the grid sections.
 */
function ImageBlock({ title, image }) {
  return (
    <div className="relative rounded-[40px] overflow-hidden h-64 group">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/30 p-10 flex flex-col justify-end"><h3 className="text-xl font-bold text-white max-w-[200px]">{title}</h3></div>
    </div>
  )
}

/**
 * TagsBlock Component
 * Renders multi-directional, staggered tag marquees for the projects section.
 */
function TagsBlock({ title, subtitle, tags, icon }) {
  const rows = [
    tags.slice(0, 3),
    tags.slice(3, 6),
    tags.slice(6, 9)
  ];

  return (
    <div className="bg-[#f5f5f7] rounded-[40px] p-8 relative overflow-hidden flex flex-col">
      <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm z-10">{icon}</div>
      <h3 className="text-4xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 mb-6">{subtitle}</p>

      <div className="flex flex-col gap-3 -mx-10 overflow-hidden">
        {rows.map((row, idx) => {
          const isReverse = idx % 2 === 0; // Row 0 and 2 move right, Row 1 moves left
          const animationName = isReverse ? 'marquee-reverse' : 'marquee';
          return (
            <div key={idx} className="relative w-full whitespace-nowrap">
              <div
                className="flex gap-3 items-center w-max px-10"
                style={{ animation: `${animationName} ${25 + idx * 5}s linear infinite` }}
              >
                {/* Many repetitions for a perfectly seamless loop */}
                {[...row, ...row, ...row, ...row, ...row, ...row].map((t, i) => (
                  <span key={`${t}-${i}`} className="px-3 py-1.5 bg-white rounded-full text-[8px] font-extrabold text-gray-600 border border-gray-100 uppercase tracking-widest hover:scale-110 transition-transform cursor-default shadow-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

/**
 * TalentCarousel Component
 * Horizontal scrolling carousel of vetted talent profiles with interactive hover effects.
 */
function TalentCarousel() {
  const talents = [
    { name: "Samual", role: "Product designer", exp: "7+ years", tags: ["FinTech", "AI", "Healthcare", "Crypto"], workedWith: "Coca-Cola", image: "https://images.unsplash.com/photo-1506794778242-92bb52bd3586?auto=format&fit=crop&q=80&w=400" },
    { name: "Joel", role: "Illustrator", exp: "11+ years", tags: ["E-commerce", "Gaming", "NFT"], workedWith: "Disney", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" },
    { name: "Eldho", role: "Brand designer", exp: "15+ years", tags: ["SaaS", "EdTech", "FinTech", "AI"], workedWith: "PandaDoc", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Jhon", role: "Graphic artist", exp: "15+ years", tags: ["Gaming", "AI", "Fashion", "Advertising"], workedWith: "MTV", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Nick", role: "Full-Stack Developer", exp: "8+ years", tags: ["HealtTech", "SaaS"], workedWith: "VERIZON", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" }
  ];

  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / scrollHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="h-[160vh] relative">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-white px-20">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-900">Why hire if you can subscribe to 200+ vetted talents?</h2>
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-50 transition-all opacity-40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all opacity-40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-12 transition-transform duration-75 ease-out will-change-transform"
          style={{ transform: `translateX(-${scrollProgress * (talents.length * 200)}px)` }}
        >
          {talents.map((talent, i) => (
            <TalentCard key={i} {...talent} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TalentCard({ name, role, exp, tags, workedWith, image }) {
  return (
    <div className="min-w-[400px] flex-shrink-0 group">
      <div className="rounded-[40px] overflow-hidden bg-[#f5f5f7] mb-8 aspect-[1/1.1] relative">
        <img src={image} alt={name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
      </div>
      <p className="text-[12px] font-bold text-gray-400 mb-2">{name}</p>
      <h3 className="text-2xl font-black text-gray-900 mb-6">{role}, <span className="text-gray-400 font-medium text-lg">{exp}</span></h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map(tag => (
          <span key={tag} className="px-5 py-2 rounded-full border border-gray-100 text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white shadow-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="border-t border-gray-50 pt-8">
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 px-1">Worked with</p>
        <div className="h-10 flex items-center px-1">
          <p className="text-3xl font-black text-gray-900/40 tracking-tighter italic grayscale">{workedWith}</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Footer Component
 * Comprehensive 4-column footer with brand identity, links, and social icons.
 */
function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-white border-t border-gray-100 px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
        {/* Brand Column */}
        <div className="flex flex-col gap-8">
          <img src="/logo.png" alt="Codescape Logo" className="h-8 w-auto self-start" />
          <p className="text-gray-400 font-medium leading-relaxed max-w-[280px]">
            Where Creativity Meets Technology
          </p>
          <div className="flex gap-4">
            {["In", "X", "Fb"].map(social => (
              <a key={social} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-bold text-xs hover:bg-gray-200 transition-all">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Company</h4>
          <ul className="flex flex-col gap-5">
            {["Case studies", "About us", "Blog", "Help center"].map(link => (
              <li key={link}><a href="#" className="text-gray-900 font-bold text-sm tracking-tight hover:text-gray-500 transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Resources</h4>
          <ul className="flex flex-col gap-5">
            {["Free templates", "Project management", "Hire Frontend", "Hire Backend"].map(link => (
              <li key={link}><a href="#" className="text-gray-900 font-bold text-sm tracking-tight hover:text-gray-500 transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-10">Services</h4>
          <ul className="flex flex-col gap-5">
            {["App Development", "Web Design", "QA Testing", "Cloud Infrastructure"].map(link => (
              <li key={link}><a href="#" className="text-gray-900 font-bold text-sm tracking-tight hover:text-gray-500 transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-300 text-[11px] font-bold">© 2026 CODESCAPE. All rights reserved.</p>
        <div className="flex gap-10">
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(link => (
            <a key={link} href="#" className="text-gray-300 text-[11px] font-bold hover:text-gray-500 transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}

/** Icon Components for Status Blocks */
function UsersIcon() { return <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> }
function CheckIcon() { return <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> }
function BriefcaseIcon() { return <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }

export default App
