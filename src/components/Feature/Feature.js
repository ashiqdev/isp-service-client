import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import { ArrowForwardRounded, SpeedOutlined } from '@material-ui/icons';

const Feature = () => {
  return (
    <Container maxWidth='lg' style={{ marginTop: '2rem' }}>
      <Grid container spacing={3} style={{ textAlign: 'center' }}>
        <Grid item xs={12} sm={12} md={4}>
          <Card variant='outlined'>
            <CardContent>
              <SpeedOutlined style={{ color: '#fa8185', fontSize: '3rem' }} />
              <Typography
                style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
                variant='h5'
              >
                Download 1Gbps
              </Typography>
              <Typography variant='body2' style={{ marginBottom: '0.5rem' }}>
                lorem ipsum dolor sit do eiusmod sit consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut.
              </Typography>

              <ArrowForwardRounded />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card variant='outlined'>
            <CardContent>
              <SpeedOutlined style={{ color: '#fa8185', fontSize: '3rem' }} />
              <Typography
                style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
                variant='h5'
              >
                24/7 Customer Support
              </Typography>
              <Typography variant='body2' style={{ marginBottom: '0.5rem' }}>
                lorem ipsum dolor sit do eiusmod sit consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut.
              </Typography>

              <ArrowForwardRounded />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card variant='outlined'>
            <CardContent>
              <SpeedOutlined style={{ color: '#fa8185', fontSize: '3rem' }} />
              <Typography
                style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}
                variant='h5'
              >
                99% Internet Uptime
              </Typography>
              <Typography variant='body2' style={{ marginBottom: '0.5rem' }}>
                lorem ipsum dolor sit do eiusmod sit consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut.
              </Typography>

              <ArrowForwardRounded />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Feature;
