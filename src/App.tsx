import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PromptBar } from './components/PromptBar';
import { ScriptGrid } from './components/ScriptGrid';
import { Trends } from './components/Trends';

export default function App() {
  const [activeTab, setActiveTab] = useState('studio');

  return (
    <div className="min-h-screen bg-bg-base text-text-primary font-sans selection:bg-brand-primary/30 selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative">
        {activeTab === 'studio' && <ScriptGrid />}
        {activeTab === 'scripts' && <ScriptGrid />}
        {activeTab === 'trends' && <Trends />}
        {activeTab === 'templates' && (
          <div className="flex items-center justify-center h-[60vh] text-[#666666]">
            Templates coming soon...
          </div>
        )}
      </main>

      <PromptBar />
    </div>
  );
}
