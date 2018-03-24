import DAL from '../../dal';

export function list_all_comments(req, res) {
    res.json(DAL.comments.getAllComments());
}

export function getAllCommentsForLink(req, res) {
    res.json(DAL.comments.getAllCommentsForLink(req.params.linkId));
}

export function addComment(req, res) {
    DAL.links.increaseCommentsCount(req.body.linkId);
    res.json(DAL.comments.addComment(req.body));
}

export function voteForComment(req, res) {
    res.json(DAL.comments.voteForComments(req.params.linkId, req.body.login, req.body.value));
}
