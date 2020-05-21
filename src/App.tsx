import React from 'react';
import { Provider } from 'react-redux'

import ShoesList from './components/Shoes/Shoes';

import store from './store'

const App = () => <Provider store={store}><ShoesList /></Provider>;

export default App;
