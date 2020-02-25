import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import UserList from './users/UserLIst.jsx';

const App = () => {
    return (
        <Provider store={store}>
            <UserList/>
        </Provider>
    );
};

export default App;