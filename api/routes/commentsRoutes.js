import {list_all_comments} from '../controllers/commentsController';

export default function (app) {
    app.route('/comments')
        .get(list_all_comments);
}