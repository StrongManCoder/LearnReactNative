/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-29 17:06:54
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-12-07 17:50:33
 * @FilePath: /AwesomeProject/SRC_28_API/api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const getThreeDays = async ( coords) =>{
    const key = "ea49bce167d94b82a7d3e71388e77590"
    const url = `https://devapi.qweather.com/v7/weather/3d?&key=${key}&location=${coords.longitude},${coords.latitude}`
    try {
        const response = await (await fetch(url)).json()
    //    console.log(response)
        if(response.code === '200'){
            return response.daily
        }else{
            return[]
        }
    }catch (err){
        console.log('Error:',err)
    }
}


export const getCityInfo = async (coords) => {
    const key = "ea49bce167d94b82a7d3e71388e77590"
    
    const url = `https://geoapi.qweather.com/v2/city/lookup?&key=${key}&location=${coords.longitude},${coords.latitude}`
    try {
        const response = await (await fetch(url)).json()
    //    console.log(response)
        if(response.code === '200'){
            return response.location[0]
        }else{
            return[]
        }
    }catch (err){
        console.log('Error:',err)
    }

}

export const getIndices = async (coords,type = 0) =>{
    const key = "ea49bce167d94b82a7d3e71388e77590"
    const url = `https://devapi.qweather.com/v7/indices/1d?&key=${key}&location=${coords.longitude},${coords.latitude}&type=${type}`
    try {
        const response = await (await fetch(url)).json()
    //    console.log(response)
        if(response.code === '200'){
            return response.daily
        }else{
            return[]
        }
    }catch (err){
        console.log('Error:',err)
    }

}

export const getNewsList = async (type) =>{
    const key = "b767884b02d3a917c89e7f18c88f75dd"
    const url =  `https://v.juhe.cn/toutiao/index?key=${key}&type=${type}`
    
    try {
        const response = await (await fetch(url)).json()
       console.log(response)
        if(response.error_code === 0){
            return response.result.data
        }else{
            return[]
        }
    }catch (err){
        console.log('Error:',err)
    }
}


  