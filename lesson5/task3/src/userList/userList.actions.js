export const FILTER_LIST = 'LIST/FILTER_LIST';

export const filterList = (string) => {
    return {
        type: FILTER_LIST,
        payload: {
            string
        }
    }
}