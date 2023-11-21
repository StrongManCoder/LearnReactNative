import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'react-native'

class Storage{

    /**
     * 添加数据
     * @param {string} key 
     * @param {Mixed} value 
     * @returns 
     */

    static set(key,value){
        return AsyncStorage.setItem(key,JSON.stringify(value))
    }

    /**
     * 获取数据
     * @param {*} key 
     * @returns 
     */
    static get(key){
        return AsyncStorage.getItem(key).then(value =>{
            if(value && value != ''){
                const jsonValue = JSON.parse(value)
                return jsonValue
            }
        }).catch(() => null)
    }

    static update(key,newValue){
        return AsyncStorage.getItem(key).then(oldValue =>{
            newValue = typeof newValue === 'string' ? newValue : Object.assign({},oldValue,newValue)
       
            return AsyncStorage.setItem(key,JSON.stringify(newValue))
        })
    }


    static delete(key){
        return AsyncStorage.removeItem(key)
    }


    /**
     * 
     * @returns 清空所有数据
     */
    static clear(){
        return AsyncStorage.clear()
    }

}

export default Storage