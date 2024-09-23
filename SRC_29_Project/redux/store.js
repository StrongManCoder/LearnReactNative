/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2024-01-11 16:02:59
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2024-01-11 16:18:51
 * @FilePath: /AwesomeProject/SRC_29_Project/redux/store.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {createStore,crea,applyMiddleware} from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'

const store = createStore(
    reducers,
    applyMiddleware(reduxThunk)

)

export default store