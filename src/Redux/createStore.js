import {createStore,applyMiddleware} from 'redux';
import createSagaMiddle from 'redux-saga';
import  logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import rootSaga from './rootSaga';
import {persistStore} from 'redux-persist';

const sagaMiddleware=createSagaMiddle();
export const middlewares=[thunk,sagaMiddleware,logger];
export const store= createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga)
export const persistor= persistStore(store);
export default {store,persistor};  