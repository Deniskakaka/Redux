import { delet, add } from './users.actions.js';
import  store from './store.js';


store.dispatch(add({id: 76, name: 'Sarah'}));
store.dispatch(add({id: 85, name: 'Denis'}));
store.dispatch(add({id: 54, name: 'Oleg'}));
store.dispatch(add({id: 43, name: 'Koly'}));
store.dispatch(delet(76));
store.dispatch(delet(54));
console.log(store.getState());