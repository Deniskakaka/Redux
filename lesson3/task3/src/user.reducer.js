import { SET_USER, REMOVE_USER } from './user.actions.js';

let user = null;

const userReducer = (state = user, action) => {
    switch (action.type) {
        case SET_USER: 
            return user = action.payload.user
         case REMOVE_USER: 
            return user = null
        default:
            return state
    }
};

export default userReducer;