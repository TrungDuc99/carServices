import {
  ADD_ACCESS_TOKEN,
  ADD_DEVICE_TOKEN,
  ADD_TEMP_ACCESS_TOKEN,
  GET_ADDRESS_LIST,
  GET_USER_INFO,
  LOGIN,
  LOGOUT,
  RESET_PASSWORD,
  UPDATE_FIRST_TIME_USER_INFO,
  UPDATE_USER_INFO,
  VERIFY_TOKEN_FIREBASE,
  VERIFY_TOKEN_FIREBASE_RESET_PASSWORD,
} from './../constants/auth.constant';

const initialState = {
  deviceToken: '',
  tempAccessToken: '',
  accessToken: '',
  userInfo: {},
};
export default function authReducer(
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN.HANDLER:
      return {
        ...state,
        accessToken: payload.token,
        deviceToken: payload.deviceToken,
      };
    case ADD_TEMP_ACCESS_TOKEN: {
      return { ...state, tempAccessToken: payload.token };
    }
    case ADD_ACCESS_TOKEN: {
      return { ...state, accessToken: payload.token };
    }
    case RESET_PASSWORD.SUCCESS: {
      return { ...state, tempAccessToken: '' };
    }

    case ADD_DEVICE_TOKEN: {
      return { ...state, deviceToken: payload.deviceToken };
    }
    case UPDATE_FIRST_TIME_USER_INFO.SUCCESS: {
      return {
        ...state,
        accessToken: state.tempAccessToken,
        userInfo: payload.userInfo,
        tempAccessToken: '',
      };
    }

    case UPDATE_USER_INFO.SUCCESS: {
      return {
        ...state,
        userInfo: { ...state.userInfo, ...payload.userInfo },
      };
    }
    case GET_USER_INFO.SUCCESS:
      return {
        ...state,
        userInfo: payload.userInfo || {},
      };
    case LOGOUT.HANDLER: {
      return {
        ...initialState,
      };
    }
    case VERIFY_TOKEN_FIREBASE.SUCCESS:
      return { ...state, accessToken: payload.token };
    case VERIFY_TOKEN_FIREBASE_RESET_PASSWORD.SUCCESS:
      return { ...state, tempAccessToken: payload.token };
    case GET_ADDRESS_LIST.SUCCESS:
      return {
        ...state,
        listAddress: payload.listAddress || [],
      };
    default:
      return state;
  }
}
