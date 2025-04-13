import React, { useState,useContext } from 'react'
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import {store} from "../App";

const Login = () => {

    const [token, setToken] = useContext(store);
    const [data, setdata] = useState({
        email: '',
        password: ''
    })

   
    const changeHandler = e => {
        setdata({...data,[e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(

            res => setToken(res.data.token)
        )

      
    }

    if(token){
           
        return <Navigate replace  to = '/allproducts'/>
    }
    
  return (
    <div>
        <h3>Login</h3>
        <center>
            <form onSubmit={submitHandler}>
                <input type='email'onChange={changeHandler} name ="email"   placeholder='Enter EmailID' autoComplete='off'/><br/>
                <input type='password'onChange={changeHandler} name ="password"   placeholder='Enter Password'/><br/>
                <input type='submit' value='Login'/><br/>
            </form>
        </center>
       <div>
       <p>already existing user</p>
        <p>email : Jhone123@gmail.com</p>
        <p>password : Jhone123</p>
       </div>
    </div>
  )
}

export default Login