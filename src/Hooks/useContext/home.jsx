import React, { useContext, useState } from 'react'
import countContext from './context'
import { Link } from 'react-router-dom'
export default function Home() {
    const {count,setCount} = useContext(countContext)
    function incre(){
        setCount(count + 1)
    }
    function decre(){
        setCount(count - 1)
    }
    function reset(){
        setCount(0)
    }
  return (
    <div>
        <h1>Home Page <Link to={'/about'}>About Page</Link></h1>
        <p>count : {count}</p>
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>
        <button onClick={reset}>0</button>
    </div>
  )
}
