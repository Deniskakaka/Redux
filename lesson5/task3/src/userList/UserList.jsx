import React from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';

const UserList = ({ filterText, moveOption, usersList }) => {
    const filterList =  usersList
        .filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()) )
        .map(user=> <User key={user.id} name={user.name} age={user.age}/>);
    return (
        <div>
            <Filter filterText={filterText} moveOption={moveOption} count={filterList.length}/>
            <ul className="users">
                {filterList}
            </ul>
        </div>  
    )
};

export default UserList;