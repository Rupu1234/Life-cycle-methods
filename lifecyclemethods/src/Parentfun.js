import React, {useEffect, useState} from 'react'
import Childfun from './Childfun';


const  Parentfun = ()=> {
 
  const[name,setName]=useState("lifemethod")
 const[show,setShow]=useState(true)

  useEffect (()=>{
    console.log("componentdidmount");
  },[])

  useEffect (()=>{
    console.log("componentupdate");
  },[name])


  return (
    <div> welcome
     {name}
     <button onClick={()=>setName("rupu")}> change name</button>
     <button onClick={()=>setShow(!show)}> show/hide </button>
     {show ? <Childfun/>:null}
    </div>
  )
}

export default Parentfun;