import React, { useEffect, useState } from 'react'

const AboutInfo = (props) => {
const Count1=useState(0);
const Count2=useState(1);

useEffect(()=>{
  const timer= setInterval(()=>{
        console.log("Ashok is Owsome");
     },1000)

     return()=>{
      clearInterval(timer)
console.log("unmounting");
     }
})

  return (
    <div className='aboutCard'>
        <h1>{props.name}</h1>
        <h3>{props.company}</h3>
        <h4>{props.place}</h4>
        <h5>Count1: {Count1}</h5>
        <h5>Count2: {Count2}</h5>
    </div>
  )
}

export default AboutInfo;