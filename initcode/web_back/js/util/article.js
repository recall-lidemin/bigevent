var article = {
    get: function (curPage, curType, curStatus) {
        return $.get(APIURLS.search, {
            "page": curPage,
            "type": curType,
            "state": curStatus
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