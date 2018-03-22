import {linkList, linkIdMap} from '../data';

let _links = null;

class Links {
    constructor() {
        this.links = linkList;
    }

    getAllLinks() {
        return this.links;
    }

    voteForLink(id, username, value) {
        try {
            linkIdMap[id].votes[username] = value;
            linkIdMap[id].votesCount =  linkIdMap[id].votesCount + value;
        } catch (e) {
            console.error('voteForLink: something went wrong');
        }
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