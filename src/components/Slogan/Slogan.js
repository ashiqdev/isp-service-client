import { Container, Typography } from '@material-ui/core';
import { WifiLockRounded } from '@material-ui/icons';

const Slogan = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <Container maxWidth='sm'>
        <WifiLockRounded style={{ color: '#fa8185', fontSize: '3rem' }} />
        <Typography
          color='primary'
          style={{ marginBottom: '0.5rem', marginTop: '0.5rem' }}
        >
          Xpress ISP Features
        </Typography>
        <Typography
          variant='h4'
          style={{
            marginBottom: '0.1rem',
            fontWeight: 'bold',
            color: '#343a40',
          }}
        >
          We are Internet service provider
        </Typography>

        <Typography
          style={{ fontWeight: 'bold', color: '#343a40' }}
          variant='h4'
        >
          company in United States
        </Typography>
      </Container>
    </div>
  );
};

export default Slogan;
