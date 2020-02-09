let category = {
    // 获取文章类别
    get: () => {
        return $.get(APIURLS.getCategorySearch);
    },
    // 新增文章类别
    add: (name, slug) => {
        return $.post(APIURLS.getAddCategory, {
            name,
            slug
        });
    },
    // 删除文章类别
    del: id => {
        return $.post(APIURLS.category_delete, {
            id,
        });
    },
    // 编辑文章类别
    edit: (id, name, slug) => {
        return $.post(APIURLS.category_edit, {
            id,
            name,
            slug
        });
    },
}