import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/projects/overview/projects').reply(() => {
  const projects = [
    {
      id: '5e8dcf105a6732b3ed82cf7a',
      author: {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith'
      },
      budget: 2394.00,
      caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
      currency: '$',
      isLiked: true,
      likesCount: 57,
      location: 'Europe',
      image: '/static/images/projects/project_3.png',
      rating: 3,
      membersCount: 5,
      technology: 'Angular JS',
      title: 'Ten80 Web Design',
      type: 'Full-Time',
      updatedAt: moment()
        .subtract(24, 'minutes')
        .toDate()
        .getTime()
    }
  ];

  return [200, { projects }];
});

mock.onGet('/api/projects/overview/statistics').reply(200, {
  statistics: {
    nextPayout: 4250,
    totalIncome: 12500,
    visitorsToday: 230,
    watchingNow: 5
  }
});

mock.onGet('/api/projects/projects').reply(() => {
  const projects = [
    {
      id: '5e8dcef8f95685ce21f16f3d',
      author: {
        id: '5e887b7602bdbc4dbb234b27',
        avatar: '/static/images/avatars/avatar_5.png',
        name: 'Anje Keizer'
      },
      budget: 6125.00,
      caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
      currency: '$',
      isLiked: true,
      likesCount: 7,
      location: 'Europe',
      image: '/static/images/projects/project_1.png',
      rating: 5,
      membersCount: 2,
      title: 'Mella Full Screen Slider',
      type: 'Full-Time',
      updatedAt: moment()
        .subtract(24, 'minutes')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf076c50b9d8e756a5a2',
      author: {
        id: '5e887d0b3d090c1b8f162003',
        avatar: '/static/images/avatars/avatar_9.png',
        name: 'Emilee Simchenko'
      },
      budget: 4205.00,
      caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
      currency: '$',
      isLiked: true,
      likesCount: 12,
      location: 'Europe',
      image: '/static/images/projects/project_2.png',
      rating: 4.5,
      membersCount: 3,
      title: 'Dashboard Design',
      type: 'Full-Time',
      updatedAt: moment()
        .subtract(1, 'hour')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf105a6732b3ed82cf7a',
      author: {
        id: '5e88792be2d4cfb4bf0971d9',
        avatar: '/static/images/avatars/avatar_10.png',
        name: 'Elliott Stone'
      },
      budget: 2394.00,
      caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
      currency: '$',
      isLiked: true,
      likesCount: 18,
      location: 'Europe',
      image: '/static/images/projects/project_3.png',
      rating: 4.7,
      membersCount: 8,
      title: 'Ten80 Web Design',
      type: 'Full-Time',
      updatedAt: moment()
        .subtract(16, 'hour')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf1cc7155d0e947dc27f',
      author: {
        id: '5e8877da9a65442b11551975',
        avatar: '/static/images/avatars/avatar_11.png',
        name: 'Shen Zhi'
      },
      budget: 2784.00,
      caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
      currency: '$',
      image: '/static/images/projects/project_4.png',
      isLiked: false,
      likesCount: 1,
      location: 'Europe',
      membersCount: 10,
      rating: 2,
      title: 'Neura e-commerce UI Kit',
      type: 'Full-Time',
      updatedAt: moment()
        .subtract(3, 'days')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf252313876001e83221',
      author: {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/images/avatars/avatar_3.png',
        name: 'Cao Yu'
      },
      budget: 5835.00,
      caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
      currency: '$',
      isLiked: false,
      likesCount: 7,
      location: 'Europe',
      image: '/static/images/projects/project_5.jpg',
      rating: 5,
      membersCount: 2,
      title: 'Administrator Dashboard',
      type: 'Full-Time',
      updatedAt: moment()
        .subtract(7, 'days')
        .toDate()
        .getTime()
    },
    {
      id: '5e8dcf4250d77c954b04902e',
      author: {
        id: '5e887b7602bdbc4dbb234b27',
        avatar: '/static/images/avatars/avatar_5.png',
        name: 'Anje Keizer'
      },
      budget: 4255.00,
      caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
      currency: '$',
      isLiked: true,
      likesCount: 4,
      location: 'Europe',
      image: null,
      rating: 4.2,
      membersCount: 12,
      title: 'Kalli UI Kit',
      type: 'Full-Time',
      updatedAt: moment()
        .subtract(8, 'days')
        .toDate()
        .getTime()
    }
  ];

  return [200, { projects }];
});

