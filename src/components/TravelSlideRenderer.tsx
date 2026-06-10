import React from 'react';
import { Calendar, DollarSign, MapPin, Lightbulb, CheckCircle2, Map } from 'lucide-react';
import type { TravelSlide } from '../types/presentation';
import { TravelMap } from './TravelMap';

interface TravelSlideRendererProps {
  slide: TravelSlide;
  region: 'jeju' | 'busan';
}

export const TravelSlideRenderer: React.FC<TravelSlideRendererProps> = ({ slide, region }) => {
  const isJeju = region === 'jeju';
  
  // Theme Color mappings
  const themeText = isJeju ? 'text-emerald-400' : 'text-cyan-400';
  const themeBg = isJeju ? 'bg-emerald-500/10' : 'bg-cyan-500/10';
  const themeBorder = isJeju ? 'border-emerald-500/30' : 'border-cyan-500/30';
  const themeBadge = isJeju ? 'bg-emerald-500/20 text-emerald-300' : 'bg-cyan-500/20 text-cyan-300';
  const themeHoverBorder = isJeju ? 'hover:border-emerald-400/50' : 'hover:border-cyan-400/50';

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="h-full flex flex-col justify-center items-center text-center px-12">
            <div className={`w-20 h-20 rounded-full ${themeBg} flex items-center justify-center mb-8 text-4xl shadow-inner border ${themeBorder}`}>
              {isJeju ? '🍊' : '🌊'}
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight max-w-3xl">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-slate-400 text-lg md:text-xl font-medium tracking-wide">
                {slide.subtitle}
              </p>
            )}
            <div className="absolute bottom-10 text-xs text-slate-500 tracking-widest uppercase">
              2박 3일 뚜벅이 일정 비교표 • {isJeju ? 'JEJU ISLAND' : 'BUSAN METROPOLITAN'}
            </div>
          </div>
        );

      case 'route':
        return (
          <div className="h-full flex flex-col justify-between p-10">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <MapPin className={themeText} size={28} />
                <span>{slide.title}</span>
              </h2>
              {slide.routeDay && (
                <span className={`px-4 py-1.5 rounded-full text-sm font-bold ${themeBadge} border ${themeBorder} shadow-lg`}>
                  {slide.routeDay}
                </span>
              )}
            </div>

            {/* Timeline Row Flow */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2 py-2">
              {slide.routeItems?.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col p-4 rounded-xl bg-slate-900/50 border border-slate-800 ${themeHoverBorder} transition-all duration-200`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500 font-mono">{item.time}</span>
                    <span className={`w-6 h-6 rounded-full ${themeBg} flex items-center justify-center text-[10px] font-bold ${themeText}`}>
                      {index + 1}
                    </span>
                  </div>
                  <h4 className="text-sm md:text-base font-bold text-white mb-1.5 line-clamp-1">{item.spot}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{item.memo}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'cost':
        return (
          <div className="h-full flex flex-col justify-between p-10">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <DollarSign className={themeText} size={28} />
                <span>{slide.title}</span>
              </h2>
              <span className="text-xs text-slate-400 tracking-wider">1인 실계산 기준</span>
            </div>

            {/* Cost Grid/Table */}
            <div className="flex-1 flex flex-col justify-center gap-3 overflow-y-auto pr-2">
              {slide.costItems?.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:bg-slate-900/60 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-full ${themeBg} flex items-center justify-center text-xs font-black ${themeText}`}>
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-white">{item.category}</h4>
                      <p className="text-xs text-slate-400">{item.detail}</p>
                    </div>
                  </div>
                  <span className={`text-base md:text-lg font-black ${themeText} font-mono`}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'spots':
        return (
          <div className="h-full flex flex-col justify-between p-10">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Calendar className={themeText} size={28} />
                <span>{slide.title}</span>
              </h2>
              <span className="text-xs text-slate-400 tracking-wider">Must-Visit 명소</span>
            </div>

            {/* Spots Grid */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-2 py-1">
              {slide.spots?.map((spot, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-850 hover:bg-slate-900/80 transition-colors"
                >
                  <div className="text-3xl p-1 bg-slate-800/50 rounded-lg">{spot.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm md:text-base font-bold text-white">{spot.name}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-400">
                        {spot.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{spot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'tips':
        return (
          <div className="h-full flex flex-col justify-between p-10">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Lightbulb className={themeText} size={28} />
                <span>{slide.title}</span>
              </h2>
              <span className="text-xs text-slate-400 tracking-wider">안전하고 쾌적한 이동을 위해</span>
            </div>

            {/* Tips List */}
            <div className="flex-1 flex flex-col justify-center gap-4 overflow-y-auto pr-2">
              {slide.tips?.map((tip, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/30 border border-slate-850/80"
                >
                  <CheckCircle2 className={`${themeText} shrink-0 mt-0.5`} size={18} />
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'map':
        return (
          <div className="h-full flex flex-col justify-between p-10">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4 shrink-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                <Map className={themeText} size={28} />
                <span>{slide.title}</span>
              </h2>
              <span className="text-xs text-slate-400 tracking-wider">Interactive Map</span>
            </div>

            {/* Map Container */}
            <div className="flex-1 w-full relative z-0">
              <TravelMap 
                pins={slide.mapPins} 
                center={slide.mapCenter} 
                zoom={slide.mapZoom} 
                region={region} 
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="h-full flex flex-col justify-center items-center p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">{slide.title}</h2>
            <p className="text-slate-400 text-sm max-w-md">{slide.content || "상세 일정 조사 내용을 입력하세요."}</p>
          </div>
        );
    }
  };

  return (
    <div className="w-full h-full relative select-none">
      {renderSlideContent()}
    </div>
  );
};
