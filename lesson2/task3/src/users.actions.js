const ADD = 'USER/ADD';
const DELET = 'USER/DELET';

export const addUser = (user) => {
    return {
        type: ADD,
        user
    }
};

export const deleteUser = (id) => {
    return {
        type: DELET,
        id
    }
}