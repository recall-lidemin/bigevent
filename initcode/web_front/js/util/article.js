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
    // 焦点图
    getFocuse: function () {
        // 因为只要5条，所以直接设置
        return $.get(APIURLS.article_get, {
            perpage: 5
        })
    },
    // 一周热门排行
    rank: function (type) {
        return $.get(APIURLS.rank, {
            'type': type
        })
    },
    // 最新资讯
    lastest: function () {
        return $.get(APIURLS.lastest)
    },
    // 文章搜索
    search: function (type, page) {
        return $.get(APIURLS.search, {
            'type': type,
            'page': page
        })
    },
    // 最新评论
    get_latest_comment: function (type) {
        return $.get(APIURLS.get_latest_comment, {
            'type': type
        })
    },
    // 获取文章详情
    get_article: function (id) {
        return $.get(APIURLS.get_article, {
            'id': id
        })
    }


}