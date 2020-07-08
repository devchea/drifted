import React, {Component} from 'react'
import EditFriend from './EditFriend'

class FriendCard extends Component{


  render(){
    let displayFriend = this.props
    console.log(displayFriend)
    return (
      <div>
        <div class="ui celled list">
        <div class="item">
          <div class="content">
            <div class="header"> {displayFriend.name} </div>
            {displayFriend.phone}       
            {displayFriend.email}       
            <button onClick={displayFriend.handleShowFriend}>Edit Friend</button>
            
          </div>
        </div>
        </div>

      </div>
    );
  };
}
export default FriendCard