export const ADD_LANGUAGE = 'LANGUAGE/ADD';

const addLanguage = (lan) => {
    return {
        type: ADD_LANGUAGE,
        payload: {
            lan
        }
    };
};

export default addLanguage;
