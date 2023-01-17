import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth.reducer';

const persistAuthConfig = {
  key: 'auth',
  storage,
  blacklist: ['deviceToken'],
};
const rootReducer = combineReducers({
  auth: persistReducer(persistAuthConfig, authReducer),
});
export default rootReducer;
