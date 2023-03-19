import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { List, makeStyles } from '@material-ui/core';
import { useSelector } from 'src/store';
import ThreadItem from './ThreadItem';

const useStyles = makeStyles(() => ({
  root: {}
}));

const ThreadList = ({ className, ...rest }) => {
  const classes = useStyles();
  const { threads, activeThreadId } = useSelector((state) => state.chat);
  const history = useHistory();

  const handleSelect = (threadId) => {
    const thread = threads.byId[threadId];
    let threadKey = '';

    if (thread.type === 'GROUP') {
      threadKey = thread.id;
    } else {
      // We hardcode the current user ID because the mocked that is not in sync with the auth provider.
      // When implementing this app with a real database, replace this ID with the ID from Auth Context.
      const otherParticipant = thread.participants.find((participant) => participant.id !== '5e86809283e28b96d2d38537');

      threadKey = otherParticipant.username;
    }

    history.push(`/app/chat/${threadKey}`);
  };

  return (
    <List
      className={clsx(classes.root, className)}
      {...rest}
    >
      {threads.allIds.map((threadId) => (
        <ThreadItem
          active={activeThreadId === threadId}
          key={threadId}
          onSelect={() => handleSelect(threadId)}
          thread={threads.byId[threadId]}
        />
      ))}
    </List>
  );
};

ThreadList.propTypes = {
  className: PropTypes.string
};

export default ThreadList;
