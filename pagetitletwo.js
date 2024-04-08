import React, { useEffect, useState } from 'react';
import usePageTitle from "./usePageTitle";
function Appp() {
    const [count,setCount]=useState(0);
 usePageTitle(count);
  return (
    <div >
    <button onClick={()=>setCount(count+1)}>Count : {count}</button>
    </div>
  ) 
}

export default Appp;