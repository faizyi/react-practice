import React, { useContext } from 'react'
import countContext from './context'
import { Link } from 'react-router-dom'
export default function About() {
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
        <h1>About Page <Link to={'/'}>Home Page</Link></h1>
        <p>count : {count}</p>
        <button onClick={incre}>+</button>
        <button onClick={decre}>-</button>
        <button onClick={reset}>0</button>
    </div>
  )
}
