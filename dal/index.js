import links from './controllers/linksController';

let _DAL = null;

class DAL {
    constructor() {
        this.links = links;
    }
}

function getDalInstance() {
    if (!_DAL) {
        _DAL = new DAL();
    }
    return _DAL;
}

export default getDalInstance();