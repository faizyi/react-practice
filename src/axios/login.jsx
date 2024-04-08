import React, { useState } from 'react'
import { AxiosHandler } from './AxiosIntercepters';
export default function Login() {
    const [loginData,setLoginData] = useState({
        userName : "",
        password : "",
    })
    function handle(e){
        setLoginData({...loginData, [e.target.name] : e.target.value})
    }
   async function submit(e){
        e.preventDefault();
        try {
            const response = await AxiosHandler.post("/auth/login",loginData)
            console.log(response.data);
            localStorage.setItem("token", response.data.token)
        } catch (error) {
           Promise.reject(error) 
        }
    }
  return (
    <form onSubmit={submit}>
  <div className="form-group" >
    <label >userName</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
    aria-describedby="emailHelp" placeholder="Enter username" 
    name='username'
    onChange={handle}
    />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label >Password</label>
    <input type="password" className="form-control" 
    id="exampleInputPassword1" placeholder="Password"
    name='password'
    onChange={handle}
     />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
