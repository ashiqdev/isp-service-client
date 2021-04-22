import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { purple } from '@material-ui/core/colors';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ExitToApp } from '@material-ui/icons';
import { useContext, useEffect, useState } from 'react';

import ScaleLoader from 'react-spinners/ScaleLoader';

import { store } from '../../store/store';
import { getServicesAction } from '../../store/action/actions';
import { getServiceById } from '../../functions/service';
import ProcessPayment from '../Payment/ProcessPayment/ProcessPayment';

import { createOrder } from '../../functions/order';

const useStyles = makeStyles((theme) => ({
  center: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '7rem',
    },
  },

  margin: {
    marginLeft: '1rem',
    color: purple[400],
  },
}));

const CreateOrder = () => {
  const { id } = useParams();
  const {
    state: { user },
  } = useContext(store);
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState({});
  const [paymentInfo, setPaymentInfo] = useState({});
  const classes = useStyles();

  const history = useHistory();

  const handlePayment = (paymentInfo) => {
    setPaymentInfo(paymentInfo.card);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(paymentInfo);
    const order = {
      name: user.name,
      brand: paymentInfo.brand,
      lastFour: paymentInfo.last4,
      service: service._id,
    };

    await createOrder(user.token, order);

    history.push('/');
  };

  useEffect(() => {
    const loadService = async () => {
      const service = await getServiceById(user.token, id);
      console.log({ service });
      setService(service.data);
    };

    try {
      loadService();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={classes.center}>
      <Box m={12} />
      <Container maxWidth='sm'>
        <Typography style={{ color: purple[800] }} component='h2' variant='h4'>
          <Grid container direction='row' alignItems='center'>
            <ExitToApp />
            <span className={classes.margin}>
              {!loading ? (
                <Typography style={{ color: purple[800] }} variant='h4'>
                  Book the service
                </Typography>
              ) : (
                <>
                  <ScaleLoader
                    loading={loading}
                    color={purple[700]}
                    size={15}
                  />
                </>
              )}
            </span>
          </Grid>
        </Typography>

        <ProcessPayment handlePayment={handlePayment} />

        <Form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='name'
            label='User Name'
            value={user.name}
            readOnly={true}
          />

          <Input
            type='text'
            name='email'
            label='email'
            value={user.email}
            readOnly={true}
          />

          <Input
            type='text'
            name='service'
            value={service.title}
            readOnly={true}
          />

          <Typography
            variant='body2'
            color='primary'
            style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}
          >
            *Your Service Charge will be ${service.price}
          </Typography>

          <Button
            style={{ background: purple[400], color: 'white' }}
            type='submit'
          >
            Save
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreateOrder;
