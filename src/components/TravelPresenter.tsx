import React, { useState, useEffect } from 'react';
import { Home, ChevronLeft, ChevronRight } from 'lucide-react';
import type { TravelSlide } from '../types/presentation';
import { TravelSlideRenderer } from './TravelSlideRenderer';

interface TravelPresenterProps {
  slides: TravelSlide[];
  region: 'jeju' | 'busan';
  onBackToHome: () => void;
}

export const TravelPresenter: React.FC<TravelPresenterProps> = ({
  slides,
  region,
  onBackToHome
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;
  const currentSlide = slides[currentIndex];
  const isJeju = region === 'jeju';

  // Navigation handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  };

  // Keyboard navigation hook
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
        case 'ArrowUp':
          handlePrev();
          break;
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          handleNext();
          break;
        case 'Escape':
          onBackToHome();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, totalSlides]);

  // Color mapping
  const activeColor = isJeju ? 'bg-emerald-600 hover:bg-emerald-500' : 'bg-cyan-600 hover:bg-cyan-500';
  const progressBg = isJeju ? 'bg-emerald-500' : 'bg-cyan-500';
  const badgeBorder = isJeju ? 'border-emerald-500/20' : 'border-cyan-500/20';

  return (
    <div className="min-h-screen w-full flex flex-col justify-between items-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-6 md:p-8 relative select-none">
      {/* Top Header info */}
      <header className="w-full max-w-7xl flex items-center justify-between py-2 border-b border-slate-800 mb-4 no-print z-10">
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${isJeju ? 'bg-emerald-500/10 text-emerald-400' : 'bg-cyan-500/10 text-cyan-400'} border ${badgeBorder}`}>
            {isJeju ? 'Jeju Island 🍊' : 'Busan City 🌊'}
          </span>
          <h2 className="text-sm sm:text-base font-bold text-slate-300">2박 3일 뚜벅이 일정표</h2>
        </div>
        
        <span className="text-xs sm:text-sm font-semibold text-slate-500 font-mono">
          {currentIndex + 1} / {totalSlides}
        </span>
      </header>

      {/* Main 16:9 Presentation Slide Canvas */}
      <main className="flex-1 w-full flex items-center justify-center py-4 z-10">
        <div className="w-full max-w-7xl aspect-video rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col justify-between backdrop-blur-sm print-slide-container">
          
          {/* Active slide renderer */}
          <TravelSlideRenderer slide={currentSlide} region={region} />

          {/* Individual slide progress bar inside the slide frame */}
          <div className="w-full h-1 bg-slate-800/80 relative">
            <div 
              className={`h-full ${progressBg} transition-all duration-300`} 
              style={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
            />
          </div>
        </div>
      </main>

      {/* Bottom navigation HUD controls */}
      <footer className="w-full max-w-xl flex items-center justify-between gap-4 py-4 no-print z-10">
        {/* Previous button */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-900 transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'active:scale-95'}`}
          title="이전 슬라이드 (←)"
        >
          <ChevronLeft size={18} />
          <span className="text-sm font-semibold">이전 슬라이드</span>
        </button>

        {/* Back to Portal (Home) */}
        <button
          onClick={onBackToHome}
          className="flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-700 transition-all active:scale-95 shrink-0"
          title="처음 화면으로 돌아가기 (Esc)"
        >
          <Home size={18} />
        </button>

        {/* Next button */}
        <button
          onClick={handleNext}
          disabled={currentIndex === totalSlides - 1}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white transition-all ${activeColor} ${currentIndex === totalSlides - 1 ? 'opacity-30 cursor-not-allowed' : 'active:scale-95'} shadow-lg shadow-indigo-950/20`}
          title="다음 슬라이드 (→ 또는 Space)"
        >
          <span className="text-sm font-semibold">다음 슬라이드</span>
          <ChevronRight size={18} />
        </button>
      </footer>
    </div>
  );
};
