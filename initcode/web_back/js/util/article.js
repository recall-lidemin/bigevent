let article = {
    get: (curPage, curType, curStatus) => {
        return $.get(APIURLS.search, {
            "page": curPage,
            "type": curType,
            "state": curStatus
        });
    },
    getById: id => {
        return $.get(APIURLS.search, {
            id
        });
    },
    // 删除
    del: id => {
        return $.get(APIURLS.article_delete, {
            id
        });
    },
    publish: fd => {
        return $.ajax({
            url: APIURLS.article_publish,
            type: "post",
            data: fd,
            processData: false,
            contentType: false
        });
    },
}