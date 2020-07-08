import React, {Component} from 'react'
import FriendList from './FriendList'
import AddFriendForm from './AddFriendForm'

class Dashboard extends Component {
 
  render(){
    // console.log("dashboard friendObjs:", this.props.friendObjs)
    return(
      <div>
        <AddFriendForm/>
        <FriendList friendObjs={this.props.friendObjs}/>


      </div>
    )
  }

}

export default Dashboard