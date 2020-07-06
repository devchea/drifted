import React from 'react'
import {Link} from 'react-router-dom'


class FriendForm extends React.Component{

    goHome = () => {
        this.props.history.push("/friends")
    }

    render(){
    return(
        <div>
            <form onSubmit={(e) => {
                this.props.add(e)
                this.goHome()
                }}>
                <input type='text' placeholder='Friend Name'/>
                <input type='text' placeholder='Friend Image URL'/>
                <input type='text' placeholder='Artist Name'/>
                <input type='submit' value='Add Friend'/>
            </form>
            <Link to="/contacts">
                HOME
            </Link>
        </div>
    )}
}

export default FriendForm