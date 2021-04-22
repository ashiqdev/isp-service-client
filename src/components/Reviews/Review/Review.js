import { Avatar, Card, CardContent, Typography } from '@material-ui/core';
import maleAvatar from '../../../images/Male-Avatar.png';

const Review = ({ review }) => {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Card style={{ height: '200px' }}>
        <CardContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* <Avatar style={{ marginRight: '1rem' }} /> */}
            <img
              style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              src={maleAvatar}
              alt=''
            />
            <Typography variant='h5'>{review.name}</Typography>
          </div>
          <Typography style={{ marginTop: '1rem', fontStyle: 'italic' }} variant='body2'>
            {review.description.substr(0, 200)}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Review;
