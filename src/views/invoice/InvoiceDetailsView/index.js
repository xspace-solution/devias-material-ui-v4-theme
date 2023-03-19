import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import {
  Box,
  Container,
  Divider,
  makeStyles
} from '@material-ui/core';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Page from 'src/components/Page';
import Header from './Header';
import InvoicePreview from './InvoicePreview';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  }
}));

const InvoiceDetailsView = () => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoice, setInvoice] = useState(null);

  const getInvoice = useCallback(async () => {
    try {
      const response = await axios.get('/api/invoices/1');

      if (isMountedRef.current) {
        setInvoice(response.data.invoice);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getInvoice();
  }, [getInvoice]);

  if (!invoice) {
    return null;
  }

  return (
    <Page
      className={classes.root}
      title="Invoice Details"
    >
      <Container maxWidth="lg">
        <Header invoice={invoice} />
        <Box my={2}>
          <Divider />
        </Box>
        <InvoicePreview invoice={invoice} />
      </Container>
    </Page>
  );
};

export default InvoiceDetailsView;
