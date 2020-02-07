var comment = {
    add: function (name, content, article_id) {
        return $.post(APIURLS.post_comment, {
            'name': name,
            'content': content,
            'article_id': article_id
        })
    },
    get: function (article_id) {
        return $.get(APIURLS.get_comments, {
            'article_id': article_id
        })
    }

}