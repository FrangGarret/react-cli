/*
 * @Author: your name
 * @Date: 2020-12-17 19:22:30
 * @LastEditTime: 2020-12-17 19:54:28
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

  render() {
    return (
      <React.Fragment>
        <p>累加1</p>
        <p>{this.state.n}</p>
        <button onClick={this.addHandle1}>点击累加</button>

        <p>累加2</p>
        <p>{this.state.m}</p>
        <button onClick={this.addHandle2}>点击累加</button>
      </React.Fragment>
    );
  }
}

export default Test
