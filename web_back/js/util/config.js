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
    // 登陆
    getLogin: baseAddress + "/admin/login",
    // 登出
    getLogout: baseAddress + "/admin/logout",
    // 获取用户信息
    getUserInfo: baseAddress + "/admin/getuser",
    // 文章数量统计
    getArticleCount: baseAddress + "/admin/article_count",
    // 评论数量统计
    getCommentCount: baseAddress + "/admin/comment_count",
    // 获取文章类别
    getCategorySearch: baseAddress + "/admin/category_search",
    // 点击新增文章类别接口
    getAddCategory: baseAddress + "/admin/category_add",
    // 点击删除文章类别
    category_delete: baseAddress + "/admin/category_delete",
    // 编辑文章类别
    category_edit: baseAddress + "/admin/category_edit",

    // 获取文章
    search: baseAddress + "/admin/search",
    // 删除文章
    article_delete: baseAddress + "/admin/article_delete",
    // 发布文章
    article_publish: baseAddress + "/admin/article_publish",
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