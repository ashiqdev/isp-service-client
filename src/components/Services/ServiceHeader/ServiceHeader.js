import { Container, Typography } from '@material-ui/core';
import { MonetizationOn } from '@material-ui/icons';
import Services from '../Services/Services';

const ServiceHeader = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Container maxWidth='sm'>
        <div style={{ textAlign: 'center' }}>
          <MonetizationOn style={{ fontSize: '3rem', color: '#fa8185' }} />
          <Typography style={{ marginBottom: '0.5rem' }} variant='h4'>
            Discover our best services
          </Typography>

          <Typography variant='body2' style={{ lineHeight: '1.6' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices.
          </Typography>
        </div>
      </Container>

      <Services />
    </div>
  );
};

export default ServiceHeader;
