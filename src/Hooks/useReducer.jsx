import React, { useReducer } from 'react'
function reducer(state,action){
    switch(action.type){
        case "Increment" :
        return {count : state.count + 1}
        case "Decrement" :
            return {count : state.count - 1}
            default : throw Error("Unknow Action")
    }
}
function UseReducer() {
    const [state,dispatch] = useReducer(reducer,{count : 0})
  return (
    <div>
        <p>{state.count}</p>
        <button onClick={()=>dispatch({type : "Increment"})}>Increment</button>
        <button onClick={()=>dispatch({type : "Decrement"})}>Decrement</button>
    </div>
  )
}

export default UseReducer