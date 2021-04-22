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
import { getOrders } from '../../../functions/order';
import { Container, Typography } from '@material-ui/core';
import { store } from '../../../store/store';

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
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10rem',

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

export default function UserBookings() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    state: { user },
  } = useContext(store);

  useEffect(() => {
    const loadOrders = async () => {
      const orders = await getOrders(user.token);
      setOrders(orders.data);
      setLoading(false);
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
              Your Orders
            </Typography>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label='simple table'>
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell className={classes.cell}>Service</TableCell>
                    <TableCell className={classes.cell}>Price</TableCell>
                    <TableCell className={classes.cell}>Status</TableCell>

                    {/* <TableCell align='right'>Action</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.length > 0 &&
                    orders.map((order) => (
                      <TableRow key={order._id}>
                        <TableCell>{order.service.title}</TableCell>
                        <TableCell>${order.service.price}</TableCell>
                        <TableCell>{order.status}</TableCell>
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
