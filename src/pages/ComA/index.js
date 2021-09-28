/**
 * ComA 发送 action 
 *  1. 导入 connect
 *  2. 利用 connect 对组件进行加强
 *     connect(要接受数组的函数, 要发送action的函数)(放入要加强的组件)
 *  3. 发送时，实现 connect 的第二个参数
 *  4. 构建一个函数 mapDispatchToProps(dispatch)
 *     dispatch: 就是用来发送给 action 的
 *  5. 在上面的函数中就可以返回一个对象 
 *     key: 方法名
 *     value: 调用 dispatch 去发送 action
 *  6. 在组件的内容 可以通过 this.props 来拿到这个方法
 */


import React from "react";

// 导入connect
import { connect } from "react-redux";

class ComA extends React.Component {

    handleClick = () => {
        console.log('ComA:', this.props);
        // 在组件内部，通过this.props拿到mapDispatchToProps方法返回的对象中的方法了
        // 发送 action
        this.props.sendAction() 
        
        /* 通过 props 拿到 mapDispatchToProps 返回的对象 sendAction  
            调用 sendAction 就会触发 key 对应的 value 即箭头函数 （）=> {} 
            就是调用 dispatch 发送了一个 action

            发送了 action 则必然会 执行 reducer ，在 reducer 中打印 action
            即 
            log('reducer:', action)
        */
    }
    render() {
        return <button onClick={this.handleClick}>点击按钮加1</button>
    }
}
// mapDispatchToProps 的参数是 dispatch
// 函数接收参数 dispatch
// dispatch 就是用来发送给 action 的
const mapDispatchToProps = dispatch => {
    // 返回一个对象  key:value 形式 value可以是函数
    return ({
        // key:value 形式
        // key sendAction
        // value 箭头函数
        sendAction: () => {
            // 利用dispatch 传递一个 action 对象
            dispatch({
                // action 对象
                // 定义一个 type 属性 必须
                type: 'add_action',
                value: {
                    key: 'wa',
                    value: 'haha',
                }
            })
        }
    })
}
// A是发送方，实现mapDispatchToProps参数
// 返回加强之后的组件
// 不需要接收，第一个参数为 null
export default connect(null, mapDispatchToProps)(ComA)