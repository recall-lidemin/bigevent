var article = {
    article_count: function () {
        $.get(APIURLS.getArticleCount).then(function (res) {
            if (res.code == 200) {
                console.log(res);
            }
        });
    },
    article_comment: function () {
        $.get(APIURLS.getCommentCount).then(function (res) {
            if (res.code == 200) {

            } else {
                alert(res.msg);
            }
        });
    },
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