import { useState,useEffect } from "react";
import Search from "./Search";
function New(){
 const[name,setName]=useState("")
 const[debouncedName,SetDebouncedName]=useState("")
 const onchangehandler=(e)=>{
    setName(e.target.value)
 }
 useEffect(()=>{
  const delayDebounce= setTimeout(()=>{
   SetDebouncedName(name)
  },2000)

  return ()=>clearTimeout(delayDebounce)
 },[name])
 
    return(
        <>
        <div>Search Github Users</div>
        <input type="text" placeholder="type here"
        value={name} onChange={onchangehandler}/>
        <Search item={debouncedName}></Search>
        </>
    )
}
export default New;