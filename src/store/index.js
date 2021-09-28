import { createStore } from "redux";
// 导入自己的reducer处理函数
import { reducer } from '../reducer'
// 构建store
export default createStore(reducer)