import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AttachMoneyOutlined, SpeedOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useContext } from 'react';
import { store } from '../../../store/store';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 240,
  },

  card: {
    transition: 'all 0.3s ease-out',
    boxShadow: '0 8px 5px 0 rgba( 31, 38, 135, 0.37 )',
    borderRadius: '10px',

    '&:hover': {
      transform: 'translateY(-5px) scale(1.005) translateZ(0)',
    },
  },
});

const Service = ({ service }) => {
  const history = useHistory();
  const classes = useStyles();

  const { state: user } = useContext(store);
  return (
    <Card className={`${classes.root} ${classes.card}`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={service.image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {service.title}
          </Typography>

          <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>

          <Typography
            style={{ marginTop: '2rem' }}
            gutterBottom
            variant='h5'
            component='p'
            color='textSecondary'
          >
            <SpeedOutlined /> {service.speed} Mbps
          </Typography>

          <Typography
            gutterBottom
            variant='h5'
            component='p'
            color='textSecondary'
          >
            <AttachMoneyOutlined /> {service.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => {
            if (user.role === 'admin') {
              history.push('/addService');
            } else {
              history.push(`/book/${service._id}`);
            }
          }}
          size='small'
          color='secondary'
          variant='contained'
        >
          Order Now
        </Button>
      </CardActions>
    </Card>
  );
};

export default Service;
