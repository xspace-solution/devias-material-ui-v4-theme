import moment from 'moment';
import mock from 'src/utils/mock';

let products = [
  {
    id: '5ece2c077e39da27658aa8a9',
    attributes: ['Cotton'],
    category: 'dress',
    currency: '$',
    createdAt: moment()
      .subtract(1, 'days')
      .toDate()
      .getTime(),
    image: null,
    inventoryType: 'in_stock',
    isAvailable: true,
    isShippable: false,
    name: 'Charlie Tulip Dress',
    price: 23.99,
    quantity: 85,
    updatedAt: moment()
      .subtract(6, 'hours')
      .toDate()
      .getTime(),
    variants: 2
  },
  {
    id: '5ece2c0d16f70bff2cf86cd8',
    attributes: ['Cotton'],
    category: 'dress',
    currency: '$',
    createdAt: moment()
      .subtract(3, 'days')
      .toDate()
      .getTime(),
    image: null,
    inventoryType: 'out_of_stock',
    isAvailable: false,
    isShippable: true,
    name: 'Kate Leopard Dress',
    price: 95.00,
    quantity: 0,
    updatedAt: moment()
      .subtract(2, 'days')
      .subtract(8, 'hours')
      .toDate()
      .getTime(),
    variants: 1
  },
  {
    id: '5ece2c123fad30cbbff8d060',
    attributes: ['Variety of styles'],
    category: 'jewelry',
    currency: '$',
    createdAt: moment()
      .subtract(6, 'days')
      .toDate()
      .getTime(),
    image: null,
    inventoryType: 'in_stock',
    isAvailable: true,
    isShippable: false,
    name: 'Layering Bracelets Collection',
    price: 155.00,
    quantity: 48,
    updatedAt: moment()
      .subtract(1, 'days')
      .subtract(2, 'hours')
      .toDate()
      .getTime(),
    variants: 5
  },
  {
    id: '5ece2c1be7996d1549d94e34',
    attributes: ['Polyester and Spandex'],
    category: 'blouse',
    currency: '$',
    createdAt: moment()
      .subtract(12, 'days')
      .toDate()
      .getTime(),
    image: null,
    inventoryType: 'limited',
    isAvailable: false,
    isShippable: true,
    name: 'Flared Sleeve Floral Blouse',
    price: 17.99,
    quantity: 5,
    updatedAt: moment()
      .subtract(1, 'days')
      .subtract(7, 'hours')
      .toDate()
      .getTime(),
    variants: 1
  }
];

mock.onGet('/api/products').reply(200, { products });
