/*
 * @Author: your name
 * @Date: 2020-12-17 17:49:29
 * @LastEditTime: 2020-12-17 17:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-cli/react-cli/fangjialiang/src/components/button.js
 */

import React,{Component} from "react";
class Button extends Component {
    render(){
        return (
            <React.Fragment>
                <button>
                    {this.props.val}
                </button>
            </React.Fragment>
        )
    }   
}


export default Button













