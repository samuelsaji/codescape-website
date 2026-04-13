import { useState, useEffect } from 'react';

/**
 * LoadingScreen Component
 * Implements a full-screen entry animation that cycles through "Hello" in multiple languages.
 */
function LoadingScreen({ onFinished }) {
  const words = [
    "Hello", "നമസ്കാരം", "नमस्ते", "Hola", "Bonjour", "Ciao", "こんにちは", "안녕하세요", "Hallo", "Olá", "Xin chào", "Marhaba", "Privet", "Cześć", "Shalom", "Welcome"
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const totalWords = words.length;
    let currentIdx = 0;

    const showNextWord = () => {
      if (currentIdx < totalWords - 1) {
        currentIdx++;
        setIndex(currentIdx);
        
        const nextDelay = (currentIdx === totalWords - 1) ? 800 : 150;
        setTimeout(showNextWord, nextDelay);
      } else {
        setTimeout(() => {
          setShow(false);
          if (onFinished) onFinished();
        }, 300);
      }
    };

    setTimeout(showNextWord, 600);

    return () => {};
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-white flex items-center justify-center transition-transform duration-1000 ease-in-out ${!show ? 'translate-y-[-100%]' : ''}`} style={{ transition: 'transform 1s cubic-bezier(0.85, 0, 0.15, 1)' }}>
      <div className="flex flex-col items-center">
        <h1 className="text-7xl md:text-8xl font-black text-[#00C2FF] tracking-tighter transition-all duration-300 transform scale-110">
          {words[index]}
        </h1>
        <div className="mt-8 flex gap-1">
          {words.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full bg-[#00C2FF] transition-all duration-300 ${i === index ? 'w-8' : 'w-1.5 opacity-20'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
