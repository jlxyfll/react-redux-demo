/**
 * ComB 接收 state
 *  1. 导入 connect 方法
 *  2. 利用 connect 对组件进行加强
 *  3. ComB属于是接收方，就需要实现 connect 的第一个参数
 *  4. mapStateToProps 里面的一个参数就是我们很关心 state
 *  5. 把该 state return 到组件内部，才能下组件内部获取到最新的数据 props
 *  6. ComB 能否拿到数据，关键点在于 reducer
 *  7. 只有 reducer 里面返回了新的 state 的时候，我们才能够获取到
 */
import React from "react";
// 导入 connect
import { connect } from "react-redux";

class ComB extends React.Component {
    render() {
        // console.log('ComB connect :', this.props);
        return <div>{this.props.count}</div>
    }
}


/**
 * 接收两个参数
 * state
 * 
 * @returns 
 */
const mapStateToProps = state => {
    // console.log('ComB mapStateToProps state :', state);
    return (state)
}

/**
 * react 中触发更新的三个点
 * 1、外界 props 发生变化
 * 2、组件内部调用了setState方法
 * 3、组件内部调用了forceUpdate
 */

export default connect(mapStateToProps)(ComB)