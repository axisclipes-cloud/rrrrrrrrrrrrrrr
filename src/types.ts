export interface Script {
  id: string;
  title: string;
  hook: string;
  duration: number;
  platform: 'TikTok' | 'Shorts' | 'Reels' | 'YouTube Shorts' | 'Instagram Reels';
  previewImage: string;
  createdAt: string;
}

export interface Trend {
  id: string;
  title: string;
  platform: 'TikTok' | 'Shorts' | 'Reels' | 'YouTube Shorts' | 'Instagram Reels';
  views: string;
  whyViral: string;
  suggestedScript: string;
  thumbnail: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  icon: string;
}
