import React from 'react';
import { connect } from 'react-redux';
import UserList from './UserList.jsx';
import { filterList } from './userList.actions.js';
import { userListTextSelector, userListArraySelector } from './userList.selector.js';

const mapState = state => {
    return {
        filterText: userListTextSelector(state),
        usersList: userListArraySelector(state)
    }
}

const mapDispatch = {
    moveOption: filterList,
}

export default connect(mapState, mapDispatch)(UserList);