import React, { useState } from 'react'
import './style.css'
import Swal from 'sweetalert2'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Signup() {
    // const {register,handleSubmit,formSate:{errors}} = useForm()
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        fName : "",
        lName : "",
        email : "",
        password : "",
        cPassword : "",
    })
    const [errorVisible, setErrorVisible] = useState({
        display : "none"
      });
    const [errors,setErrors] = useState({})
    const handleData = (e)=>{
        setFormData({...formData, [e.target.name] : e.target.value })
    }
    const Submit = async(e)=>{
        e.preventDefault();
        const formErrors = {};
        
            if(formData.password.length < 6){
                setErrorVisible({
                    display : "block"
                })
                formErrors.passLength = "Password must be 6"
            }
            else if(formData.cPassword !== formData.password){
                setErrorVisible({
                    display : "block"
                })
                formErrors.confirmPass = "password not match"
                
            } else{
                Swal.fire("Registration Successful");
                console.log(formData);
            }
            setErrors(formErrors)
        // if(formData.fName == ""){
        //    formErrors.firstName = 'First Name is required';
        // }
        // if(formData.lName == ""){
        //    formErrors.lastName = 'last Name is required';
        // }
        // if(formData.email == ""){
        //    formErrors.Email = 'email is required';
        // }
        // if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
        //    formErrors.Email = "Invalid Email"
        // }
        // if(formData.password == "" ){
        //    formErrors.Password = 'password is required';
        // }else if(formData.password.length < 6){
        //    formErrors.Password = "password must be 6 charac"
        // }
        // if(formData.cPassword !== formData.password){
        //    formErrors.confirmPass = "password not match"
        // }
        // setErrors(formErrors)
        // if(Object.keys(formErrors).length === 0){
        //     Swal.fire("Registration Successful");
        // }
    }
  return (
    <div className="container">
        <h2>Sign Up</h2>
        <form id="signup-form" onSubmit={Submit}>
            <div className="form-group">
                <label>First Name</label>
                <input type="text" id="username" 
                name="fName"
                value={formData.fName}
                onChange={handleData}
                required
                />
                {errors.firstName && <div className="error" id="username-error">{errors.firstName}</div>}
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" id="username" 
                name="lName"  
                value={formData.lName}
                onChange={handleData}
                required
                />
                {errors.lastName && <div className="error" id="username-error">{errors.lastName}</div>}
            </div>
            <div className="form-group">
                <label >Email</label>
                <input type="email" id="email" 
                name="email" 
                value={formData.email}
                onChange={handleData}
                required
                />
                {errors.Email && <div className="error" id="username-error">{errors.Email}</div>}
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" id="password" 
                name="password" 
                value={formData.password}
                onChange={handleData}
                required
                onInput={()=>setErrorVisible({display : formData.password.length > 5 ? "block" : "none"})}
                />
                {errors.passLength && <div style={errorVisible} className="error" id="username-error">{errors.passLength}</div>}
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" id="password"
                 name="cPassword" 
                 value={formData.cPassword}
                 onChange={handleData}
                 required
                 onInput={()=>setErrorVisible({display : formData.password == formData.cPasswordpassword ? 
                 "block" : "none"})}
                 />
                {errors.confirmPass && <div style={errorVisible} className="error" id="username-error">{errors.confirmPass}</div>}
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}
