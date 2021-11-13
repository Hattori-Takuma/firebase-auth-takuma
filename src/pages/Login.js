import { React, useState } from 'react';
import {
  useHistory
} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
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

  const toMain = async () => {
    const result = await login(email, password)
    console.log(result, "=======")
    if (result === "success") {
      hisotry.push('/Main')
    }
    else if (result === "error") {
      setError
        ("ログインに失敗しました。")
    }
  }

  return (

    <div>
      <h1>ログイン画面</h1>
      <div>
        <TextField label="email" color="secondary" focused onChange={e => setEmail(e.target.value)} />
        <TextField label="password" variant="filled" color="success" focused onChange={e => setPassword(e.target.value)} />
      </div>

      <Stack direction="row" spacing={2}>
        <Button onClick={toCreateUser}>アカウント作成</Button>
        <Button onClick={toMain}>ログイン</Button>
      </Stack>

      <div>{error}</div>
    </div>
  );


};


export default Login;