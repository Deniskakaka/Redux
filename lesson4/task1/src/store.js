import { createStore, combineReducers } from 'redux'
import counterReduser from './counter.reducer';

const appReduser = combineReducers({
  counter: counterReduser
});

const store = createStore(appReduser);

export default store;