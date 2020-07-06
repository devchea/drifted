import React from "react"
import FriendCard from "./FriendCard"

function FriendList(props){

    return(
        <div> {
            props.friendObjs.map(friend => {
                return (
                <div> 
                    {friend.name, friend.phone, friend.email, friend.appointment.next_appointment}
                </div>
                )
            }
            )
         }</div>
    )
}

export default FriendList
