import DAL from '../../dal';

export function list_all_comments(req, res) {
    res.json(DAL.comments.getAllComments());
}

export function list_all_comments_for_link(req, res) {
    res.json(DAL.comments.getAllCommentsForLink());
}

export function create_a_comments(req, res) {

}
