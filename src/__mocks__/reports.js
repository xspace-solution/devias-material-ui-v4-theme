import moment from 'moment';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

mock.onGet('/api/reports/customer-activity').reply(() => {
  const activities = [
    {
      id: '5e89140bcc768199d1e0dc49',
      createdAt: moment()
        .subtract(23, 'minutes')
        .toDate()
        .getTime(),
      customer: {
        id: '5e887a62195cc5aef7e8ca5d',
        avatar: '/static/images/avatars/avatar_2.png',
        name: 'Ekaterina Tankova',
      },
      description: 'Created account',
      type: 'register'
    },
    {
      id: '5e891411b0290b175166cd32',
      createdAt: moment()
        .subtract(56, 'minutes')
        .toDate()
        .getTime(),
      customer: {
        id: '5e887ac47eed253091be10cb',
        name: 'Cao Yu',
        avatar: '/static/images/avatars/avatar_3.png'
      },
      description: 'Subscription Purchase',
      type: 'payment'
    },
    {
      id: '5e89141633dc5e52c923ef27',
      createdAt: moment()
        .subtract(2, 'hours')
        .toDate()
        .getTime(),
      customer: {
        id: '5e887b209c28ac3dd97f6db5',
        name: 'Alex Richardson',
        avatar: '/static/images/avatars/avatar_4.png'
      },
      description: 'Submitted a ticket',
      type: 'ticket_create'
    },
    {
      id: '5e89141bd975c7f33aee9f4b',
      createdAt: moment()
        .subtract(5, 'minutes')
        .toDate()
        .getTime(),
      customer: {
        id: '5e887b7602bdbc4dbb234b27',
        name: 'Anje Keizer',
        avatar: '/static/images/avatars/avatar_5.png'
      },
      description: 'Subscription Purchase',
      type: 'payment'
    },
    {
      id: '5e891421d7945778863cf9ca',
      createdAt: moment()
        .subtract(5, 'minutes')
        .toDate()
        .getTime(),
      customer: {
        id: '5e86809283e28b96d2d38537',
        name: 'Katarina Smith',
        avatar: '/static/images/avatars/avatar_6.png'
      },
      description: 'Subscription Purchase',
      type: 'payment'
    }
  ];

  return [200, { activities }];
});

mock.onGet('/api/reports/earnings').reply(200, {
  earnings: {
    datasets: [
      {
        data: [56, 24, 20],
        backgroundColor: ['#3d72eb', '#4b9e86', '#b658f5']
      }
    ],
    labels: ['Subscriptions', 'Affiliate', 'Sales']
  }
});

mock.onGet('/api/reports/latest-orders').reply(() => {
  const orders = [
    {
      id: '5eff2548979e396cb4b000ba',
      createdAt: moment()
        .subtract(7, 'minutes')
        .subtract(10, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'ekaterina@devias.io',
        name: 'Ekaterina Tankova'
      },
      currency: '$',
      items: 7,
      number: 'DEV-1042',
      status: 'pending',
      totalAmount: 524.00
    },
    {
      id: '5eff254e46b753a166e7d7af',
      createdAt: moment()
        .subtract(2, 'hours')
        .subtract(12, 'minutes')
        .subtract(50, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'cao.yu@devias.io',
        name: 'Cao Yu'
      },
      currency: '$',
      items: 8,
      number: 'DEV-1041',
      status: 'complete',
      totalAmount: 693.00
    },
    {
      id: '5eff2553e1c551e2e28a9205',
      createdAt: moment()
        .subtract(5, 'hours')
        .subtract(39, 'minutes')
        .subtract(12, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'alex.richardson@devias.io',
        name: 'Alex Richardson'
      },
      currency: '$',
      items: 4,
      number: 'DEV-1040',
      status: 'rejected',
      totalAmount: 215.00
    },
    {
      id: '5eff25590f3e28f013c39a0e',
      createdAt: moment()
        .subtract(5, 'hours')
        .subtract(46, 'minutes')
        .subtract(21, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'anje.keiser@devias.io',
        name: 'Anje Keizer'
      },
      currency: '$',
      items: 1,
      number: 'DEV-1039',
      status: 'pending',
      totalAmount: 25.00
    },
    {
      id: '5eff255f57499089243805d8',
      createdAt: moment()
        .subtract(8, 'hours')
        .subtract(19, 'minutes')
        .subtract(54, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        name: 'Clarke Gillebert',
        email: 'clarke.gillebert@devias.io'
      },
      currency: '$',
      items: 5,
      number: 'DEV-1038',
      status: 'complete',
      totalAmount: 535.00
    },
    {
      id: '5eff25658d416fc5adb96a3a',
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(45, 'minutes')
        .subtract(12, 'seconds')
        .toDate()
        .getTime(),
      customer: {
        email: 'merrile.burgett@devias.io',
        name: 'Merrile Burgett'
      },
      currency: '$',
      items: 2,
      number: 'DEV-1037',
      status: 'complete',
      totalAmount: 56.00
    }
  ];

  return [200, { orders }];
});

