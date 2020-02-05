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
}