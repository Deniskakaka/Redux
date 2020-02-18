import { createStore } from 'redux';

const INCREAMENT = 'COUNTER/INCREAMENT';
const DECREMENT = 'COUNTER/DECREMENT';

const incrementActionCreator = () => {
    return {
        type: INCREAMENT
    };
};

const decrementActionCreator = () => {
  return {
       type: DECREMENT
  };
};

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREAMENT:
            return  state + 1;
        case DECREMENT:
            return  state - 1;
        default : 
            return state;
    }
};



const store = createStore(counterReducer);

store.dispatch(incrementActionCreator());
store.dispatch(incrementActionCreator());
store.dispatch(decrementActionCreator())

console.log(store.getState());