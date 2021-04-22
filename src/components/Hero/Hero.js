import { Container, Grid, makeStyles, Typography } from '@material-ui/core';
import './Hero.css';
import blackbg from '../../images/black-bg1.10c650867455900a3b12.png';

import banner from '../../images/banner-img1.png';
import { WifiLockOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  background: {
    backgroundImage: ` url(${blackbg})`,
    backgroundPosition: '0 100%',
    backgroundSize: 'cover',
    paddingTop: '80px',
    paddingBottom: '90px',
  },

  white: {
    color: '#fff',
  },
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <Container maxWidth='md'>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h5'
              className={classes.white}
              style={{ marginBottom: '1rem' }}
            >
              <WifiLockOutlined /> Xpress BroadBand Service
            </Typography>

            <Typography
              className={classes.white}
              style={{ marginBottom: '0.1rem' }}
              variant='h2'
            >
              Built for Internet
            </Typography>

            <Typography style={{ color: '#fa8185' }} variant='h2'>
              Service
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <img style={{ maxWidth: '100%' }} src={banner} alt='Banner' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
