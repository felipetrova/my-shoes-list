import React from 'react';
import { Provider } from 'react-redux'

import ShoesList from './components/ShoeList/Shoes';

import store from './store'

const App = () => {
  return (
    <Provider store={store}><ShoesList /></Provider>
  );
};

export default App;
