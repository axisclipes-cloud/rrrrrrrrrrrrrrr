import { TrendingUp, Flame, ArrowUpRight, Play } from 'lucide-react';
import { Trend } from '../types';

const MOCK_TRENDS: Trend[] = [
  {
    id: '1',
    title: 'The "I tried X for 30 days" Format',
    platform: 'YouTube Shorts',
    views: '15M+',
    whyViral: 'High curiosity gap, clear timeline, promises a transformation.',
    suggestedScript: 'I tried [habit] for 30 days and here is what happened to my [result]. Day 1 was brutal...',
    thumbnail: 'https://picsum.photos/seed/trend1/400/600'
  },
  {
    id: '2',
    title: 'POV: Relatable Work Moments',
    platform: 'TikTok',
    views: '22M+',
    whyViral: 'Highly relatable, shareable with coworkers, uses trending audio.',
    suggestedScript: 'POV: You just sent an email saying "per my last email" and now you are waiting for the chaos.',
    thumbnail: 'https://picsum.photos/seed/trend2/400/600'
  },
  {
    id: '3',
    title: '3 Reasons Why You Should...',
    platform: 'Instagram Reels',
    views: '8M+',
    whyViral: 'Educational, easy to digest, high save rate for future reference.',
    suggestedScript: '3 reasons why you are always tired (and it is not lack of sleep). Number 1...',
    thumbnail: 'https://picsum.photos/seed/trend3/400/600'
  }
];

export function Trends() {
  return (
    <div className="p-6 pb-32 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
          <Flame size={20} />
        </div>
        <div>
          <h2 className="text-[24px] font-bold text-white leading-tight">Trending Formats</h2>
          <p className="text-[14px] text-[#aaaaaa]">Discover what's going viral right now across platforms.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_TRENDS.map(trend => (
          <div key={trend.id} className="bg-bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer">
            <div className="relative aspect-[9/16] bg-bg-elevated overflow-hidden">
              <img 
                src={trend.thumbnail} 
                alt={trend.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[11px] font-semibold text-white border border-white/10">
                  {trend.platform}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-brand-primary/20 backdrop-blur-md text-[11px] font-bold text-brand-primary border border-brand-primary/30 flex items-center gap-1">
                  <TrendingUp size={12} />
                  {trend.views}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors hover:scale-105">
                  <Play size={20} className="fill-white ml-1" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-[18px] font-bold text-white leading-tight mb-2">{trend.title}</h3>
                <div className="bg-white/5 rounded-lg p-3 border border-white/10 backdrop-blur-md">
                  <p className="text-[12px] text-brand-primary font-medium mb-1">Why it works:</p>
                  <p className="text-[12px] text-[#cccccc] leading-relaxed">{trend.whyViral}</p>
                </div>
              </div>
            </div>
            
            <div className="p-5 bg-bg-card">
              <p className="text-[12px] text-[#aaaaaa] mb-4 line-clamp-3 italic">
                "{trend.suggestedScript}"
              </p>
              <button className="w-full py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-[13px] font-semibold text-white transition-colors flex items-center justify-center gap-2">
                Use this format
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
