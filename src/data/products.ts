import { Product } from '../types';

export const products: Product[] = [
  // Dog Products
  {
    id: '1',
    name: 'Premium Dog Food - Chicken & Rice',
    price: 49.99,
    originalPrice: 59.99,
    category: 'dogs',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'High-quality premium dog food made with real chicken and wholesome rice. Perfect for adult dogs of all sizes.',
    features: ['Real chicken as first ingredient', 'No artificial preservatives', 'Rich in protein', 'Supports healthy digestion'],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    brand: 'PetNutrition'
  },
  {
    id: '2',
    name: 'Interactive Dog Toy Ball',
    price: 19.99,
    category: 'dogs',
    image: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Durable interactive toy ball that keeps your dog entertained for hours. Perfect for fetch and solo play.',
    features: ['Durable rubber construction', 'Squeaker inside', 'Easy to clean', 'Suitable for all dog sizes'],
    inStock: true,
    rating: 4.5,
    reviews: 89,
    brand: 'PlayPaws'
  },
  {
    id: '3',
    name: 'Luxury Dog Bed - Large',
    price: 89.99,
    originalPrice: 109.99,
    category: 'dogs',
    image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Ultra-comfortable orthopedic dog bed with memory foam support. Perfect for senior dogs or those with joint issues.',
    features: ['Memory foam support', 'Removable washable cover', 'Non-slip bottom', 'Orthopedic design'],
    inStock: true,
    rating: 4.9,
    reviews: 234,
    brand: 'ComfortPaws'
  },

  // Cat Products
  {
    id: '4',
    name: 'Premium Cat Food - Salmon',
    price: 39.99,
    category: 'cats',
    image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Grain-free premium cat food with real salmon. Specially formulated for indoor cats.',
    features: ['Real salmon first ingredient', 'Grain-free formula', 'Supports healthy coat', 'Indoor cat formula'],
    inStock: true,
    rating: 4.7,
    reviews: 198,
    brand: 'FelineNutrition'
  },
  {
    id: '5',
    name: 'Interactive Cat Toy Tower',
    price: 29.99,
    category: 'cats',
    image: 'https://images.pexels.com/photos/1571076/pexels-photo-1571076.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1571076/pexels-photo-1571076.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Multi-level interactive toy tower that keeps cats engaged with rolling balls and various textures.',
    features: ['3-level design', 'Rolling balls included', 'Non-slip base', 'Encourages active play'],
    inStock: true,
    rating: 4.6,
    reviews: 145,
    brand: 'CatPlay'
  },
  {
    id: '6',
    name: 'Self-Cleaning Litter Box',
    price: 199.99,
    originalPrice: 249.99,
    category: 'cats',
    image: 'https://images.pexels.com/photos/7731509/pexels-photo-7731509.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/7731509/pexels-photo-7731509.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Revolutionary self-cleaning litter box that automatically scoops waste after each use.',
    features: ['Automatic cleaning cycle', 'Odor control system', 'Large capacity', 'Easy maintenance'],
    inStock: true,
    rating: 4.8,
    reviews: 167,
    brand: 'CleanPaws'
  },

  // Bird Products
  {
    id: '7',
    name: 'Premium Bird Seed Mix',
    price: 24.99,
    category: 'birds',
    image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Nutritious seed mix perfect for various bird species. Contains sunflower seeds, millet, and more.',
    features: ['Multiple seed varieties', 'High nutrition content', 'No fillers', 'Suitable for most birds'],
    inStock: true,
    rating: 4.4,
    reviews: 87,
    brand: 'BirdLife'
  },
  {
    id: '8',
    name: 'Large Bird Cage with Stand',
    price: 159.99,
    category: 'birds',
    image: 'https://images.pexels.com/photos/1652278/pexels-photo-1652278.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1652278/pexels-photo-1652278.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Spacious bird cage with rolling stand. Perfect for medium to large birds.',
    features: ['Spacious interior', 'Rolling stand included', 'Easy-clean design', 'Multiple perches'],
    inStock: true,
    rating: 4.7,
    reviews: 93,
    brand: 'AvianHome'
  },

  // Fish Products
  {
    id: '9',
    name: '50-Gallon Aquarium Kit',
    price: 299.99,
    originalPrice: 349.99,
    category: 'fish',
    image: 'https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Complete 50-gallon aquarium kit with filter, heater, and LED lighting system.',
    features: ['Complete starter kit', 'LED lighting included', 'Powerful filtration', 'Heater included'],
    inStock: true,
    rating: 4.9,
    reviews: 78,
    brand: 'AquaLife'
  },
  {
    id: '10',
    name: 'Tropical Fish Food Flakes',
    price: 12.99,
    category: 'fish',
    image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'High-quality tropical fish food flakes with essential nutrients for vibrant colors.',
    features: ['Color-enhancing formula', 'Easy to digest', 'Suitable for all tropical fish', 'Long shelf life'],
    inStock: true,
    rating: 4.3,
    reviews: 156,
    brand: 'FishNutrition'
  },

  // Small Pets
  {
    id: '11',
    name: 'Hamster Cage Deluxe',
    price: 79.99,
    category: 'small-pets',
    image: 'https://images.pexels.com/photos/6578391/pexels-photo-6578391.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/6578391/pexels-photo-6578391.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Multi-level hamster cage with tubes, wheels, and plenty of space for exploration.',
    features: ['Multi-level design', 'Exercise wheel included', 'Connecting tubes', 'Easy assembly'],
    inStock: true,
    rating: 4.6,
    reviews: 112,
    brand: 'SmallPetHome'
  },
  {
    id: '12',
    name: 'Rabbit Hay Premium Blend',
    price: 18.99,
    category: 'small-pets',
    image: 'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=500',
    images: [
      'https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=500'
    ],
    description: 'Premium timothy hay blend perfect for rabbits and guinea pigs. High in fiber.',
    features: ['100% natural timothy hay', 'High fiber content', 'Supports dental health', 'Fresh and aromatic'],
    inStock: true,
    rating: 4.5,
    reviews: 89,
    brand: 'NaturalPet'
  }
];

export const categories = [
  { id: 'dogs', name: 'Dogs', icon: 'dog', count: products.filter(p => p.category === 'dogs').length },
  { id: 'cats', name: 'Cats', icon: 'cat', count: products.filter(p => p.category === 'cats').length },
  { id: 'birds', name: 'Birds', icon: 'bird', count: products.filter(p => p.category === 'birds').length },
  { id: 'fish', name: 'Fish', icon: 'fish', count: products.filter(p => p.category === 'fish').length },
  { id: 'small-pets', name: 'Small Pets', icon: 'rabbit', count: products.filter(p => p.category === 'small-pets').length }
];