mock.onGet('/api/reports/latest-projects').reply(() => {
  const projects = [
    {
      id: '5eff24e675e7b3cba23e4be7',
      author: {
        avatar: '/static/images/avatars/avatar_5.png',
        name: 'Anje Keizer'
      },
      budget: 12500,
      createdAt: moment()
        .subtract(2, 'hours')
        .subtract(34, 'minutes')
        .subtract(10, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      technologies: ['angular'],
      title: 'Mella Full Screen Slider'
    },
    {
      id: '5eff24e98e2c9107e95cb827',
      author: {
        avatar: '/static/images/avatars/avatar_9.png',
        name: 'Emilee Simchenko'
      },
      budget: 15750,
      createdAt: moment()
        .subtract(10, 'hours')
        .subtract(56, 'minutes')
        .subtract(25, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      technologies: ['sketch', 'html-css'],
      title: 'Dashboard Design'
    },
    {
      id: '5eff24f0d97353e3576d3c26',
      author: {
        avatar: '/static/images/avatars/avatar_10.png',
        name: 'Elliott Stone'
      },
      budget: 15750,
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(30, 'minutes')
        .subtract(50, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      technologies: ['react-js'],
      title: 'Ten80 Web Design'
    },
    {
      id: '5eff24f737bc6b191dd9bf58',
      author: {
        avatar: '/static/images/avatars/avatar_11.png',
        name: 'Shen Zhi'
      },
      budget: 12500,
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(4, 'minutes')
        .subtract(30, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      technologies: ['vue-js'],
      title: 'Neura e-commerce UI Kit'
    },
    {
      id: '5eff24fb29fc5e37bdab3b2d',
      author: {
        avatar: '/static/images/avatars/avatar_3.png',
        name: 'Cao Yu'
      },
      budget: 15750,
      createdAt: moment()
        .subtract(1, 'days')
        .subtract(11, 'minutes')
        .subtract(6, 'seconds')
        .toDate()
        .getTime(),
      currency: '$',
      technologies: ['angular', 'figma'],
      title: 'Administrator Dashboard'
    }
  ];

  return [200, { projects }];
});

mock.onGet('/api/reports/latest-tasks').reply(() => {
  const tasks = [
    {
      id: '5eff24b501ba5281ddb5378c',
      deadline: moment()
        .add(1, 'days')
        .add(1, 'hour')
        .toDate()
        .getTime(),
      members: [
        {
          avatar: '/static/images/avatars/avatar_2.png',
          name: 'Ekaterina Tankova'
        },
        {
          avatar: '/static/images/avatars/avatar_3.png',
          name: 'Cao Yu'
        }
      ],
      title: 'Update the API for the project'
    },
    {
      id: '5eff24bb5bb3bd1beeddde78',
      deadline: moment()
        .add(2, 'day')
        .add(1, 'hour')
        .toDate()
        .getTime(),
      members: [
        {
          avatar: '/static/images/avatars/avatar_8.png',
          name: 'Miller Edwards'
        },
        {
          avatar: '/static/images/avatars/avatar_10.png',
          name: 'Elliott Stone'
        },
        {
          avatar: '/static/images/avatars/avatar_12.png',
          name: 'Merrile Burgett'
        }
      ],
      title: 'Redesign the landing page'
    },
    {
      id: '5eff24c019175119993fc1ff',
      deadline: moment()
        .toDate()
        .getTime(),
      members: [
        {
          avatar: '/static/images/avatars/avatar_7.png',
          name: 'Adam Denisov'
        }
      ],
      title: 'Solve the bug for the showState'
    },
    {
      id: '5eff24c52ce9fdadffa11959',
      deadline: null,
      members: [
        {
          avatar: '/static/images/avatars/avatar_2.png',
          name: 'Ekaterina Tankova'
        },
        {
          avatar: '/static/images/avatars/avatar_10.png',
          name: 'Elliott Stone'
        }
      ],
      title: 'Release v1.0 Beta'
    },
    {
      id: '5eff24ca3ffab939b667258b',
      deadline: null,
      members: [
        {
          avatar: '/static/images/avatars/avatar_5.png',
          name: 'Anje Keizer'
        },
        {
          avatar: '/static/images/avatars/avatar_2.png',
          name: 'Ekaterina Tankova'
        },
        {
          avatar: '/static/images/avatars/avatar_6.png',
          name: 'Katarina Smith'
        }
      ],
      title: 'GDPR Compliance'
    },
    {
      id: '5eff24cf8740fc9faca4e463',
      deadline: null,
      members: [
        {
          avatar: '/static/images/avatars/avatar_8.png',
          name: 'Miller Edwards'
        }
      ],
      title: 'Redesign Landing Page'
    }
  ];

  return [200, { tasks }];
});

mock.onGet('/api/reports/profitable-products').reply(() => {
  const products = [
    {
      id: '5eff2512c6f8737d08325676',
      conversionRate: 93,
      currency: '$',
      image: '/static/images/products/product_standard.svg',
      name: 'Freelancer Basic Subscription',
      price: 5.00,
      subscriptions: 13153
    },
    {
      id: '5eff2516247f9a6fcca9f151',
      conversionRate: 76,
      currency: '$',
      image: '/static/images/products/product_standard.svg',
      name: 'Freelancer Extra Subscription',
      price: 15.00,
      subscriptions: 10300
    },
    {
      id: '5eff251a3bb9ab7290640f18',
      conversionRate: 60,
      currency: '$',
      image: '/static/images/products/product_premium.svg',
      name: 'Agency Basic Subscription',
      price: 25.00,
      subscriptions: 5300
    },
    {
      id: '5eff251e297fd17f0dc18a8b',
      conversionRate: 46,
      currency: '$',
      image: '/static/images/products/product_extended.svg',
      name: 'Enterprise Basic Subscription',
      price: 205.00,
      subscriptions: 1203
    },
    {
      id: '5eff2524ef813f061b3ea39f',
      conversionRate: 41,
      currency: '$',
      image: '/static/images/products/product_extended.svg',
      name: 'Enterprise Extra Subscription',
      price: 500.00,
      subscriptions: 254
    }
  ];

  return [200, { products }];
});

mock.onGet('/api/reports/top-referrals').reply(() => {
  const referrals = [
    {
      color: colors.blueGrey['700'],
      initials: 'GT',
      name: 'GitHub',
      value: 53032
    },
    {
      color: colors.cyan['500'],
      initials: 'TW',
      name: 'Twitter',
      value: 39551
    },
    {
      color: colors.indigo[600],
      initials: 'HN',
      name: 'Hacker News',
      value: 23150
    },
    {
      color: colors.red['500'],
      initials: 'SO',
      name: 'Stack Overflow',
      value: 14093
    },
    {
      color: colors.orange['900'],
      initials: 'RD',
      name: 'Reddit.com',
      value: 7251
    },
    {
      color: colors.blueGrey['900'],
      initials: 'DE',
      name: 'Dev.to',
      value: 5694
    },
    {
      color: colors.blue['900'],
      initials: 'FB',
      name: 'Facebook',
      value: 3643
    },
    {
      color: colors.blueGrey['900'],
      initials: 'MD',
      name: 'Medium',
      value: 1654
    }
  ];

  return [200, { referrals }];
});
