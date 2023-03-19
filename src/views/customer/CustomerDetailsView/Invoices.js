import React, {
  useState,
  useEffect,
  useCallback
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  IconButton,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from '@material-ui/core';
import { ArrowRight as ArrowRightIcon } from 'react-feather';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import Label from 'src/components/Label';
import GenericMoreButton from 'src/components/GenericMoreButton';

const useStyles = makeStyles(() => ({
  root: {}
}));

const Invoices = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [invoices, setInvoices] = useState([]);

  const getInvoices = useCallback(async () => {
    try {
      const response = await axios.get('/api/customers/1/invoices');

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
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Customer invoices"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={1150}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell>
                    #
                    {invoice.id}
                  </TableCell>
                  <TableCell>
                    {moment(invoice.issueDate).format('DD/MM/YYYY | HH:MM')}
                  </TableCell>
                  <TableCell>
                    {invoice.description}
                  </TableCell>
                  <TableCell>
                    {invoice.paymentMethod}
                    </TableCell>
                  <TableCell>
                    {invoice.currency}
                    {invoice.value}
                  </TableCell>
                  <TableCell>
                    {/* <Label color={statusColors[invoice.status]} > */}
                    <Label color="primary">
                      {invoice.status}
                    </Label>
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      component={RouterLink}
                      to="/app/management/invoices/1"
                    >
                      <SvgIcon fontSize="small">
                        <ArrowRightIcon />
                      </SvgIcon>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={invoices.length}
        onChangePage={() => {}}
        onChangeRowsPerPage={() => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Invoices.propTypes = {
  className: PropTypes.string
};

export default Invoices;
