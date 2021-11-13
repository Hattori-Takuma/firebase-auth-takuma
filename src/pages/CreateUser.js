import { React, useState } from 'react';
import {
  useHistory
} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { createUser } from '../config/firebase'

const CreateUser = () => {
  const hisotry = useHistory()
  const [email, setEmail] = useState()
  const [error, setError] = useState()
  const [password, setPassword] = useState()
  const toLogin = () => {
    hisotry.push('/')
  }
  const toMain = async () => {
    // eslint-disable-next-line
    const result2 = await createUser(email, password)
    console.log(result2, "=======")
    if (result2 === "success") {
      hisotry.push('/Main')
    }
    else if (result2 === "error") {
      console.log("ユーザー作成失敗")
      setError
        ("User作成に失敗しました。")
    }
  }


  return (
    <div>
      <h1>ユーザー作成画面</h1>
      <div>
        <TextField label="email" color="secondary" focused onChange={e => setEmail(e.target.value)} />
        <TextField label="password" variant="filled" color="success" focused onChange={e => setPassword(e.target.value)} />


      </div>
      <Stack direction="row" spacing={2}>
        <Button onClick={toLogin}>Login画面に戻る</Button>

        <Button onClick={toMain}>sign up</Button>
      </Stack>
      <div>{error}</div>




    </div>

  );
};

export default CreateUser;