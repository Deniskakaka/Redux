import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions.js';

const Weather = ({ citys, getWeatherData }) => {
    
    useEffect(() => {
        getWeatherData()
    });

    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {citys.map(city => 
                <li className="city">
                    <span className="city__name">{city.name}</span>
                    <span className="city__temperature">{city.temperature}</span>
                </li>)}
            </ul>
        </main>
    );
};

function mapStateToProps(state) {
    return {
        citys: state.listCitys
    };
};

const mapDispatchToProps = {
    getWeatherData: weatherActions.getWeatherData
};


export default connect(mapStateToProps, mapDispatchToProps)(Weather);
