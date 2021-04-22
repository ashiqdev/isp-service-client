import { Container, Grid } from '@material-ui/core';
import { useContext, useEffect } from 'react';
import Review from '../Review/Review';
import { getReviews } from '../../../functions/review';
import { store } from '../../../store/store';
import { getReviewsAction } from '../../../store/action/actions';

const Reviews = () => {
  const reviewInfo = [
    {
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id facilisis tortor, et volutpat ante. Curabitur dapibus est attempor ornare lobortis scelerisque.',

      name: 'john Cena',
    },

    {
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id facilisis tortor, et volutpat ante. Curabitur dapibus est attempor ornare lobortis scelerisque.',

      name: 'john Cena',
    },

    {
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id facilisis tortor, et volutpat ante. Curabitur dapibus est attempor ornare lobortis scelerisque.',

      name: 'john Cena',
    },

    {
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id facilisis tortor, et volutpat ante. Curabitur dapibus est attempor ornare lobortis scelerisque.',

      name: 'john Cena',
    },
  ];

  const {
    dispatch,
    state: { reviews },
  } = useContext(store);

  useEffect(() => {
    const loadReviews = async () => {
      const reviews = await getReviews();

      dispatch(getReviewsAction(reviews.data));
    };

    try {
      loadReviews();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div style={{ paddingBottom: '2rem' }}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          {reviews.map((review) => (
            <Grid key={review._id} item xs={12} sm={6}>
              <Review key={review._id} review={review} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Reviews;
