import React, { useContext } from 'react'
import { GlobalContext } from '../context/context'
export default function Home() {
    const {user} = useContext(GlobalContext)
  return (
    <div>home
        <p>{user}</p>
    </div>
  )
}
