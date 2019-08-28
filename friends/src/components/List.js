import React from 'react';

function List(props) {
    return (
        <div>
            {props.friends.map(friend => (
                <div key={friend.id}>
                    <h2>{friend.name}</h2>
                    <h3>{friend.age}</h3>
                    <h3>{friend.email}</h3>
                </div>
            ))}
        </div>
    );
}

export default List;