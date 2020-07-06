import React from "react"
import FriendCard from "./FriendCard"

function FriendList(props){
    console.log(props.contactObjs)
    return(<div>
       { localStorage.token
       ? props.contactObjs.map(friend => {
            return <FriendCard friend={friend} key={friend.id}/>
        })
        : <h4> Please Log In to see your contacts</h4>
    }    
    </div>)
}

export default FriendList
