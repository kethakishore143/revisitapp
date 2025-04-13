import React, { useState } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios';

import "./register.css";

const Register = () => {
    const [data, setdata] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: ''
    })

    const changeHandler = e => {
        setdata({...data,[e.target.name]: e.target.value})
    }

    const submitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:5000/register",data).then(

            res => alert(res.data)
        )
    }
  return (
    <div className='regcontainer'>
        <div>
        <h3>Register</h3>
        <center>
            <form onSubmit={submitHandler}>
                <input type='text'onChange={changeHandler} name ="username"   placeholder='User Name' autoComplete='off'/><br/>
                <input type='email'onChange={changeHandler} name ="email"   placeholder='Enter EmailID' autoComplete='off'/><br/>
                <input type='password'onChange={changeHandler} name ="password"   placeholder='Enter Password' autoComplete='off'/><br/>
                <input type='password' onChange={changeHandler} name ="confirmpassword"   placeholder='Enter Confirm Password' autoComplete='off'/><br/>
                <input type='submit' value='Register'/><br/>
                <Link to="/login">
                  <p>click to login</p>
                </Link>
            </form>
        </center>
        </div>
    </div>
  )
}

export default Register