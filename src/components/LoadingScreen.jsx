import { useState, useEffect } from 'react';

const loadingWords = [
  'Hello',
  '\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02',
  '\u0928\u092e\u0938\u094d\u0924\u0947',
  'Hola',
  'Bonjour',
  'Ciao',
  '\u3053\u3093\u306b\u3061\u306f',
  '\uc548\ub155\ud558\uc138\uc694',
  'Hallo',
  'Ola',
  'Xin chao',
  'Marhaba',
  'Privet',
  'Czesc',
  'Shalom',
  'Welcome'
];

/**
 * LoadingScreen Component
 * Full-screen entry animation that cycles through greeting words, then notifies
 * Layout so the main website can fade in.
 */
function LoadingScreen({ onFinished }) {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const totalWords = loadingWords.length;
    let currentIdx = 0;

    const showNextWord = () => {
      if (currentIdx < totalWords - 1) {
        currentIdx++;
        setIndex(currentIdx);

        // Most words advance quickly. The final word gets a longer hold before
        // the loading screen closes so the transition feels intentional.
        const nextDelay = currentIdx === totalWords - 1 ? 800 : 150;
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
  }, [onFinished]);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-white flex items-center justify-center transition-transform duration-1000 ease-in-out ${!show ? 'translate-y-[-100%]' : ''}`} style={{ transition: 'transform 1s cubic-bezier(0.85, 0, 0.15, 1)' }}>
      <div className="flex flex-col items-center">
        <h1 className="text-7xl md:text-8xl font-black text-[#00C2FF] tracking-tighter transition-all duration-300 transform scale-110">
          {loadingWords[index]}
        </h1>
        <div className="mt-8 flex gap-1">
          {loadingWords.map((_, i) => (
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
