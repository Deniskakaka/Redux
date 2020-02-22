import store from './store.js';
import { addLanguage } from './language.actions.js';
import { addProduct, deleteProduct } from './cart.actions.js';
import { removeUser, setUser } from './user.actions.js';
store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({id: 76, name: 'milk'}));
store.dispatch(addProduct({id: 43, name: 'meat'}));
store.dispatch(deleteProduct(43));
store.dispatch(setUser({name:'Bob'}));
store.dispatch(removeUser());