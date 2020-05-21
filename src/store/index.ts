import { createStore, Store } from 'redux';

import { ShoesState } from './ducks/shoes/types';
import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  shoes: ShoesState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
