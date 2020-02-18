import { delet, add } from './users.actions.js';
import  store from './store.js';


store.dispatch(add({id: 76, name: 'Sarah'}));
store.dispatch(add({id: 85, name: 'Denis'}));
store.dispatch(delet(76));
console.log(store.getState());