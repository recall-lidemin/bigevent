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
    }
}