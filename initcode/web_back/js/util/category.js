var category = {
    // 获取文章类别
    get: function () {
        return $.get(APIURLS.getCategorySearch);
    },
    // 新增文章类别
    add: function (name, slug) {
        return $.post(APIURLS.getAddCategory, {
            "name": name,
            "slug": slug
        });
    },
    // 删除文章类别
    del: function (id) {
        return $.post(APIURLS.category_delete, {
            "id": id,
        });
    },
}