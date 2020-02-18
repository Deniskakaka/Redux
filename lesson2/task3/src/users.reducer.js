import { createStore } from "redux";

const ADD = 'USER/ADD';
const DELET = 'USER/DELET';

const usersArray = {
    usersList: []
};

const userReducer = (state = usersArray , action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
               usersList: state.usersList.concat(action.user)
            };
        case DELET:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.id)
            };
        default:
            return state;          
    }
};

export default userReducer;