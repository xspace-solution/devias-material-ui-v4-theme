const track = (...args) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if (!window.gtag) {
    return;
  }

  window.gtag(...args);
};

const pageview = (props) => {
  track('config', process.env.REACT_APP_GA_MEASUREMENT_ID, props);
};

const event = (type, props) => {
  track('event', type, props);
};

export default {
  pageview,
  event
};
