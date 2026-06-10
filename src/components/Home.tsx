import React from 'react';
import { Compass, Palmtree, Waves } from 'lucide-react';

interface HomeProps {
  onSelectRegion: (region: 'jeju' | 'busan') => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectRegion }) => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-4 relative overflow-hidden">
      {/* Decorative blurred background shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl text-center z-10 flex flex-col items-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-indigo-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg backdrop-blur-md">
          <Compass className="animate-spin" style={{ animationDuration: '6s' }} size={16} />
          <span>2박 3일 뚜벅이 여행지 결정 피티</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
          제주도 vs 부산 <br className="sm:hidden" />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
            여행 계획 끝장 비교
          </span>
        </h1>

        {/* Description */}
        <p className="text-slate-400 text-base sm:text-lg max-w-xl mb-12 leading-relaxed">
          친구들과 함께 가볍게 떠나는 뚜벅이 여행! 대중교통 동선부터 예상 경비, 핵심 포토스팟까지 꼼꼼히 비교해 보고 최고의 선택지를 골라보세요.
        </p>

        {/* Selection Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center">
          {/* Jeju Button */}
          <button
            onClick={() => onSelectRegion('jeju')}
            className="group relative flex-1 flex flex-col items-center justify-between p-8 rounded-2xl bg-slate-900/60 border border-emerald-500/20 hover:border-emerald-400/50 hover:bg-slate-850/80 transition-all duration-300 shadow-xl hover:shadow-emerald-950/20 backdrop-blur-md hover:-translate-y-1 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <Palmtree size={32} />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-200">
                제주도 여행 계획
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
                에메랄드빛 한담 바다와 서부 자연 속으로! 여유롭고 한적한 감성 힐링 뚜벅이 루트
              </p>
            </div>

            <span className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors duration-200 shadow-lg shadow-emerald-900/20">
              제주도 계획 보기
            </span>
          </button>

          {/* Busan Button */}
          <button
            onClick={() => onSelectRegion('busan')}
            className="group relative flex-1 flex flex-col items-center justify-between p-8 rounded-2xl bg-slate-900/60 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-slate-850/80 transition-all duration-300 shadow-xl hover:shadow-cyan-950/20 backdrop-blur-md hover:-translate-y-1 text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
              <Waves size={32} />
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                부산 여행 계획
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
                화려한 광안대교 야경과 바다열차! 대중교통이 압도적으로 편리한 도시형 식도락 루트
              </p>
            </div>

            <span className="w-full py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-semibold transition-colors duration-200 shadow-lg shadow-cyan-900/20">
              부산 계획 보기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
