import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/social/profile').reply(() => {
  const profile = {
    id: '5e86809283e28b96d2d38537',
    avatar: '/static/images/avatars/avatar_6.png',
    bio: 'Product Designer',
    connectedStatus: 'not_connected',
    cover: '/static/images/covers/cover_1.jpg',
    currentCity: 'Bucharest',
    currentJob: {
      company: 'Devias IO',
      title: 'Product Designer'
    },
    email: 'katarina.smith@devias.io',
    name: 'Katarina Smith',
    originCity: 'Rm. Valcea',
    previousJob: {
      company: 'Focus Aesthetic Dyanmics',
      title: 'UX Designer at'
    },
    profileProgress: 50,
    quote: 'Everyone thinks of changing the world, but no one thinks of changing himself.'
  };

  return [200, { profile }];
});

mock.onGet('/api/social/connections').reply(() => {
  const connections = [
    {
      id: '5e887ac47eed253091be10cb',
      avatar: '/static/images/avatars/avatar_3.png',
      commonConnections: 10,
      name: 'Cao Yu',
      status: 'rejected'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      avatar: '/static/images/avatars/avatar_4.png',
      commonConnections: 8,
      name: 'Alex Richardson',
      status: 'pending'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      avatar: '/static/images/avatars/avatar_7.png',
      commonConnections: 5,
      name: 'Adam Denisov',
      status: 'not_connected'
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      avatar: '/static/images/avatars/avatar_8.png',
      commonConnections: 1,
      name: 'Miller Edwards',
      status: 'connected'
    }
  ];

  return [200, { connections }];
});

mock.onGet('/api/social/posts').reply(() => {
  const posts = [
    {
      id: '5e887faca2b7a1ddce01221a',
      author: {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith'
      },
      comments: [
        {
          id: '5e887fc17162ba254da30771',
          author: {
            id: '5e887b7602bdbc4dbb234b27',
            avatar: '/static/images/avatars/avatar_5.png',
            name: 'Anje Keizer'
          },
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime(),
          message: 'Could use some more statistics, but that’s me haha'
        },
        {
          id: '5e887fc759bebe8d5d54a2e5',
          author: {
            id: '5e887a1fbefd7938eea9c981',
            avatar: '/static/images/avatars/avatar_8.png',
            name: 'Miller Edwards'
          },
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime(),
          message: 'Hmm, honestly this looks nice but I would change the shadow though',
        }
      ],
      createdAt: moment()
        .subtract(4, 'hours')
        .toDate()
        .getTime(),
      isLiked: true,
      likes: 24,
      media: '/static/images/posts/post_1.png',
      message: 'Just made this home screen for a project, what-cha thinkin?'
    },
    {
      id: '5e887faf03e78a5359765636',
      author: {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith'
      },
      comments: [
        {
          id: '5e887fde4992eca63b9e9ef5',
          author: {
            id: '5e8877da9a65442b11551975',
            avatar: '/static/images/avatars/avatar_11.png',
            name: 'Shen Zhi'
          },
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime(),
          message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?'
        },
        {
          id: '5e887feb11b7add1ebfcca78',
          author: {
            id: '5e887b209c28ac3dd97f6db5',
            avatar: '/static/images/avatars/avatar_4.png',
            name: 'Alex Richardson'
          },
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime(),
          message: 'Oh... so sentimental'
        }
      ],
      createdAt: moment()
        .subtract(7, 'hours')
        .toDate()
        .getTime(),
      isLiked: false,
      likes: 65,
      message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.'
    }
  ];

  return [200, { posts }];
});

mock.onGet('/api/social/feed').reply(() => {
  const posts = [
    {
      id: '5e887fa38598b6fe61667757',
      author: {
        id: '5e88792be2d4cfb4bf0971d9',
        avatar: '/static/images/avatars/avatar_10.png',
        name: 'Elliott Stone'
      },
      comments: [
        {
          id: '5e887fb6c648772b52f860a8',
          author: {
            id: '5e8680e60cba5019c5ca6fda',
            avatar: '/static/images/avatars/avatar_12.png',
            name: 'Merrile Burgett'
          },
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime(),
          message: 'I\'ve been using Angular for the past 3 years'
        }
      ],
      createdAt: moment()
        .subtract(16, 'minutes')
        .toDate()
        .getTime(),
      isLiked: true,
      likes: 1,
      message: 'Hey guys! What\'s your favorite framework?'
    },
    {
      id: '5e887faca2b7a1ddce01221a',
      author: {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Zhi'
      },
      comments: [
        {
          id: '5e887fc17162ba254da30771',
          author: {
            id: '5e887b7602bdbc4dbb234b27',
            avatar: '/static/images/avatars/avatar_5.png',
            name: 'Anje Keizer'
          },
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime(),
          message: 'Could use some more statistics, but that’s me haha'
        },
        {
          id: '5e887fc759bebe8d5d54a2e5',
          author: {
            id: '5e887a1fbefd7938eea9c981',
            avatar: '/static/images/avatars/avatar_8.png',
            name: 'Miller Edwards'
          },
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime(),
          message: 'Hmm, honestly this looks nice but I would change the shadow though'
        }
      ],
      createdAt: moment()
        .subtract(4, 'hours')
        .toDate()
        .getTime(),
      isLiked: true,
      likes: 24,
      media: '/static/images/posts/post_1.png',
      message: 'Just made this home screen for a project, what-cha thinkin?'
    },
    {
      id: '5e887faf03e78a5359765636',
      author: {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith'
      },
      comments: [
        {
          id: '5e887fde4992eca63b9e9ef5',
          author: {
            id: '5e8877da9a65442b11551975',
            name: 'Shen Zhi',
            avatar: '/static/images/avatars/avatar_11.png'
          },
          createdAt: moment()
            .subtract(3, 'hours')
            .toDate()
            .getTime(),
          message: 'That’s actually deep. Thanks for the design, would you consider making an interaction?'
        },
        {
          id: '5e887feb11b7add1ebfcca78',
          author: {
            id: '5e887b209c28ac3dd97f6db5',
            name: 'Alex Richardson',
            avatar: '/static/images/avatars/avatar_4.png'
          },
          createdAt: moment()
            .subtract(2, 'hours')
            .toDate()
            .getTime(),
          message: 'Oh... so sentimental'
        }
      ],
      createdAt: moment()
        .subtract(7, 'hours')
        .toDate()
        .getTime(),
      isLiked: false,
      likes: 65,
      message: 'As a human being, you are designed in a way that makes you incapable of experiencing any positive emotion unless you set an aim and progress towards it. What makes you happy is not, in fact, attaining it, but making progress towards it.'
    }
  ];

  return [200, { posts }];
});
