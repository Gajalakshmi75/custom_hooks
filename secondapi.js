import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const URL="https://jsonplaceholder.typicode.com/Posts";


const  App=() =>{
    const [postData,loading,isError]=useFetch(URL);

    if (isError){
        return <h3>Something was happened</h3>
    }

    if(loading){
        return <h3>Loading...</h3>
    }
  return (
    <div>
        <h1>Posts</h1>
        <ul>
            {postData.map((eachUser)=>{
                return <li key={eachUser.id}>{eachUser.title}</li>
            })};
        </ul>
    </div>
  );
};

export default App;