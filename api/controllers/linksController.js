import DAL from '../../dal';

export function list_all_links(req, res) {
    res.json(DAL.links.getAllLinks());
}

export function vote_for_the_link(req, res) {
    DAL.links.voteForLink(req.params.linkId, req.body.login, req.body.value);
    res.json({status:200});
}

export function create_a_link(req, res) {
    res.json(DAL.links.addLink(req.body));
}

