//imports and this section is needed for creating store reducers
import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(reducers);