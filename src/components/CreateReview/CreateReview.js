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

import { store } from '../../store/store';
import { createReview } from '../../functions/review';

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
  description: yup.string().required('description is a required field'),
});

const CreateReview = () => {
  const {
    state: { user },
  } = useContext(store);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

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
    const review = {
      description: data.description,
      name: user.name,
    };

    await createReview(user.token, review);

    history.push('/');
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
                <Typography style={{ color: purple[800] }} variant='h4'>
                  Add a Review
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register('name')}
            type='text'
            name='name'
            label='User Name'
            value={user.name}
            readOnly={true}
          />

          <Input
            {...register('description')}
            type='text'
            name='description'
            label='description'
            error={!!errors.description}
            helperText={errors?.description?.message}
          />

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

export default CreateReview;
