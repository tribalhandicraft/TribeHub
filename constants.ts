import { Product } from './types';

export const CATEGORIES = ['All', 'Bamboo', 'Wood', 'Paintings', 'Jewelry', 'Textiles', 'Pottery', 'Food & Fruits'];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Handwoven Bamboo Lamp Shade',
    category: 'Bamboo',
    price: 45.00,
    description: 'Intricately woven bamboo lamp shade, crafted by artisans in Assam. Creates a warm, natural ambiance.',
    material: 'Natural Bamboo',
    image: 'https://picsum.photos/400/400?random=1',
    artisan: 'Ramesh Das',
    region: 'Assam, India',
    isFeatured: true
  },
  {
    id: '2',
    name: 'Tribal Warli Painting',
    category: 'Paintings',
    price: 120.00,
    description: 'Authentic Warli art on canvas using rice paste and natural dyes. Depicts traditional village life.',
    material: 'Canvas, Natural Dyes',
    image: 'https://picsum.photos/400/400?random=2',
    artisan: 'Suman Warli',
    region: 'Maharashtra, India',
    isFeatured: true
  },
  {
    id: '3',
    name: 'Terracotta Water Pitcher',
    category: 'Pottery',
    price: 35.00,
    description: 'Hand-thrown clay pitcher with natural cooling properties. Painted with traditional motifs.',
    material: 'Red Clay',
    image: 'https://picsum.photos/400/400?random=3',
    artisan: 'Devi Potters',
    region: 'West Bengal',
    isFeatured: false
  },
  {
    id: '4',
    name: 'Dhokra Brass Necklace',
    category: 'Jewelry',
    price: 55.00,
    description: 'Ancient lost-wax casting technique used to create this stunning brass necklace.',
    material: 'Brass alloy',
    image: 'https://picsum.photos/400/400?random=4',
    artisan: 'Tribal Arts Collective',
    region: 'Chhattisgarh',
    isFeatured: true
  },
  {
    id: '5',
    name: 'Carved Wooden Mask',
    category: 'Wood',
    price: 85.00,
    description: 'Ceremonial mask carved from single block of Kadamba wood. Protects the home from evil spirits.',
    material: 'Kadamba Wood',
    image: 'https://picsum.photos/400/400?random=5',
    artisan: 'Arun Woodworks',
    region: 'Nagaland',
    isFeatured: false
  },
  {
    id: '6',
    name: 'Ikat Woven Shawl',
    category: 'Textiles',
    price: 150.00,
    description: 'Handloomed cotton shawl featuring geometric Ikat patterns dyed with indigo.',
    material: '100% Cotton',
    image: 'https://picsum.photos/400/400?random=6',
    artisan: 'Sambalpuri Weavers',
    region: 'Odisha',
    isFeatured: true
  },
  {
    id: '7',
    name: 'Bamboo Fruit Basket',
    category: 'Bamboo',
    price: 25.00,
    description: 'Sturdy and lightweight fruit basket woven with treated bamboo strips.',
    material: 'Bamboo',
    image: 'https://picsum.photos/400/400?random=7',
    artisan: 'Green Crafts',
    region: 'Meghalaya',
    isFeatured: false
  },
  {
    id: '8',
    name: 'Beaded Tribal Earrings',
    category: 'Jewelry',
    price: 18.00,
    description: 'Colorful glass bead earrings in traditional geometric patterns.',
    material: 'Glass Beads, Silver hook',
    image: 'https://picsum.photos/400/400?random=8',
    artisan: 'Naga Jewelry Unit',
    region: 'Nagaland',
    isFeatured: false
  },
  {
    id: '9',
    name: 'Wild Forest Honey',
    category: 'Food & Fruits',
    price: 15.00,
    description: 'Pure, raw honey collected from wild beehives in the deep forests of Nilgiris.',
    material: 'Organic Honey',
    image: 'https://picsum.photos/400/400?random=9',
    artisan: 'Nilgiri Bee Keepers',
    region: 'Tamil Nadu',
    isFeatured: true
  },
  {
    id: '10',
    name: 'Dried Mahua Flowers',
    category: 'Food & Fruits',
    price: 12.00,
    description: 'Sun-dried organic Mahua flowers, traditionally used for brewing and cooking.',
    material: 'Mahua Flowers',
    image: 'https://picsum.photos/400/400?random=10',
    artisan: 'Bastar Forest Cooperative',
    region: 'Chhattisgarh',
    isFeatured: false
  },
  {
    id: '11',
    name: 'Finger Millet Cookies',
    category: 'Food & Fruits',
    price: 8.00,
    description: 'Healthy and crunchy cookies made from organically grown Ragi (Finger Millet).',
    material: 'Millet, Jaggery',
    image: 'https://picsum.photos/400/400?random=11',
    artisan: 'Tribal Women Self-Help Group',
    region: 'Odisha',
    isFeatured: false
  }
];

export const FAQS = [
  {
    q: "Are these products authentically handmade?",
    a: "Yes, every item is handcrafted by skilled tribal artisans. We work directly with them to ensure authenticity."
  },
  {
    q: "How does my purchase support the artisans?",
    a: "We follow a fair-trade model. 70% of the sale price goes directly to the artisan or the cooperative."
  },
  {
    q: "Do you ship internationally?",
    a: "Currently, we ship within the country. International shipping is coming soon."
  },
  {
    q: "What is the return policy?",
    a: "We accept returns within 7 days for damaged goods. Due to the handmade nature, slight variations in design are normal and not considered defects."
  }
];
