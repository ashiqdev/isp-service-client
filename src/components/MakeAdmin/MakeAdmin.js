import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { purple } from '@material-ui/core/colors';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ExitToApp } from '@material-ui/icons';
import { useContext, useState } from 'react';

import ScaleLoader from 'react-spinners/ScaleLoader';
import { uploadImageToServer } from '../../helpers/imagebb.config';
// import { createProduct } from '../../functions/product';
import { store } from '../../store/store';
import { createService } from '../../functions/service';
import { makeAdmin } from '../../functions/auth';
// import { toast } from 'react-toastify';

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

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(/^([^0-9]*)$/, 'email should not contain numbers')
    .required('email is a required field'),
});

const MakeAdmin = () => {
  const {
    state: { user },
  } = useContext(store);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const classes = useStyles();

  //   const { register, handleSubmit, errors } = useForm({
  //     mode: 'onBlur',
  //     resolver: yupResolver(schema),
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmit = async (data) => {
    console.log({ data });
    const service = {
      email: data.email,
    };

    const res = await makeAdmin(user.token, service.email);

    if (res === 'user not found by given email') {
      setError('user not found by given email');
    } else {
      setError('');
      history.push('/');
    }

    // Todo toast message

    // redirect to home page
  };

  return (
    <div className={classes.center}>
      <Box m={12} />
      <Container maxWidth='sm'>
        <Typography style={{ color: purple[800] }} component='h2' variant='h4'>
          <Grid container direction='row' alignItems='center'>
            <ExitToApp />

            <span className={classes.margin}>
              {!loading ? (
                <>
                  <Typography style={{ color: purple[800] }} variant='h4'>
                    Make Admin
                  </Typography>
                  <Typography varinat='h6' style={{ color: 'red' }}>
                    {error}
                  </Typography>
                </>
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('email')}
            type='text'
            name='email'
            label='Enter email of a user'
            error={!!errors.email}
            helperText={errors?.email?.message}
          />

          <Button
            style={{ background: purple[400], color: 'white' }}
            type='submit'
          >
            Update
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default MakeAdmin;
