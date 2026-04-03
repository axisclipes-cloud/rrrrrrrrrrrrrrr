import { ScriptCard } from './ScriptCard';
import { Script } from '../types';

const MOCK_SCRIPTS: Script[] = [
  {
    id: '1',
    title: '5 AI Tools You Need in 2026',
    hook: 'Stop using ChatGPT for everything. These 5 AI tools will actually save you 10 hours a week.',
    duration: 60,
    platform: 'TikTok',
    previewImage: 'https://picsum.photos/seed/tech1/600/400',
    createdAt: '2 HOURS AGO'
  },
  {
    id: '2',
    title: 'Morning Routine for Productivity',
    hook: 'I tried the billionaire morning routine for 30 days and here is exactly what happened to my brain.',
    duration: 45,
    platform: 'Reels',
    previewImage: 'https://picsum.photos/seed/morning/600/400',
    createdAt: '5 HOURS AGO'
  },
  {
    id: '3',
    title: 'Hidden iPhone Features',
    hook: 'Apple is hiding this feature from you. Here is how to unlock your iPhone\'s secret menu.',
    duration: 30,
    platform: 'Shorts',
    previewImage: 'https://picsum.photos/seed/phone/600/400',
    createdAt: '1 DAY AGO'
  },
  {
    id: '4',
    title: 'Easy Healthy Dinner Recipe',
    hook: 'If you have 15 minutes and a pan, you can make the best dinner of your life. Let\'s go.',
    duration: 60,
    platform: 'TikTok',
    previewImage: 'https://picsum.photos/seed/food/600/400',
    createdAt: '2 DAYS AGO'
  },
  {
    id: '5',
    title: 'Psychology Trick to Win Arguments',
    hook: 'Use this dark psychology trick to instantly win any argument without raising your voice.',
    duration: 30,
    platform: 'Reels',
    previewImage: 'https://picsum.photos/seed/brain/600/400',
    createdAt: '3 DAYS AGO'
  },
  {
    id: '6',
    title: 'Best Budget Cameras 2026',
    hook: 'Do not buy a camera until you watch this. The best budget camera of 2026 is not what you think.',
    duration: 60,
    platform: 'Shorts',
    previewImage: 'https://picsum.photos/seed/camera/600/400',
    createdAt: '4 DAYS AGO'
  },
  {
    id: '7',
    title: 'How to Start a Business with $0',
    hook: 'I built a $10k/month business with zero dollars. Here is the exact step-by-step blueprint.',
    duration: 60,
    platform: 'TikTok',
    previewImage: 'https://picsum.photos/seed/money/600/400',
    createdAt: '1 WEEK AGO'
  },
  {
    id: '8',
    title: 'Travel Hacks You Must Know',
    hook: 'Airlines hate this trick. Here is how to get free upgrades on your next flight.',
    duration: 45,
    platform: 'Reels',
    previewImage: 'https://picsum.photos/seed/travel/600/400',
    createdAt: '1 WEEK AGO'
  }
];

export function ScriptGrid() {
  return (
    <div className="p-6 pb-32 max-w-[1600px] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[20px] font-semibold text-white">Recent Generations</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[12px] text-[#cccccc] hover:text-white hover:bg-white/10 transition-colors">
            Filter
          </button>
          <button className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-[12px] text-[#cccccc] hover:text-white hover:bg-white/10 transition-colors">
            Sort by: Newest
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {MOCK_SCRIPTS.map(script => (
          <ScriptCard key={script.id} script={script} />
        ))}
      </div>
    </div>
  );
}
