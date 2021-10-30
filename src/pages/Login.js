import React from 'react';
import {
  useHistory
} from "react-router-dom";
import TextField from '@mui/material/TextField';


const Login = () => {

  const hisotry = useHistory()
  const toCreateUser = () => {
    hisotry.push('/CreateUser')
  }
  const toMain = () => {
    hisotry.push('/Main')
  }

  return (

    <div>
      <h1>ログイン画面</h1>
      <div>
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="filled-basic" label="password" variant="filled" />
      </div>
      <div><button onClick={toCreateUser}>アカウント作成</button></div>
      <div><button onClick={toMain}>ログイン</button></div>
    </div>
  );


};


export default Login;