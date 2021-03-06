import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';

export default class EditFriend extends React.Component {
render(){

    console.log("props inside EditFriend", this.props)
    const friend = this.props.friend

    return (
    <div>
                <form className="ui form">
        <div className="field">
            <label>Edit </label>
            <input type="text" name="name" placeholder={friend.name}/>
        </div>
        <div className="field">
            <input type="text" name="phone" placeholder={friend.phone}/>

        </div>
        <div className="field">
            <input type="text" name="email" placeholder={friend.email}/>
        </div>
        <div className="field">
            <input type="number" name="integer" placeholder={friend.recurrence_integer}/>
            <input type="text" name="unit" placeholder={friend.recurrence_unit}/>

        </div>
        <button className="ui button" type="submit">Save</button>
        </form>
    </div>
    )
}
}


// {const BootstrapInput = withStyles((theme) => ({ */}
//     root: {
//       'label + &': {
//         marginTop: theme.spacing(3),
//       },
//     },
//     input: {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: theme.palette.background.paper,
//       border: '1px solid #ced4da',
//       fontSize: 16,
//       padding: '10px 26px 10px 12px',
//       transition: theme.transitions.create(['border-color', 'box-shadow']),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         '-apple-system',
//         'BlinkMacSystemFont',
//         '"Segoe UI"',
//         'Roboto',
//         '"Helvetica Neue"',
//         'Arial',
//         'sans-serif',
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"',
//       ].join(','),
//       '&:focus': {
//         borderRadius: 4,
//         borderColor: '#80bdff',
//         boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//       },
//     },
//   }))(InputBase);
  
//   const useStyles = makeStyles((theme) => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//   }));
  
  
//   export default function CustomizedSelects() {
//     const classes = useStyles();
//     const [name, setName] = React.useState('');
//     const [phone, setPhone] = React.useState('');
//     const [email, setEmail] = React.useState('');
//     const [recInt, setRecInt] = React.useState('');
//     const [recUnit, setRecUnit] = React.useState('');
//     // const handleChange = (event) => {
//     //   setName(event.target.value);
//     // };
  
//     const handleSubmit = (name, phone, email, recInt, recUnit) => {
//       // console.log('Name:', name)
//       // console.log('Phone:', phone)
//       // console.log('Email:', email)
//       // console.log('recint:', recInt)
//       // console.log('recunit:', recUnit)
//       fetch('http://localhost:3000/api/v1/friends',
//         {method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           name: name,
//           phone: phone,
//           email: email,
//           recurrence_integer: recInt,
//           recurrence_unit: recUnit
//         }
//         )}
//       )
//         .then(res => res.json())
//         .then(json => {
//           console.log(json)
  
//         })
//     }
  
//     return (
//       // console.log('Name:', name),
//       // console.log('Phone:', phone),
//       // console.log('Email:', email),
//       // console.log('recint:', recInt),
//       // console.log('recunit:', recUnit),
  
  
//       <div>
//         <FormControl className={classes.margin}>
//           <InputLabel htmlFor="demo-customized-textbox">Name</InputLabel>
//           <BootstrapInput id="demo-customized-textbox" onChange={(e) => setName(e.target.value)}/>
//         </FormControl>
  
//         <FormControl className={classes.margin}>
//           <InputLabel htmlFor="demo-customized-textbox">Phone Number</InputLabel>
//           <BootstrapInput id="demo-customized-textbox" onChange={(e) => setPhone(e.target.value)}/>
//         </FormControl>
  
//         <FormControl className={classes.margin}>
//           <InputLabel id = "demo-customized-textbox" >Email</InputLabel>
//           <BootstrapInput id="demo-customized-textbox" onChange={(e) => setEmail(e.target.value)}/>
//         </FormControl>
  
//         <FormControl className={classes.margin}>
//           <InputLabel id = "demo-customized-textbox" >Number</InputLabel>
//           <BootstrapInput id="demo-customized-textbox" type='number' onChange={(e) => setRecInt(e.target.value)}/>
//         </FormControl>
  
  
//         <FormControl className={classes.margin}>
//           <InputLabel htmlFor="demo-customized-select-native">Unit</InputLabel>
//           <NativeSelect
//             id="demo-customized-select-native"
//             onChange={(e) => setRecUnit(e.target.value)}
//             input={<BootstrapInput />}
//           >
//             <option aria-label="None" value="" />
//             <option>Day(s)</option>
//             <option>Week(s)</option>
//             <option>Month(s)</option>
//           </NativeSelect>
  
//         </FormControl>
  
//         <div> 
//         <Button className="ui teal button" style={{ margin: "auto", width: "50%"}} color="primary" onClick={() => handleSubmit(name, phone, email, recInt, recUnit)}>Add Friend</Button>
  
//           </div>
//       </div>
//     );
//   }