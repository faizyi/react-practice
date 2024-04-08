import React, { useEffect, useRef, useState } from 'react'
import Child2 from './Child2'

export default function Child1() {
    const ref = useRef();
    const [show,setShow] = useState();
  return (
    <div>
        <Child2 ref={ref}/>
        <button onClick={()=>ref.current.click()}>Child1 Click</button>
    </div>
  )
}
