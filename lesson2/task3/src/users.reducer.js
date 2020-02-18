import { createStore } from "redux";

const ADD = 'USER/ADD';
const DELET = 'USER/DELET';

const usersArray = {
    users: []
};

const userReducer = (state = usersArray , action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
               users: state.users.concat(action.user)
            };
        case DELET:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default:
            return state;          
    }
};

export default userReducer;