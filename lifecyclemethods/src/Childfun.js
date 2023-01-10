import React from 'react'

function childfun() {
  const intervel=setInterval(()=>{
      console.log("component child mount");
  },1000);
  
  return(()=> {
   console.log("component will unmount");
      clearInterval(intervel);
})

return(
  <div>hello</div>
)
}
export default childfun;