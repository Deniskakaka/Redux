import store from './store.js';
import { setLanguage }  from './language.actions.js';
import { addProduct, removeProduct } from './cart.actions.js';
import { removeUser, setUser } from './user.actions.js';
store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct({id: 76, name: 'milk'}));
store.dispatch(removeProduct(76));
store.dispatch(setUser({name:'Bob'}));
store.dispatch(removeUser());
store.dispatch(setLanguage('ru'));