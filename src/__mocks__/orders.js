import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/orders').reply(() => {
  const orders = [
    {
      id: '5ecb8a6d9f53bfae09e16115',
      createdAt: moment()
        .subtract(32, 'minutes')
        .subtract(23, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Cao Yu'
      },
      number: 'DEV-102',
      paymentMethod: 'CreditCard',
      status: 'pending',
      totalAmount: 500.00
    },
    {
      id: '5ecb8a738aa6f3e577c2b3ec',
      createdAt: moment()
        .subtract(36, 'minutes')
        .subtract(51, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Alex Richardson'
      },
      number: 'DEV-101',
      paymentMethod: 'PayPal',
      status: 'completed',
      totalAmount: 500.00
    },
    {
      id: '5ecb8a795e53f134013eba3b',
      createdAt: moment()
        .subtract(38, 'minutes')
        .subtract(55, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Anje Keizer'
      },
      number: 'DEV-100',
      paymentMethod: 'CreditCard',
      status: 'pending',
      totalAmount: 500.00
    },
    {
      id: '5ecb8a7f738cc572a9ce0277',
      createdAt: moment()
        .subtract(40, 'minutes')
        .subtract(3, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Clarke Gillebert'
      },
      number: 'DEV-99',
      paymentMethod: 'PayPal',
      status: 'completed',
      totalAmount: 500.00
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      createdAt: moment()
        .subtract(45, 'minutes')
        .subtract(32, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Adam Denisov'
      },
      number: 'DEV-98',
      paymentMethod: 'PayPal',
      status: 'completed',
      totalAmount: 500.00
    },
    {
      id: '5ecb8a85a850c16fa413849c',
      createdAt: moment()
        .subtract(48, 'minutes')
        .subtract(57, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Miller Edwards'
      },
      status: 'pending',
      number: 'DEV-97',
      paymentMethod: 'CreditCard',
      totalAmount: 500.00
    },
    {
      id: '5ecb8a8e69ba2e409ea0168f',
      createdAt: moment()
        .subtract(49, 'minutes')
        .subtract(4, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Emilee Simchenko'
      },
      number: 'DEV-96',
      paymentMethod: 'CreditCard',
      status: 'completed',
      totalAmount: 500.00
    },
    {
      id: '5ecb8a9341c68839d387e1c4',
      createdAt: moment()
        .subtract(57, 'minutes')
        .subtract(43, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Elliott Stone'
      },
      number: 'DEV-95',
      paymentMethod: 'PayPal',
      status: 'rejected',
      totalAmount: 500.00
    },
    {
      id: '5ecb8a984bfbb97c9ae458e8',
      createdAt: moment()
        .subtract(59, 'minutes')
        .subtract(6, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Shen Zhi'
      },
      number: 'DEV-94',
      paymentMethod: 'CreditCard',
      status: 'canceled',
      totalAmount: 500.00
    },
    {
      id: '5ecb8aa08d9127dba654ce7a',
      createdAt: moment()
        .subtract(1, 'hour')
        .subtract(15, 'minutes')
        .subtract(43, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      customer: {
        name: 'Merrile Burgett'
      },
      number: 'DEV-93',
      paymentMethod: 'PayPal',
      status: 'canceled',
      totalAmount: 500.00
    }
  ];

  return [200, { orders }];
});

mock.onGet('/api/orders/1').reply(() => {
  const order = {
    id: '5ecb8a6879877087d4aa2690',
    coupon: null,
    createdAt: moment()
      .toDate()
      .getTime(),
    currency: '$',
    customer: {
      address1: 'Street John Wick, no. 7',
      address2: 'House #25',
      city: 'San Diego',
      country: 'USA',
      name: 'Adam Denisov'
    },
    items: [
      {
        id: '5ecb8abbdd6dfb1f9d6bf98b',
        billingCycle: 'monthly',
        currency: '$',
        name: 'Project Points',
        quantity: 25,
        unitAmount: 50.25
      },
      {
        id: '5ecb8ac10f116d04bed990eb',
        billingCycle: 'monthly',
        currency: '$',
        name: 'Freelancer Subscription',
        quantity: 1,
        unitAmount: 5.00
      }
    ],
    number: 'DEV-103',
    paymentMethod: 'CreditCard',
    status: 'pending',
    totalAmount: 500.00
  };

  return [200, { order }];
});
