export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  description: string;
  material: string;
  image: string;
  artisan: string;
  region: string;
  isFeatured?: boolean;
}

export type Category = 'Bamboo' | 'Wood' | 'Paintings' | 'Jewelry' | 'Textiles' | 'Pottery' | 'Food & Fruits';

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: Category | 'All';
  maxPrice: number;
  sortBy: 'newest' | 'price-low' | 'price-high' | 'popular';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
