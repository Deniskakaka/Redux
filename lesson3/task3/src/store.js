import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer.js';
import productReducer from './cart.reducer.js';
import userReducer from './user.reducer.js';

const appReducer = combineReducers({
    language: languageReducer,
    user: userReducer,
    cart: productReducer,
});

const store = createStore(appReducer);

export default store;