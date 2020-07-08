import React from "react"
import FriendCard from "./FriendCard"

// function FriendList(props){

const FriendList = (props) => {
 
    // console.log('friendlist props:',props)
    return (
        <table className="ui celled striped padded table">
          <tbody>
            <tr>
              <th>
                <h3 className="ui center aligned header">Friends</h3>
            </th>
            </tr>
            <tr>
            {props.friendObjs.map(friend => {
              return (
              <FriendCard {...friend} />
              )
            })}
            </tr>
          </tbody>
        </table>
      );
    };
export default FriendList
