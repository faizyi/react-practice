import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
export default function Login() {
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
      username : '',
      password : '',
    })
    const handle = (e)=>{
      setFormData({...formData, [e.target.name] : e.target.value})
    }
    const handleSubmit= async(e)=>{
        e.preventDefault();
        try {
          const response = await axios.post("https://dummyjson.com/auth/login",formData)
          console.log("Respone",response);
          // if(!response.ok){
          //   throw new Error(`Login failed with status: ${response.status}`);
          // }
          localStorage.setItem("Token", response.data.token)
          navigate('/allproducts')
        } catch (error) {
          console.log("Error", error);
        }
        // try {
        //     const response = await fetch('https://dummyjson.com/auth/login', {
        //       method: 'POST',
        //       headers: { 'Content-Type': 'application/json' },
        //       body: JSON.stringify({
        //         username: email,
        //         password: password
        //       })
        //     });
            
        //     if (!response.ok) {
        //         throw new Error(`Login failed with status: ${response.status}`);
        //     }
      
        //     const data = await response.json();
        //     localStorage.setItem('token', data.token);
        //     navigate('/allproducts')
        //     console.log('Login successful');
        //   } catch (error) {
        //     console.error('Error logging in:', error);
        //   }
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='username' 
        value={formData.username}
        onChange={handle}
        />
        <input type="password" name='password' placeholder='Password' 
        value={formData.password}
        onChange={handle}
        />
        <button type='submit'>Login</button>
        </form>
    </div>
  )
}
