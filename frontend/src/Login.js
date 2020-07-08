import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import React, { Component } from 'react';
import { Redirect } from 'react-router';
import {BrowserRouter, Route, Switch} from 'react-router-dom'






const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));




export default function SignIn(props) {
  // console.log(props)
  const classes = useStyles();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setError] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(userInfo => {
        // console.log('errors', errors)
        // console.log('userinfo', userInfo)
        // console.log('setUsername', username)
        localStorage.token = userInfo.token
        // console.log('lstoken:', localStorage.token)
        if (localStorage.token !== 'undefined'){
          props.history.push('dashboard')
          // 'route to dashboard here'
          // <Redirect to='/Dashboard'/>
        }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            input name="username"
            onChange={(e) => setUsername(e.target.value)}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            input name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="./SignUp" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
// import React, {Component} from 'react'

// class Login extends Component{
//     handleChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     logIn = (e) => {
//         e.preventDefault()

//         fetch("http://localhost:3000/api/v1/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 username: this.state.username,
//                 password: this.state.password
//             })
//         })
//         .then(res =>  res.json())
//         .then(userInfo => {
//             localStorage.token = userInfo.token
//         })
//     }
   
//     render(){
//         return(
//         <div>
//             <h2>LogIn</h2>
//             <form onSubmit={(e) => this.logIn(e)}>
//             <label>UserName</label>
//             <input name="username" type="text" onChange={(e) => this.handleChange(e)}/>
//             <label>Password</label>
//             <input name="password" type="password" onChange={(e) => this.handleChange(e)}/>
//             <input type="submit"/>
//             </form>
//         </div>
//         )
//     }
// }


// export default Login


