import React, {Component} from 'react'
import FriendList from './FriendList'

class Dashboard extends Component {
  render(){
    return(
      <div>Dashboard

        <FriendList friendObjs={this.props.friends}/>


      </div>
    )
  }

}

export default Dashboard