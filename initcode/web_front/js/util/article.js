var article = {
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
    getFocuse: function () {
        // 因为只要5条，所以直接设置
        return $.get(APIURLS.article_get, {
            perpage: 5
        })
    }
}