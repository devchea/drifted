import React, {Component} from 'react'

class FriendCard extends Component{

    render(){
        let displayFriend = this.props.friend
        return(<div>
            <h2>{displayFriend.name}</h2>
            <h4>{displayFriend.phone}</h4>
            <h4>{displayFriend.email}</h4>
            <h4>Keep in touch every: </h4>
            </div>
        )
    }

}

export default FriendCard