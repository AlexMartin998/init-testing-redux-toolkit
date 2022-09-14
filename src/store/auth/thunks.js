import { checkingCredentials } from './authSlice';

export const chekingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIng = () => {
  return async dispatch => {
    dispatch(checkingCredentials());
  };
};
