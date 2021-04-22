import { Container, Typography } from '@material-ui/core';
import { RateReviewOutlined } from '@material-ui/icons';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';

const ReviewsHeader = () => {
  return (
    <div
      style={{ marginTop: '3rem', backgroundColor: '#343a40', color: '#fff' }}
    >
      <Container maxWidth='sm'>
        <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
          <RateReviewOutlined style={{ fontSize: '3rem', color: '#fa8185' }} />
          <Typography style={{ marginBottom: '0.5rem' }} variant='h4'>
            What customers say about us
          </Typography>

          <Typography variant='body2' style={{ lineHeight: '1.6' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices.
          </Typography>
        </div>
      </Container>

      <Reviews />
    </div>
  );
};

export default ReviewsHeader;
