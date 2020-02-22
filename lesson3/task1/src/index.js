import store from './store.js';
import { increment, decrement, reset } from './counter.actions.js';
import {addUser, deleteUser, updateUser} from './users.actions.js';
store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(addUser({name: 'Denis', id: 29}));
store.dispatch(addUser({name: 'Oleg', id: 84}));
store.dispatch(deleteUser(84));
store.dispatch(updateUser(29,{name: 'koly', age: 50}));