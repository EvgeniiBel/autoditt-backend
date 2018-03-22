import {linkList} from '../data';

let _links = null;

class Links {
    constructor() {
        this.links = linkList;
    }

    getAllLinks() {
        return this.links;
    }

    addLink(data) {
        this.links.push(data);
    }
}

function getLinksInstance() {
    if (!_links) {
        _links = new Links();
    }
    return _links;
}

export default getLinksInstance();