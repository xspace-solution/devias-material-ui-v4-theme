import moment from 'moment';
import mock from 'src/utils/mock';

const notifications = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    createdAt: moment()
      .subtract(2, 'hours')
      .toDate()
      .getTime(),
    description: 'Dummy text',
    title: 'Your order is placed',
    type: 'order_placed'
  },
  {
    id: '5e8883f7ed1486d665d8be1e',
    createdAt: moment()
      .subtract(1, 'day')
      .toDate()
      .getTime(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message'
  },
  {
    id: '5e8883fca0e8612044248ecf',
    createdAt: moment()
      .subtract(3, 'days')
      .toDate()
      .getTime(),
    description: 'Dummy text',
    title: 'Your item is shipped',
    type: 'item_shipped'
  },
  {
    id: '5e88840187f6b09b431bae68',
    createdAt: moment()
      .subtract(7, 'days')
      .toDate()
      .getTime(),
    description: 'You have 32 unread messages',
    title: 'New message received',
    type: 'new_message'
  }
];

mock.onGet('/api/notifications').reply(200, { notifications });
