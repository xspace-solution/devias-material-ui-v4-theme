import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/customers').reply(() => {
  const customers = [
    {
      id: '5e887ac47eed253091be10cb',
      avatar: '/static/images/avatars/avatar_3.png',
      city: 'Cleveland',
      country: 'USA',
      currency: '$',
      email: 'cao.yu@devias.io',
      hasAcceptedMarketing: true,
      isProspect: false,
      isReturning: true,
      name: 'Cao Yu',
      state: 'Ohio',
      totalAmountSpent: 300.00,
      totalOrders: 3,
      updatedAt: moment()
        .subtract(1, 'days')
        .subtract(7, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      avatar: '/static/images/avatars/avatar_4.png',
      city: 'Atlanta',
      country: 'USA',
      currency: '$',
      email: 'alex.richardson@devias.io',
      hasAcceptedMarketing: true,
      isProspect: true,
      isReturning: false,
      name: 'Alex Richardson',
      state: 'Georgia',
      totalAmountSpent: 0.00,
      totalOrders: 0,
      updatedAt: moment()
        .subtract(2, 'days')
        .subtract(1, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      avatar: '/static/images/avatars/avatar_5.png',
      city: 'North Canton',
      country: 'USA',
      currency: '$',
      email: 'anje.keizer@devias.io',
      hasAcceptedMarketing: false,
      isProspect: false,
      isReturning: false,
      name: 'Anje Keizer',
      state: 'Ohio',
      totalAmountSpent: 5600.00,
      totalOrders: 6,
      updatedAt: moment()
        .subtract(2, 'days')
        .subtract(4, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/images/avatars/avatar_6.png',
      city: 'Madrid',
      country: 'Spain',
      currency: '$',
      email: 'katarina.smith@devias.io',
      hasAcceptedMarketing: true,
      isProspect: false,
      isReturning: true,
      name: 'Katarina Smith',
      state: 'Madrid',
      totalAmountSpent: 500.00,
      totalOrders: 1,
      updatedAt: moment()
        .subtract(2, 'days')
        .subtract(11, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      avatar: '/static/images/avatars/avatar_7.png',
      city: 'San Diego',
      country: 'USA',
      currency: '$',
      email: 'adam.denisov@devias.io',
      hasAcceptedMarketing: true,
      isProspect: true,
      isReturning: false,
      name: 'Adam Denisov',
      totalAmountSpent: 0.00,
      totalOrders: 0,
      state: 'California',
      updatedAt: moment()
        .subtract(3, 'days')
        .subtract(7, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      avatar: '/static/images/avatars/avatar_8.png',
      city: 'Berkeley',
      country: 'USA',
      currency: '$',
      email: 'miller.edwards@devias.io',
      hasAcceptedMarketing: false,
      isProspect: true,
      isReturning: false,
      name: 'Miller Edwards',
      state: 'California',
      totalAmountSpent: 0.00,
      totalOrders: 0,
      updatedAt: moment()
        .subtract(4, 'days')
        .subtract(5, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e887d0b3d090c1b8f162003',
      avatar: '/static/images/avatars/avatar_9.png',
      currency: '$',
      email: 'emilee.simchenko@devias.io',
      hasAcceptedMarketing: true,
      isProspect: false,
      isReturning: false,
      city: 'Carson City',
      country: 'USA',
      name: 'Emilee Simchenko',
      state: 'Nevada',
      totalAmountSpent: 100.00,
      totalOrders: 4,
      updatedAt: moment()
        .subtract(4, 'days')
        .subtract(15, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e88792be2d4cfb4bf0971d9',
      avatar: '/static/images/avatars/avatar_10.png',
      city: 'Los Angeles',
      country: 'USA',
      currency: '$',
      email: 'elliott.stone@devias.io',
      hasAcceptedMarketing: true,
      isProspect: false,
      isReturning: true,
      name: 'Elliott Stone',
      state: 'California',
      totalAmountSpent: 1000.00,
      totalOrders: 2,
      updatedAt: moment()
        .subtract(5, 'days')
        .subtract(2, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e8877da9a65442b11551975',
      avatar: '/static/images/avatars/avatar_11.png',
      city: 'Murray',
      country: 'USA',
      email: 'shen.zhi@devias.io',
      hasAcceptedMarketing: true,
      isProspect: true,
      isReturning: false,
      name: 'Shen Zhi',
      state: 'Utah',
      totalAmountSpent: 0.00,
      totalOrders: 0,
      updatedAt: moment()
        .subtract(6, 'days')
        .subtract(8, 'hours')
        .toDate()
        .getTime()
    },
    {
      id: '5e8680e60cba5019c5ca6fda',
      avatar: '/static/images/avatars/avatar_12.png',
      city: 'Salt Lake City',
      country: 'USA',
      currency: '$',
      email: 'merrile.burgett@devias.io',
      hasAcceptedMarketing: false,
      isProspect: false,
      isReturning: true,
      name: 'Merrile Burgett',
      state: 'Utah',
      totalAmountSpent: 200.00,
      totalOrders: 7,
      updatedAt: moment()
        .subtract(9, 'days')
        .subtract(1, 'hours')
        .toDate()
        .getTime()
    }
  ];

  return [200, { customers }];
});

mock.onGet('/api/customers/1').reply(() => {
  const customer = {
    id: '5e86805e2bafd54f66cc95c3',
    address1: 'Street John Wick, no. 7',
    address2: 'House #25',
    balance: 0,
    city: 'San Diego',
    country: 'USA',
    creditCard: '**** **** **** **** 4142',
    currency: '$',
    email: 'adam.denisov@devias.io',
    hasDiscountedPrices: false,
    isVerified: true,
    name: 'Adam Denisov',
    phone: '+55 748 327 439',
    state: 'New York',
    vatRate: 19,
    zipCode: '240355'
  };

  return [200, { customer }];
});

mock.onGet('/api/customers/1/emails').reply(() => {
  const emails = [
    {
      id: '5ece2ce3613486d95ffaea58',
      createdAt: moment()
        .subtract(3, 'days')
        .subtract(5, 'hours')
        .subtract(34, 'minutes')
        .toDate()
        .getTime(),
      description: 'Order confirmation'
    },
    {
      id: '5ece2ce8cebf7ad1d100c0cd',
      createdAt: moment()
        .subtract(4, 'days')
        .subtract(11, 'hours')
        .subtract(49, 'minutes')
        .toDate()
        .getTime(),
      description: 'Order confirmation'
    }
  ];

  return [200, { emails }];
});

mock.onGet('/api/customers/1/invoices').reply(() => {
  const invoices = [
    {
      id: '5ece2cef3e562cbd61996259',
      currency: '$',
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      issueDate: moment()
        .toDate()
        .getTime(),
      paymentMethod: 'Credit Card',
      status: 'paid',
      value: 5.25
    },
    {
      id: '5ece2cf461b9484866f2968c',
      currency: '$',
      description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
      issueDate: moment()
        .toDate()
        .getTime(),
      paymentMethod: 'Credit Card',
      status: 'paid',
      value: 5.25
    }
  ];

  return [200, { invoices }];
});

mock.onGet('/api/customers/1/logs').reply(() => {
  const logs = [
    {
      id: '5ece2cfeb6e2ac847bba11ce',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
        .toDate()
        .getTime(),
      description: 'Purchase',
      ip: '84.234.243.42',
      method: 'POST',
      route: '/api/purchase',
      status: 200
    },
    {
      id: '5ece2d02510484b2952e1e05',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(2, 'minutes')
        .subtract(56, 'seconds')
        .toDate()
        .getTime(),
      description: 'Purchase',
      ip: '84.234.243.42',
      method: 'POST',
      route: '/api/purchase',
      status: 522
    },
    {
      id: '5ece2d08e2748e4e9788901a',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(8, 'minutes')
        .subtract(23, 'seconds')
        .toDate()
        .getTime(),
      description: 'Cart remove',
      ip: '84.234.243.42',
      method: 'DELETE',
      route: '/api/products/d65654e/remove',
      status: 200
    },
    {
      id: '5ece2d0c47214e342c2d7f28',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(20, 'minutes')
        .subtract(54, 'seconds')
        .toDate()
        .getTime(),
      description: 'Cart add',
      ip: '84.234.243.42',
      method: 'GET',
      route: '/api/products/d65654e/add',
      status: 200
    },
    {
      id: '5ece2d11e4060a97b2b57623',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(34, 'minutes')
        .subtract(16, 'seconds')
        .toDate()
        .getTime(),
      description: 'Cart add',
      ip: '84.234.243.42',
      method: 'GET',
      route: '/api/products/c85727f/add',
      status: 200
    },
    {
      id: '5ece2d16cf6d53d8e33656af',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(54, 'minutes')
        .subtract(30, 'seconds')
        .toDate()
        .getTime(),
      description: 'View product',
      ip: '84.234.243.42',
      method: 'GET',
      route: '/api/products/c85727f',
      status: 200
    },
    {
      id: '5ece2d1b2ec5071be9286a96',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(56, 'minutes')
        .subtract(40, 'seconds')
        .toDate()
        .getTime(),
      description: 'Get products',
      ip: '84.234.243.42',
      method: 'GET',
      route: '/api/products',
      status: 200
    },
    {
      id: '5ece2d22e68d5498917e47bc',
      createdAt: moment()
        .subtract(2, 'days')
        .subtract(57, 'minutes')
        .subtract(5, 'seconds')
        .toDate()
        .getTime(),
      description: 'Login',
      ip: '84.234.243.42',
      method: 'POST',
      route: '/api/login',
      status: 200
    }
  ];

  return [200, { logs }];
});
