export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'dogs' | 'cats' | 'birds' | 'fish' | 'small-pets';
  image: string;
  images: string[];
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  brand: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}