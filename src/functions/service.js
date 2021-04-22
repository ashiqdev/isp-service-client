import axios from 'axios';

export const createService = async (authToken, service) => {
  return axios.post(
    'https://mern-service.herokuapp.com/api/services',
    { service },
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getServices = async () => {
  return axios.get('https://mern-service.herokuapp.com/api/services');
};

export const deleteServiceById = async (authToken, id) => {
  return axios.delete(
    `https://mern-service.herokuapp.com/api/services/${id}`,
    // {},
    {
      headers: {
        authToken,
      },
    }
  );
};

export const getServiceById = async (authToken, id) => {
  return axios.get(
    `https://mern-service.herokuapp.com/api/services/${id}`,
    // {},
    {
      headers: {
        authToken,
      },
    }
  );
};
