/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-10 13:42:29
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-23 17:28:52
 * @FilePath: /AwesomeProject/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';




console.log('hello RN !!!!')
AppRegistry.registerComponent(appName, () => App);
