import { useState } from "react";


const Counter =()=>{
    const [count, setCount]= useState(0)
    console.log(count);

    const incrementation =()=>{
        setCount((prev)=> prev+1)
    }

    const minus = ()=>{
        if(count > 0){
            setCount((prev)=> prev-1)
        }
    }

    return(
        <div>
            <center>
                <h1><button onClick={incrementation}>+</button></h1>
                <h1>{count}</h1>
                <h1><button onClick={minus}>-</button></h1>
            </center>
        </div>
    )
}
export default Counter 

// import React from 'react'
// import ChangeUserName from './ChangeUserName'

// const Counter = (props) => {
//   return (
//     <div>
//        <ChangeUserName onSave={props.onSave}/>
//     </div>
//   )
// }
// export default Counter