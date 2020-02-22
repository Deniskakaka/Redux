import store from './store.js';
import { increment, decrement, reset } from './counter.actions.js';
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(decrement());