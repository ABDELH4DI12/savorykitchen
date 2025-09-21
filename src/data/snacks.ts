export interface Snack {
  id: string;
  name: string;
  category: 'chips' | 'cookies' | 'candy' | 'healthy';
  price: number;
  description: string;
  flavor: string;
  image: string;
  emoji: string;
  personality: string;
  rating: number;
  popular: boolean;
}

export const snacks: Snack[] = [
  {
    id: '1',
    name: 'Cosmic Chips',
    category: 'chips',
    price: 3.99,
    description: 'Crunchy chips that are out of this world!',
    flavor: 'Spicy Galaxy',
    image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400',
    emoji: '🚀',
    personality: 'Bold and adventurous',
    rating: 4.8,
    popular: true
  },
  {
    id: '2',
    name: 'Rainbow Cookies',
    category: 'cookies',
    price: 4.49,
    description: 'Colorful cookies that taste like happiness!',
    flavor: 'Sweet Rainbow',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400',
    emoji: '🌈',
    personality: 'Cheerful and bright',
    rating: 4.9,
    popular: true
  },
  {
    id: '3',
    name: 'Gummy Galaxy',
    category: 'candy',
    price: 2.99,
    description: 'Chewy gummies from another dimension!',
    flavor: 'Fruity Cosmos',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400',
    emoji: '🌟',
    personality: 'Playful and sweet',
    rating: 4.7,
    popular: true
  },
  {
    id: '4',
    name: 'Power Bars',
    category: 'healthy',
    price: 5.99,
    description: 'Nutritious bars packed with energy!',
    flavor: 'Nutty Power',
    image: 'https://images.unsplash.com/photo-1559703248-dcaaec9fab78?w=400',
    emoji: '💪',
    personality: 'Strong and reliable',
    rating: 4.6,
    popular: false
  },
  {
    id: '5',
    name: 'Tornado Twists',
    category: 'chips',
    price: 3.49,
    description: 'Twisted chips with a whirlwind of flavor!',
    flavor: 'BBQ Storm',
    image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?w=400',
    emoji: '🌪️',
    personality: 'Wild and exciting',
    rating: 4.5,
    popular: false
  },
  {
    id: '6',
    name: 'Choco Dreams',
    category: 'cookies',
    price: 4.99,
    description: 'Chocolate cookies that melt in your dreams!',
    flavor: 'Dark Chocolate',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    emoji: '🍫',
    personality: 'Rich and indulgent',
    rating: 4.9,
    popular: true
  },
  {
    id: '7',
    name: 'Sour Shockers',
    category: 'candy',
    price: 2.49,
    description: 'Sour candy that will shock your taste buds!',
    flavor: 'Electric Sour',
    image: 'https://images.unsplash.com/photo-1635342220327-c9e0a2714b57?w=400',
    emoji: '⚡',
    personality: 'Shocking and bold',
    rating: 4.4,
    popular: false
  },
  {
    id: '8',
    name: 'Zen Bites',
    category: 'healthy',
    price: 6.49,
    description: 'Mindful snacks for peaceful moments!',
    flavor: 'Green Tea',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400',
    emoji: '🧘',
    personality: 'Calm and balanced',
    rating: 4.7,
    popular: false
  },
  {
    id: '9',
    name: 'Volcano Chips',
    category: 'chips',
    price: 3.79,
    description: 'Explosive flavor in every bite!',
    flavor: 'Lava Hot',
    image: 'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?w=400',
    emoji: '🌋',
    personality: 'Fiery and intense',
    rating: 4.6,
    popular: true
  },
  {
    id: '10',
    name: 'Magic Munchies',
    category: 'cookies',
    price: 4.29,
    description: 'Enchanted cookies with a magical taste!',
    flavor: 'Vanilla Magic',
    image: 'https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=400',
    emoji: '✨',
    personality: 'Mystical and delightful',
    rating: 4.8,
    popular: false
  },
  {
    id: '11',
    name: 'Bubble Blast',
    category: 'candy',
    price: 1.99,
    description: 'Bubblegum that pops with flavor!',
    flavor: 'Bubble Berry',
    image: 'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=400',
    emoji: '🫧',
    personality: 'Fun and bubbly',
    rating: 4.3,
    popular: false
  },
  {
    id: '12',
    name: 'Super Seeds',
    category: 'healthy',
    price: 5.49,
    description: 'Super-powered seeds for super humans!',
    flavor: 'Mixed Seeds',
    image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=400',
    emoji: '🌱',
    personality: 'Natural and powerful',
    rating: 4.5,
    popular: false
  }
];

export const getSnacksByCategory = (category: string) => {
  return snacks.filter(snack => snack.category === category);
};

export const getPopularSnacks = () => {
  return snacks.filter(snack => snack.popular);
};

export const getSnackById = (id: string) => {
  return snacks.find(snack => snack.id === id);
};
