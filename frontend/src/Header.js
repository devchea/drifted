import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header(){
    let logout = () => {
        localStorage.clear()
    }
    
    return(
        <div className="ui inverted blue menu">
            <img style={{width: "50px", height: "50px"}} className="boat" src="https://banner2.cleanpng.com/20190725/htx/kisspng-boat-icon-sailboat-icon-sailing-icon-5d3a0b956edf01.8094902615640851414541.jpg"/>
            <div style={{fontSize: "xx-large", marginTop: "15px", marginLeft: "15px"}}className="app-name" >drifted</div>
        
           

            <div style={{float: "right"}} className="item">
            <h2  className="ui header">
                <div className="content">
                    <Link to="/signup" style={{fontWeight: "lighter", color: "black"}}>Sign Up</Link>
                </div>
            </h2>
            </div>
          
            <div style={{float: "right"}} className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/login" style={{color: "black"}}>Login</Link>
                </div>
            </h2>
            </div>
            <div style={{float: "right"}} className="item">
            <h2 className="ui header">
                <div >
                   <button className="ui button" onClick={logout}> Logout</button>
                </div>
            </h2>
            </div>
            
        </div>
    )
}

export default Header