
const usersArray = {
    usersList: []
};

const userReducer = (state = usersArray , action) => {
    switch (action.type) {
        case 'USER/ADD':
            return {
                ...state,
               usersList: state.usersList.concat(action.user)
            };
        case 'USER/DELET':
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.id)
            };
        default:
            return state;          
    }
};

export default userReducer;