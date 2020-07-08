import React from 'react'
import {Link} from 'react-router-dom'

function Header(){

    let logout = () => {
        localStorage.clear()
    }
    
    return(
        <div className="ui inverted red menu">
            <a className="item" href={"/"}>
            <h2 className="ui header">
            <i className="paint brush icon" />
            <div className="content">drifted</div>
            </h2>
            </a>
            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/signup" style={{color: "black"}}>Sign Up</Link>
                </div>
            </h2>
            </div>
            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/login" style={{color: "black"}}>Login</Link>
                </div>
            </h2>
            </div>
            <div className="item">
            <h2 className="ui header">
                <div className="content">
                   <button onClick={logout}>Logout</button>
                </div>
            </h2>
            </div>
            
        </div>
    )
}

export default Header