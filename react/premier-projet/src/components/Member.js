import React, {  Fragment }from "react"

function Member ({ name, children, age }) {
  return (
    <Fragment>
    <h2 style = {{backgroundColor: age < 10 ?  "white" : "cyan",
     color: age < 10 ?  "black" : "white"}}>  {name} : {age} </h2>
    {children ?   <p>{children}</p> : <Fragment />}
    </Fragment>
  )
}
export default Member
