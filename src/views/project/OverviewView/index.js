import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Header from './Header';
import Statistics from './Statistics';
import Notifications from './Notifications';
import Projects from './Projects';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const OverviewView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Container maxWidth="lg">
        <Header />
        <Box mt={3}>
          <Statistics />
        </Box>
        <Box mt={6}>
          <Notifications />
        </Box>
        <Box mt={6}>
          <Projects />
        </Box>
      </Container>
    </Page>
  );
};

export default OverviewView;
