import { actionTypes } from '../types/actionTypes';

export const LOGIN = actionTypes('auth/LOGIN');
export const LOGOUT = actionTypes('auth/LOGOUT');
export const CREATE_PASSWORD = actionTypes('auth/CREATE_PASSWORD');
export const GET_USER_INFO = actionTypes('auth/GET_USER_INFO');
export const UPDATE_FIRST_TIME_USER_INFO = actionTypes(
  'auth/UPDATE_FIRST_TIME_USER_INFO'
);

export const ADD_DEVICE_TOKEN = 'auth/ADD_DEVICE_TOKEN';

export const UPDATE_USER_INFO = actionTypes('auth/UPDATE_USER_INFO');

export const ADD_TEMP_ACCESS_TOKEN = 'auth/ADD_TEMP_ACCESS_TOKEN';
export const ADD_ACCESS_TOKEN = 'auth/ADD_ACCESS_TOKEN';

export const RESET_PASSWORD = actionTypes('auth/RESET_PASSWORD');

export const CHANGE_PASSWORD = actionTypes('auth/CHANGE_PASSWORD');

export const CHECK_EXIST_PHONE_NUMBER = actionTypes(
  'auth/CHECK_EXIST_PHONE_NUMBER'
);

export const REQUEST_OTP_TO_REGISTER = actionTypes(
  'auth/REQUEST_OTP_TO_REGISTER'
);

export const REQUEST_OTP_TO_FORGOT_PASSWORD = actionTypes(
  'auth/REQUEST_OTP_TO_FORGOT_PASSWORD'
);

export const VERIFY_OTP_TO_REGISTER = actionTypes(
  'auth/VERIFY_OTP_TO_REGISTER'
);

export const RESET_PASSWORD_FORGOT = actionTypes('auth/RESET_PASSWORD_FORGOT');

export const VERIFY_OTP_TO_FORGOT_PASSWORD = actionTypes(
  'auth/VERIFY_OTP_TO_FORGOT_PASSWORD'
);

export const VERIFY_TOKEN_FIREBASE = actionTypes('auth/VERIFY_TOKEN_FIREBASE');

export const VERIFY_TOKEN_FIREBASE_RESET_PASSWORD = actionTypes(
  'auth/VERIFY_TOKEN_FIREBASE_RESET_PASSWORD'
);

export const CHECK_PHONE_NUMBER = actionTypes('auth/CHECK_PHONE_NUMBER');
export const GET_ADDRESS_LIST = actionTypes('auth/GET_ADDRESS_LIST');
export const GET_APARTMENT_LIST = actionTypes('auth/GET_APARTMENT_LIST');
