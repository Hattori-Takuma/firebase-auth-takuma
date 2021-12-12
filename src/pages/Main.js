import { React, useState } from 'react';
import {
  useHistory
} from "react-router-dom";

//import { Button } from "@mui/material/Button"
//import { Button } from '@mui/material';
import Button from '@material-ui/core/Button'
import { logout, user, createDataInFirebase, readData, updateData, deleteData } from '../config/firebase'
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
  console.log(user)


  const createFunc = async () => {
    console.log('start')
    const res = await createDataInFirebase()
    console.log('fin', res)
  }

  const read = async () => {
    console.log("read")
    await readData()
  }


  const handleUpdate = async () => {
    await updateData();
  };

  const handleDelete = async () => {
    await deleteData();
  };



  return (
    <div>

      <h1>Main画面</h1>
      <h1 style={{ color: "blue" }}>ログイン成功</h1>
      {/* <div>UserName：{user.displayName}</div>
      <div>UserName：{user.displayName}</div>
      <div>Email：{user.email}</div>
      <Avatar src={user.photoURL} /> */}

      <Button onClick={toLogin}>ログアウト</Button>
      <div>{error}</div>

      <Button onClick={createFunc}>DBへ保存</Button>
      <Button onClick={read}>DB読み取り</Button>
      <Button onClick={handleUpdate}>Update</Button>
      <Button onClick={handleDelete}>Delete</Button>


    </div>


  );
};


export default Main;