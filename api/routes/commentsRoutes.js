import {list_all_comments, getAllCommentsForLink, addComment} from '../controllers/commentsController';

export default function (app) {
    app.route('/comments')
        .get(list_all_comments)
        .post(addComment);

    app.route('/comments/:linkId')
        .get(getAllCommentsForLink)
}