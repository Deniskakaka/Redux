import { WEATHER_DATA_RECEIVE } from './weather.actions.js';

const initialState = {
    listCitys : []
};

const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case WEATHER_DATA_RECEIVE:
            return {
                listCitys : action.payload.data
            }
         default: 
            return state   
    }
};

export default weatherReducer;
