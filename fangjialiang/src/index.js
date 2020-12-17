/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:04
 * @LastEditTime: 2020-12-17 18:03:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-cli/react-cli/fangjialiang/src/index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import reportWebVitals from "./reportWebVitals";

// import Title from "./components/title.js";


// class Test extends React.Component {
//   render() {
//     return (
//       <h2>
//         <span>{this.props.title}</span>
//       </h2>
//     );
//   }
// }

// let data = [1, 2, 3, 4, 5, 6, 7];
// let lis = data.map((item) => {
  
//   return <li key={item}>{item}</li>;
// });

// console.log(lis);
// let titleValue = "我是title";

// let h = (
//   <React.Fragment>
//     <h2 title={titleValue}>
//       <ul>{lis}</ul>
//     </h2>
//   </React.Fragment>
// );

// let list = ['方家亮','孙丽萍']






ReactDOM.render(
  <React.StrictMode>
    {/* {h} */}
    {/* <Test title="我是标题" />
    <Title title={'我是孙丽萍'} list={list}></Title> */}
    <App />
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
