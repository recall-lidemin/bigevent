/** 
 * 
 * 接口配置
 * author：LiDemin
 * Time:2020.1.16
 * 
 */

// 基地址
var baseAddress = "http://192.168.172.66:8000";

// 封装接口地址对象
var APIURLS = {
    // 登陆
    getLogin: baseAddress + "/admin/login",
    // 登出
    getLogout: baseAddress + "/admin/logout",
    // 获取用户信息
    getUserInfo: baseAddress + "/admin/getuser",

}