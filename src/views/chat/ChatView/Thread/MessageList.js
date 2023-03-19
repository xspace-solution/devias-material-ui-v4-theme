import React, {
  useEffect,
  useRef
} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import MessageItem from './MessageItem';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const MessageList = ({
  className,
  thread,
  ...rest
}) => {
  const classes = useStyles();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollMessagesToBottom = () => {
      if (scrollRef.current) {
        scrollRef.current._container.scrollTop = scrollRef.current._container.scrollHeight;
      }
    };

    scrollMessagesToBottom();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [thread.messages]);

  return (
    <PerfectScrollbar
      className={clsx(classes.root, className)}
      options={{ suppressScrollX: true }}
      ref={scrollRef}
      {...rest}
    >
      {thread.messages.map((message) => (
        <MessageItem
          key={message.id}
          message={message}
          thread={thread}
        />
      ))}
    </PerfectScrollbar>
  );
};

MessageItem.propTypes = {
  className: PropTypes.string,
  thread: PropTypes.object.isRequired
};

export default MessageList;
