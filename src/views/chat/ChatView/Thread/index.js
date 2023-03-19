import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  Box,
  Divider,
  makeStyles
} from '@material-ui/core';
import { useDispatch, useSelector } from 'src/store';
import {
  getThread,
  markThreadAsSeen,
  resetActiveThread,
  getParticipants,
  addRecipient,
  removeRecipient
} from 'src/slices/chat';
import ComposeHeader from './ComposeHeader';
import DetailHeader from './DetailHeader';
import MessageList from './MessageList';
import MessageComposer from './MessageComposer';

const threadSelector = (state) => {
  const { threads, activeThreadId } = state.chat;
  const thread = threads.byId[activeThreadId];

  if (thread) {
    return thread;
  }

  return {
    id: null,
    messages: [],
    participants: [],
    unreadMessages: 0
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
  }
}));

const Thread = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { threadKey } = useParams();
  const { activeThreadId, participants, recipients } = useSelector((state) => state.chat);
  const thread = useSelector((state) => threadSelector(state));

  // In our case there two possible routes
  // one that contains chat/new and one with a chat/:threadKey
  // if threadKey does not exist, it means that the chat is in compose mode
  const mode = threadKey ? 'DETAIL' : 'COMPOSE';

  const handleAddRecipient = (recipient) => {
    dispatch(addRecipient(recipient));
  };

  const handleRemoveRecipient = (recipientId) => {
    dispatch(removeRecipient(recipientId));
  };

  const handleSendMessage = async (value) => {
    try {
      // Handle send message
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getDetails = async () => {
      dispatch(getParticipants(threadKey));

      try {
        await dispatch(getThread(threadKey));
      } catch (err) {
        // If thread key is not a valid key (thread id or username)
        // the server throws an error, this means that the user tried a shady route
        // and we redirect him on the compose route
        console.error(err);
        history.push('/app/chat/new');
      }
    };

    // If path contains a thread key we do the following:
    // 1) Load the thread participants based on the key
    // 2) Try to find a related thread based on the key, it might not exist if it is a new tread
    if (threadKey) {
      getDetails();
    } else {
      // If no thread key specifid, but an active thread id exists in the
      // store, reset that key. This means that the user navigated from details mode to compose
      if (activeThreadId) {
        dispatch(resetActiveThread())
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threadKey]);

  useEffect(() => {
    if (activeThreadId) {
      // Maybe we should also check if active thread
      // has unread messages before triggering this
      dispatch(markThreadAsSeen(activeThreadId));
    }
  }, [dispatch, activeThreadId]);

  return (
    <div className={classes.root}>
      {mode === 'DETAIL' && (
        <DetailHeader participants={participants} />
      )}
      {mode === 'COMPOSE' && (
        <ComposeHeader
          onAddRecipient={handleAddRecipient}
          onRemoveRecipient={handleRemoveRecipient}
          recipients={recipients}
        />
      )}
      <Box
        flexGrow={1}
        overflow="hidden"
      >
        <MessageList thread={thread} />
      </Box>
      <Divider />
      <MessageComposer
        disabled
        onSend={handleSendMessage}
      />
    </div>
  );
};

export default Thread;
