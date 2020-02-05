/** 
 * 
 * 接口配置
 * author：LiDemin
 * Time:2020.1.16
 * 
 */

// 基地址
var baseAddress = "http://192.168.0.110:8000";
// var baseAddress = "http://118.190.211.78:8000/api/";

// 封装接口地址对象
var APIURLS = {
    // 获取文章类别
    getCategorySearch: baseAddress + "/admin/category_search",
    // 获取文章
    search: baseAddress + "/admin/search",
    // 获取文章
    article_get: baseAddress + '/search',
    // 获取一周热门排行
    rank: baseAddress + '/rank',
    // 最新资讯
    lastest: baseAddress + '/lastest'
}