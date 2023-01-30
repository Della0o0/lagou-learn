// import React, { Component } from "react";
import React from "react";
import PropTypes from 'prop-types'

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

About.defaultProps = {
  age:12121,
  // name:'元宝'
  name: 1
}

About.propTypes = {
  name:PropTypes.string.isRequired,
  name:PropTypes.number
}

export default About;
