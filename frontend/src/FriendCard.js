import React, {Component} from 'react'

class FriendCard extends Component{

  render(){
    let displayFriend = this.props
    return (
      <div>
        <tr>
          {displayFriend.name}
          {displayFriend.phone}
          {displayFriend.email}
          {/* <td>Next Appointment: {displayFriend.appointment.next_appointment}</td> */}
        </tr>
      </div>
    );
  };
}
export default FriendCard