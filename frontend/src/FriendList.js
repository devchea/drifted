import React from "react"
import FriendCard from "./FriendCard"
import EditFriend from './EditFriend'

// function FriendList(props){

const FriendList = (props) => {
 props.passFriend()
    // console.log('friendlist props:',props)
    return (
      <div> 
          <h3 className="ui center aligned header">Friends</h3>
          <div  style={{float: "left"}}>
          {props.friendObjs.map(friend => {
                    return (
                      <FriendCard 
                        className="ui middle aligned selection list"
                        {...friend} 
                        // handleShowfriend={this.handleShowFriend}
                        />
                    )})}
          </div>
      </div>
      );
    };

    
export default FriendList