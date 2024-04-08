import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
    const cartValue = useSelector(state=>state.counter.value)
  return (
    <div>
        <h1>Cart {cartValue}</h1>
    </div>
  )
}
