import React from 'react';

function List(props) {
    return (
        <div>
            {props.friends.map(friend => (
                <div key={friend.id}>
                    {friend.name}
                    {friend.age}
                </div>
            ))}
        </div>
    );
}

export default List;