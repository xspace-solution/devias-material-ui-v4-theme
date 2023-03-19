import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles(() => ({
  root: {}
}));

const InvoicePreview = ({ 
  className,
  invoice,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Paper
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box
          minWidth={800}
          p={6}
        >
          <Grid
            container
            justify="space-between"
          >
            <Grid item>
              <Logo />
              <Typography
                variant="h5"
                color="textPrimary"
              >
                www.devias.io
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                align="right"
                variant="h1"
                color="textPrimary"
              >
                {invoice.status}
              </Typography>
              <Typography
                align="right"
                variant="h5"
                color="textPrimary"
              >
                Invoice #
                {invoice.id}
              </Typography>
            </Grid>
          </Grid>
          <Box my={4}>
            <Grid
              container
              justify="space-between"
            >
              <Grid item>
                <Typography
                  variant="body1"
                  color="textPrimary"
                >
                  Street King William, 123
                  {' '}
                  <br />
                  Level 2, C, 442456
                  {' '}
                  <br />
                  San Francisco, CA, USA
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  color="textPrimary"
                >
                  Company No. 4675933
                  {' '}
                  <br />
                  EU VAT No. 949 67545 45
                  {' '}
                  <br />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="right"
                  variant="body1"
                  color="textPrimary"
                >
                  Email: accounts@devias.io
                  {' '}
                  <br />
                  Tel: (+40) 652 3456 23
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box my={4}>
            <Grid
              container
              justify="space-between"
            >
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textPrimary"
                >
                  Due date
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                >
                  {moment(invoice.dueDate).format('DD MMM YYYY')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textPrimary"
                >
                  Date of issue
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                >
                  {moment(invoice.issueDate).format('DD MMM YYYY')}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textPrimary"
                >
                  Number
                </Typography>
                <Typography
                  variant="body1"
                  color="textPrimary"
                >
                  {invoice.number}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box my={4}>
            <Typography
              gutterBottom
              variant="h5"
              color="textPrimary"
            >
              Billed to
            </Typography>
            <Typography>
              {invoice.customer.name}
              {' '}
              <br />
              {invoice.customer.company}
              {' '}
              <br />
              {invoice.customer.taxId}
              {' '}
              <br />
              {invoice.customer.address}
              {' '}
              <br />
            </Typography>
          </Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Description
                </TableCell>
                <TableCell />
                <TableCell align="right">
                  Unit Price
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoice.items.map((items) => (
                <TableRow key={items.id}>
                  <TableCell>
                    {items.description}
                  </TableCell>
                  <TableCell />
                  <TableCell align="right">
                    {numeral(items.unitAmount).format(`${items.currency}0,0.00`)}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell />
                <TableCell>
                  Subtotal
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.subtotalAmount).format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  Taxes
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.taxAmount).format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell />
                <TableCell>
                  Total
                </TableCell>
                <TableCell align="right">
                  {numeral(invoice.totalAmount).format(`${invoice.currency}0,0.00`)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box mt={2}>
            <Typography
              gutterBottom
              variant="h5"
              color="textPrimary"
            >
              Notes
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
            >
              Please make sure you have the right bank registration number as I
              had issues before and make sure you guys cover transfer expenses.
            </Typography>
          </Box>
        </Box>
      </PerfectScrollbar>
    </Paper>
  );
};

InvoicePreview.propTypes = {
  className: PropTypes.string,
  invoice: PropTypes.object.isRequired
};

export default InvoicePreview;
