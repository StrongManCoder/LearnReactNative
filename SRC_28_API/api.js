/*
 * @Author: 70Qiang strongcoderman@gmail.com
 * @Date: 2023-11-29 17:06:54
 * @LastEditors: 70Qiang strongcoderman@gmail.com
 * @LastEditTime: 2023-11-30 14:58:39
 * @FilePath: /AwesomeProject/SRC_28_API/api.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export const getThreeDays = async ( coords) =>{
    const key = "ea49bce167d94b82a7d3e71388e77590"
    const url = `https://devapi.qweather.com/v7/weather/3d?&key=${key}&location=${coords.long},${coords.lat}`
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