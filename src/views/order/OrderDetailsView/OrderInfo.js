import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  Link,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  makeStyles
} from '@material-ui/core';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

const statusOptions = ['Canceled', 'Completed', 'Rejected'];

const useStyles = makeStyles(() => ({
  root: {}
}));

const OrderInfo = ({ className, order, ...rest }) => {
  const classes = useStyles();
  const [status, setStatus] = useState(statusOptions[0]);

  const handleChange = (event) => {
    event.persist();
    setStatus(event.target.value);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Order info" />
      <Divider />
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>
              Customer
            </TableCell>
            <TableCell>
              <Link
                component={RouterLink}
                to="/app/management/customers/1"
              >
                {order.customer.name}
              </Link>
              <div>{order.customer.address1}</div>
              <div>{order.customer.city}</div>
              <div>{order.customer.country}</div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              ID
            </TableCell>
            <TableCell>
              #
              {order.id}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Number
            </TableCell>
            <TableCell>
              {order.number}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Date
            </TableCell>
            <TableCell>
              {moment(order.createdAt).format('DD/MM/YYYY HH:MM')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Promotion Code
            </TableCell>
            <TableCell>
              {order.coupon ? order.coupon : 'N/A'}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Total Amount
            </TableCell>
            <TableCell>
              {numeral(order.totalAmount).format(`${order.currency}0,0.00`)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Status
            </TableCell>
            <TableCell>
              <TextField
                fullWidth
                name="option"
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                value={status}
                variant="outlined"
              >
                {statusOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </TextField>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <CardActions>
        <Button startIcon={<ReceiptIcon />}>
          Resend invoice
        </Button>
      </CardActions>
    </Card>
  );
};

OrderInfo.propTypes = {
  className: PropTypes.string,
  order: PropTypes.object.isRequired
};

export default OrderInfo;
