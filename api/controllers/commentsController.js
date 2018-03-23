import DAL from '../../dal';

export function list_all_comments(req, res) {
    console.log('list_all_comments');
    res.json(DAL.comments.getAllComments());
}

export function getAllCommentsForLink(req, res) {
    console.log('getAllCommentsForLink');
    console.log(req.params.linkId);
    res.json(DAL.comments.getAllCommentsForLink(req.params.linkId));
}

export function addComment(req, res) {
    console.log(req.body);
    DAL.links.increaseCommentsCount(req.body.linkId);
    res.json(DAL.comments.addComment(req.body));
}
