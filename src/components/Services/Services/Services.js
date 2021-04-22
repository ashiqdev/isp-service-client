import { Container, Grid, makeStyles } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import { useEffect, useContext, useState } from 'react';

import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/react';

import Service from '../Service/Service';
import { getServices } from '../../../functions/service';
import { getServicesAction } from '../../../store/action/actions';

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
  padding: {
    paddingTop: '5rem',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '5rem',
    },
  },

  space: {},
}));

const Services = () => {
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  const {
    dispatch,
    state: { services },
  } = useContext(store);

  useEffect(() => {
    const loadServices = async () => {
      const services = await getServices();
      console.log({ services });
      dispatch(getServicesAction(services.data));
      setLoading(false);
    };

    try {
      loadServices();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  return (
    <div className={classes.space}>
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
            <div className={classes.padding}>
              <Grid container className={classes.root} spacing={2}>
                {services.map((service) => (
                  <Grid xs={12} sm={12} lg={4} key={service._id} item>
                    <Service key={service._id} service={service} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Container>
        </>
      )}
    </div>
  );
};

export default Services;
