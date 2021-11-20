import { React, useState } from 'react';
import {
  useHistory
} from "react-router-dom";


//import { Button } from "@mui/material/Button"
//import { Button } from '@mui/material';
import Button from '@material-ui/core/Button'
import { logout, user } from '../config/firebase'
import Avatar from '@mui/material/Avatar';







const Main = () => {

  const hisotry = useHistory()

  const [error, setError] = useState()

  const toLogin = async () => {
    const result3 = await logout()
    console.log(result3, "=======")
    if (result3 === "success") {
      console.log("logout")
      hisotry.push('/')
    }
    else if (result3 === "error") {
      console.log("ユーザー作成失敗")
      setError
        ("User作成に失敗しました。")
    }
  }





  return (
    <div>
      <h1>Main画面</h1>
      <div>UserName：{user.displayName}</div>
      <div>Email：{user.email}</div>
      <Avatar alt="Remy Sharp" src={user.photoURL} />



      <Button onClick={toLogin}>ログアウト</Button>


      <div>{error}</div>
    </div>


  );
};

export default Main;

