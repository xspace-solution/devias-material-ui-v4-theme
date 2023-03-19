import React, {
  useEffect,
  useRef
} from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import { useDispatch } from 'src/store';
import { getLabels } from 'src/slices/mail';
import Sidebar from './Sidebar';
import MailList from './MailList';
import MailDetails from './MailDetails';
import Compose from './Compose';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
    display: 'flex',
    overflow: 'hidden',
    position: 'relative'
  }
}));

const MailView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { mailId } = useParams();
  const pageRef = useRef(null);

  useEffect(() => {
    dispatch(getLabels());
  }, [dispatch]);

  return (
    <Page
      className={classes.root}
      title="Mail"
      ref={pageRef}
    >
      <Sidebar containerRef={pageRef} />
      {mailId ? <MailDetails /> : <MailList />}
      <Compose />
    </Page>
  );
};

export default MailView;
