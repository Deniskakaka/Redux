import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions.js';

const initialState = {
    products: []
} 

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                products: state.products.concat(action.payload.product)
            }
        }   
         case REMOVE_PRODUCT: {
             let newListProduct = state.products.filter(product => product.id !== action.payload.id)
             return {
                ...state,
                products:newListProduct
             } 
        }      
        default:
            return state;
    };
};

export default productReducer;