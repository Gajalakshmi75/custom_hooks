import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const URL="https://jsonplaceholder.typicode.com/users";


const  App=() =>{
    const [userData,loading,isError]=useFetch(URL);

    if (isError){
        return <h3>Something was happened</h3>
    }

    if(loading){
        return <h3>Loading...</h3>
    }
  return (
    <div>
        <h1>Users</h1>
        <ul>
            {userData.map((eachUser)=>{
                return <li key={eachUser.id}>{eachUser.username}</li>
            })};
        </ul>
    </div>
  );
};

export default App;