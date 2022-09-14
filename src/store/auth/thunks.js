import { signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const chekingAuthentication = (email, password) => {
  return async dispatch => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIng = () => {
  return async dispatch => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};
