import React, { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';

/**
 * Glance Component — Zen Browser-inspired
 * 
 * Morphs from the clicked card's exact position and size, expanding smoothly
 * to a centered panel. On close, it reverses — shrinking back to the origin.
 * 
 * Props:
 *   isOpen     — boolean controlling visibility
 *   onClose    — callback when dismissed
 *   originRect — { top, left, width, height } of the clicked card element
 *   children   — content rendered inside the panel
 */
function Glance({ isOpen, onClose, onFullPage, originRect, children }) {
  const [phase, setPhase] = useState('closed'); // 'closed' | 'opening' | 'open' | 'closing'
  const panelRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ─── Open lifecycle ───
  useEffect(() => {
    if (isOpen && phase === 'closed') {
      setPhase('opening');
      setIsFullscreen(false);
      // Lock body and html scroll completely
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      // Allow one frame for the "start" styles to paint, then trigger transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase('open');
        });
      });
    }

    return () => {
      if (!isOpen) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
      }
    };
  }, [isOpen, phase]);

  // ─── Close with reverse animation ───
  const handleClose = useCallback(() => {
    if (phase !== 'open') return;
    setIsFullscreen(false);
    setPhase('closing');

    // Wait for transition to finish before unmounting
    setTimeout(() => {
      setPhase('closed');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      onClose();
    }, 400);
  }, [onClose, phase]);

  // ─── Escape key ───
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && (phase === 'open' || phase === 'opening')) handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [phase, handleClose]);

  // Don't render anything when closed
  if (phase === 'closed') return null;

  // ─── Calculate transforms ───
  // The panel is rendered centered in the viewport. We compute a transform
  // that moves & scales it to match the originRect, then transition to identity.
  const getOriginTransform = () => {
    if (!originRect) return {};

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // Final panel dimensions (centered, with padding)
    const padding = isFullscreen ? 0 : 48;
    const finalW = isFullscreen ? vw : Math.min(900, vw - padding * 2);
    const finalH = isFullscreen ? vh : Math.min(vh - padding * 2, vh * 0.88);
    const finalX = (vw - finalW) / 2;
    const finalY = (vh - finalH) / 2;

    // Scale factors
    const scaleX = originRect.width / finalW;
    const scaleY = originRect.height / finalH;

    // Translation to move from final center to origin center
    const originCenterX = originRect.left + originRect.width / 2;
    const originCenterY = originRect.top + originRect.height / 2;
    const finalCenterX = finalX + finalW / 2;
    const finalCenterY = finalY + finalH / 2;
    const dx = originCenterX - finalCenterX;
    const dy = originCenterY - finalCenterY;

    return {
      transform: `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`,
    };
  };

  const isAtOrigin = phase === 'opening' || phase === 'closing';
  const panelStyle = isAtOrigin
    ? {
        ...getOriginTransform(),
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
        opacity: phase === 'opening' ? 0.5 : 0.2,
      }
    : {
        transform: 'translate(0, 0) scale(1)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease',
        opacity: 1,
      };

  const backdropOpacity = isAtOrigin ? 'opacity-0' : 'opacity-100';

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" style={{ overscrollBehavior: 'contain' }}>
      {/* Dark backdrop */}
      <div
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-400 ${backdropOpacity}`}
        onClick={handleClose}
      />

      {/* Layout wrapper: panel + toolbar */}
      <div className={`relative flex items-start gap-3 z-10 transition-opacity duration-300 ${isAtOrigin ? 'pointer-events-none' : ''}`}
        style={{ padding: isFullscreen ? 0 : '24px' }}
      >
        {/* Content panel */}
        <div
          ref={panelRef}
          className={`bg-white overflow-hidden flex flex-col shadow-2xl shadow-black/30 ${
            isFullscreen ? 'w-screen h-screen' : 'w-[900px] max-w-[calc(100vw-96px)] max-h-[88vh]'
          }`}
          style={panelStyle}
        >
          {/* Scrollable content area */}
          <div className="overflow-y-auto flex-1 p-10 no-scrollbar" style={{ overscrollBehavior: 'contain' }}>
            {children}
          </div>
        </div>

        {/* Right-side toolbar (Zen style) */}
        <div
          className={`flex flex-col gap-2 shrink-0 transition-all duration-300 ${
            isAtOrigin ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
          }`}
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 group"
            aria-label="Close"
          >
            <svg className="w-4 h-4 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Open full page */}
          <button
            onClick={() => {
              if (onFullPage) {
                handleClose();
                setTimeout(() => onFullPage(), 100);
              } else {
                setIsFullscreen(!isFullscreen);
              }
            }}
            className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-200 group"
            aria-label="Open full page"
          >
            <svg className="w-4 h-4 text-white/80 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Glance;
