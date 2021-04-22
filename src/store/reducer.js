import {
  GET_SERVICES,
  LOGIN_SUCCESS,
  LOG_OUT,
  GET_REVIEWS,
  GET_ORDERS,
} from './action/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        user: action.payload,
      };

    case GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };

    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };

    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
