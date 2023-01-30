// import React, { Component } from "react";
import React from "react";

function About({name,age}){
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  )
}
// function About(props){
//   console.log('props: ', props);
//   return (
//     <div>
//       <p>{props.name}</p>
//       <p>{props.age}</p>
//     </div>
//   )
// }

export default About;
