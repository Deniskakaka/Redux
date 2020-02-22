import { SET_LANGUAGE } from './language.actions.js';

let language = 'en'

const languageReducer = (state = language, action) => {
    switch (action.type) {
        case SET_LANGUAGE : {
            return  language = action.payload.lan

        }
        default:
            return state
    };
};

export default languageReducer;