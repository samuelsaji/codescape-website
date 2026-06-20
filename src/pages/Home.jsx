import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Hero Section Component
 * First screen of the landing page with the main positioning statement,
 * trust badge, email input, and primary contact action.
 */
function Hero() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  return (
    <main className="px-6 md:px-20 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
      <div className="flex-1 max-w-2xl">
        <div className="flex flex-wrap gap-3 mb-8">
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 leading-[1.1] tracking-tight">
          Where <span className="text-blue-500">Creativity</span> Meets Technology
        </h1>
      </div>
      <div className="flex-1 max-w-xl">
        <p className="text-xl text-gray-500 mb-8 leading-relaxed">
          We believe that a well established Digital presence is the cornerstone of any successful online presence. We are passionate about creating stunning and functional Websites and Applications that not only capture attention but also drive results for our clients.
        </p>
        <div className="bg-white p-2 pl-6 border border-gray-100 rounded-full shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center gap-4 max-w-md">
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="flex-1 bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm" />
          <button onClick={() => navigate('/contact', { state: { email } })} className="px-8 py-4 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-black transition-all shadow-lg active:scale-95 whitespace-nowrap">Contact Us</button>
        </div>
      </div>
    </main>
  );
}

function LogoItem({ icon, text }) {
  // Small inline icon factory used for text-logo strips without importing an
  // external icon package for this narrow set of symbols.
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

function PortfolioCard({ title, image, tags, color = "bg-gray-900", hasVideo = false }) {
  return (
    <div className={`group relative flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] h-[400px] sm:h-[480px] md:h-[550px] ${color} rounded-[30px] md:rounded-[40px] overflow-hidden cursor-pointer shadow-2xl transition-transform duration-500 hover:scale-[1.01]`}>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.15) 70%, transparent 100%)', paddingTop: '120px' }}>
        <h3 className="text-xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-[350px]">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs font-medium backdrop-blur-md">
              {tag}
            </span>
          ))}
        </div>
        {hasVideo && (
          <div className="absolute right-10 bottom-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
            <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        )}
      </div>
    </div>
  )
}

function HorizontalScrollSection({ children }) {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      // Convert this tall section's vertical scroll position into a normalized
      // 0..1 progress value. That progress drives horizontal card movement.
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

  // Matches the current portfolio card dimensions and gap so the last card can
  // scroll fully into view before the sticky section releases.
  const totalWidth = 450 * 4 + 32 * 3 + 160;
  const translateX = scrollProgress * (totalWidth - window.innerWidth);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden no-scrollbar">
        <div ref={scrollRef} className="flex px-6 md:px-20 gap-4 md:gap-8 transition-transform duration-100 ease-out" style={{ transform: `translateX(${-translateX}px)` }}>
          {children}
        </div>
      </div>
    </section>
  )
}

