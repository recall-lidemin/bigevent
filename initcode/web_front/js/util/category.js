let category = {
    // 获取文章类别
    get: () => {
        return $.get(APIURLS.getCategorySearch);
    },
}