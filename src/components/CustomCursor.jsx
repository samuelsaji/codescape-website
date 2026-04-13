import { useRef, useState, useEffect } from 'react';

/**
 * CustomCursor Component
 * Provides a dual-layer interactive cursor (dot + following ring).
 */
function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], .cursor-pointer');
      setIsHovering(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);

    let rafId;
    const animate = () => {
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.25;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.25;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 rounded-full bg-[#00C2FF] shadow-[0_0_20px_rgba(0,194,255,0.4)] ${isHovering ? 'w-12 h-12 opacity-80' : 'w-6 h-6'}`}
        style={{
          willChange: 'transform',
          transition: 'width 0.3s ease-out, height 0.3s ease-out, opacity 0.3s ease-out',
          pointerEvents: 'none',
          backfaceVisibility: 'hidden'
        }}
      />
    </div>
  );
}

export default CustomCursor;
