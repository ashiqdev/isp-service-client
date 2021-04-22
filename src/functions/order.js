import axios from 'axios';

export const createOrder = async (authToken, order) => {
  return axios.post(
    'https://mern-service.herokuapp.com/api/orders',
    { order },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const updateOrder = async (authToken, order, id) => {
  return axios.put(
    `https://mern-service.herokuapp.com/api/orders/${id}`,
    { order },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getOrders = async (authToken) => {
  return axios.get('https://mern-service.herokuapp.com/api/orders', {
    headers: {
      authToken,
    },
  });
};
