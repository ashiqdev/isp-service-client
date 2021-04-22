import {
  LOGIN_SUCCESS,
  LOG_OUT,
  GET_SERVICES,
  GET_REVIEWS,
  GET_ORDERS,
} from './actionTypes';

export const loginSuccessAction = (user, token) => {
  console.log({ user });
  return {
    type: LOGIN_SUCCESS,
    payload: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    },
  };
};

export const logOutAction = () => {
  return {
    type: LOG_OUT,
    payload: null,
  };
};

export const getServicesAction = (services) => {
  return {
    type: GET_SERVICES,
    payload: services,
  };
};

export const getReviewsAction = (reviews) => {
  return {
    type: GET_REVIEWS,
    payload: reviews,
  };
};

export const getOrdersAction = (orders) => {
  return {
    type: GET_ORDERS,
    payload: orders,
  };
};
