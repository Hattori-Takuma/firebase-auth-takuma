import { React, useState } from 'react';
import {
  useHistory
} from "react-router-dom";
import TextField from '@mui/material/TextField';
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
        <TextField id="outlined-basic" label="email" variant="outlined" onChange={e => setEmail(e.target.value)} />
        <TextField id="filled-basic" label="password" variant="filled" onChange={e => setPassword(e.target.value)} />
      </div>

      <button onClick={toLogin}>Login画面に戻る</button><br />
      <button onClick={toMain}>ログイン</button>
      <div>{error}</div>




    </div>

  );
};

export default CreateUser;