mock.onGet('/api/projects/projects/1').reply(() => {
  const project = {
    id: '5e8dcf076c50b9d8e756a5a2',
    activities: [
      {
        id: '5e8dd0828d628e6f40abdfe8',
        createdAt: moment()
          .subtract(23, 'minutes')
          .toDate()
          .getTime(),
        description: 'has uploaded a new file',
        subject: 'Project author',
        type: 'upload_file'
      },
      {
        id: '5e8dd0893a6725f2bb603617',
        createdAt: moment()
          .subtract(2, 'hours')
          .toDate()
          .getTime(),
        description: 'joined team as a Front-End Developer',
        subject: 'Adrian Stefan',
        type: 'join_team'
      },
      {
        id: '5e8dd08f44603e3300b75cf1',
        createdAt: moment()
          .subtract(9, 'hours')
          .toDate()
          .getTime(),
        description: 'joined team as a Full Stack Developer',
        subject: 'Alexndru Robert',
        type: 'join_team'
      },
      {
        id: '5e8dd0960f3f0fe04e64d8f4',
        createdAt: moment()
          .subtract(2, 'days')
          .toDate()
          .getTime(),
        description: 'raised the project budget',
        subject: 'Project author',
        type: 'price_change'
      },
      {
        id: '5e8dd09db94421c502c53d13',
        createdAt: moment()
          .subtract(4, 'days')
          .toDate()
          .getTime(),
        description: 'created',
        subject: 'Contest',
        type: 'contest_created'
      }
    ],
    applicants: [
      {
        id: '5e887a62195cc5aef7e8ca5d',
        avatar: '/static/images/avatars/avatar_2.png',
        commonConnections: 12,
        cover: '/static/images/covers/cover_2.jpg',
        labels: [
          'User Experience',
          'FrontEnd development',
          'HTML5',
          'VueJS',
          'ReactJS'
        ],
        name: 'Ekaterina Tankova'
      },
      {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/images/avatars/avatar_3.png',
        commonConnections: 5,
        cover: '/static/images/covers/cover_3.jpg',
        labels: [
          'User Interface',
          'FullStack development',
          'Angular',
          'ExpressJS'
        ],
        name: 'Cao Yu'
      },
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        commonConnections: 17,
        cover: '/static/images/covers/cover_1.jpg',
        labels: [
          'BackEnd development',
          'Firebase',
          'MongoDB',
          'ExpressJS'
        ],
        name: 'Katarina Smith'
      }
    ],
    author: {
      id: '5e887d0b3d090c1b8f162003',
      avatar: '/static/images/avatars/avatar_9.png',
      name: 'Emilee Simchenko'
    },
    budget: 12500.00,
    caption: 'We\'re looking for experienced Developers and Product Designers to come aboard and help us build succesful businesses through software.',
    currency: '$',
    description: `
Design files are attached in the files tab.

Develop the web app screens for our product called "PDFace". Please look at the wireframes, system activity workflow and read the section above to understand what we're trying to archive.

There's not many screens we need designed, but there will be modals and various other system triggered events that will need to be considered.

The project has been created in Sketch so let me know if there are any problems opening this project and I'll try to convert into a usable file.
    `,
    endDate: moment()
      .add(14, 'days')
      .toDate()
      .getTime(),
    files: [
      {
        id: '5e8dd0721b9e0fab56d7238b',
        mimeType: 'image/png',
        name: 'example-project1.jpg',
        size: 1024 * 1024 * 3,
        url: '/static/images/projects/project_4.png'
      },
      {
        id: '5e8dd0784431995a30eb2586',
        mimeType: 'application/zip',
        name: 'docs.zip',
        size: 1024 * 1024 * 25,
        url: '#'
      },
      {
        id: '5e8dd07cbb62749296ecee1c',
        mimeType: 'image/png',
        name: 'example-project2.jpg',
        size: 1024 * 1024 * 2,
        url: '/static/images/projects/project_1.png'
      }
    ],
    isActive: true,
    isLiked: true,
    location: 'Europe',
    members: [
      {
        id: '5e887a62195cc5aef7e8ca5d',
        avatar: '/static/images/avatars/avatar_2.png',
        bio: 'Front End Developer',
        name: 'Ekaterina Tankova'
      },
      {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/images/avatars/avatar_3.png',
        bio: 'UX Designer',
        name: 'Cao Yu'
      },
      {
        id: '5e887b7602bdbc4dbb234b27',
        avatar: '/static/images/avatars/avatar_5.png',
        bio: 'Copyright',
        name: 'Anje Keizer'
      }
    ],
    rating: 5,
    reviews: [
      {
        id: '5f0366cd843161f193ebadd4',
        author: {
          avatar: '/static/images/avatars/avatar_2.png',
          name: 'Ekaterina Tankova'
        },
        comment: 'Great company, providing an awesome & easy to use product.',
        createdAt: moment()
          .subtract(2, 'hours')
          .toDate()
          .getTime(),
        value: 5
      },
      {
        id: 'to33twsyjphcfj55y3t07261',
        author: {
          avatar: '/static/images/avatars/avatar_7.png',
          name: 'Adam Denisov',
        },
        comment: 'Not the best people managers, poor management skills, poor career development programs. Communication from corporate & leadership isn\'t always clear and is sometime one-sided. Low pay compared to FANG.',
        createdAt: moment()
          .subtract(2, 'hours')
          .toDate()
          .getTime(),
        value: 2
      },
      {
        id: '6z9dwxjzkqbmxuluxx2681jd',
        author: {
          avatar: '/static/images/avatars/avatar_3.png',
          name: 'Cao Yu',
        },
        comment: 'I have been working with this company full-time. Great for the work life balance. Cons, decentralized decision making process across the organization.',
        createdAt: moment()
          .subtract(2, 'hours')
          .toDate()
          .getTime(),
        value: 4
      }
    ],
    startDate: moment()
      .add(7, 'days')
      .toDate()
      .getTime(),
    tags: ['React JS'],
    title: 'Develop a PDF Export App',
    type: 'Full-Time',
    updatedAt: moment()
      .subtract(23, 'minutes')
      .toDate()
      .getTime()
  };

  return [200, { project }];
});
