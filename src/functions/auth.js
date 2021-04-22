import axios from 'axios';

export const createOrUpdateUser = async (authToken) => {
  return axios.post(
    'https://mern-service.herokuapp.com/api/users/create-or-update-user',
    {},
    {
      headers: {
        authToken,
      },
    }
  );
};

export const currentUser = async (authToken) => {
  return axios.post(
    'https://mern-service.herokuapp.com/api/users/current-user',
    {},
    {
      headers: {
        authToken,
      },
    }
  );
};

export const currentAdmin = async (authToken) => {
  return axios.post(
    'https://mern-service.herokuapp.com/api/users/current-admin',
    {},
    {
      headers: { authToken },
    }
  );
};

export const makeAdmin = async (authToken, email) => {
  let res;
  try {
    res = await axios.put(
      'https://mern-service.herokuapp.com/api/users/make-admin',
      { email },
      { headers: { authToken } }
    );
  } catch (error) {
    const { response } = error;
    res = response.data.errors[0].message;
  }
  return res;
};
