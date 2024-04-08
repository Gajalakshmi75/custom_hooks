import React, { useEffect, useState } from 'react';

function App() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title=`count-${count}`;
    },[count]);
  return (
    <div >
    <button onClick={()=>setCount(count+1)}>Count : {count}</button>
    </div>
  ) 
}

export default App;