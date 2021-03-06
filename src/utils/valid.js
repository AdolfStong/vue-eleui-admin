/*
 * @Author: 徐长剑
 * @Description: Utils 工具类
 * @Date: 2018-08-31 16:16:39
 * @Last Modified time: 2018-08-31 16:16:39
 */
/**
 * @method isEmail 是否为邮箱地址
 * @method isIdCard  是否为身份证号
 * @method isPhoneNum  是否为手机号
 * @method isUrl  是否为URL地址
 */
/**
 * Created by jiachenpan on 16/11/18.
 */

export default {
    isvalidUsername(str) {
      const validMap = ['admin', 'editor']
      return validMap.indexOf(str.trim()) >= 0
    },
    /* 合法uri*/
    validateURL(textval) {
      const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
      return urlregex.test(textval)
    },
    /**
     * @description 判断是否为邮箱地址
     * @param {Object} str 【必须按】 需要判断的字符串
     * @returns {Boolean} 返回布尔值
     */
    isEmail(str) {
        return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str)
    },
    /**
     * @description  判断是否为身份证号
     * @param  {String|Number} str  【必须按】 需要判断的字符串
     * @returns {Boolean} 返回布尔值
     */
    isIdCard(str) {
        return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
    },
    /**
     * @description  判断是否为手机号
     * @param  {String|Number} str  【必须按】 需要判断的字符串
     * @returns {Boolean} 返回布尔值
     */
    isPhoneNum(str) {
        return /^[1][3,4,5,7,8,9][0-9]{9}$/.test(str)
    }
}
