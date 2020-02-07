let article = {
    get: function (curPage, curType, curStatus) {
        return $.get(APIURLS.search, {
            "page": curPage,
            "type": curType,
            "state": curStatus
        });
    },
    getById: function (id) {
        return $.get(APIURLS.search, {
            "id": id,
        });
    },
    // 删除
    del: function (id) {
        return $.get(APIURLS.article_delete, {
            "id": id
        });
    },
    publish: function (fd) {
        return $.ajax({
            url: APIURLS.article_publish,
            type: "post",
            data: fd,
            processData: false,
            contentType: false
        });
    },
}