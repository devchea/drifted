import React, {Component} from 'react'
import FriendList from './FriendList'
import AddFriendForm from './AddFriendForm'
import EditFriend from './EditFriend'

class Dashboard extends Component {

  render(){
    // console.log("dashboard friendObjs:", this.props.friendObjs)
    return(
      <div className = "dashboard">
        <AddFriendForm/>
        <div>   <br/> </div>

        <FriendList
          passFriend={this.props.passFriends}
          friendObjs={this.props.friendObjs}
          // handleShowfriend={this.handleShowFriend}
          // showFriendObj={this.state.showFriendObj}
        />
        {/* <div style={{float: "right"}}> */}

        <div className="sidebar">
              
              {/* {this.state.showFriend ? <EditFriend friendID={this.state.showFriendID}/> : null }  */}
        </div>     



          {/* <EditFriend passEdit={this.props.passEdit}/> */}
          {/* </div> */}

      </div>
    )
  }

}

export default Dashboard