import links from './controllers/linksController';
import comments from './controllers/commentController';

let _DAL = null;

class DAL {
    constructor() {
        this.links = links;
        this.comments = comments;
    }
}

function getDalInstance() {
    if (!_DAL) {
        _DAL = new DAL();
    }
    return _DAL;
}

export default getDalInstance();