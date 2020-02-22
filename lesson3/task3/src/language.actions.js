export const SET_LANGUAGE = 'LANGUAGE/SET';

export const setLanguage = (lan) => {
    return {
        type: SET_LANGUAGE,
        payload: {
            lan
        }
    };
};
