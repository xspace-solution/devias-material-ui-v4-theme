import moment from 'moment';
import mock from 'src/utils/mock';

mock.onGet('/api/invoices').reply(() => {
  const invoices = [
    {
      id: '5ecb868d0f437390ef3ac62c',
      currency: '$',
      customer: {
        email: 'contact@anahenisky.io',
        name: 'Ana Henisky'
      },
      issueDate: moment()
        .subtract(1, 'hours')
        .toDate()
        .getTime(),
      status: 'paid',
      totalAmount: 55.50
    },
    {
      id: '5ecb868ada8deedee0638502',
      currency: '$',
      customer: {
        email: 'sales@matt-jason.com',
        name: 'Matt Jason'
      },
      issueDate: moment()
        .subtract(2, 'days')
        .subtract(5, 'hours')
        .toDate()
        .getTime(),
      status: 'pending',
      totalAmount: 253.76
    },
    {
      id: '5ecb868700aba84d0f1c0e48',
      currency: '$',
      customer: {
        email: 'support@terrythomas.io',
        name: 'Terry Thomas'
      },
      issueDate: moment()
        .subtract(6, 'days')
        .subtract(4, 'hours')
        .toDate()
        .getTime(),
      status: 'canceled',
      totalAmount: 781.50
    },
    {
      id: '5ecb8682038e1ddf4e868764',
      currency: '$',
      customer: {
        email: 'contact@triv-shopper.co.uk',
        name: 'Triv Shopper'
      },
      issueDate: moment()
        .subtract(15, 'days')
        .subtract(2, 'hours')
        .toDate()
        .getTime(),
      status: 'paid',
      totalAmount: 96.64
    }
  ];

  return [200, { invoices }];
});

mock.onGet('/api/invoices/1').reply(() => {
  const invoice = {
    id: '5ecb86785312dcc69b5799ad',
    currency: '$',
    customer: {
      address: '271 Richmond Rd, Grey Lynn, Auckland 1022, New Zealand',
      company: 'Countdown Grey Lynn',
      email: 'contact@anahenisky.io',
      name: 'Ana Henisky',
      taxId: '6934656584231'
    },
    dueDate: moment()
      .toDate()
      .getTime(),
    issueDate: moment()
      .subtract(1, 'hours')
      .toDate()
      .getTime(),
    items: [
      {
        id: '5ecb8694db1760a701dfbf74',
        currency: '$',
        description: 'Freelancer Subscription (12/05/2019 - 11/06/2019)',
        unitAmount: 55.50
      }
    ],
    number: 'DEV-9483',
    status: 'paid',
    subtotalAmount: 50.00,
    taxAmount: 5.50,
    totalAmount: 55.50
  }

  return [200, { invoice }];
});
