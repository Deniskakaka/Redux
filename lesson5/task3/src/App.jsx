import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import FilterList from './userList/FilterList.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <FilterList/>
        </Provider>
    );
};

export default App;
