import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';
import { colors } from '@material-ui/core';
import mock from 'src/utils/mock';

let events = [
  {
    id: '5e8882e440f6322fa399eeb8',
    allDay: false,
    color: colors.green['700'],
    description: 'Inform about new contract',
    end: moment()
      .subtract(6, 'days')
      .hours(19)
      .minutes(0)
      .toDate(),
    start: moment()
      .subtract(6, 'days')
      .hours(17)
      .minutes(30)
      .toDate(),
    title: 'Call Samantha'
  },
  {
    id: '5e8882eb5f8ec686220ff131',
    allDay: false,
    color: null,
    description: 'Discuss about new partnership',
    end: moment()
      .add(2, 'days')
      .hours(15)
      .minutes(30)
      .toDate(),
    start: moment()
      .add(2, 'days')
      .hours(12)
      .minutes(0)
      .toDate(),
    title: 'Meet with IBM'
  },
  {
    id: '5e8882f1f0c9216396e05a9b',
    allDay: false,
    color: null,
    description: 'Prepare docs',
    end: moment()
      .add(5, 'days')
      .hours(12)
      .minutes(0)
      .toDate(),
    start: moment()
      .add(5, 'days')
      .hours(8)
      .minutes(0)
      .toDate(),
    title: 'SCRUM Planning'
  },
  {
    id: '5e8882f6daf81eccfa40dee2',
    allDay: true,
    color: null,
    description: 'Meet with team to discuss',
    end: moment()
      .subtract(11, 'days')
      .startOf('day')
      .toDate(),
    start: moment()
      .subtract(12, 'days')
      .endOf('day')
      .toDate(),
    title: 'Begin SEM'
  },
  {
    id: '5e8882fcd525e076b3c1542c',
    allDay: false,
    color: colors.green['700'],
    description: 'Sorry, John!',
    end: moment()
      .add(3, 'days')
      .hours(7)
      .minutes(31)
      .toDate(),
    start: moment()
      .add(3, 'days')
      .hours(7)
      .minutes(30)
      .toDate(),
    title: 'Fire John'
  },
  {
    id: '5e888302e62149e4b49aa609',
    allDay: false,
    color: null,
    description: 'Discuss about the new project',
    end: moment()
      .subtract(6, 'days')
      .hours(9)
      .minutes(30)
      .toDate(),
    start: moment()
      .subtract(6, 'days')
      .hours(9)
      .minutes(0)
      .toDate(),
    title: 'Call Alex'
  },
  {
    id: '5e88830672d089c53c46ece3',
    allDay: false,
    color: colors.green['700'],
    description: 'Get a new quote for the payment processor',
    end: moment()
      .hours(17)
      .minutes(30)
      .toDate(),
    start: moment()
      .hours(15)
      .minutes(30)
      .toDate(),
    title: 'Visit Samantha'
  }
];

mock.onGet('/api/calendar/events').reply(200, { events });

mock.onPost('/api/calendar/events/new').reply((request) => {
  try {
    const { allDay, description, end, start, title } = JSON.parse(request.data);
    const event = {
      id: uuidv4(),
      allDay,
      description,
      end,
      start,
      title
    };

    events = [...events, event];

    return [200, { event }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onPost('/api/calendar/events/update').reply((request) => {
  try {
    const { eventId, update } = JSON.parse(request.data);
    let event = null;

    events = _.map(events, (_event) => {
      if (_event.id === eventId) {
        _.assign(_event, { ...update });
        event = _event;
      }

      return _event;
    });

    return [200, { event }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onPost('/api/calendar/events/remove').reply((request) => {
  try {
    const { eventId } = JSON.parse(request.data);

    events = _.reject(events, { id: eventId });

    return [200, { eventId }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});
