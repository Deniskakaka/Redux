export const ADD_PRODUCT = 'PRODUCT/ADD';
export const DELETE_PRODUCT = 'PRODUCT/DELETE';

export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: {
            product
        }
    };
};

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: {
            id
        }
    };
};