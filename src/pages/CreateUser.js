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
  const toMain = () => {

    // eslint-disable-next-line
    {

      createUser(email, password)
      if ("aaa") {
        hisotry.push('Main')
      }
      else if ("bbb") {
        setError
          ("User作成に失敗しました。")
      }
    }

  }

  return (
    <div>
      <h1>CreateUser画面</h1>
      <div>
        <TextField id="outlined-basic" label="email" variant="outlined" onChange={e => setEmail(e.target.value)} />
        <TextField id="filled-basic" label="password" variant="filled" onChange={e => setPassword(e.target.value)} />
      </div>

      <button onClick={toLogin}>Login画面に戻る</button><br />
      <button onClick={toMain}>ログイン</button>
      {error}




    </div>

  );
};

export default CreateUser;