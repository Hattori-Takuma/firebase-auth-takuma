import React from 'react';
import {
  useHistory
} from "react-router-dom";

//import { Button } from "@mui/material/Button"
//import { Button } from '@mui/material';
import Button from '@material-ui/core/Button'






const Main = () => {

  const hisotry = useHistory()
  const toLogin = () => {
    hisotry.push('/')
  }

  return (
    <div>
      <h1>Main画面</h1>

      <Button onClick={toLogin}>Login</Button>


    </div>


  );
};

export default Main;

