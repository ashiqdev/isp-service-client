import axios from 'axios';

export const createReview = async (authToken, review) => {
  return axios.post(
    'https://mern-service.herokuapp.com/api/reviews',
    { review },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getReviews = async () => {
  return axios.get('https://mern-service.herokuapp.com/api/reviews');
};
