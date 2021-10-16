import React from 'react';
import {
  useHistory
} from "react-router-dom";


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
      <div><button onClick={toCreateUser}>CreateUserへ</button></div>
      <div><button onClick={toMain}>Mainへ</button></div>
    </div>
  );





};


export default Login;