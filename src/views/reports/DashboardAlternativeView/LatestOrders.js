import React, {
  useCallback,
  useEffect,
  useState
} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import moment from 'moment';
import numeral from 'numeral';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Label from 'src/components/Label';
import GenericMoreButton from 'src/components/GenericMoreButton';
import axios from 'src/utils/axios';
import useIsMountedRef from 'src/hooks/useIsMountedRef';

const labelColors = {
  complete: 'success',
  pending: 'warning',
  rejected: 'error'
};

const useStyles = makeStyles(() => ({
  root: {}
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const isMountedRef = useIsMountedRef();
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(async () => {
    try {
      const response = await axios.get('/api/reports/latest-orders');
  
      if (isMountedRef.current) {
        setOrders(response.data.orders);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMountedRef]);

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={<GenericMoreButton />}
        title="Latest Orders"
      />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={700}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Number
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Customer
                </TableCell>
                <TableCell>
                  Items
                </TableCell>
                <TableCell>
                  Total
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell align="right">
                  Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>{order.number}</TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>
                    {numeral(order.totalAmount).format(`${order.currency}0,0.00`)}
                  </TableCell>
                  <TableCell>
                    <Label color={labelColors[order.status]}>
                      {order.status}
                    </Label>
                  </TableCell>
                  <TableCell align="right">
                    {moment(order.createdAt).format('DD MMM, YYYY hh:mm:ss')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        p={2}
        display="flex"
        justifyContent="flex-end"
      >
        <Button
          component={RouterLink}
          size="small"
          to="/app/management/orders"
          endIcon={<NavigateNextIcon />}
        >
          See all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
