import { Clock, Play, Copy, Heart, MoreHorizontal } from 'lucide-react';
import { Script } from '../types';

interface ScriptCardProps {
  script: Script;
}

export function ScriptCard({ script }: ScriptCardProps) {
  return (
    <div className="group relative bg-bg-card rounded-xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col cursor-pointer">
      {/* Image Preview Area */}
      <div className="relative aspect-video bg-bg-elevated overflow-hidden">
        <img 
          src={script.previewImage} 
          alt={script.title}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/20 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex gap-1.5">
          <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-semibold text-white uppercase tracking-wider border border-white/10">
            {script.platform}
          </span>
          <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-medium text-[#cccccc] flex items-center gap-1 border border-white/10">
            <Clock size={10} />
            {script.duration}s
          </span>
        </div>

        {/* Hover Actions */}
        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button className="w-7 h-7 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Heart size={12} />
          </button>
          <button className="w-7 h-7 rounded bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
            <Copy size={12} />
          </button>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-brand-primary/90 text-black flex items-center justify-center pl-1 shadow-[0_0_20px_rgba(198,241,53,0.4)] hover:scale-110 transition-transform">
            <Play size={16} className="fill-black" />
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[14px] font-semibold text-white leading-tight mb-2 line-clamp-1">
          {script.title}
        </h3>
        <div className="bg-white/5 rounded-lg p-2.5 mb-3 border border-white/5">
          <p className="text-[12px] text-[#aaaaaa] line-clamp-2 leading-relaxed">
            <span className="text-brand-primary font-medium mr-1">Hook:</span>
            "{script.hook}"
          </p>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-[10px] text-[#555555] uppercase tracking-wider">
            {script.createdAt}
          </span>
          <button className="text-[#666666] hover:text-white transition-colors">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
