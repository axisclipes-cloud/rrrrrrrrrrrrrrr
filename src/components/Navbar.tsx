import { Film, Sparkles, TrendingUp, LayoutTemplate, User, Settings } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const navItems = [
    { id: 'studio', label: 'Studio', icon: Film },
    { id: 'scripts', label: 'Scripts', icon: Sparkles },
    { id: 'trends', label: 'Trends', icon: TrendingUp },
    { id: 'templates', label: 'Templates', icon: LayoutTemplate },
  ];

  return (
    <nav className="h-14 bg-bg-navbar border-b border-white/5 px-6 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="text-[18px] font-extrabold text-white tracking-tight leading-none">ABRAhub</span>
          <span className="text-[10px] font-normal text-[#555555] tracking-wider uppercase leading-none mt-[3px]">Script Studio</span>
        </div>
      </div>

      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                isActive 
                  ? 'bg-white/10 text-white' 
                  : 'text-[#cccccc] hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon size={14} className={isActive ? 'text-brand-primary' : ''} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-4">
        <button className="text-[#aaaaaa] hover:text-white transition-colors">
          <Settings size={18} />
        </button>
        <button className="w-8 h-8 rounded-full bg-bg-elevated border border-white/10 flex items-center justify-center text-[#aaaaaa] hover:text-white transition-colors">
          <User size={16} />
        </button>
      </div>
    </nav>
  );
}
