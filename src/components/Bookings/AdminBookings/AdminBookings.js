import React, { useContext, useEffect, useState } from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { purple } from '@material-ui/core/colors';
import { getOrders, updateOrder } from '../../../functions/order';
import { Container, Typography } from '@material-ui/core';
import { store } from '../../../store/store';
import OrderStatus from '../../OrderStatus/OrderStatus';
import {
  EditOutlined,
  UpdateOutlined,
  UpdateRounded,
} from '@material-ui/icons';
import { getOrdersAction } from '../../../store/action/actions';

const override = css`
  display: block;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5000;
`;

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 950,

    [theme.breakpoints.down('lg')]: {
      minWidth: 500,
    },

    [theme.breakpoints.down('sm')]: {
      minWidth: 100,
    },

    [theme.breakpoints.down('xs')]: {
      minWidth: 100,
    },
  },

  center: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '1.5rem',
    paddingLeft: '10rem',
    paddingBottom: '1.5rem',

    [theme.breakpoints.down('xs')]: {
      postion: 'relative',
      paddingLeft: '0',
    },

    [theme.breakpoints.down('sm')]: {
      marginTop: '5rem',
    },
  },

  tableHead: {
    backgroundColor: purple[400],
  },

  cell: {
    fontWeight: 900,
    color: '#fff',
  },
}));

export default function AdminBookings() {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [currentStatus, setCurrentStatus] = useState('');

  const {
    dispatch,
    state: { user, orders },
  } = useContext(store);

  const onChangeHandler = (selectedStatus) => {
    setCurrentStatus(selectedStatus);
  };

  const handleUpdate = async (order) => {
    setLoading(true);
    if (currentStatus === 10) {
      order.status = 'pending';
    } else if (currentStatus === 20) {
      order.status = 'on going';
    } else {
      order.status = 'done';
    }

    await updateOrder(user.token, order, order._id);

    const orders = await getOrders(user.token);
    //   setOrders(orders.data);
    dispatch(getOrdersAction(orders.data));

    setLoading(false);
  };

  useEffect(() => {
    const loadOrders = async () => {
      const orders = await getOrders(user.token);
      //   setOrders(orders.data);
      dispatch(getOrdersAction(orders.data));
      setLoading(false);

      console.log({ ashik: orders.data });
    };

    loadOrders();

    console.log(orders);
  }, []);

  return (
    <div className={classes.center}>
      {loading ? (
        <>
          <ScaleLoader
            loading={loading}
            color={purple[700]}
            css={override}
            size={15}
          />
        </>
      ) : (
        <>
          <Container maxWidth='lg'>
            <Typography
              style={{ marginBottom: '1rem', color: purple[800] }}
              variant='h4'
            >
              All Orders
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label='simple table'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.cell}>Name</TableCell>
                    <TableCell className={classes.cell}>Email</TableCell>

                    <TableCell className={classes.cell}>Service</TableCell>
                    <TableCell className={classes.cell}>Card Type</TableCell>
                    <TableCell className={classes.cell}>Last 4 digit</TableCell>

                    <TableCell className={classes.cell}>Status</TableCell>

                    <TableCell className={classes.cell}>
                      Change Status
                    </TableCell>

                    <TableCell className={classes.cell}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.length > 0 &&
                    orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell>{order.name}</TableCell>
                        <TableCell>{order.email}</TableCell>

                        <TableCell>{order.service.title}</TableCell>

                        <TableCell>{order.brand}</TableCell>

                        <TableCell>{order.lastFour}</TableCell>

                        <TableCell>{order.status}</TableCell>

                        <TableCell>
                          <OrderStatus onChangeHandler={onChangeHandler} />
                        </TableCell>

                        <TableCell>
                          <EditOutlined
                            onClick={() => handleUpdate(order)}
                            style={{ cursor: 'pointer' }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </>
      )}
    </div>
  );
}
