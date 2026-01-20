import { useState,useEffect } from "react";

const useFetch=(url)=>{
     const [data,setData] =useState();
  const [dummy,setDummy]=useState(false);
  const [error,setError]=useState(null);
  useEffect(()=>{
    setTimeout(()=>{
   
   
    fetch(url)//api fetching
    .then(response=>{
if(!response.ok){//if api not fetshed ot give custom error
throw Error("Could't retrive data")
}
      console.log(response)
     return response.json();//returning value ad json

    })
    .then (data=>setData(data))//adding data to setCourse objerct
    .catch((error)=>{
      console.log(error.message)
      setError(error.message)//handling error if api is not fetched

    })
    },1000);
},[]);
return [data,dummy,error]
}
export default useFetch