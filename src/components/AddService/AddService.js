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
  title: yup
    .string()
    .matches(/^([^0-9]*)$/, 'title should not contain numbers')
    .required('title is a required field'),
  description: yup
    .string()
    .matches(/^([^0-9]*)$/, 'description should not contain numbers')
    .required('description is a required field'),

  price: yup
    .string()
    .matches(/^[0-9]*$/, 'price should be a number')
    .required('price is a required field'),

  speed: yup
    .string()
    .matches(/^[0-9]*$/, 'speed should be a number')
    .required('speed is a required field'),
});

const AddService = () => {
  const {
    state: { user },
  } = useContext(store);
  const [loading, setLoading] = useState(false);
  const [status, setStaus] = useState('');
  const [imageURL, setImageURL] = useState(null);
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

  const handleImageUpload = async (e) => {
    try {
      setStaus('image is uploading...');
      const imageData = new FormData();
      imageData.set('key', '66283deb8da9fc831b0db8ea72f421f1');
      imageData.append('image', e.target.files[0]);
      const url = await uploadImageToServer(imageData);
      setImageURL(url);
      setStaus('image is uploaded');
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    console.log({ data });
    const service = {
      title: data.title,
      description: data.description,
      price: data.price,
      speed: data.speed,
      image: imageURL,
    };

    // await createProduct(user.token, product);
    // await
    await createService(user.token, service);

    // give a toast message
    // toast.dark(`New book is created`);

    // redirect to home page
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
                  Add Service
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
            {...register('title')}
            type='text'
            name='title'
            label='Service title'
            error={!!errors.title}
            helperText={errors?.title?.message}
          />

          <Input
            {...register('description')}
            type='text'
            name='description'
            label='Service Description'
            error={!!errors.description}
            helperText={errors?.description?.message}
          />

          <Input
            {...register('price')}
            type='text'
            name='price'
            label='Price'
            error={!!errors.price}
            helperText={errors?.price?.message}
          />

          <Input
            {...register('speed')}
            type='text'
            name='speed'
            label='Speed'
            error={!!errors.price}
            helperText={errors?.price?.message}
          />

          <Input
            {...register('image')}
            type='file'
            name='image'
            onChange={handleImageUpload}
          />

          {status && <p>{status}</p>}
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

export default AddService;
