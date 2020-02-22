export const ADD_LANGUAGE = 'LANGUAGE/ADD';

export const addLanguage = (lan) => {
    return {
        type: ADD_LANGUAGE,
        payload: {
            lan
        }
    };
};

