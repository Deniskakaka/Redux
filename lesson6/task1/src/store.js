import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';
import counterReducer from './counter.reducer.js';

const logger = (store) => (next) => (action) => {
	console.group(action.type);
	console.info(action);
	const result = next(action);
	console.log(store.getState());
	console.groupEnd();
	return result;
};

const reducer = combineReducers({
	counter: counterReducer
});

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(logger))
);

export default store;
