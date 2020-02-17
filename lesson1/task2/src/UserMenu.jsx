import React from 'react';
import { users } from './user.js';

class UserMenu extends React.Component {
    render () { 
        return (
            <div className="menu">
                <span className="menu__greeting">{this.context.name}</span>
                <img alt="User Avatar" src={this.context.avatar_url} className="menu__avatar"/>
            </div>
        );
    };
};

UserMenu.contextType =  users;

export default UserMenu;