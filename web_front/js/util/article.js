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
            id,
        });
    },
    // 焦点图
    getFocuse: () => {
        // 因为只要5条，所以直接设置
        return $.get(APIURLS.article_get, {
            perpage: 5
        })
    },
    // 一周热门排行
    rank: type => {
        return $.get(APIURLS.rank, {
            type
        })
    },
    // 最新资讯
    lastest: () => {
        return $.get(APIURLS.lastest)
    },
    // 文章搜索
    search: (type, page) => {
        return $.get(APIURLS.search, {
            type,
            page
        })
    },
    // 最新评论
    get_latest_comment: type => {
        return $.get(APIURLS.get_latest_comment, {
            type
        })
    },
    // 获取文章详情
    get_article: id => {
        return $.get(APIURLS.get_article, {
            id
        })
    }


}