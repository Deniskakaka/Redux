export const ADD_PRODUCT = 'PRODUCT/ADD';
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE';

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product
        }
    };
};

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id
        }
    };
};