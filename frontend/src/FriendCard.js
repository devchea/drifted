import React, {Component} from 'react'
import EditFriend from './EditFriend'

class FriendCard extends Component{


  state = {
    showFriend: false,
    showFriendObj: ''
  }

// componentDidMount = (handleShowFriend) => {
//   this.state.showFriend?
//   this.setState({
//     showFriend: false
//   })
//   : this.setState({
//     showFriend: true
//   })
// }

  handleShowFriend = () => {
    console.log('hi')
    this.setState({
        showFriend: !this.state.showFriend
    })
    // })
    // this.state.showFriend?
    // this.setState({
    //   showFriend: false
    // })
    // : this.setState({
    //   showFriend: true
    // })
  }


  render(){
    let displayFriend = this.props
    // console.log(displayFriend)
    return (
      <div>
        <div className="ui celled list">
        <div className="item">
          <div onClick={()=>this.handleShowFriend()} class="content">
            <div className="header"> {displayFriend.name} </div>
            {"  "} {displayFriend.phone}
            <div style={{float: "right"}} > {displayFriend.email} </div>   

           <div> Make Contact: Every {displayFriend.recurrence_integer} {" "} {displayFriend.recurrence_unit} </div>
            
          </div>
        </div>
        </div>
        <div className="sidebar"></div>
          {console.log("showfriend state:", this.state.showFriend)}
              {this.state.showFriend ? <EditFriend friend={displayFriend} /> : null } 
        </div>     


      // </div>
    );
  };
}
export default FriendCard