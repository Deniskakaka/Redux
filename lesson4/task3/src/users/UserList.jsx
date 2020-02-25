import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './user.actions.js';
import User from './User.jsx';
import Pagination from './Pagination.jsx';

class UserList extends React.Component {
    render() {
        let startIndex = this.props.currentPage * this.props.itemsPerPage;
        let showUser = this.props.users.slice(startIndex, this.props.itemsPerPage + startIndex).map(user =>
            <User key={user.id} name={user.name} age={user.age} />
        )
        return (
            <div>
                <Pagination 
                    goNext={this.props.increment} 
                    goPrev={this.props.decrement} 
                    isLastPage={this.props.users.length - 1}
                    currentPage={this.props.currentPage} 
                    itemsPerPage={this.props.itemsPerPage}
                />
                <ul>
                    {showUser}
                </ul>
            </div>

        );
    };
};

const mapState = state => {
    return {
        users: state.users,
        currentPage: state.currentPage,
        itemsPerPage: state.itemsPerPage
    }
}

const mapDispatch = {
    increment: userActions.increment,
    decrement: userActions.decrement
}

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UserList);

export default ConnectedUsersList;