import DAL from '../../dal';

export function list_all_links(req, res) {
        res.json(DAL.links.getAllLinks());
}

export function create_a_link(req, res) {

}

