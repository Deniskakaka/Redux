import { createStore, combineReducers } from 'redux';
import userListReducer from './userList/userList.reducer.js';

const reducer = combineReducers({
	users: userListReducer
});

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
