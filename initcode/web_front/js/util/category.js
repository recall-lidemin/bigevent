var category = {
    // 获取文章类别
    get: function () {
        return $.get(APIURLS.getCategorySearch);
    },
}