import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    const handleAdd=()=>{
const newCount = count+1;
 setCount(newCount);
    }
    const handleReduce=()=>{
        const newCount = count-1;
         setCount(newCount);
            }
    return(
        <div style={{border:'12px solid red'}}>
            <h3>Counter : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>REduce</button>

        </div>
    )
}