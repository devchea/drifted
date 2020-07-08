import React from 'react';
import friends from './friend'
import 'semantic-ui-css/semantic.min.css';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header'
import FriendList from './FriendList'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import Dashboard from './Dashboard';

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      testNew: "testnew",
      test: "test",
      form: false,
      friends: [],
      editFriend: null
    }
  }

  editFriend = (e) => {
    this.state.editFriend = e.target.value
  }
  addFriend = (e) => {
    e.preventDefault()
  
    let newFriend = {
      name: e.target[0].value,
      phone: e.target[1].value,
      email: e.target[2].value
    }

    let newArr = [...this.state.friends, newFriend]

    this.setState({
      friends: newArr
    })
  }

  getFriends = () => {
      fetch("http://localhost:3000/api/v1/friends",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          friends: data
        })
      })
  }

  render(){
    
    // const token = localStorage.token
    // console.log(token);
    return (

      <BrowserRouter>

        <div>

          <Header/>

          <Switch>

          <Route path="/login" component={(routerProps)=><Login {...routerProps} />} />

          <Route path="/signup" component={SignUp} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          {/* <Route path="/paintings/new" render = {(routeProps) =><AddForm {...routeProps} add={this.addContact} /> } /> */}
          {/* <Route path="/friends" render={() => <FriendList friendObjs={this.state.friends} />}/> */}

          if(localStorage.token !== 'undefined') {
            <Dashboard passEdit={this.editFriend} passFriends={this.getFriends} friendObjs={this.state.friends}  />
          }
          </Switch>
      </div>
      </BrowserRouter>
  )};
}

export default App;
