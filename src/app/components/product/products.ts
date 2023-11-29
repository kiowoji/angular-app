import { IProduct } from '../../models/product.model';
import { Tags } from '../tag/tags';

export const Products: IProduct[] = [
  {
    id: 1,
    title: 'Portable Power Bank',
    description:
      'Never run out of battery on the go with this portable power bank.',
    price: 15,
    tags: [Tags[0]],
  },
  {
    id: 2,
    title: 'Wireless Bluetooth Earbuds',
    description:
      'Experience crystal-clear sound with these wireless Bluetooth earbuds.',
    price: 35,
    tags: [Tags[0]],
  },
  {
    id: 3,
    title: 'Elegant Coffee Mug',
    description:
      'Start your day with style using this elegant coffee mug. Perfect for home or office use.',
    price: 5,
    tags: [Tags[3]],
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description:
      'Track your daily activities and stay fit with this advanced fitness tracker watch.',
    price: 25,
    tags: [Tags[0], Tags[2]],
  },
  {
    id: 5,
    title: 'Organic Cotton T-Shirt',
    description:
      'Stay comfortable and stylish in our eco-friendly organic cotton t-shirt.',
    price: 5,
    tags: [Tags[1]],
  },
  {
    id: 6,
    title: 'Cozy Home Blanket',
    description: 'A soft and warm cotton blanket for your home.',
    price: 20,
    tags: [Tags[3]],
  },
  {
    id: 7,
    title: 'Luxury Beauty Kit',
    description: 'Pamper yourself with this high-end beauty kit.',
    price: 45,
    tags: [Tags[4]],
  },
  {
    id: 8,
    title: 'Natural Beauty Skincare Set',
    description: 'Organic skincare products for a radiant complexion.',
    price: 15,
    tags: [Tags[4]],
  },
  {
    id: 9,
    title: 'Aromatherapy Essential Oils Set',
    description: 'Create a calming atmosphere with these essential oils.',
    price: 35,
    tags: [Tags[2], Tags[4]],
  },
];
