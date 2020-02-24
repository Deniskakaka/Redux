import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions.js';

const initialState = {
    usersList : [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER : {
            return {
                ...state,
                userList: state.usersList.concat(action.payLoad.userData)
            }
        }
        case DELETE_USER : {
            const newList = state.usersList
            .filter(user => user.id !== action.payLoad.userId);
            return {
                ...state,
                userList:newList
            }
        }
        case UPDATE_USER : {
            const newList = state.usersList.map(user => {
                if (user.id === action.payLoad.userId) {
                   return {
                       ...user,
                       ...action.payLoad.userData
                   }
                } 
            });
            return {
                ...state,
                userList: newList
            }
        }
        default:
            return state;
    }
};

export default usersReducer;