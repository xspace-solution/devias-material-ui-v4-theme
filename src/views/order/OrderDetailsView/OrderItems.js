import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const OrderItems = ({ className, orderItems, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Order items" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Billing Cycle
                </TableCell>
                <TableCell>
                  Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {item.name}
                    {' '}
                    x
                    {' '}
                    {item.quantity}
                  </TableCell>
                  <TableCell>
                    {item.billingCycle}
                  </TableCell>
                  <TableCell>
                    {numeral(item.unitAmount).format(`${item.currency}0,0.00`)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={orderItems.length}
        onChangePage={() => {}}
        onChangeRowsPerPage={() => {}}
        page={0}
        rowsPerPage={5}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

OrderItems.propTypes = {
  className: PropTypes.string,
  orderItems: PropTypes.array.isRequired
};

OrderItems.defaultProps = {
  orderItems: []
};

export default OrderItems;
