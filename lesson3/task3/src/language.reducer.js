import { ADD_LANGUAGE } from './language.actions.js';

let language = 'en'

const languageReducer = (state = language, action) => {
    switch (action.type) {
        case ADD_LANGUAGE : {
            return  language = action.payload.lan

        }
        default:
            return state
    };
};

export default languageReducer;