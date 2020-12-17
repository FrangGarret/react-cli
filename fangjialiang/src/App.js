/*
 * @Author: your name
 * @Date: 2020-12-16 16:12:04
 * @LastEditTime: 2020-12-17 22:16:28
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
      color1:'',
      color2:''
    }
  }

  handle = ()=>{
    this.setState({
      val:'123'
    })
  }

  changeColor1=()=>{
    this.setState({
      color1:'red'
    })
  }

  changeColor2=()=>{
    this.setState({
      color2:'green'
    })
  }
  render(){
    let {val} = this.state
    return (
      <div className="App">
        <button onClick={this.handle}>点击修改按钮的值</button>
        <hr/>
        <Button val={val}></Button>
        <h2 style={{color:this.state.color1}}>第一个标题</h2>
        <Test clickH={this.changeColor1}></Test>
        <h2 style={{color:this.state.color2}}>第二个标题</h2>
        <Test clickH={this.changeColor2}></Test>
      </div>
    )
  }
}





export default App;
