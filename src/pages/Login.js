import { React, useState } from 'react';
import {
  useHistory
} from "react-router-dom";
import TextField from '@mui/material/TextField';
import { login } from '../config/firebase';

const Login = () => {

  const hisotry = useHistory()
  // eslint-disable-next-line
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  // eslint-disable-next-line
  const [password, setPassword] = useState()
  const toCreateUser = () => {
    hisotry.push('/CreateUser')
  }

  const toMain = () => {
    const result = login(email, password)
    console.log(result, "=======")
    if (result === "success") {
      hisotry.push('Main')
    }
    else if (result === "error") {
      setError
        ("User作成に失敗しました。")
    }
  }

  return (

    <div>
      <h1>ログイン画面</h1>
      <div>
        <TextField id="outlined-basic" label="email" variant="outlined" onChange={e => setEmail(e.target.value)} />
        <TextField id="filled-basic" label="password" variant="filled" onChange={e => setPassword(e.target.value)} />
      </div>
      <div><button onClick={toCreateUser}>アカウント作成</button></div>
      <div><button onClick={toMain}>ログイン</button></div>

      <div>{error}</div>
    </div>
  );


};


export default Login;