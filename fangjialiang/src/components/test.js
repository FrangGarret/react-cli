/*
 * @Author: your name
 * @Date: 2020-12-17 19:22:30
 * @LastEditTime: 2020-12-17 22:16:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-cli/react-cli/fangjialiang/src/components/test.js
 */

import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
        n:1,
        m:1
    }
  }
  addHandle1 = ()=>{
    this.setState({
        n:this.state.n+1
    })
    this.setState({
        n:this.state.n+1
    })
    this.setState({
        n:this.state.n+1
    })
    console.log(this.state.n)
  }

  addHandle2 = ()=>{
    this.setState((state)=>{
        return {
            m:state.m+1
        }
    })
    this.setState((state)=>{
        return {
            m:state.m+1
        }
    })
    this.setState((state)=>{
        return {
            m:state.m+1
        }
    },()=>{
        console.log(this.state.m)
    })
    
  }


  clickOk=()=>{
    console.log(this.props.clickH)
    if(typeof this.props.clickH === 'function'){
      this.props.clickH()
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>累加1</p>
        <p>{this.state.n}</p>
        <button onClick={this.clickOk}>点击改变父组件中的值</button>

        <p>累加2</p>
        <p>{this.state.m}</p>
        <button onClick={this.addHandle2}>点击累加</button>
      </React.Fragment>
    );
  }
}

export default Test
