import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import _ from 'lodash';
import mock from 'src/utils/mock';

let contacts = [
  {
    id: '5e8891ab188cd2855e6029b7',
    avatar: '/static/images/avatars/avatar_1.png',
    isActive: true,
    lastActivity: moment()
      .toDate()
      .getTime(),
    name: 'Cooper Murray',
    username: 'cooper.murray'
  },
  {
    id: '5e887a62195cc5aef7e8ca5d',
    avatar: '/static/images/avatars/avatar_2.png',
    isActive: false,
    lastActivity: moment()
      .subtract(2, 'hours')
      .toDate()
      .getTime(),
    name: 'Ekaterina Tankova',
    username: 'ekaterina.tankova'
  },
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/images/avatars/avatar_3.png',
    isActive: false,
    lastActivity: moment()
      .subtract(15, 'minutes')
      .toDate()
      .getTime(),
    name: 'Cao Yu',
    username: 'cao.yu'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/images/avatars/avatar_4.png',
    isActive: true,
    lastActivity: moment()
      .toDate()
      .getTime(),
    name: 'Alex Richardson',
    username: 'alex.richardson'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    avatar: '/static/images/avatars/avatar_5.png',
    isActive: true,
    lastActivity: moment()
      .toDate()
      .getTime(),
    name: 'Anje Keizer',
    username: 'anje.keizer'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/images/avatars/avatar_7.png',
    isActive: false,
    lastActivity: moment()
      .subtract(2, 'days')
      .toDate()
      .getTime(),
    name: 'Adam Denisov',
    username: 'adam.denisov'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    avatar: '/static/images/avatars/avatar_8.png',
    isActive: false,
    lastActivity: moment()
      .subtract(6, 'hours')
      .toDate()
      .getTime(),
    name: 'Miller Edwards',
    username: 'miller.edwards'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    avatar: '/static/images/avatars/avatar_9.png',
    isActive: true,
    lastActivity: moment()
      .toDate()
      .getTime(),
    name: 'Emilee Simchenko',
    username: 'emilee.simchenko',
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    avatar: '/static/images/avatars/avatar_10.png',
    isActive: true,
    lastActivity: moment()
      .toDate()
      .getTime(),
    name: 'Elliott Stone',
    username: 'elliott.stone'
  },
  {
    id: '5e8877da9a65442b11551975',
    avatar: '/static/images/avatars/avatar_11.png',
    isActive: true,
    lastActivity: moment()
      .toDate()
      .getTime(),
    name: 'Shen Zhi',
    username: 'shen.zhi'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/static/images/avatars/avatar_12.png',
    isActive: true,
    lastActivity: moment()
      .toDate()
      .getTime(),
    name: 'Merrile Burgett',
    username: 'merrile.burgett'
  }
];

