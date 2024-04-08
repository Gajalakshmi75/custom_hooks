import React,{useState,useEffect} from 'react';

function useFetch(URL) {
    const [Data,setData]=useState([]);
    const[loading,setLoading]=useState(false);
    const[isError,setIserror]=useState(false);

    const makeAPIcall= async () =>{
        setLoading(true)
        setIserror(false);
        try{
            const response= await fetch(URL);
            const comingdata= await response.json();
            setData(comingdata);
            setLoading(false);
        }catch(error){
            setLoading(false);
            setIserror(true);
        }
    };

    useEffect(()=>{
        makeAPIcall(URL);
    },[]);
    return [Data,loading,isError];
}

export default useFetch;