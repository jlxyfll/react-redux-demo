/**
 * 接收两个参数
 * state
 * action
 * 
 * reducer 要接收 action 然后做逻辑处理
 */

// 给 state 定义一个初始值，让 state 等于 初始值

const initState = {
    count: 0
}
exports.reducer = (state = initState, action) => {

    // 打印 action 
    console.log('reducer:', action)

    // 判断 action 中 type 值，
    switch (action.type) {
        case 'add_action':
            return {
                count: state.count + 1
            }

        default:
            return state
    }
};