import { Button, Container, Grid, Typography } from '@material-ui/core';

import aboutImg from '../../images/about-img1.png';

const About = () => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Container maxWidth='lg'>
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
              style={{
                color: '#fa8185',
                marginBottom: '0.9rem',
              }}
            >
              About xpress
            </Typography>

            <Typography variant='h4' color='primary'>
              Experience the magic of tech
            </Typography>

            <Typography
              style={{ marginBottom: '0.9rem' }}
              variant='h4'
              color='primary'
            >
              To serve you the best
            </Typography>

            <Typography
              variant='body2'
              color='primary'
              style={{ lineHeight: '1.6' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisseLorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut.
            </Typography>

            <Button
              style={{ width: '200px', marginTop: '0.5rem' }}
              variant='contained'
              color='secondary'
            >
              Learn More
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <img style={{ maxWidth: '100%' }} src={aboutImg} alt='about' />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
