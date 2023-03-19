import React, {
  useEffect,
  useRef
} from 'react';
import { makeStyles } from '@material-ui/core';
import { useDispatch } from 'src/store';
import Page from 'src/components/Page';
import { getThreads } from 'src/slices/chat';
import Settings from './Settings';
import RecentThreads from './RecentThreads';
import Thread from './Thread';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    position: 'relative'
  },
  sidebar: {
    backgroundColor: theme.palette.background.default,
    borderRight: `1px solid ${theme.palette.divider}`,
    width: 300
  }
}));

const ChatView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const pageRef = useRef(null);

  useEffect(() => {
    dispatch(getThreads());
  }, [dispatch]);

  return (
    <Page
      className={classes.root}
      title="Chat"
      ref={pageRef}
    >
      <div className={classes.sidebar}>
        <Settings />
        <RecentThreads />
      </div>
      <Thread />
    </Page>
  );
};

export default ChatView;
