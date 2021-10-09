import React from 'react';
import {
  useHistory
} from "react-router-dom";



const Main = () => {

  const hisotry = useHistory()

  const toLogin = () => {
    hisotry.push('/')
  }



  return (
    <div>
      <h1>Main画面</h1>

      <button onClick={toLogin}>Login</button>





    </div>

  );
};

export default Main;