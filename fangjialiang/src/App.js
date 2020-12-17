/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:04
 * @LastEditTime: 2020-12-17 19:27:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-cli/react-cli/fangjialiang/src/App.js
 */
// import logo from './logo.svg';
import './App.css';
import Button from "./components/button.js"
import Test from "./components/test.js"
import React,{Component} from "react";
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      val:'按钮'
    }
  }

  handle = ()=>{
    this.setState({
      val:'123'
    })
  }
  render(){
    let {val} = this.state
    return (
      <div className="App">
        <button onClick={this.handle}>点击修改按钮的值</button>
        <hr/>
        <Button val={val}></Button>
        <Test></Test>
      </div>
    )
  }
}





export default App;
