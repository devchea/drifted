import React from 'react';
import contacts from './contact'
import 'semantic-ui-css/semantic.min.css';
import Header from './Header'
import FriendList from './FriendList'
// import FriendForm from './FriendForm'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'



class App extends React.Component{

  constructor(){
    super()
    this.state = {
      testNew: "testnew",
      test: "test",
      form: false,
      contacts: []
    }
  }

  addPainting = (e) => {
    e.preventDefault()
  
    let newPainting = {
      title: e.target[0].value,
      image: e.target[1].value,
      artist: {
        name: e.target[2].value
      }
    }

    let newArr = [...this.state.paintings, newPainting]

    this.setState({
      paintings: newArr
    })
  }

  getPaintings = () => {
      fetch("http://localhost:3000/api/v1/paintings",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(console.log)
  }

  render(){

    return (
   
      <BrowserRouter>
    <div>
        <Header/>
        <button onClick={this.getPaintings}>Show Contacts</button>
        <Switch>

        <Route path="/login" component={Login} />

        <Route path="/signup" component={SignUp} />

        {/* <Route path="/paintings/new" render = {(routeProps) =><AddForm {...routeProps} add={this.addContact} /> } /> */}

        <Route path="/paintings" render={() => <FriendList contactObjs={this.state.contacts} />}/>
    
        </Switch>
        

    </div>
    </BrowserRouter>
  )};
}

export default App;
