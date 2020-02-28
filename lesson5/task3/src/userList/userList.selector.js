export const userListTextSelector = (state) => {
    return state.users.filterText;
};

export const userListArraySelector = (state) => {
    return state.users.usersList;
};