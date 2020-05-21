import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ShoesState } from './ducks/shoes/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';

export interface ApplicationState {
  shoes: ShoesState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
