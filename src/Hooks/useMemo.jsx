import React, { useState,useMemo } from 'react'

export default function Usememo() {
    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)
    function count1(){
        setCountOne(countOne + 1)
    }
    function count2(){
        setCountTwo(countTwo - 1)
    }
    const isEven = useMemo(()=>{
        for(let i=0;i<100000000;i++){}
        return countOne%2===0
    },[countOne])
  return (
    <div>
        <button onClick={count1}>count one {countOne}</button>
        {isEven? "Even" : "Odd"}<br />
        <button onClick={count2}>count two {countTwo}</button>
    </div>
  )
}






// import React, { useDeferredValue } from 'react'
// import { useMemo } from 'react'

// export default function UseMemo({value}) {
//     const defferedInput = useDeferredValue(value)
//     const list = useMemo(()=>{
//         let data = []
//         for(let i =0; i<2000;i++){
//             data.push(defferedInput)
//         }
//         return data
//     },[defferedInput])
//   return (
//     <div>
//         <h1>Use memo</h1>
//         {
//             list.map((el,index)=>{
//                 return <div key={index}>{el}</div>
//             })
//         }
//     </div>
//   )
// }

