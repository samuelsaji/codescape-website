import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import LoadingScreen from './LoadingScreen';

/**
 * Layout Component
 * Provides the common frame for all pages: loading screen, custom cursor,
 * navigation, route content, footer, and optional Lenis smooth scrolling.
 */
function Layout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lenis is optional and expected to be loaded globally. If it is absent,
    // the app falls back to normal browser scrolling without breaking.
    if (window.Lenis) {
      const lenis = new window.Lenis({
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });
      
      // Lenis needs a requestAnimationFrame loop to update scroll easing.
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
        {/* Some page sections use inline animation names, so the keyframes are
            injected here to keep them available across every route. */}
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
