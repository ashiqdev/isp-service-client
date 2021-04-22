import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import {
  HomeOutlined,
  MobileScreenShareOutlined,
  NetworkCell,
  SatelliteOutlined,
  TvOutlined,
  WifiRounded,
} from '@material-ui/icons';

const Possibilities = () => {
  const possibilitiesInfo = [
    {
      name: 'Home Broadband',
      desc:
        'Lorem ipsudolorsitamet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      btnText: 'Read More...',
      icon: <NetworkCell />,
    },

    {
      name: 'Home Wifi',
      desc:
        'Lorem ipsudolorsitamet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      btnText: 'Read More...',
      icon: <WifiRounded />,
    },

    {
      name: 'Satellite Tv',
      desc:
        'Lorem ipsudolorsitamet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      btnText: 'Read More...',
      icon: <SatelliteOutlined />,
    },

    {
      name: 'Nexa Tv Box',
      desc:
        'Lorem ipsudolorsitamet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      btnText: 'Read More...',
      icon: <TvOutlined />,
    },

    {
      name: 'Mobile Connection',
      desc:
        'Lorem ipsudolorsitamet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      btnText: 'Read More...',
      icon: <MobileScreenShareOutlined />,
    },

    {
      name: 'Home Security',
      desc:
        'Lorem ipsudolorsitamet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      btnText: 'Read More...',
      icon: <HomeOutlined />,
    },
  ];

  return (
    <div
      style={{ marginTop: '3rem', backgroundColor: '#343a40', color: '#fff' }}
    >
      <Container maxWidth='lg'>
        <div style={{ textAlign: 'center', paddingTop: '2rem' }}>
          <WifiRounded style={{ color: '#fa8185', fontSize: '3rem' }} />
          <Typography variant='h4'>Explore the next Isp unlimited</Typography>
          <Typography variant='h4'>possibilities</Typography>
        </div>

        <Grid container spacing={3} style={{ marginTop: '3rem' }}>
          {possibilitiesInfo.map((item) => (
            <Grid key={item.name} item xs={12} sm={12} md={4}>
              <Card
                style={{
                  textAlign: 'center',
                  backgroundColor: '#343a40',
                  color: '#fff',
                  border: '1px solid #eee',
                }}
              >
                <CardContent>
                  <Typography
                    style={{
                      color: '#fa8185',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.icon}
                  </Typography>
                  <Typography variant='h5' style={{ marginBottom: '0.5rem' }}>
                    {item.name}
                  </Typography>

                  <Typography variant='body2' style={{ lineHeight: '1.6' }}>
                    {item.desc}
                  </Typography>

                  <Button
                    style={{ marginTop: '1rem', color: '#fff' }}
                    variant='contained'
                    color='secondary'
                  >
                    {item.btnText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Possibilities;
