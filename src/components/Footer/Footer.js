import { Button, Container, Grid, Typography } from '@material-ui/core';
import bgImage from '../../images/black-bg3.6f82864034f0bee2aba6.png';

const Footer = () => {
  return (
    <div
      style={{
        minWidth: '100vw',
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        color: 'white',
        marginTop: '2rem',
        height: '200px',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container maxWidth='md'>
        <Grid container spacing={3} style={{ paddingTop: '3rem' }}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6'>Call Us Now For Connect Xpress</Typography>
            <Typography variant='h6'>+9(332) 420 42 42</Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button variant='contained' color='secondary' size='large'>
              Check Coverage in your area
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