let threads = [
  {
    id: '5e867eb9de721aecaccf4f7b',
    messages: [
      {
        id: '5e867f0a5bc0ff2bfa07bfa6',
        attachments: [],
        body: 'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
        contentType: 'text',
        createdAt: moment()
          .subtract(10, 'hours')
          .toDate()
          .getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f167d5f78109ae9f2a4',
        attachments: [],
        body: 'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
        contentType: 'text',
        createdAt: moment()
          .subtract(2, 'hours')
          .toDate()
          .getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '5e867f1c9ca72084693528f4',
        attachments: [],
        body: 'Well it\'s a really easy one, I\'m sure we can make it half of the price.',
        contentType: 'text',
        createdAt: moment()
          .subtract(5, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f22fd2e27a09849b4db',
        attachments: [],
        body: 'Then why don\'t you make it if it\'s that easy? Sorry I\'m not interetes, have fantastic day Adam!',
        contentType: 'text',
        createdAt: moment()
          .subtract(3, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '5e867f28a34d45ac6eb5c41f',
        attachments: [],
        body: 'Last offer, $25 per hour',
        contentType: 'text',
        createdAt: moment()
          .subtract(1, 'minute')
          .toDate()
          .getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f2dba984a3f78b33526',
        attachments: [],
        body: '/static/images/projects/project_4.png',
        contentType: 'image',
        createdAt: moment()
          .subtract(1, 'minute')
          .toDate()
          .getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      }
    ],
    participants: [
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith',
        username: 'katarina.smith'
      },
      {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/images/avatars/avatar_7.png',
        name: 'Adam Denisov',
        username: 'adam.denisov'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 2
  },
  {
    id: '5e867fa7082c3c5921403a26',
    messages: [
      {
        id: '5e867fc180837d901bd9bca1',
        attachments: [],
        body: 'Hey, would you like to collaborate?',
        contentType: 'text',
        createdAt: moment()
          .subtract(6, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e8680e60cba5019c5ca6fda'
      },
      {
        id: '5e8d6fb695df7971237fc173',
        attachments: [],
        body: 'Hi, Merrile!',
        contentType: 'text',
        createdAt: moment()
          .subtract(5, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '58825a290eb4d4271a54f188',
        attachments: [],
        body: 'Hello everyone 😀',
        contentType: 'text',
        createdAt: moment()
          .subtract(2, 'minutes')
          .toDate()
          .getTime(),
        senderId: '5e8891ab188cd2855e6029b7'
      }
    ],
    participants: [
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/images/avatars/avatar_6.png',
        name: 'Katarina Smith',
        username: 'katarina.smith'
      },
      {
        id: '5e8680e60cba5019c5ca6fda',
        avatar: '/static/images/avatars/avatar_12.png',
        name: 'Merrile Burgett',
        username: 'merrile.burgett'
      },
      {
        id: '5e8891ab188cd2855e6029b7',
        avatar: '/static/images/avatars/avatar_1.png',
        name: 'Cooper Murray',
        username: 'cooper.murray'
      }
    ],
    type: 'GROUP',
    unreadCount: 0
  }
];

const findContactByUsername = (username) => {
  const contact = contacts.find((_contact) => _contact.username === username);

  return contact || null;
};

const findThreadById = (threadId) => {
  const thread = threads.find((_threadId) => _threadId.id === threadId);

  return thread || null;
};

// This means that we are looking for ONE_TO_ONE thread
const findThreadByOtherParticipantId = (participantId) => {
  const thread = threads.find((_thread) => {
    if (_thread.type !== 'ONE_TO_ONE') {
      return false;
    }

    const participant = _thread.participants.find((_participant) => _participant.id === participantId);

    return !!participant;
  });

  return thread || null;
};

const findThreadByParticipantIds = (participantIds) => {
  const thread = threads.find((_thread) => {
    if (_thread.participants.length < participantIds.length) {
      return false;
    }

    let _participantIds = [];

    _thread.participants.forEach((_participant) => {
      _participantIds.push(_participant.id);
    });

    return _.isEmpty(_.xor(participantIds, _participantIds));
  });

  return thread || null;
};

mock.onGet('/api/chat/contacts').reply(200, { contacts });

mock.onGet('/api/chat/search').reply((config) => {
  try {
    const { query } = config.params;
    const cleanQuery = query.toLowerCase().trim();
    const results = [];

    contacts.forEach((contact) => {
      if (!query) {
        return results.push(contact);
      }

      if (contact.name.toLowerCase().includes(cleanQuery)) {
        return results.push(contact);
      }
    });

    return [200, { results }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onGet('/api/chat/participants').reply((config) => {
  try {
    const { threadKey } = config.params;
    const participants = [];

    // Thread key might be an ID if thread type is GROUP
    // otherwise it represents an username
    const thread = findThreadById(threadKey);

    if (thread) {
      participants.push(...thread.participants);
    } else {
      const contact = findContactByUsername(threadKey);

      if (contact) {
        participants.push({
          id: contact.id,
          avatar: contact.avatar,
          name: contact.name,
          username: contact.username
        });
      }
    }

    return [200, { participants }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onGet('/api/chat/threads').reply(200, { threads });

mock.onGet('/api/chat/thread').reply((config) => {
  try {
    const { threadKey } = config.params;
    
    // Thread key might be an ID if thread type is GROUP
    // otherwise it represents an username
    const thread = findThreadById(threadKey);

    if (thread) {
      return [200, { thread }];
    } else {
      // At this point, thread key should represent an existing contact
      // If no contact found, the user is trying a shady route
      // If contact exists, user might want to start a new conversation
      const contact = findContactByUsername(threadKey);

      if (!contact) {
        return [404, { message: 'Unable to find the contact' }];
      }

      // This could return a null if no thread found
      const thread = findThreadByOtherParticipantId(contact.id);

      return [200, { thread }];
    }
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onGet('/api/chat/thread/mark-as-seen').reply((config) => {
  try {
    const { threadId } = config.params;
    const thread = threads.find((_thread) => _thread.id === threadId);

    if (thread) {
      thread.unreadCount = 0;
    }

    return [200, true];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

// Adding a new message to a thread can by done in 3 ways
// 1) By specifying a thread id, this means that the thread already exists
// 2) By specifying the other user id (if ONE_TO_ONE thread), thread might exist
// 3) By specifying a list of receipients, thread might exist
mock.onPost('/api/chat/messages/new').reply((request) => {
  try {
    const { threadId, recipientIds, body } = JSON.parse(request.data);

    // On server get current user from request
    const user = {
      id: '5e86809283e28b96d2d38537',
      avatar: '/static/images/avatars/avatar_6.png',
      name: 'Katarina Smith',
      username: 'katarina.smith'
    };

    let thread = null;

    if (threadId) {
      thread = findThreadById(threadId);

      if (!thread) {
        return [400, { message: 'Invalid thread id' }];
      }
    }

    if (recipientIds) {
      const participantIds = [...recipientIds, user.id];

      thread = findThreadByParticipantIds(participantIds);
    }

    const message = {
      id: uuidv4(),
      attachments: [],
      body,
      contentType: 'text',
      createdAt: moment()
        .toDate()
        .getTime(),
      senderId: user.id
    };

    if (thread) {
      thread.messages = [...thread.messages, message];
    } else {
      const participants = [user];

      recipientIds.forEach((recipientId) => {
        const contact = contacts.find((_contact) => _contact.id === recipientId);

        if (!contact) {
          throw new Error('Contact not found');
        }

        participants.push({
          id: contact.id,
          avatar: contact.avatar,
          name: contact.name,
          username: contact.username
        });
      });

      thread = {
        id: uuidv4(),
        messages: [message],
        participants,
        type: participants.length === 2 ? 'ONE_TO_ONE' : 'GROUP',
        unreadCount: 0
      };
    }

    const responseData = {
      threadId: thread.id,
      message
    };

    return [200, responseData];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
