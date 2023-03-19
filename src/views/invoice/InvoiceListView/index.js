import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: 100
  }
}));

const InvoiceListView = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoices, setInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await axios.get('/api/invoices');

      if (isMountedRef.current) {
        setInvoices(response.data.invoices);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoices();
  }, [getInvoices]);

  return (
    <Page
      className={classes.root}
      title="Invoice List"
    >
      <Container maxWidth={false}>
        <Header />
        <Box mt={3}>
          <Results invoices={invoices} />
        </Box>
      </Container>
    </Page>
  );
};

export default InvoiceListView;
