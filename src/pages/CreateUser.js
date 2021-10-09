import React from 'react';
import {
  useHistory
} from "react-router-dom";

const CreateUser = () => {

  const hisotry = useHistory()

  const toLogin = () => {
    hisotry.push('/')
  }

  const toMain = () => {
    hisotry.push('/main')
  }

  return (
    <div>
      <h1>CreateUser画面</h1>

      <button onClick={toLogin}>Login</button>
      <button onClick={toMain}>Main</button>




    </div>

  );
};

export default CreateUser;