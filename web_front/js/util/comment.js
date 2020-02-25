let comment = {
    add: (name, content, article_id) => {
        return $.post(APIURLS.post_comment, {
            name,
            content,
            article_id
        })
    },
    get: article_id => {
        return $.get(APIURLS.get_comments, {
            article_id
        })
    }

}