function StatsBlock({ title, subtitle, logos, logoImages, icon, className = '' }) {
  const imageList = logoImages || [];
  const textList = logos || [];
  return (
    <div className={`bg-[#f5f5f7] rounded-[40px] p-10 relative overflow-hidden ${className}`}>
      <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm z-10">{icon}</div>
      <h3 className="text-4xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 mb-10">{subtitle}</p>
      {imageList.length > 0 && (
        <div className="relative w-full overflow-hidden grayscale -mx-10 whitespace-nowrap">
          {/* Repeating the same list several times creates a seamless marquee
              loop with no visible gap at the reset point. */}
          <div className="flex gap-10 items-center w-max px-10" style={{ animation: 'marquee-reverse 40s linear infinite' }}>
            {[...imageList, ...imageList, ...imageList, ...imageList].map((src, i) => (
              <img key={i} src={src} alt="Client" className="h-7 w-auto object-contain opacity-50" />
            ))}
          </div>
        </div>
      )}
      {imageList.length === 0 && textList.length > 0 && (
        <div className="relative w-full overflow-hidden opacity-40 grayscale -mx-10 whitespace-nowrap">
          <div className="flex gap-12 items-center w-max px-10" style={{ animation: 'marquee-reverse 40s linear infinite' }}>
            {[...textList, ...textList, ...textList, ...textList, ...textList, ...textList, ...textList, ...textList].map((l, i) => (
              <span key={`${l}-${i}`} className="text-xs font-black tracking-widest uppercase">{l}</span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ImageBlock({ title, image }) {
  return (
    <div className="relative rounded-[40px] overflow-hidden h-64 group">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      {title && (
        <div className="absolute inset-0 bg-black/30 p-10 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white max-w-[200px]">{title}</h3>
        </div>
      )}
    </div>
  )
}

function TagsBlock({ title, subtitle, tags, icon }) {
  // Split tags into lanes so each row can move at a different speed/direction.
  const rows = [tags.slice(0, 3), tags.slice(3, 6), tags.slice(6, 9)];
  return (
    <div className="bg-[#f5f5f7] rounded-[40px] p-8 relative overflow-hidden flex flex-col">
      <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm z-10">{icon}</div>
      <h3 className="text-4xl font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-500 mb-6">{subtitle}</p>
      <div className="flex flex-col gap-3 -mx-10 overflow-hidden">
        {rows.map((row, idx) => {
          const isReverse = idx % 2 === 0;
          const animationName = isReverse ? 'marquee-reverse' : 'marquee';
          return (
            <div key={idx} className="relative w-full whitespace-nowrap">
              <div className="flex gap-3 items-center w-max px-10" style={{ animation: `${animationName} ${25 + idx * 5}s linear infinite` }}>
                {[...row, ...row, ...row, ...row, ...row, ...row].map((t, i) => (
                  <span key={`${t}-${i}`} className="px-3 py-1.5 bg-white rounded-full text-[8px] font-extrabold text-gray-600 border border-gray-100 uppercase tracking-widest hover:scale-110 transition-transform cursor-default shadow-sm">{t}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

function UsersIcon() { return <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> }
function CheckIcon() { return <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> }
function BriefcaseIcon() { return <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }

function ServiceCard({ title, tags, image, isSmall }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef(null);
  const stableRect = useRef(null);

  // Capture the card bounds once per hover session. Measuring while the card is
  // rotating can cause noisy tilt values because transforms affect layout math.
  const handleMouseEnter = () => { if (cardRef.current) stableRect.current = cardRef.current.getBoundingClientRect(); };
  const handleMouseMove = (e) => {
    if (!stableRect.current) stableRect.current = cardRef.current.getBoundingClientRect();
    setIsHovering(true);
    const rect = stableRect.current;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Map pointer distance from center to a modest 3D tilt. X/Y are inverted in
    // the expected way: vertical movement rotates around X, horizontal around Y.
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;
    setRotate({ x: rotateX, y: rotateY });
  };
  const handleMouseLeave = () => { setIsHovering(false); setRotate({ x: 0, y: 0 }); stableRect.current = null; };
  const widthClass = isSmall ? 'w-[calc(33.333%-22px)]' : 'w-[calc(50%-16px)]';

  return (
    <div ref={cardRef} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className={`${widthClass} group cursor-pointer`} style={{ perspective: '1000px' }}>
      <div className={`relative rounded-[40px] overflow-hidden bg-gray-100 border border-gray-200 aspect-[16/11] ${isHovering ? '' : 'transition-transform duration-700 ease-out'}`} style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`, transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}>
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90" style={{ transform: 'translateZ(30px)', backfaceVisibility: 'hidden' }} />
        <div className="absolute inset-x-0 bottom-6 px-6 flex flex-wrap gap-2" style={{ transform: 'translateZ(60px)', backfaceVisibility: 'hidden' }}>
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-900/10 text-[8px] font-black text-gray-400 uppercase tracking-widest bg-white/80 backdrop-blur-md">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function CTASection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  return (
    <section className="px-6 md:px-20 pb-12 md:pb-20">
      <div className="relative h-[300px] md:h-[400px] rounded-[30px] md:rounded-[40px] overflow-hidden flex flex-col items-center justify-center">
        <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=2000" alt="Water Background" className="absolute inset-0 w-full h-full object-cover opacity-90" />
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-tight max-w-3xl mx-auto">
            You are one call away from a top creative <span className="text-[#00C2FF]">tech</span> team
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="px-8 py-5 w-full md:w-96 bg-white rounded-full outline-none text-gray-700 placeholder-gray-400 font-medium" />
            <button onClick={() => navigate('/contact', { state: { email } })} className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-gray-900 transition-all shadow-xl active:scale-95 whitespace-nowrap">Book a call</button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ConsultationSection() {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mx-20 -mt-12 mb-24 z-10">
      <section
        className="relative h-[320px] rounded-[100px] overflow-hidden cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >

        {/* Background */}
        <img
          src="/cons/bgs.png"
          alt=""
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center center',
          }}
          draggable={false}
        />

        {/* CTA — right side */}
        <div className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4 items-end" style={{ right: '415px', maxWidth: '280px' }}>
          <p className="text-white font-black text-2xl leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] text-right">
            Ready to build<br />something great?
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-sm w-fit"
            style={{
              background: 'rgba(255,255,255,0.22)',
              backdropFilter: 'blur(14px)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              color: '#fff',
              boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
              transition: 'background 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.38)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.22)'}
          >
            Let's Talk
            <span style={{ fontSize: '16px' }}>→</span>
          </button>
        </div>

        {/* Pixel cursor hand — retreats bottom-left on hover */}
        <img
          src="/cons/simple-hand-cursor-free-png.webp"
          alt="cursor hand"
          draggable={false}
          style={{
            position: 'absolute',
            left: '36%',
            top: '46%',
            transform: hovered
              ? 'rotate(50deg) translate(-28px, 18px)'
              : 'rotate(50deg) translate(0px, 0px)',
            transition: 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)',
            height: '120px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.25))',
            zIndex: 10,
            imageRendering: 'pixelated',
          }}
        />

        {/* Realistic hand — retreats upper-right on hover */}
        <img
          src="/cons/hand.png"
          alt="hand"
          draggable={false}
          style={{
            position: 'absolute',
            right: '37%',
            top: '5%',
            transform: hovered
              ? 'rotate(-16deg) translate(28px, -14px)'
              : 'rotate(-16deg) translate(0px, 0px)',
            transition: 'transform 0.5s cubic-bezier(0.34, 1.2, 0.64, 1)',
            height: '180px',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.2))',
            zIndex: 10,
          }}
        />

      </section>
    </div>
  );
}



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
    <section className="py-12 md:py-24 px-6 md:px-20 bg-white">
      <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">Trusted By 400+ Companies</h2>
      <ZuckerbergTestimonial />
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
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
        <div><h4 className="font-bold text-gray-900">{name}</h4><p className="text-xs text-gray-400 font-medium">{title}</p></div>
      </div>
      <p className="text-gray-500 leading-relaxed font-medium">"{quote}"</p>
    </div>
  )
}

function FeaturedTestimonial() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { name: "Bill Gates", title: "Co-founder @ Microsoft", image: "/testimonial/image copy 3.png" },
    { name: "Sundar Pichai", title: "CEO @ Google", image: "/testimonial/image copy 2.png" },
    { name: "Elon Musk", title: "CEO @ SpaceX", image: "/testimonial/image copy.png" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] bg-gray-900 group">
      {slides.map((slide, i) => (
        <img key={i} src={slide.image} alt={slide.name} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeSlide === i ? 'opacity-100' : 'opacity-0'}`} />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-10">
        <h4 className="text-2xl font-bold text-white mb-1 transition-all duration-500">{slides[activeSlide].name}</h4>
        <p className="text-gray-400 font-medium transition-all duration-500">{slides[activeSlide].title}</p>
        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setActiveSlide(i)} className={`h-1 rounded-full transition-all duration-500 ${activeSlide === i ? 'w-8 bg-white' : 'w-4 bg-white/30'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    { question: "Is this a physical book?", answer: "No, it's a digital book for now. I want it to be like a really fucking nice coffee table style book..." },
    { question: "How do you make the illustrations?", answer: "We use a combination of hand-drawn techniques. Each piece goes through multiple stages of refinement..." },
    { question: "When will it launch?", answer: "We are on track for a late 2026 release. The development is split into three main phases..." },
    { question: "How much will it cost?", answer: "Pricing will be tiered. We believe in transparent pricing..." }
  ];

  const toggle = (idx) => setOpenId(openId === idx ? null : idx);

  return (
    <section className="py-8 md:py-12 px-6 md:px-20 bg-white border-t border-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-gray-900 tracking-tight mb-2">Common Questions</h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === idx;
            return (
              <div key={idx} className="rounded-2xl bg-[#f5f5f7] overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between px-8 py-6 text-left cursor-pointer group"
                >
                  <span className="text-base font-semibold text-gray-800 tracking-tight">{faq.question}</span>
                  <div className={`w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-500 font-medium leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

function TalentCarousel() {
  const talents = [
    { name: "Samual", role: "CEO", exp: "7+ years", tags: ["FinTech", "AI", "Healthcare", "Crypto"], workedWith: "Coca-Cola", image: "/workers/WhatsApp Image 2026-06-18 at 10.21.00 PM.jpeg" },
    { name: "Joel", role: "Backend Developer", exp: "11+ years", tags: ["E-commerce", "Gaming", "NFT"], workedWith: "Disney", image: "/workers/WhatsApp Image 2026-06-18 at 10.28.35 PM.jpeg" },
    { name: "Eldho", role: "Brand designer", exp: "15+ years", tags: ["SaaS", "EdTech", "FinTech", "AI"], workedWith: "PandaDoc", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
    { name: "Jhon", role: "Graphic artist", exp: "15+ years", tags: ["Gaming", "AI", "Fashion", "Advertising"], workedWith: "MTV", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
    { name: "Nick", role: "Full-Stack Developer", exp: "8+ years", tags: ["HealtTech", "SaaS"], workedWith: "VERIZON", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400" }
  ];
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      // Sticky section progress drives horizontal translation of the talent row.
      const rect = containerRef.current.getBoundingClientRect();
      const scrollHeight = containerRef.current.offsetHeight - window.innerHeight;
      const currentScroll = -rect.top;
      setScrollProgress(Math.min(Math.max(currentScroll / scrollHeight, 0), 1));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div ref={containerRef} className="h-[160vh] relative z-20">
      <div className="sticky top-[56px] md:top-[72px] h-[calc(100vh-56px)] md:h-[calc(100vh-72px)] w-full flex flex-col justify-center overflow-hidden bg-white px-6 md:px-20">
        <div className="flex justify-between items-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-3xl font-semibold text-gray-900">Why hire if you can subscribe to 200+ vetted talents?</h2>
        </div>
        <div className="flex gap-6 md:gap-12 transition-transform duration-75 ease-out will-change-transform" style={{ transform: `translateX(-${scrollProgress * (talents.length * 200)}px)` }}>
          {talents.map((talent, i) => (
            <div key={i} className="min-w-[260px] sm:min-w-[320px] md:min-w-[400px] flex-shrink-0 group">
              <div className="rounded-[40px] overflow-hidden bg-[#f5f5f7] mb-8 aspect-[1/1.1] relative">
                <img src={talent.image} alt={talent.name} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <p className="text-[12px] font-bold text-gray-400 mb-2">{talent.name}</p>
              <h3 className="text-2xl font-black text-gray-900 mb-6">{talent.role}, <span className="text-gray-400 font-medium text-lg">{talent.exp}</span></h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ZuckerbergTestimonial() {
  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-16 bg-white border-t border-b border-gray-100 flex items-center justify-center">
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 max-w-5xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-16">

        {/* Left Side: Quote & Content */}
        <div className="flex-1 flex flex-col items-start text-left relative py-2">
          {/* Top Double Quote (66) */}
          <div className="relative mb-4 select-none font-serif font-black text-5xl md:text-6xl leading-none h-8">
            <span className="absolute -top-[2px] -left-[2px] text-[#3B82F6]">“</span>
            <span className="relative text-gray-950">“</span>
          </div>

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-950 leading-snug md:leading-normal mb-4 tracking-tight font-sans">
            blah blah blah blah{" "}
            <span className="relative inline-block px-2 py-0.5 text-white bg-[#3B82F6] transform -rotate-1 rounded-sm font-black mx-1 whitespace-nowrap">
              background blue blah,
            </span>{" "}
            blah blah blah blah blah blah blah blah blah{" "}
            <span className="text-[#3B82F6] font-black">Blue blah</span>{" "}
            <span className="text-[#3B82F6] font-black">blah blah blah.</span>
          </blockquote>

          {/* Author Name & Bottom Quote */}
          <div className="w-full flex justify-between items-center mt-4">
            <div className="text-lg md:text-xl font-black text-gray-900 font-sans">
              -Eatho Mahan
            </div>

            {/* Bottom Double Quote (99) */}
            <div className="relative select-none font-serif font-black text-5xl md:text-6xl leading-none h-8">
              <span className="absolute -top-[2px] -left-[2px] text-[#3B82F6]">”</span>
              <span className="relative text-gray-950">”</span>
            </div>
          </div>
        </div>

        {/* Right Side: Portrait Image with Vertical Accent Strip */}
        <div className="w-full md:w-[35%] flex justify-center items-center relative py-6 md:py-0">
          {/* Red Accent Column behind the image */}
          <div className="absolute top-0 bottom-0 left-[25%] w-[90px] md:w-[110px] bg-[#3B82F6] z-0" />

          {/* Grayscale portrait overlapping the bar */}
          <div className="relative z-10 w-[220px] md:w-[260px] aspect-[4/5] rounded-[30px] overflow-hidden shadow-xl group border-4 border-white bg-gray-100">
            <img
              src="/testimonial/image.png"
              alt="Testimonial"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

      </div>
    </section>
  );
}

function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const categories = ['ERP Implementation', 'Store & Warehouse', 'AI Automation', 'Digital Transformation'];

  // Images per category — each array maps 1:1 to the services array below.
  // Add real images for each category as they become available.
  const categoryImages = [
    // ERP Implementation
    [
      "/erp/WhatsApp Image 2026-06-18 at 11.04.30 PM.jpeg",
      "/erp/WhatsApp Image 2026-06-18 at 11.04.30 PM(1).jpeg",
      "/erp/WhatsApp Image 2026-06-18 at 11.04.31 PM.jpeg",
      "/erp/WhatsApp Image 2026-06-18 at 11.04.31 PM(1).jpeg",
      "/erp/WhatsApp Image 2026-06-18 at 11.04.31 PM(2).jpeg",
      "/erp/WhatsApp Image 2026-06-18 at 11.04.32 PM.jpeg",
      "/erp/WhatsApp Image 2026-06-18 at 11.04.32 PM(1).jpeg",
    ],
    // Store & Warehouse
    ["/ware/WhatsApp Image 2026-06-18 at 11.05.43 PM.jpeg", "/ware/WhatsApp Image 2026-06-18 at 11.05.43 PM(1).jpeg", "/ware/WhatsApp Image 2026-06-18 at 11.05.44 PM.jpeg", "/ware/WhatsApp Image 2026-06-18 at 11.05.44 PM(1).jpeg", "/ware/WhatsApp Image 2026-06-18 at 11.05.44 PM(2).jpeg", "/ware/WhatsApp Image 2026-06-18 at 11.05.44 PM(3).jpeg", "/ware/WhatsApp Image 2026-06-18 at 11.05.45 PM.jpeg"],
    // AI Automation
    ["/ai/WhatsApp Image 2026-06-18 at 11.08.34 PM.jpeg", "/ai/WhatsApp Image 2026-06-18 at 11.08.35 PM.jpeg", "/ai/WhatsApp Image 2026-06-18 at 11.08.35 PM(1).jpeg", "/ai/WhatsApp Image 2026-06-18 at 11.08.35 PM(2).jpeg", "/ai/WhatsApp Image 2026-06-18 at 11.08.35 PM(3).jpeg", "/ai/WhatsApp Image 2026-06-18 at 11.08.36 PM.jpeg", "/ai/WhatsApp Image 2026-06-18 at 11.08.36 PM(1).jpeg"],
    // Digital Transformation
    ["/digital/WhatsApp Image 2026-06-18 at 11.11.21 PM.jpeg", "/digital/WhatsApp Image 2026-06-18 at 11.11.22 PM.jpeg", "/digital/WhatsApp Image 2026-06-18 at 11.11.22 PM(1).jpeg", "/digital/WhatsApp Image 2026-06-18 at 11.11.22 PM(2).jpeg", "/digital/WhatsApp Image 2026-06-18 at 11.11.22 PM(3).jpeg", "/digital/WhatsApp Image 2026-06-18 at 11.11.23 PM.jpeg", "/digital/WhatsApp Image 2026-06-18 at 11.11.23 PM(1).jpeg"],
  ];

  // Service data is kept close to the home page because it is currently only
  // used by this landing page grid.
  const currentImages = categoryImages[activeCategory];
  const services = [
    { title: "UI/UX design", tags: ["Website", "Landing page", "Mobile & web app", "UX/UI audit"], image: currentImages[0], wide: true },
    { title: "Motion design & video production", tags: ["Animated videos", "2D/3D motion", "AI", "Video editing"], image: currentImages[1], wide: true },
    { title: "Brand identity", tags: ["Logo design", "Brand guidelines"], image: currentImages[2] },
    { title: "Product design", tags: ["Research", "Prototyping", "Testing"], image: currentImages[3] },
    { title: "Graphic design", tags: ["Social media creative", "Banners"], image: currentImages[4] },
    { title: "Packaging & Merch", tags: ["Packaging design", "Merchandise"], image: currentImages[5], wide: true },
    { title: "Book & eBook", tags: ["Print & eBook design", "Graphics"], image: currentImages[6], wide: true }
  ];

  return (
    <>
      <Hero />
      <section className="py-12 border-t border-gray-100 overflow-hidden bg-white">
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center w-max">
          {[1, 2].map((i) => (
            <div key={i} className="flex gap-16 items-center">

              <img src="/clients/PicsArt_04-03-11.25.58.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/1_20260619_150305_0000.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/2_20260619_150305_0001.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/3_20260619_150305_0002.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/4_20260619_150305_0003.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/6_20260619_145139_0005.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/8_20260619_145139_0007.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/9_20260619_145139_0008.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/10_20260619_145139_0009.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/11_20260619_145139_0010.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/12_20260619_145139_0011.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/13_20260619_145139_0012.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/14_20260619_145139_0013.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/15_20260619_145139_0014.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/20260619_144343_0000.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/Untitled design_20260619_144136_0000.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/Untitled design_20260619_144438_0000.webp" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.31.04.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.31.41.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.31.59.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.32.55.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.33.19.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.33.36.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.33.52.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/PicsArt_04-04-02.35.14.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
              <img src="/clients/name only logo.png" alt="Client" className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>
      <HorizontalScrollSection>
        <PortfolioCard title="ERP Implementation" image="/Horizontalscroll/ERP.png" tags={["Web", "UX/UI design", "Mobile app"]} />
        <PortfolioCard title="Store and Warehouse Automation" image="/Horizontalscroll/digital.png" tags={["Social media creative", "Banners", "Pitch decks",]} />
        <PortfolioCard title="AI Automation" image="/Horizontalscroll/ai.png" tags={["Animated videos", "2D/3D motion", "AI video",]} />
        <PortfolioCard title="Digital Transformation" image="/Horizontalscroll/warehouse.png" tags={["Logo design", "Brand guidelines", "Stationery"]} />
      </HorizontalScrollSection>
      <section className="py-12 md:py-24 px-6 md:px-20 bg-white">
        <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 mb-8 md:mb-16">Why teams choose Codescape</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <div className="flex flex-col gap-6 h-full">
            <StatsBlock title="80+" subtitle="Customers" logoImages={["/clients/PicsArt_04-03-11.25.58.webp", "/clients/1_20260619_150305_0000.webp", "/clients/2_20260619_150305_0001.webp", "/clients/3_20260619_150305_0002.webp", "/clients/4_20260619_150305_0003.webp", "/clients/6_20260619_145139_0005.webp", "/clients/8_20260619_145139_0007.webp", "/clients/9_20260619_145139_0008.webp", "/clients/10_20260619_145139_0009.webp", "/clients/11_20260619_145139_0010.webp", "/clients/12_20260619_145139_0011.webp", "/clients/Untitled design_20260619_144136_0000.webp", "/clients/Untitled design_20260619_144438_0000.webp", "/clients/PicsArt_04-04-02.31.04.png", "/clients/PicsArt_04-04-02.32.55.png", "/clients/name only logo.png"]} icon={<UsersIcon />} />
            <div className="flex-1 relative rounded-[40px] overflow-hidden group min-h-[200px]">
              <img src="/why/1.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)' }}>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">A Team That Delivers</h3>
              </div>
            </div>
            <div className="flex-1 relative rounded-[40px] overflow-hidden group min-h-[200px]">
              <img src="/why/2.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 40%, transparent 100%)' }}>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">Understanding Every Requirement</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col"><div className="group relative bg-[#f5f5f7] rounded-[40px] overflow-hidden h-full min-h-[700px]"><div className="relative z-10 p-8 flex items-center gap-4"><img src="https://i.pravatar.cc/100?u=marty" alt="Marty" className="w-12 h-12 rounded-full" /><div><h4 className="font-bold text-gray-900">Samual</h4><p className="text-xs text-gray-500">Founder of <span className="text-[#FF6600] font-bold">Codescape</span></p></div></div><video src="/why/video.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" /></div></div>
          <div className="flex flex-col gap-6 h-full"><TagsBlock title="100+" subtitle="Projects completed" tags={["Motion", "Brand identity", "Product design", "Presentation", "Email marketing", "Analytics", "Marketing", "Software development", "Frontend"]} icon={<CheckIcon />} /><div className="flex-1"><div className="bg-[#f5f5f7] rounded-[40px] overflow-hidden h-full group"><img src="/why/award.jpeg" alt="Award" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div></div></div>
        </div>
      </section>
      <CTASection />
      <section className="py-12 md:py-24 px-6 md:px-20 bg-[#f5f5f7] rounded-t-[40px] md:rounded-t-[100px] relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-[320px] h-fit sticky top-24 bg-[#f5f5f7] rounded-[40px] overflow-hidden flex flex-col items-center p-8 min-h-[600px] relative">
            <div className="w-full mb-12"><h4 className="text-3xl font-semibold text-gray-900 tracking-tight mb-1 font-sans">Your <span className="text-[#00C2FF]">Success</span></h4><p className="text-3xl font-semibold text-gray-900 tracking-tight font-sans">Becomes Our Mission</p></div>
            <nav className="w-full flex flex-col gap-3 relative z-10">{categories.map((cat, i) => (<button key={cat} onClick={() => setActiveCategory(i)} className={`flex items-center gap-4 px-6 py-4 rounded-full transition-all active:scale-95 ${activeCategory === i ? 'bg-white shadow-sm' : 'bg-white/50 opacity-60 hover:opacity-80'}`}><span className={`font-semibold font-sans ${activeCategory === i ? 'text-sm text-gray-900 tracking-tight' : 'text-sm text-gray-400 tracking-tight'}`}>{cat}</span></button>))}</nav>
          </aside>
          <div className="flex-1"><div className="flex flex-wrap gap-x-8 gap-y-12">{services.map((service, i) => (<ServiceCard key={service.title} {...service} isSmall={i >= 2 && i <= 4} />))}</div></div>
        </div>
      </section>
      <TestimonialsSection />
      <ConsultationSection />
      <TalentCarousel />
      <FAQSection />
    </>
  );
}

export default Home;
