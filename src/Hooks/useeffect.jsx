import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Useeffect() {
  const [count,setCount] = useState(0)
  const [color,setColor] = useState({
    color : "Black"
  })
    // const [seconds,setSeconds] = useState(0);
    // useEffect(()=>{
    //     const interval = setInterval(()=>{
    //         setSeconds(prevSeconds => prevSeconds + 1)
    //     },2000)
    //     return ()=>clearInterval(interval)
    // },[])
    // const click =()=>{
    //   setCount(prev => prev + 1)
    //   colors.forEach((color)=>{
    //     setColor({
    //       color : color
    //     })
    //   })
    // }
    // useEffect(()=>{
    //   console.log(count);
    // },[count])
    // useEffect(()=>{
    //   console.log("Ok");
    //   return ()=>{}
    // },[])
  return (
    <div>
      <p style={color} >{count}</p>
      {/* <button onClick={click}>Start</button> */}
        {/* {seconds} */}
    </div>
  )
}
