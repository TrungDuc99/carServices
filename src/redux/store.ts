// import {createStore, applyMiddleware} from 'redux';
// import logger from 'redux-logger';
// import {persistStore} from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers/_rootReducer';
// import rootSaga from './sagas/_rootSaga';

// let middlewares = [];
// const sagaMiddleware = createSagaMiddleware();
// middlewares = [logger, sagaMiddleware];
// const middleware = applyMiddleware(...middlewares);

// function configureStore() {
//   return createStore(rootReducer, middleware);
// }

// const store = configureStore();
// const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

// export {store, persistor};
