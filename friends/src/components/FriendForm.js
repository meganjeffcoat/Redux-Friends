import React from 'react';
import { addFriend } from '../actions';
import { connect } from 'react-redux';

class FriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            email: '',
        };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addFriend(this.state);
        this.setState({
           name: '',
           age: '',
           email: '' 
        })
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    onChange={this.handleChange}
                    type='text'
                    name='name'
                    value={this.state.name}
                    placeholder='name'
                />
                <input
                    onChange={this.handleChange}
                    type='text'
                    name='age'
                    value={this.state.age}
                    placeholder='age'
                />
                <input
                    onChange={this.handleChange}
                    type='text'
                    name='email'
                    value={this.state.email}
                    placeholder='email'
                />
                <button>Add Friend</button>
            </form>
        )
    }
}

export default connect( null, { addFriend })(FriendForm);