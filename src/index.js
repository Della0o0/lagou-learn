import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from "react-dom";
import App from "./App";
// import Test from "./Test";


// import './style.css'

import { StyleRoot } from "radium";
// 媒体查询不能直接设置，需要用Radium中的StyleRoot将App包裹

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StyleRoot>
      <App /> 
      {/* <Test />  */}
    </StyleRoot>
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <StyleRoot>
//       <App />
//     </StyleRoot>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
