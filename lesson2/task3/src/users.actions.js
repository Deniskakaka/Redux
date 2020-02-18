export const add = (user) => {
    return {
        type: ADD,
        user
    }
};

export const delet = (id) => {
    return {
        type: DELET,
        id
    }
}