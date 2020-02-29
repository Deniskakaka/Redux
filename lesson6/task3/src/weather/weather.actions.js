import { FetchWeather } from './weather.gateway.js';

export const WEATHER_DATA_RECEIVE = 'WEATHER_DATA_RECEIVE';

export function weatherDateReceive(data) {
    return {
      type: WEATHER_DATA_RECEIVE,
      payload: { data },
    };
};

export function getWeatherData () {
    return function (dispatch) {
        FetchWeather().then(res => dispatch(weatherDateReceive(res)))
    }
}