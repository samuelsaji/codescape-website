import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import LoadingScreen from './LoadingScreen';

/**
 * Layout Component
 * Provides common structure for all pages including navigation, cursor, and smooth scroll.
 */
function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });
      
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      
      requestAnimationFrame(raf);
      return () => lenis.destroy();
    }
  }, []);

  return (
    <>
      <LoadingScreen onFinished={() => setIsLoading(false)} />
      <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <CustomCursor />
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
        
        <Navbar />
        
        <main>
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default Layout;
