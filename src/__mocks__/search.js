import mock from 'src/utils/mock';
import wait from 'src/utils/wait';

mock.onGet('/api/search').reply(async () => {
  try {
    await wait(1500);

    const results = [
      {
        description: 'Algolia broadly consists of two parts: search implementation and search analytics. We provide tools that make it easy for your developers...',
        title: 'What does Algolia do?'
      },
      {
        description: 'To be clear, search doesn’t know the direction that your business should take. However, it can help you gather information on what your customers want...',
        title: 'Search as a feedback loop'
      },
      {
        description: 'Algolia provides your users with a fast and rich search experience. Your Algolia search interface can contain a search bar, filters, infinite scrolling...',
        title: 'What can Algolia do for my users?'
      }
    ];

    return [200, { results }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
