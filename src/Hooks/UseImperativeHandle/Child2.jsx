import React, { forwardRef, useImperativeHandle, useState } from 'react'

export default forwardRef (function Child2(props,ref) {
    const [count,setCount] = useState(0);
    useImperativeHandle(ref,()=>({
        count,
        setCount,
        click
    }))
    function click(){
        setCount(prev=>prev + 1)
    }
  return (
    <div>
        {count}
        <button onClick={click}>Click</button>
    </div>
  )
})
