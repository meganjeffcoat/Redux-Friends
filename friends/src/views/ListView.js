import React from 'react';
import { connect } from 'react-redux';

import List from '../components/List';
import { getFriends } from '../actions';


class ListView extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        if (this.props.isFetchingFriends || !this.props.friends) {
            return <p>Fetching Friends...</p>
        }
        return (
            <div>
                <List {...this.props} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    isFetchingFriends: state.isFetchingFriends,
    error: state.error
});

export default connect(mapStateToProps, { getFriends })(ListView);