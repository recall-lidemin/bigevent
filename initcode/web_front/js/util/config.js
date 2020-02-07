/** 
 * 
 * 接口配置
 * author：LiDemin
 * Time:2020.1.16
 * 
 */

// 基地址
const baseAddress = "http://192.168.0.110:8000";
// var baseAddress = "http://118.190.211.78:8000/api/";

// 封装接口地址对象
const APIURLS = {
    // 获取文章类别
    getCategorySearch: baseAddress + "/admin/category_search",
    // 获取文章
    search: baseAddress + "/search",
    // 获取文章
    article_get: baseAddress + '/search',
    // 获取一周热门排行
    rank: baseAddress + '/rank',
    // 最新资讯
    lastest: baseAddress + '/lastest',
    // 最新评论
    get_latest_comment: baseAddress + '/get_latest_comment',
    // 获取文章详情
    get_article: baseAddress + '/article',
    // 发表评论
    post_comment: baseAddress + '/post_comment',
    // 获取评论列表
    get_comments: baseAddress + '/get_comments'
}

function makeConst(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] === 'object') {
            makeConst(obj[key])
        }
    })
}
// 冻结接口地址
makeConst(APIURLS)