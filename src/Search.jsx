import axios from "axios";
import { useState,useEffect } from "react";
function Search({item}){
const[user,setUser]=useState([])
useEffect(()=>{
    axios.get(`https://api.github.com/users/${item}`)
    .then(res=>{
        setUser(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
},[item])
 console.log(item)
 console.log(user)
    return(
        <>
        <div>hello</div>
        <h3>name{user.name}</h3>
        </>
    )
}
export default Search;