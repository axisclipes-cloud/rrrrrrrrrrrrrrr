import { useState } from 'react';
import { Plus, Clock, MonitorPlay, Sparkles, Settings2, ChevronDown } from 'lucide-react';

export function PromptBar() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-40">
      <div className="bg-[#111111]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
        
        {/* Input Area */}
        <div className="p-3 flex gap-3 items-start">
          <div className="flex gap-2">
             <button className="w-12 h-12 rounded-xl border border-white/10 border-dashed flex items-center justify-center text-[#555555] hover:text-white hover:border-white/30 transition-colors bg-white/5">
                <Plus size={20} />
             </button>
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your video idea, target audience, or paste a link..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[#555555] resize-none min-h-[48px] py-3 text-[14px]"
            rows={1}
          />
        </div>

        {/* Controls Bar */}
        <div className="bg-[#0d0d0d] border-t border-white/5 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1e1e1e] border border-white/5 text-[12px] text-[#cccccc] hover:bg-white/10 transition-colors">
              <Clock size={14} />
              <span>30s</span>
              <ChevronDown size={12} className="opacity-50" />
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1e1e1e] border border-white/5 text-[12px] text-[#cccccc] hover:bg-white/10 transition-colors">
              <MonitorPlay size={14} />
              <span>TikTok</span>
              <ChevronDown size={12} className="opacity-50" />
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#1e1e1e] border border-white/5 text-[12px] text-[#cccccc] hover:bg-white/10 transition-colors">
              <Sparkles size={14} />
              <span>Viral Hook</span>
              <ChevronDown size={12} className="opacity-50" />
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-transparent text-[12px] text-[#888888] hover:text-white transition-colors">
              <Settings2 size={14} />
              <span>Advanced</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-[#1a1a1a]">
              <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                <Sparkles size={12} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-white leading-none">ScriptGen PRO</span>
                <span className="text-[9px] text-[#666666] leading-none mt-1">GPT-4o + Claude 3.5</span>
              </div>
            </div>
            <button className="bg-brand-primary hover:bg-[#d4f54d] text-black px-5 py-2 rounded-lg font-bold text-[13px] tracking-wide flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(198,241,53,0.3)]">
              GENERATE
              <Sparkles size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
