import React, { useState, useMemo } from 'react'
import User from './User';

function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Ahmet");

    console.log("Counter component re-render");


    const userData = useMemo(() => {
        return {
            id:1,
            name,
        }
    }, [name])

  return (
    <div>

        <User data={userData}/>

        <hr/>

        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>Arttır</button>

        <hr/>

        <button onClick={() => setName(name === "Ahmet" ? "Mehmet" : "Ahmet") }>Set Name</button>
    </div>
  )
}

export default Counter