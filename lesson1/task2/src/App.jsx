import React from 'react';
import Header from './Header.jsx';
import { users } from './user.js';

class App extends React.Component {
    state = {
        user: {
            name: 'Nikola Tesla',
            avatar_url: 'https://avatars3.githubusercontent.com/u10001'
        }
    }

    render() {
        return (
            <users.Provider value={this.state.user}>
                 <div className="page">
                    <Header/>
                </div>
            </users.Provider>
        );
    };
};

export default App;