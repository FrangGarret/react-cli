/*
 * @Author: your name
 * @Date: 2020-12-17 11:25:47
 * @LastEditTime: 2020-12-17 17:09:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-cli/react-cli/fangjialiang/src/components/title.js
 */

import React from "react";
import PropTypes from "prop-types"; //添加数据验证类型
class Title extends React.Component {
  //  第一种defaultProps写法
  static defaultProps = {
    title: "我是方家亮",
  };

  constructor(props){
    super(props)

    //给实例上添加一个方法
    this.clickHandle4 = this.clickHandle4.bind(this)
  }



  //事件绑定
  clickHandle(e) {
    console.log(e);
  }

  clickHandle2(e) {
    console.log(e);
  }

  clickHandle3(e) {
    console.log(this);
    console.log(e);
  }

  clickHandle4(e) {
    console.log(this);
  }

  clickHandle5 = (e)=> {
    //console.log(this);
    console.log(e);
    

    const eventType = e.type; // => "click"

  setTimeout(function() {
    console.log(e.type); // => null
    console.log(eventType); // => "click"
  }, 0);

  // 不起作用，this.state.clickEvent 的值将会只包含 null
  this.setState({clickEvent: e});
  console.log(this)
  // 你仍然可以导出事件属性
  //this.setState({eventType: 'ooo'});
  }



  render() {
    let { title, list } = this.props;
    return (
      <React.Fragment>
        <div>
          <h2> {title} </h2>
        </div>
        <ul>
          {list.map((item) => {
            return (
              <li onClick={this.clickHandle} key={item}>
                {item}
              </li>
            );
          })}
        </ul>
        {/* 测试函数this指向问题 */}
        <button onClick={this.clickHandle2}>测试this指向2</button>
        <button onClick={this.clickHandle3.bind(this)}>测试this指向3</button>
        <button onClick={this.clickHandle4}>测试this指向4</button>
        <button onClick={this.clickHandle5}>测试this指向5,直接在定义的时候定义成箭头函数</button>
      </React.Fragment>
    );
  }
}

//  第二种defaultProps种写法
//  Title.defaultProps = {
//      title:'我是方家亮'
//  }

Title.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
};

export default Title;
