import { deleteUser, addUser } from './users.actions.js';
import  store from './store.js';


store.dispatch(addUser({id: 76, name: 'Sarah'}));
store.dispatch(addUser({id: 85, name: 'Denis'}));
store.dispatch(addUser({id: 54, name: 'Oleg'}));
store.dispatch(addUser({id: 43, name: 'Koly'}));
store.dispatch(deleteUser(76));
store.dispatch(deleteUser(54));
console.log(store.getState());