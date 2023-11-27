import { IProduct } from './product.model';
import { Tags } from '../tag/tags';

export const Products: IProduct[] = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for product 1',
    price: 10,
    tags: [Tags[0], Tags[1]],
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for product 2',
    price: 20,
    tags: [Tags[2]],
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for product 3',
    price: 15,
    tags: [Tags[3]],
  },
];
