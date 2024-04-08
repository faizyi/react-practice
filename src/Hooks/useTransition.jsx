import React, { useDeferredValue, useState, useTransition } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
export default function UseTransition() {
    const [isPending, startTransition] = useTransition()
    const [value,setValue] = useState('')
    const defferedInput = useDeferredValue(value)
    const [loading,setLoading] = useState("Loading....")
    const [value2,setValue2] = useState('')
    const [list,setList] = useState([])
    const handle=(e)=>{
        setValue(e.target.value)
        startTransition(()=>{
            let data = []
            for(let i =0; i<2000;i++){
                data.push(defferedInput)
            }
            setList(data)
        })
    }
    // const handle2=(e)=>{
    //     setValue2(e.target.value)
    // }
  return (
    <div className='container'>
        <h1>UseTransition</h1>
        <input onChange={handle} type="text" name="" id="" value={value} />
        {/* <input onChange={handle2} type="text" name="" id="" value={value2} /> */}
        {
            isPending ? loading : (
                // <UseMemo value = {value2}/>
                list.map((el,index)=>{
                    return <div key={index}>{el}</div>
                })
            )
        }
    </div>
  )
}
