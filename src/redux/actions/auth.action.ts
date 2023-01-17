import { LOGIN, LOGOUT, ADD_DEVICE_TOKEN } from '../constants/auth.constant';

export const addDeviceToken = (deviceToken: any) => ({
  type: ADD_DEVICE_TOKEN,
  deviceToken,
});

export const logoutHandle = () => ({
  type: LOGOUT.HANDLER,
});

export const loginHandle = (payload: any, onSuccess: any, onError: any) => ({
  type: LOGIN.HANDLER,
  payload,
  onSuccess,
  onError,
});

export const loginSuccess = (payload: any) => ({
  type: LOGIN.SUCCESS,
  payload,
});

export const loginFailure = (error: any) => ({
  type: LOGIN.FAILURE,
  error,
});
