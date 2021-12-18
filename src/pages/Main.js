import { React, useState } from 'react';
import {
  useHistory, useParams
} from "react-router-dom";

//import { Button } from "@mui/material/Button"
//import { Button } from '@mui/material';
import Button from '@material-ui/core/Button'
import TextField from '@mui/material/TextField';
import { logout, user, createDataInFirebase, readData, updateData, deleteData, deletUserData } from '../config/firebase'
import Avatar from '@mui/material/Avatar';
import { getFirestore, addDoc, collection } from 'firebase/firestore'



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
  const params = useParams();
  console.log(params)

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
  const handleUserData = async () => {
    await deletUserData();
  }




  const [first, setFirst] = useState()
  const [last, setLast] = useState()
  const [born, setBorn] = useState()

  const db = getFirestore();


  const myData = async () => {
    let returnObj = ""
    console.log('firebase start')
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: { first },
        last: { last },
        born: { born }
      });
      returnObj = "test1"
      console.log("Document written with ID:", docRef.id);
    } catch (e) {
      returnObj = "test2"
      console.errror("Error adding document: ", e);
    }
  }

  return (
    <div>

      <h1>Main画面</h1>

      <h1 style={{ color: "blue" }}>ログイン成功</h1>
      <div>UserName：{params.displayName}</div>
      {/* <div>UserName：{user.displayName}</div>
      <div>Email：{user.email}</div>
      <Avatar src={user.photoURL} />  */}


      <div>{error}</div>


      <div >
        <TextField label="first" variant="filled" focused onChange={e => setFirst(e.target.value)} />
        <TextField label="last" variant="filled" focused onChange={e => setLast(e.target.value)} />
        <TextField label="born" variant="filled" focused onChange={e => setBorn(e.target.value)} />
      </div>



      <Button variant="outlined" color="success" onClick={myData}>
        MY DATA
      </Button>


      <Button variant="outlined" color="success" onClick={createFunc}>
        DBへ保存
      </Button>


      <Button variant="outlined" color="success" onClick={read}>
        DB読み取り
      </Button>


      <Button variant="outlined" color="success" onClick={handleUpdate}>
        Update
      </Button>

      <Button variant="contained" style={{ color: "red" }} onClick={handleUserData}>
        usersDelete
      </Button>

      <Button variant="contained" style={{ color: "red" }} onClick={handleDelete}>
        フィールドDelete
      </Button>

      <div>      <Button onClick={toLogin}>ログアウト</Button>
      </div>

    </div>


  );
};


export default Main;